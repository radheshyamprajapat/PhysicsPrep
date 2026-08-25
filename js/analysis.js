(() => {

  /* =====================================================
     PYQ ANALYSIS ENGINE
     ===================================================== */

  const allQuestions =
    Array.isArray(window.QuestionEngine?.data)
      ? window.QuestionEngine.data
      : [];


  const $ = id => document.getElementById(id);


  let currentQuestions = [];

  let selectedSubject = "";

  let selectedExam = "";

  let selectedTopic = "";


  /* =====================================================
     INITIALISE
     ===================================================== */

  function init() {

    if (!allQuestions.length) {

      showNoData();

      return;
    }


    setupFilters();

    setupEvents();

    /*
     * Start with first available subject
     */

    const subjects =
      getUnique("subject", allQuestions);

    if (subjects.length) {

      selectedSubject = subjects[0];

      $("subjectSelect").value =
        selectedSubject;

      updateAll();
    }
  }


  /* =====================================================
     FILTER SETUP
     ===================================================== */

  function setupFilters() {

    const subjects =
      getUnique("subject", allQuestions);

    const exams =
      getUnique("exam", allQuestions);


    $("subjectSelect").innerHTML =
      `<option value="">All Subjects</option>` +
      subjects
        .map(s =>
          `<option value="${escapeHTML(s)}">
            ${escapeHTML(s)}
          </option>`
        )
        .join("");


    $("examSelect").innerHTML =
      `<option value="">All Exams</option>` +
      exams
        .map(e =>
          `<option value="${escapeHTML(e)}">
            ${escapeHTML(e)}
          </option>`
        )
        .join("");


    $("trendTopic").innerHTML =
      `<option value="">All Topics</option>`;
  }


  /* =====================================================
     EVENTS
     ===================================================== */

  function setupEvents() {

    $("subjectSelect")
      .addEventListener("change", () => {

        selectedSubject =
          $("subjectSelect").value;

        selectedTopic = "";

        updateAll();
      });


    $("examSelect")
      .addEventListener("change", () => {

        selectedExam =
          $("examSelect").value;

        updateAll();
      });


    $("yearRange")
      .addEventListener("change", updateAll);


    $("trendTopic")
      .addEventListener("change", () => {

        renderYearTrend(
          $("trendTopic").value
        );
      });


    $("closeDetail")
      .addEventListener("click", () => {

        $("topicDetail")
          .classList.add("hidden");

        window.scrollTo({
          top:
            $("topicPriority").offsetTop - 100,
          behavior: "smooth"
        });
      });


    $("practiceTopic")
      .addEventListener("click", () => {

        if (!selectedTopic) return;

        const params =
          new URLSearchParams();

        if (selectedExam)
          params.set("exam", selectedExam);

        if (selectedSubject)
          params.set("subject", selectedSubject);

        params.set("topic", selectedTopic);

        window.location.href =
          "practice.html?" +
          params.toString();
      });

  }


  /* =====================================================
     UPDATE EVERYTHING
     ===================================================== */

  function updateAll() {

    currentQuestions =
      filterQuestions();


    if (!currentQuestions.length) {

      showNoData();

      return;
    }


    $("emptyState")
      .classList.add("hidden");


    updateOverview();

    renderTopicPriority();

    renderTopicDistribution();

    populateTrendTopics();

    renderYearTrend();

    renderHeatmap();

    renderStudyFirst();

  }


  /* =====================================================
     QUESTION FILTER
     ===================================================== */

  function filterQuestions() {

    let data =
      allQuestions.filter(q => {

        const examMatch =
          !selectedExam ||
          q.exam === selectedExam;

        const subjectMatch =
          !selectedSubject ||
          q.subject === selectedSubject;

        return examMatch && subjectMatch;
      });


    const range =
      $("yearRange").value;


    if (range !== "all") {

      const years =
        data
          .map(q => Number(q.year))
          .filter(Boolean);


      if (years.length) {

        const maxYear =
          Math.max(...years);

        const minYear =
          maxYear - Number(range) + 1;


        data =
          data.filter(q =>
            Number(q.year) >= minYear
          );
      }
    }


    return data;
  }


  /* =====================================================
     OVERVIEW
     ===================================================== */

  function updateOverview() {

    const topics =
      getUnique("topic", currentQuestions);

    const years =
      getUnique("year", currentQuestions)
        .sort((a, b) => Number(a) - Number(b));


    $("totalQuestions")
      .textContent =
      currentQuestions.length;


    $("totalTopics")
      .textContent =
      topics.length;


    $("totalYears")
      .textContent =
      years.length;


    const counts =
      topicCounts(currentQuestions);


    const top =
      Object.entries(counts)
        .sort((a, b) => b[1] - a[1])[0];


    $("topTopic").textContent =
      top ? top[0] : "—";
  }


  /* =====================================================
     TOPIC PRIORITY
     ===================================================== */

  function renderTopicPriority() {

    const container =
      $("topicPriority");


    const counts =
      topicCounts(currentQuestions);


    const topics =
      Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);


    if (!topics.length) {

      container.innerHTML =
        emptyMessage("No topic data available.");

      return;
    }


    const max =
      topics[0][1];


    container.innerHTML =
      topics
        .map(([topic, count]) => {

          const years =
            getUnique(
              "year",
              currentQuestions.filter(
                q => q.topic === topic
              )
            );


          const priority =
            calculatePriority(
              count,
              max,
              years.length
            );


          return `

            <article
              class="topic-card"
              data-topic="${escapeHTML(topic)}"
            >

              <div class="topic-card-top">

                <span class="topic-name">
                  ${escapeHTML(topic)}
                </span>

                <span class="priority-badge
                  ${priority.class}">
                  ${priority.label}
                </span>

              </div>

              <div class="topic-count">
                ${count}
                PYQ${count === 1 ? "" : "s"}
                • ${years.length} year${years.length === 1 ? "" : "s"}
              </div>

              <div class="topic-progress">
                <span style="width:${Math.max(
                  8,
                  (count / max) * 100
                )}%"></span>
              </div>

            </article>
          `;
        })
        .join("");


    container
      .querySelectorAll("[data-topic]")
      .forEach(card => {

        card.addEventListener("click", () => {

          openTopicDetail(
            card.dataset.topic
          );

        });

      });

  }


  /* =====================================================
     PRIORITY CALCULATION
     ===================================================== */

  function calculatePriority(
    count,
    max,
    yearCount
  ) {

    const frequency =
      max ? count / max : 0;


    /*
     * Frequency + consistency.
     *
     * This is NOT a prediction of the next exam.
     */

    const score =
      (frequency * 70) +
      (Math.min(yearCount / 8, 1) * 30);


    if (score >= 65) {

      return {
        label: "🔥 HIGH",
        class: "priority-high"
      };

    }


    if (score >= 35) {

      return {
        label: "🟠 MEDIUM",
        class: "priority-medium"
      };

    }


    return {
      label: "🟢 LOW",
      class: "priority-low"
    };

  }


  /* =====================================================
     TOPIC DISTRIBUTION
     ===================================================== */

  function renderTopicDistribution() {

    const container =
      $("topicDistribution");


    const counts =
      topicCounts(currentQuestions);


    const topics =
      Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);


    if (!topics.length) {

      container.innerHTML =
        emptyMessage("No topic data available.");

      return;
    }


    const max =
      topics[0][1];


    container.innerHTML =
      topics
        .map(([topic, count]) => {

          return `

            <div
              class="distribution-row"
              data-topic="${escapeHTML(topic)}"
            >

              <div class="distribution-top">

                <span>
                  ${escapeHTML(topic)}
                </span>

                <span>
                  ${count}
                </span>

              </div>

              <div class="distribution-bar">

                <span style="width:${
                  (count / max) * 100
                }%"></span>

              </div>

            </div>

          `;
        })
        .join("");


    container
      .querySelectorAll("[data-topic]")
      .forEach(row => {

        row.addEventListener("click", () => {

          openTopicDetail(
            row.dataset.topic
          );

        });

      });

  }


  /* =====================================================
     TREND TOPICS
     ===================================================== */

  function populateTrendTopics() {

    const select =
      $("trendTopic");


    const topics =
      getUnique(
        "topic",
        currentQuestions
      ).sort();


    const current =
      select.value;


    select.innerHTML =
      `<option value="">All Topics</option>` +
      topics
        .map(topic =>
          `<option value="${escapeHTML(topic)}">
            ${escapeHTML(topic)}
          </option>`
        )
        .join("");


    if (topics.includes(current))
      select.value = current;

  }


  /* =====================================================
     YEAR TREND
     ===================================================== */

  function renderYearTrend(topic = "") {

    let data =
      currentQuestions;


    if (topic) {

      data =
        data.filter(
          q => q.topic === topic
        );
    }


    const counts = {};


    data.forEach(q => {

      const year =
        Number(q.year);

      if (!year) return;

      counts[year] =
        (counts[year] || 0) + 1;

    });


    const years =
      Object.keys(counts)
        .map(Number)
        .sort((a, b) => a - b);


    const container =
      $("yearTrend");


    if (!years.length) {

      container.innerHTML =
        emptyMessage("No year information available.");

      return;
    }


    const max =
      Math.max(...years.map(y => counts[y]));


    container.innerHTML =
      years
        .map(year => {

          const height =
            Math.max(
              3,
              (counts[year] / max) * 175
            );


          return `

            <div class="year-column">

              <span class="year-value">
                ${counts[year]}
              </span>

              <div
                class="year-bar"
                style="height:${height}px"
                title="${year}: ${counts[year]} PYQs"
              ></div>

              <span class="year-label">
                ${year}
              </span>

            </div>

          `;

        })
        .join("");

  }


  /* =====================================================
     HEATMAP
     ===================================================== */

  function renderHeatmap() {

    const container =
      $("heatmap");


    const topics =
      getUnique(
        "topic",
        currentQuestions
      ).sort();


    const years =
      getUnique(
        "year",
        currentQuestions
      )
      .map(Number)
      .filter(Boolean)
      .sort((a, b) => a - b);


    if (!topics.length || !years.length) {

      container.innerHTML =
        emptyMessage("Not enough data for heatmap.");

      return;
    }


    const columns =
      years.length + 1;


    container.style.gridTemplateColumns =
      `minmax(150px, 1.5fr) repeat(${years.length}, minmax(42px, 1fr))`;


    let html =
      `<div class="heat-cell heat-label heat-header">
        Topic
      </div>`;


    years.forEach(year => {

      html += `
        <div class="heat-cell heat-header">
          ${year}
        </div>
      `;

    });


    topics.forEach(topic => {

      html += `
        <div class="heat-cell heat-label">
          ${escapeHTML(topic)}
        </div>
      `;


      years.forEach(year => {

        const count =
          currentQuestions.filter(q =>
            q.topic === topic &&
            Number(q.year) === year
          ).length;


        const level =
          Math.min(
            4,
            count
          );


        html += `

          <div
            class="heat-cell heat-${level}"
            data-topic="${escapeHTML(topic)}"
            data-year="${year}"
            title="${escapeHTML(topic)} — ${year}: ${count} PYQs"
          >
            ${count || "—"}
          </div>

        `;

      });

    });


    container.innerHTML = html;


    container
      .querySelectorAll(
        ".heat-cell[data-topic]"
      )
      .forEach(cell => {

        cell.addEventListener(
          "click",
          () => {

            openTopicDetail(
              cell.dataset.topic
            );

          }
        );

      });

  }


  /* =====================================================
     STUDY FIRST
     ===================================================== */

  function renderStudyFirst() {

    const container =
      $("studyFirst");


    const counts =
      topicCounts(currentQuestions);


    const topics =
      Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);


    container.innerHTML =
      topics
        .map(([topic, count], index) => {

          const level =
            index === 0
              ? "🔥 Start here"
              : index === 1
              ? "🎯 Next"
              : "📚 Then";


          return `

            <div class="study-item">

              <strong>
                ${level}
              </strong>

              <p>
                <b>${escapeHTML(topic)}</b>
                has ${count} PYQ${count === 1 ? "" : "s"}
                in the current selection.
              </p>

              <button
                data-study-topic="${escapeHTML(topic)}"
              >
                Practice Topic →
              </button>

            </div>

          `;

        })
        .join("");


    container
      .querySelectorAll(
        "[data-study-topic]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            openTopicDetail(
              button.dataset.studyTopic
            );

          }
        );

      });

  }


  /* =====================================================
     TOPIC DETAIL
     ===================================================== */

  function openTopicDetail(topic) {

    selectedTopic =
      topic;


    const questions =
      currentQuestions.filter(
        q => q.topic === topic
      );


    const years =
      getUnique(
        "year",
        questions
      )
      .map(Number)
      .filter(Boolean)
      .sort((a, b) => a - b);


    const counts = {};


    questions.forEach(q => {

      const year =
        Number(q.year);

      if (!year) return;

      counts[year] =
        (counts[year] || 0) + 1;

    });


    const max =
      Math.max(
        0,
        ...Object.values(counts)
      );


    const priority =
      calculatePriority(
        questions.length,
        Math.max(
          ...Object.values(
            topicCounts(currentQuestions)
          )
        ),
        years.length
      );


    $("detailTopic")
      .textContent = topic;


    $("detailSummary")
      .textContent =
      `${questions.length} PYQs found across ${years.length} year${years.length === 1 ? "" : "s"}.`;


    $("detailQuestions")
      .textContent =
      questions.length;


    $("detailYears")
      .textContent =
      years.length;


    $("detailPriority")
      .textContent =
      priority.label;


    $("detailYearChart").innerHTML =
      years
        .map(year => {

          const count =
            counts[year] || 0;


          return `

            <div class="detail-year-row">

              <span class="detail-year-label">
                ${year}
              </span>

              <div class="detail-year-bar">

                <span style="width:${
                  max
                    ? (count / max) * 100
                    : 0
                }%"></span>

              </div>

              <span class="detail-year-count">
                ${count}
              </span>

            </div>

          `;

        })
        .join("");


    $("topicDetail")
      .classList.remove("hidden");


    $("topicDetail")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

  }


  /* =====================================================
     HELPERS
     ===================================================== */

  function topicCounts(data) {

    const counts = {};


    data.forEach(q => {

      const topic =
        q.topic || "Uncategorized";


      counts[topic] =
        (counts[topic] || 0) + 1;

    });


    return counts;
  }


  function getUnique(field, data) {

    return [
      ...new Set(
        data
          .map(q => q[field])
          .filter(v =>
            v !== undefined &&
            v !== null &&
            v !== ""
          )
      )
    ];

  }


  function emptyMessage(message) {

    return `
      <div style="
        padding:25px;
        color:#94a3b8;
        font-size:.8rem;
        text-align:center;
        width:100%;
      ">
        ${escapeHTML(message)}
      </div>
    `;

  }


  function showNoData() {

    $("emptyState")
      .classList.remove("hidden");

    $("emptyState").innerHTML = `
      <div>📊</div>
      <h2>No PYQ data available</h2>
      <p>
        Add valid questions to your question bank
        to generate analysis.
      </p>
    `;

  }


  function escapeHTML(value) {

    return String(value)
      .replace(
        /[&<>"']/g,
        character => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[character])
      );

  }


  /* =====================================================
     START
     ===================================================== */

  init();

})();
