(() => {
  const raw = sessionStorage.getItem("physicsPrepResult");

  if (!raw) {
    location.href = "practice.html";
    return;
  }

  let result;

  try {
    result = JSON.parse(raw);
  } catch (e) {
    location.href = "practice.html";
    return;
  }

  const questions = Array.isArray(result.questions) ? result.questions : [];
  const answers = Array.isArray(result.answers) ? result.answers : [];

  const total = Number(result.total) || questions.length;
  const correct = Number(result.correct) || 0;
  const wrong = Number(result.wrong) || 0;
  const skipped = Number(result.skipped) || 0;
  const percentage = total ? Math.round((correct / total) * 100) : 0;

  let currentFilter = "all";

  const $ = id => document.getElementById(id);

  $("score").textContent = `${correct} / ${total}`;
  $("percentage").textContent = `${percentage}%`;
  $("correct").textContent = correct;
  $("wrong").textContent = wrong;
  $("skipped").textContent = skipped;
  $("reviewCount").textContent = `${total} Question${total === 1 ? "" : "s"}`;

  if (percentage >= 80) {
    $("resultTitle").textContent = "Excellent work! 🎉";
    $("resultSubtitle").textContent = "Your preparation is paying off. Keep the momentum going.";
    $("heroIcon").textContent = "★";
  } else if (percentage >= 60) {
    $("resultTitle").textContent = "Good attempt! 👍";
    $("resultSubtitle").textContent = "You're on the right track. Review the mistakes and improve.";
    $("heroIcon").textContent = "✓";
  } else {
    $("resultTitle").textContent = "Keep practicing! 💪";
    $("resultSubtitle").textContent = "Don't worry about the score. Review your mistakes and try again.";
    $("heroIcon").textContent = "↗";
  }

  function getStatus(i) {
    if (answers[i] === null || typeof answers[i] === "undefined") return "skipped";
    if (answers[i] === questions[i].answer) return "correct";
    return "wrong";
  }

  function renderReview() {
    const filtered = questions
      .map((q, i) => ({ q, i, status: getStatus(i) }))
      .filter(item => currentFilter === "all" || item.status === currentFilter);

    $("reviewCount").textContent =
      `${filtered.length} Question${filtered.length === 1 ? "" : "s"}`;

    if (!filtered.length) {
      $("reviewList").innerHTML = "";
      $("emptyReview").classList.remove("hidden");
      return;
    }

    $("emptyReview").classList.add("hidden");

    $("reviewList").innerHTML = filtered.map(({ q, i, status }) => {
      const userAnswer = answers[i];
      const correctAnswer = Number(q.answer);

      const statusLabel = {
        correct: "Correct",
        wrong: "Wrong",
        skipped: "Not Attempted"
      }[status];

      const statusClass = status;

      const options = Array.isArray(q.options) ? q.options : [];

      const answerText = userAnswer === null || typeof userAnswer === "undefined"
        ? "Not attempted"
        : formatOption(userAnswer, options);

      const correctText = formatOption(correctAnswer, options);

      return `
        <article class="review-card ${statusClass}">
          <div class="review-card-head">
            <div class="review-q-number">Q${i + 1}</div>
            <div class="review-q-meta">
              <span>${escapeHTML(q.subject || "Physics")}</span>
              ${q.topic ? `<span>• ${escapeHTML(q.topic)}</span>` : ""}
              ${q.year ? `<span>• ${escapeHTML(q.year)}</span>` : ""}
            </div>
            <span class="status-badge ${statusClass}">
              ${status === "correct" ? "✓" : status === "wrong" ? "×" : "−"}
              ${statusLabel}
            </span>
          </div>

          <div class="review-question">${escapeHTML(q.question || "")}</div>

          <div class="answer-grid">
            <div class="answer-box user-answer">
              <span class="answer-label">Your Answer</span>
              <strong>${escapeHTML(answerText)}</strong>
            </div>

            <div class="answer-box correct-answer">
              <span class="answer-label">Correct Answer</span>
              <strong>${escapeHTML(correctText)}</strong>
            </div>
          </div>

          ${status === "wrong" ? `
            <button class="show-options" type="button" data-show="${i}">
              Show all options ▾
            </button>
            <div class="all-options hidden" id="options-${i}">
              ${options.map((o, oi) => `
                <div class="review-option
                  ${oi === correctAnswer ? "correct-option" : ""}
                  ${oi === userAnswer && oi !== correctAnswer ? "wrong-option" : ""}">
                  <span>${String.fromCharCode(65 + oi)}.</span>
                  <span>${escapeHTML(o)}</span>
                  ${oi === correctAnswer ? '<b>Correct</b>' : ""}
                  ${oi === userAnswer && oi !== correctAnswer ? '<b>Your answer</b>' : ""}
                </div>
              `).join("")}
            </div>
          ` : ""}
        </article>
      `;
    }).join("");

    document.querySelectorAll("[data-show]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.show;
        const box = document.getElementById(`options-${id}`);
        box.classList.toggle("hidden");
        button.textContent = box.classList.contains("hidden")
          ? "Show all options ▾"
          : "Hide options ▴";
        typeset(box);
      });
    });

    typeset($("reviewList"));
  }

  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.dataset.filter;
      renderReview();
    });
  });

  $("wrongPracticeBtn").addEventListener("click", () => {
    const wrongQuestions = questions.filter((q, i) => getStatus(i) === "wrong");

    if (!wrongQuestions.length) {
      alert("Excellent! You have no wrong questions to practice.");
      return;
    }

    sessionStorage.setItem("physicsPrepSession", JSON.stringify({
      questions: shuffle(wrongQuestions),
      mode: "wrong-practice",
      duration: wrongQuestions.length * 90
    }));

    location.href = "test.html";
  });

  function formatOption(index, options) {
    if (index === null || typeof index === "undefined") return "Not attempted";
    if (!options[index]) return `Option ${Number(index) + 1}`;
    return `${String.fromCharCode(65 + Number(index))}. ${options[index]}`;
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function typeset(element) {
    if (window.MathJax && typeof MathJax.typesetPromise === "function") {
      MathJax.typesetPromise([element]).catch(() => {});
    }
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, m => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#39;"
    }[m]));
  }

  renderReview();
  typeset(document.querySelector(".result-container"));
})();
