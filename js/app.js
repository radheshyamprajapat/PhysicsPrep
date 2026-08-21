(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (document.body.dataset.page === "practice") initPractice();
  if (document.body.dataset.page === "pyq") initPYQ();
  if (document.body.dataset.page === "mock") initMock();

  function initPractice() {
    const exam = document.querySelector("#examSelect");
    const subject = document.querySelector("#subjectSelect");
    const topic = document.querySelector("#topicSelect");
    const count = document.querySelector("#countSelect");
    const mode = document.querySelector("#modeSelect");
    const availability = document.querySelector("#availability");
    const params = new URLSearchParams(location.search);
    const initialExam = params.get("exam") || "";

    fill(exam, QuestionEngine.unique("exam"), initialExam);
    updateSubjects();
    updateTopics();
    updateAvailability();

    exam.addEventListener("change", () => { updateSubjects(); updateTopics(); updateAvailability(); });
    subject.addEventListener("change", () => { updateTopics(); updateAvailability(); });
    topic.addEventListener("change", updateAvailability);
    count.addEventListener("change", updateAvailability);
    mode.addEventListener("change", updateAvailability);

    document.querySelector("#startPractice").addEventListener("click", () => {
      const qs = QuestionEngine.filter({
        exam: exam.value, subject: subject.value, topic: topic.value,
        type: mode.value === "pyq" ? "PYQ" : ""
      });
      const selected = QuestionEngine.sample(qs, Number(count.value));
      if (!selected.length) { alert("No matching questions yet. Try a broader selection."); return; }
      sessionStorage.setItem("physicsPrepSession", JSON.stringify({
        questions: selected, mode: mode.value, duration: selected.length * 90
      }));
      location.href = "test.html";
    });

    function updateSubjects() {
      fill(subject, QuestionEngine.unique("subject", {exam: exam.value}));
      subject.value = "";
    }
    function updateTopics() {
      fill(topic, QuestionEngine.unique("topic", {exam: exam.value, subject: subject.value}));
      topic.value = "";
    }
    function updateAvailability() {
      const n = QuestionEngine.filter({exam: exam.value, subject: subject.value, topic: topic.value, type: mode.value === "pyq" ? "PYQ" : ""}).length;
      availability.textContent = `${n} matching question${n === 1 ? "" : "s"} available • PhysicsPrep will use up to ${Math.min(n, Number(count.value))}.`;
    }
    function fill(select, values, selected="") {
      select.innerHTML = `<option value="">${select.id === "examSelect" ? "All Exams" : select.id === "subjectSelect" ? "All Subjects" : "All Topics"}</option>` +
        values.map(v => `<option value="${escapeHTML(v)}">${escapeHTML(v)}</option>`).join("");
      if (selected && values.includes(selected)) select.value = selected;
    }
    function escapeHTML(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
  }

  function initPYQ() {
    const grid = document.querySelector("#pyqGrid");
    const subjects = QuestionEngine.unique("subject");
    grid.innerHTML = subjects.map((s,i) => {
      const count = QuestionEngine.filter({subject:s, type:"PYQ"}).length;
      const colors = ["#2563EB","#F59E0B","#16A34A"];
      return `<article class="subject-card" style="border-top:4px solid ${colors[i%3]}">
        <span class="count">${count} question${count===1?"":"s"}</span><h3>${escapeHTML(s)}</h3>
        <p>Topic-wise PYQ practice from the current question bank.</p>
        <a href="practice.html?exam=&subject=${encodeURIComponent(s)}">Practice →</a>
      </article>`;
    }).join("");
  }

  function initMock() {
    const grid = document.querySelector("#mockGrid");
    const configs = [
      {title:"Quantum Mechanics",desc:"Random questions from Quantum Mechanics",count:10,exam:"",subject:"Quantum Mechanics",topic:""},
      {title:"Mixed Physics",desc:"Questions from all available topics",count:10,exam:"",subject:"",topic:""}
    ];
    grid.innerHTML = configs.map((c,i) => `<article class="mock-card">
      <div class="card-icon">${i ? "🌐" : "⚛️"}</div><h3>${c.title}</h3><p>${c.desc}</p>
      <div class="meta"><span class="pill">${c.count} questions</span><span class="pill">Random</span><span class="pill">15 min</span></div>
      <button class="btn btn-primary" data-mock="${i}">Start Test →</button>
    </article>`).join("");
    grid.querySelectorAll("[data-mock]").forEach(btn => btn.addEventListener("click", () => {
      const c = configs[Number(btn.dataset.mock)];
      const qs = QuestionEngine.sample(QuestionEngine.filter({subject:c.subject}), c.count);
      if (!qs.length) return alert("No questions available for this mock yet.");
      sessionStorage.setItem("physicsPrepSession", JSON.stringify({questions:qs, mode:"mock", duration:900}));
      location.href="test.html";
    }));
  }

  function escapeHTML(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
})();