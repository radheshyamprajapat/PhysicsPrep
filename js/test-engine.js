(() => {
  const raw = sessionStorage.getItem("physicsPrepSession");
  if (!raw) { location.href = "practice.html"; return; }

  let session;
  try { session = JSON.parse(raw); }
  catch (e) { location.href = "practice.html"; return; }

  const questions = session.questions || [];
  if (!questions.length) { location.href = "practice.html"; return; }

  let index = 0;
  let answers = Array(questions.length).fill(null);
  let marked = Array(questions.length).fill(false);
  let visited = Array(questions.length).fill(false);
  let seconds = Number(session.duration) || questions.length * 90;
  let finished = false;

  const $ = id => document.getElementById(id);

  function render() {
    const q = questions[index];
    if (!q) return;
    visited[index] = true;

    $("progress").textContent = `Question ${index + 1} / ${questions.length}`;
    $("questionNumber").textContent = `Question ${index + 1}`;

    const meta = [q.exam, q.year, q.difficulty].filter(Boolean);
    $("questionMeta").textContent = meta.join(" • ");
    $("testSubject").textContent = q.subject || "Physics";
    $("testTopic").textContent = q.topic ? ` • ${q.topic}` : "";
    $("paletteCount").textContent = `${questions.length} Questions`;

    $("questionText").textContent = q.question || "";

    $("options").innerHTML = (q.options || []).map((o, i) => {
      const selected = answers[index] === i;
      return `
        <button class="cbt-option ${selected ? "selected" : ""}" data-index="${i}" type="button">
          <span class="option-radio">${selected ? "●" : ""}</span>
          <span class="option-letter">${String.fromCharCode(65 + i)}</span>
          <span class="option-content">${escapeHTML(o)}</span>
        </button>`;
    }).join("");

    $("options").querySelectorAll(".cbt-option").forEach(btn => {
      btn.addEventListener("click", () => {
        answers[index] = Number(btn.dataset.index);
        render();
      });
    });

    $("prevBtn").disabled = index === 0;
    $("nextBtn").classList.toggle("hidden", index === questions.length - 1);
    $("finishBtn").classList.toggle("hidden", index !== questions.length - 1);
    $("markBtn").textContent = marked[index] ? "Unmark & Next" : "Mark for Review & Next";

    renderPalette();
    renderMath();
  }

  function renderPalette() {
    $("paletteGrid").innerHTML = questions.map((q, i) => {
      let cls = "palette-btn";
      if (i === index) cls += " current";
      if (answers[i] !== null) cls += " answered";
      else if (marked[i]) cls += " marked";
      else if (visited[i]) cls += " notanswered";
      else cls += " unvisited";

      return `<button type="button" class="${cls}" data-q="${i}">${i + 1}</button>`;
    }).join("");

    $("paletteGrid").querySelectorAll("[data-q]").forEach(btn => {
      btn.addEventListener("click", () => {
        index = Number(btn.dataset.q);
        closePalette();
        render();
      });
    });
  }

  function renderMath() {
    const run = () => {
      if (window.MathJax && typeof MathJax.typesetPromise === "function") {
        MathJax.typesetClear([$("questionText"), $("options")]);
        MathJax.typesetPromise([$("questionText"), $("options")]).catch(console.error);
      } else {
        setTimeout(run, 100);
      }
    };
    run();
  }

  function next() {
    if (index < questions.length - 1) { index++; render(); }
  }

  function previous() {
    if (index > 0) { index--; render(); }
  }

  function clearResponse() {
    answers[index] = null;
    render();
  }

  function markAndNext() {
    marked[index] = !marked[index];
    if (index < questions.length - 1) index++;
    render();
  }

  function tick() {
    if (finished) return;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    $("timer").textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    $("timer").classList.toggle("urgent", seconds <= 60);
    if (seconds <= 0) { finish(true); return; }
    seconds--;
  }

  function finish(autoSubmit = false) {
    if (finished) return;

    if (!autoSubmit) {
      const unanswered = answers.filter(a => a === null).length;
      const message = unanswered
        ? `${unanswered} question(s) are unanswered. Submit anyway?`
        : "Submit your test?";
      if (!confirm(message)) return;
    }

    finished = true;
    let correct = 0, skipped = 0;

    questions.forEach((q, i) => {
      if (answers[i] === null) skipped++;
      else if (answers[i] === q.answer) correct++;
    });

    const wrong = questions.length - correct - skipped;

    sessionStorage.setItem("physicsPrepResult", JSON.stringify({
      total: questions.length,
      correct,
      wrong,
      skipped,
      answers,
      questions,
      score: correct
    }));

    location.href = "result.html";
  }

  function openPalette() {
    $("questionPalette").classList.add("open");
    $("paletteOverlay").classList.add("show");
  }

  function closePalette() {
    $("questionPalette").classList.remove("open");
    $("paletteOverlay").classList.remove("show");
  }

  $("prevBtn").addEventListener("click", previous);
  $("nextBtn").addEventListener("click", next);
  $("finishBtn").addEventListener("click", () => finish(false));
  $("submitSideBtn").addEventListener("click", () => finish(false));
  $("clearBtn").addEventListener("click", clearResponse);
  $("markBtn").addEventListener("click", markAndNext);
  $("paletteMobileBtn").addEventListener("click", openPalette);
  $("closePalette").addEventListener("click", closePalette);
  $("paletteOverlay").addEventListener("click", closePalette);

  document.addEventListener("keydown", e => {
    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (["1", "2", "3", "4"].includes(e.key)) {
      const selected = Number(e.key) - 1;
      if (selected < (questions[index].options || []).length) {
        answers[index] = selected;
        render();
      }
    }
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") previous();
  });

  render();
  tick();
  setInterval(tick, 1000);

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, m => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    }[m]));
  }
})();
