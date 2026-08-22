(() => {

  /* =========================================================
     LOAD TEST SESSION
  ========================================================= */

  const raw = sessionStorage.getItem("physicsPrepSession");

  if (!raw) {
    location.href = "practice.html";
    return;
  }

  let session;

  try {
    session = JSON.parse(raw);
  } catch (error) {
    console.error("Invalid test session:", error);
    location.href = "practice.html";
    return;
  }

  const questions = session.questions || [];

  if (!questions.length) {
    location.href = "practice.html";
    return;
  }


  /* =========================================================
     TEST STATE
  ========================================================= */

  let index = 0;

  let answers =
    Array(questions.length).fill(null);

  let seconds =
    Number(session.duration) ||
    questions.length * 90;

  let finished = false;


  /* =========================================================
     HELPER
  ========================================================= */

  const $ = id =>
    document.getElementById(id);


  /* =========================================================
     RENDER CURRENT QUESTION
  ========================================================= */

  function render() {

    const q = questions[index];

    if (!q) return;


    /* ---------------------------------------------------------
       PROGRESS
    --------------------------------------------------------- */

    $("progress").textContent =
      `Question ${index + 1} / ${questions.length}`;


    $("questionNumber").textContent =
      `Question ${index + 1}`;


    /* ---------------------------------------------------------
       QUESTION META
    --------------------------------------------------------- */

    const metaParts = [
      q.exam,
      q.year,
      q.difficulty
    ].filter(Boolean);


    $("questionMeta").textContent =
      metaParts.join(" • ");


    /* ---------------------------------------------------------
       QUESTION TEXT
       
       textContent is intentionally used for safety.
       MathJax can still detect $...$ mathematics.
    --------------------------------------------------------- */

    $("questionText").textContent =
      q.question || "";


    /* ---------------------------------------------------------
       OPTIONS
    --------------------------------------------------------- */

    $("options").innerHTML =
      (q.options || [])
        .map((option, i) => {

          const selected =
            answers[index] === i;


          return `
            <button
              class="option ${selected ? "selected" : ""}"
              data-index="${i}"
              aria-pressed="${selected}"
              type="button"
            >

              <span class="option-key">
                ${String.fromCharCode(65 + i)}.
              </span>

              <span class="option-text">
                ${escapeHTML(option)}
              </span>

            </button>
          `;

        })
        .join("");


    /* ---------------------------------------------------------
       OPTION CLICK
    --------------------------------------------------------- */

    $("options")
      .querySelectorAll(".option")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            answers[index] =
              Number(button.dataset.index);

            render();

          }
        );

      });


    /* ---------------------------------------------------------
       NAVIGATION BUTTONS
    --------------------------------------------------------- */

    $("prevBtn").disabled =
      index === 0;


    $("nextBtn").classList.toggle(
      "hidden",
      index === questions.length - 1
    );


    $("finishBtn").classList.toggle(
      "hidden",
      index !== questions.length - 1
    );


    /* ---------------------------------------------------------
       RENDER MATHEMATICS
    --------------------------------------------------------- */

    renderMath();

  }


  /* =========================================================
     MATHJAX RENDERING
  ========================================================= */

  function renderMath() {

    /*
      MathJax loads asynchronously.
      Therefore we check whether it is ready.
    */

    if (
      window.MathJax &&
      typeof window.MathJax.typesetPromise === "function"
    ) {

      /*
        Clear previous MathJax processing where necessary.
      */

      window.MathJax.typesetPromise([
        $("questionText"),
        $("options")
      ])
      .catch(error => {

        console.error(
          "MathJax rendering error:",
          error
        );

      });

    }

    else {

      /*
        MathJax may not have loaded yet.
        Try again shortly.
      */

      setTimeout(
        renderMath,
        150
      );

    }

  }


  /* =========================================================
     TIMER
  ========================================================= */

  function tick() {

    if (finished) return;


    const minutes =
      Math.floor(seconds / 60);


    const secs =
      seconds % 60;


    $("timer").textContent =
      `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;


    if (seconds <= 0) {

      finish();

      return;

    }


    seconds--;

  }


  /* =========================================================
     FINISH TEST
  ========================================================= */

  function finish() {

    if (finished) return;

    finished = true;


    let correct = 0;

    let skipped = 0;


    questions.forEach(
      (q, i) => {

        if (answers[i] === null) {

          skipped++;

        }

        else if (
          answers[i] === q.answer
        ) {

          correct++;

        }

      }
    );


    const wrong =
      questions.length -
      correct -
      skipped;


    const result = {

      total: questions.length,

      correct: correct,

      wrong: wrong,

      skipped: skipped,

      answers: answers,

      questions: questions,

      score: correct

    };


    sessionStorage.setItem(
      "physicsPrepResult",
      JSON.stringify(result)
    );


    location.href =
      "result.html";

  }


  /* =========================================================
     PREVIOUS BUTTON
  ========================================================= */

  $("prevBtn").addEventListener(
    "click",
    () => {

      if (index > 0) {

        index--;

        render();

      }

    }
  );


  /* =========================================================
     NEXT BUTTON
  ========================================================= */

  $("nextBtn").addEventListener(
    "click",
    () => {

      if (
        index <
        questions.length - 1
      ) {

        index++;

        render();

      }

    }
  );


  /* =========================================================
     FINISH BUTTON
  ========================================================= */

  $("finishBtn").addEventListener(
    "click",
    finish
  );


  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  document.addEventListener(
    "keydown",
    event => {

      /*
        Don't interfere with typing into inputs.
      */

      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
      ) {
        return;
      }


      /* -------------------------------------------------------
         ANSWER 1–4
      ------------------------------------------------------- */

      if (
        ["1", "2", "3", "4"].includes(event.key)
      ) {

        const selected =
          Number(event.key) - 1;


        if (
          selected <
          questions[index].options.length
        ) {

          answers[index] =
            selected;

          render();

        }

      }


      /* -------------------------------------------------------
         RIGHT ARROW
      ------------------------------------------------------- */

      if (
        event.key === "ArrowRight" &&
        index < questions.length - 1
      ) {

        index++;

        render();

      }


      /* -------------------------------------------------------
         LEFT ARROW
      ------------------------------------------------------- */

      if (
        event.key === "ArrowLeft" &&
        index > 0
      ) {

        index--;

        render();

      }

    }
  );


  /* =========================================================
     INITIAL RENDER
  ========================================================= */

  render();

  tick();

  setInterval(
    tick,
    1000
  );


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
