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

    const grid =
      document.querySelector("#mockGrid");

    if (!grid) {
      return;
    }


    const configs = [

      {
        title: "Quantum Mechanics",

        description:
          "Random questions from Quantum Mechanics",

        count: 10,

        exam: "",

        subject: "Quantum Mechanics",

        topic: ""

      },

      {
        title: "Mixed Physics",

        description:
          "Questions from all available topics",

        count: 10,

        exam: "",

        subject: "",

        topic: ""

      }

    ];


    grid.innerHTML =
      configs
        .map((config, index) => {

          return `
            <article class="mock-card">

              <div class="card-icon">
                ${index === 0 ? "⚛️" : "🌐"}
              </div>

              <h3>
                ${escapeHTML(config.title)}
              </h3>

              <p>
                ${escapeHTML(config.description)}
              </p>

              <div class="meta">

                <span class="pill">
                  ${config.count} questions
                </span>

                <span class="pill">
                  Random
                </span>

                <span class="pill">
                  15 min
                </span>

              </div>

              <button
                class="btn btn-primary"
                data-mock="${index}"
              >
                Start Test →
              </button>

            </article>
          `;

        })
        .join("");


    /* ---------------------------------------------------------
       MOCK BUTTONS
    --------------------------------------------------------- */

    grid
      .querySelectorAll("[data-mock]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const config =
              configs[
                Number(button.dataset.mock)
              ];


            const matchingQuestions =
              QuestionEngine.filter({

                exam: config.exam,

                subject: config.subject,

                topic: config.topic

              });


            const questions =
              QuestionEngine.sample(
                matchingQuestions,
                config.count
              );


            if (!questions.length) {

              alert(
                "No questions available for this mock yet."
              );

              return;

            }


            const session = {

              questions: questions,

              mode: "mock",

              duration: 900,

              exam: config.exam,

              subject: config.subject,

              topic: config.topic

            };


            sessionStorage.setItem(
              "physicsPrepSession",
              JSON.stringify(session)
            );


            window.location.href =
              "test.html";

          }
        );

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
