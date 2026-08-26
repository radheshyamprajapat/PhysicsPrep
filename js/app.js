(() => {

  /* =========================================================
     MOBILE NAVIGATION
  ========================================================= */

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }


  /* =========================================================
     PAGE INITIALIZATION
  ========================================================= */

  if (document.body.dataset.page === "practice") {
    initPractice();
  }

  if (document.body.dataset.page === "pyq") {
    initPYQ();
  }

  if (document.body.dataset.page === "mock") {
    initMock();
  }


  /* =========================================================
     PRACTICE PAGE
  ========================================================= */

  function initPractice() {

    const exam = document.querySelector("#examSelect");
    const subject = document.querySelector("#subjectSelect");
    const topic = document.querySelector("#topicSelect");
    const count = document.querySelector("#countSelect");
    const mode = document.querySelector("#modeSelect");
    const availability = document.querySelector("#availability");
    const startButton = document.querySelector("#startPractice");

    if (
      !exam ||
      !subject ||
      !topic ||
      !count ||
      !mode ||
      !availability ||
      !startButton
    ) {
      return;
    }


    /* ---------------------------------------------------------
       READ URL PARAMETERS
       
       Example:
       practice.html?subject=Quantum%20Mechanics
       
       or:
       practice.html?subject=Quantum%20Mechanics&topic=1D%20Potential
    --------------------------------------------------------- */

    const params = new URLSearchParams(window.location.search);

    const initialExam = params.get("exam") || "";
    const initialSubject = params.get("subject") || "";
    const initialTopic = params.get("topic") || "";


    /* ---------------------------------------------------------
       INITIAL LOAD
    --------------------------------------------------------- */

    fill(
      exam,
      QuestionEngine.unique("exam"),
      initialExam
    );

    updateSubjects(initialSubject);

    updateTopics(initialTopic);

    updateAvailability();


    /* ---------------------------------------------------------
       EXAM CHANGE
    --------------------------------------------------------- */

    exam.addEventListener("change", () => {

      updateSubjects();

      updateTopics();

      updateAvailability();

    });


    /* ---------------------------------------------------------
       SUBJECT CHANGE
    --------------------------------------------------------- */

    subject.addEventListener("change", () => {

      updateTopics();

      updateAvailability();

    });


    /* ---------------------------------------------------------
       TOPIC CHANGE
    --------------------------------------------------------- */

    topic.addEventListener("change", () => {

      updateAvailability();

    });


    /* ---------------------------------------------------------
       NUMBER OF QUESTIONS CHANGE
    --------------------------------------------------------- */

    count.addEventListener("change", () => {

      updateAvailability();

    });


    /* ---------------------------------------------------------
       MODE CHANGE
    --------------------------------------------------------- */

    mode.addEventListener("change", () => {

      updateAvailability();

    });


    /* =========================================================
       START PRACTICE
    ========================================================= */

    startButton.addEventListener("click", () => {

      const selectedQuestions = QuestionEngine.filter({

        exam: exam.value,

        subject: subject.value,

        topic: topic.value,

        type:
          mode.value === "pyq"
            ? "PYQ"
            : ""

      });


      /* -------------------------------------------------------
         RANDOMLY SELECT QUESTIONS
      ------------------------------------------------------- */

      const questions = QuestionEngine.sample(
        selectedQuestions,
        Number(count.value)
      );


      /* -------------------------------------------------------
         NO QUESTIONS
      ------------------------------------------------------- */

      if (!questions.length) {

        alert(
          "No matching questions available yet. " +
          "Please try a broader selection."
        );

        return;

      }


      /* -------------------------------------------------------
         SAVE TEST SESSION
      ------------------------------------------------------- */

      const session = {

        questions: questions,

        mode: mode.value,

        duration: questions.length * 90,

        exam: exam.value,

        subject: subject.value,

        topic: topic.value

      };


      sessionStorage.setItem(
        "physicsPrepSession",
        JSON.stringify(session)
      );


      /* -------------------------------------------------------
         OPEN TEST PAGE
      ------------------------------------------------------- */

      window.location.href = "test.html";

    });


    /* =========================================================
       UPDATE SUBJECT DROPDOWN
    ========================================================= */

    function updateSubjects(selectedSubject = "") {

      const subjects = QuestionEngine.unique(
        "subject",
        {
          exam: exam.value
        }
      );


      fill(
        subject,
        subjects,
        selectedSubject
      );

    }


    /* =========================================================
       UPDATE TOPIC DROPDOWN
    ========================================================= */

    function updateTopics(selectedTopic = "") {

      const topics = QuestionEngine.unique(
        "topic",
        {
          exam: exam.value,

          subject: subject.value

        }
      );


      fill(
        topic,
        topics,
        selectedTopic
      );

    }


    /* =========================================================
       QUESTION AVAILABILITY
    ========================================================= */

    function updateAvailability() {

      const filters = {

        exam: exam.value,

        subject: subject.value,

        topic: topic.value,

        type:
          mode.value === "pyq"
            ? "PYQ"
            : ""

      };


      const available =
        QuestionEngine.filter(filters).length;


      const requested =
        Number(count.value);


      const usable =
        Math.min(
          available,
          requested
        );


      if (available === 0) {

        availability.innerHTML =
          `<span class="availability-empty">
             No matching questions available yet.
           </span>`;

        return;

      }


      availability.innerHTML =
        `<span class="availability-success">
           ✓ ${available} matching question${available === 1 ? "" : "s"} available
         </span>
         <span>
           • PhysicsPrep will use up to ${usable}.
         </span>`;

    }


    /* =========================================================
       FILL SELECT DROPDOWN
    ========================================================= */

    function fill(
      select,
      values,
      selected = ""
    ) {

      let defaultText = "All";

      if (select.id === "examSelect") {

        defaultText = "All Exams";

      }

      else if (select.id === "subjectSelect") {

        defaultText = "All Subjects";

      }

      else if (select.id === "topicSelect") {

        defaultText = "All Topics";

      }


      select.innerHTML =
        `<option value="">${defaultText}</option>` +
        values
          .map(
            value =>
              `<option value="${escapeHTML(value)}">
                ${escapeHTML(value)}
              </option>`
          )
          .join("");


      if (
        selected &&
        values.includes(selected)
      ) {

        select.value = selected;

      }

    }

  }


  /* =========================================================
     PYQ PAGE
  ========================================================= */

  function initPYQ() {

    const grid =
      document.querySelector("#pyqGrid");

    if (!grid) {
      return;
    }


    const subjects =
      QuestionEngine.unique("subject");


    if (!subjects.length) {

      grid.innerHTML = `
        <div class="empty-state">
          <h3>No questions available yet</h3>
          <p>Question banks will appear here as they are added.</p>
        </div>
      `;

      return;

    }


    const colors = [
      "#2563EB",
      "#F59E0B",
      "#16A34A"
    ];


    grid.innerHTML =
      subjects
        .map((subjectName, index) => {

          const questionCount =
            QuestionEngine.filter({
              subject: subjectName,
              type: "PYQ"
            }).length;


          return `
            <article
              class="subject-card"
              style="border-top:4px solid ${colors[index % colors.length]}"
            >

              <span class="count">
                ${questionCount}
                question${questionCount === 1 ? "" : "s"}
              </span>

              <h3>
                ${escapeHTML(subjectName)}
              </h3>

              <p>
                Topic-wise PYQ practice from the
                current question bank.
              </p>

              <a
                href="practice.html?subject=${encodeURIComponent(subjectName)}"
              >
                Practice →
              </a>

            </article>
          `;

        })
        .join("");

  }


  /* =========================================================
     MOCK TEST PAGE
  ========================================================= */

function initMock() {

  const grid = document.querySelector("#mockGrid");

  if (!grid) return;


  const configs = [

    /* =========================================================
       BARC MOCK 01
    ========================================================= */

    {
      id: "barc-full-01",

      title: "BARC Physics — Full Length Mock 01",

      desc:
        "100 mixed Physics MCQs • 2 hours",

      count: 100,

      duration: 120 * 60,

      exam: "",

      subject: "",

      topic: "",

      allowedTypes: [],

      allowedDifficulty: ["Easy", "Moderate"],

      subjectDistribution: {
        "Quantum Mechanics": 17,
        "Nuclear Physics": 17,
        "Thermal Physics": 17,
        "Classical Mechanics": 17,
        "Solid State Physics": 16,
        "Atomic & Molecular Physics": 16
      },

      icon: "⚛️",

      featured: true,

      startPage: "test.html"
    },


    /* =========================================================
       BARC MOCK 02
    ========================================================= */

    {
      id: "barc-full-02",

      title: "BARC Physics — Full Length Mock 02",

      desc:
        "100 mixed Physics MCQs • 2 hours",

      count: 100,

      duration: 120 * 60,

      exam: "",

      subject: "",

      topic: "",

      allowedTypes: [],

      allowedDifficulty: ["Easy", "Moderate"],

      subjectDistribution: {
        "Quantum Mechanics": 17,
        "Nuclear Physics": 17,
        "Thermal Physics": 17,
        "Classical Mechanics": 17,
        "Solid State Physics": 16,
        "Atomic & Molecular Physics": 16
      },

      icon: "⚛️",

      featured: true,

      startPage: "test.html"
    },


    /* =========================================================
       BARC MOCK 03
    ========================================================= */

    {
      id: "barc-full-03",

      title: "BARC Physics — Full Length Mock 03",

      desc:
        "100 mixed Physics MCQs • 2 hours",

      count: 100,

      duration: 120 * 60,

      exam: "",

      subject: "",

      topic: "",

      allowedTypes: [],

      allowedDifficulty: ["Easy", "Moderate"],

      subjectDistribution: {
        "Quantum Mechanics": 17,
        "Nuclear Physics": 17,
        "Thermal Physics": 17,
        "Classical Mechanics": 17,
        "Solid State Physics": 16,
        "Atomic & Molecular Physics": 16
      },

      icon: "⚛️",

      featured: true,

      startPage: "test.html"
    },


    /* =========================================================
       CSIR NET — B + C MOCK
    ========================================================= */

    {
      id: "csir-net-bc-01",

      title: "CSIR-NET Physical Sciences — Mock 01",

      desc:
        "Part B + Part C • 170 marks • 2 hours 30 minutes",

      count: 55,

      duration: 150 * 60,

      exam: "",

      subject: "",

      topic: "",

      allowedTypes: [],

      allowedDifficulty: [],

      icon: "🎓",

      featured: true,

      startPage: "csir-test.html",

      customTest: true
    },


    /* =========================================================
       QUANTUM MECHANICS
    ========================================================= */

    {
      id: "quantum-mock",

      title: "Quantum Mechanics",

      desc:
        "Random questions from Quantum Mechanics",

      count: 25,

      duration: 30 * 60,

      exam: "",

      subject: "Quantum Mechanics",

      topic: "",

      icon: "⚛️",

      startPage: "test.html"
    },


    /* =========================================================
       MIXED PHYSICS
    ========================================================= */

    {
      id: "mixed-mock",

      title: "Mixed Physics",

      desc:
        "Questions from all available Physics topics",

      count: 25,

      duration: 30 * 60,

      exam: "",

      subject: "",

      topic: "",

      icon: "🌐",

      startPage: "test.html"
    }

  ];


  /* =========================================================
     CREATE MOCK CARDS
  ========================================================= */

  grid.innerHTML = configs.map((c, i) => {

    return `

      <article class="mock-card ${c.featured ? "featured-mock" : ""}">

        ${c.featured ? `
          <div class="featured-badge">
            ${c.customTest ? "CSIR-NET" : "FULL LENGTH"}
          </div>
        ` : ""}

        <div class="card-icon">
          ${c.icon}
        </div>

        <h3>
          ${escapeHTML(c.title)}
        </h3>

        <p>
          ${escapeHTML(c.desc)}
        </p>

        <div class="meta">

          <span class="pill">
            ${c.count} Questions
          </span>

          <span class="pill">
            ${c.duration / 60} Minutes
          </span>

          <span class="pill">
            ${c.customTest ? "Part B + C" : c.featured ? "Mixed Physics" : "Random"}
          </span>

        </div>

        <button
          class="btn btn-primary"
          data-mock="${i}">

          Start Test →

        </button>

      </article>

    `;

  }).join("");


  /* =========================================================
     START MOCK
  ========================================================= */

  grid.querySelectorAll("[data-mock]").forEach(btn => {

    btn.addEventListener("click", () => {

      const config =
        configs[Number(btn.dataset.mock)];


      /* =====================================================
         CSIR-NET SPECIAL TEST
         
         CSIR has its own test engine.
         Do NOT use the normal BARC test engine.
      ===================================================== */

      if (config.customTest) {

        location.href = config.startPage;

        return;

      }


      /* =====================================================
         NORMAL MOCK TEST
      ===================================================== */

      let questions =
        QuestionEngine.filter({

          exam: config.exam,

          subject: config.subject,

          topic: config.topic

        });


      /* -----------------------------------------------------
         QUESTION TYPE FILTER
      ----------------------------------------------------- */

      if (
        config.allowedTypes &&
        config.allowedTypes.length
      ) {

        questions =
          questions.filter(q =>
            config.allowedTypes.includes(q.type)
          );

      }


      /* -----------------------------------------------------
         DIFFICULTY FILTER
      ----------------------------------------------------- */

      if (
        config.allowedDifficulty &&
        config.allowedDifficulty.length
      ) {

        const questionsWithDifficulty =
          questions.filter(q =>
            q.difficulty
          );


        if (questionsWithDifficulty.length > 0) {

          questions =
            questions.filter(q =>
              !q.difficulty ||
              config.allowedDifficulty.includes(q.difficulty)
            );

        }

      }


      /* -----------------------------------------------------
         SUBJECT BALANCED SELECTION
      ----------------------------------------------------- */

      let selected = [];


      if (
        config.subjectDistribution &&
        Object.keys(config.subjectDistribution).length
      ) {

        Object.entries(config.subjectDistribution)
          .forEach(([subjectName, requiredCount]) => {

            const subjectQuestions =
              questions.filter(q =>
                q.subject === subjectName
              );


            const picked =
              QuestionEngine.sample(
                subjectQuestions,
                requiredCount
              );


            selected.push(...picked);

          });


        /* Shuffle final balanced paper */

        selected =
          QuestionEngine.sample(
            selected,
            selected.length
          );

      }

      else {

        selected =
          QuestionEngine.sample(
            questions,
            config.count
          );

      }


      /* -----------------------------------------------------
         NO QUESTIONS
      ----------------------------------------------------- */

      if (!selected.length) {

        alert(
          "No suitable questions are available yet. " +
          "Please add more questions to the question bank."
        );

        return;

      }


      /* -----------------------------------------------------
         SAVE NORMAL TEST SESSION
      ----------------------------------------------------- */

      sessionStorage.setItem(

        "physicsPrepSession",

        JSON.stringify({

          questions: selected,

          mode: config.id,

          duration: config.duration,

          title: config.title

        })

      );


      /* -----------------------------------------------------
         OPEN NORMAL CBT
      ----------------------------------------------------- */

      location.href =
        config.startPage || "test.html";

    });

  });

}

  /* =========================================================
     ESCAPE HTML
  ========================================================= */

  function escapeHTML(value) {

    return String(value).replace(
      /[&<>"']/g,
      character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[character]
    );

  }

})();
