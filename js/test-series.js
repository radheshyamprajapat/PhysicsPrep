(() => {

  /*
   * =========================================================
   * PHYSICSPREP TEST SERIES
   * =========================================================
   *
   * Add new paid test series inside this array.
   *
   * Example:
   *
   * {
   *   id: "gate-series-01",
   *   title: "GATE Physics Test Series",
   *   exam: "GATE Physics",
   *   description: "Complete GATE Physics practice series.",
   *   thumbnail: "assets/test-series/gate-series.jpg",
   *   tests: 10,
   *   questions: 1000,
   *   duration: "3 hrs",
   *   price: 199,
   *   oldPrice: 299,
   *   badge: "POPULAR",
   *   buttonText: "Buy Now",
   *   paymentUrl: "#"
   * }
   *
   * =========================================================
   */


  const paidSeries = [

    {
      id: "csir-net-series-01",

      title: "CSIR NET Physical Sciences Test Series",

      exam: "CSIR NET",

      description:
        "Exam-focused Physics tests designed for CSIR NET Physical Sciences preparation.",

      thumbnail:
        "assets/test-series/csir-net-series.jpg",

      tests: 10,

      questions: 1000,

      duration: "3 hrs",

      price: 199,

      oldPrice: 299,

      badge: "POPULAR",

      buttonText: "Buy Now",

      paymentUrl: "#"
    },


    {
      id: "barc-series-01",

      title: "BARC Physics Test Series",

      exam: "BARC",

      description:
        "Full-length Physics CBT tests with mixed questions for BARC preparation.",

      thumbnail:
        "assets/test-series/barc-series.jpg",

      tests: 10,

      questions: 1000,

      duration: "2 hrs",

      price: 149,

      oldPrice: 249,

      badge: "NEW",

      buttonText: "Buy Now",

      paymentUrl: "#"
    },


    {
      id: "gate-series-01",

      title: "GATE Physics Test Series",

      exam: "GATE Physics",

      description:
        "Practice complete GATE Physics concepts through structured mock tests.",

      thumbnail:
        "assets/test-series/gate-series.jpg",

      tests: 10,

      questions: 650,

      duration: "3 hrs",

      price: 199,

      oldPrice: 299,

      badge: "COMING SOON",

      buttonText: "Coming Soon",

      paymentUrl: "#"
    }

  ];


  /*
   * =========================================================
   * RENDER PAID SERIES
   * =========================================================
   */

  function renderPaidSeries() {

    const grid =
      document.querySelector("#paidSeriesGrid");

    if (!grid) return;


    if (!paidSeries.length) {

      grid.innerHTML = `
        <div class="empty-series">
          No test series available yet.
        </div>
      `;

      return;
    }


    grid.innerHTML = paidSeries
      .map(series => createSeriesCard(series))
      .join("");


    /*
     * Handle Buy buttons
     */

    grid
      .querySelectorAll("[data-series-id]")
      .forEach(button => {

        button.addEventListener("click", () => {

          const id =
            button.dataset.seriesId;

          const series =
            paidSeries.find(
              item => item.id === id
            );

          if (!series) return;


          /*
           * If a real payment URL is added,
           * open it.
           */

          if (
            series.paymentUrl &&
            series.paymentUrl !== "#"
          ) {

            window.location.href =
              series.paymentUrl;

            return;
          }


          /*
           * Payment not connected yet.
           */

          alert(
            `${series.title}\n\nPayment link will be available soon.`
          );

        });

      });

  }


  /*
   * =========================================================
   * CARD HTML
   * =========================================================
   */

  function createSeriesCard(series) {

    const safeTitle =
      escapeHTML(series.title);

    const safeExam =
      escapeHTML(series.exam);

    const safeDescription =
      escapeHTML(series.description);

    const thumbnail =
      series.thumbnail
        ? `
          <img
            src="${escapeHTML(series.thumbnail)}"
            alt="${safeTitle} thumbnail"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >

          <div
            class="thumbnail-placeholder"
            style="display:none"
          >
            ⚛
          </div>
        `
        : `
          <div class="thumbnail-placeholder">
            ⚛
          </div>
        `;


    const buttonDisabled =
      series.buttonText === "Coming Soon";


    return `

      <article class="series-card">

        <div class="series-thumbnail">

          ${thumbnail}

          <span class="series-badge">
            ${escapeHTML(series.badge || safeExam)}
          </span>

        </div>


        <div class="series-card-body">

          <h3>
            ${safeTitle}
          </h3>


          <p class="series-description">
            ${safeDescription}
          </p>


          <div class="series-meta">

            <span>
              ${series.tests} Tests
            </span>

            <span>
              ${series.questions} Questions
            </span>

            <span>
              ${escapeHTML(series.duration)}
            </span>

          </div>


          <div class="series-bottom">

            <div class="series-price">

              <span class="currency">
                ₹
              </span>

              <span class="amount">
                ${series.price}
              </span>

              ${
                series.oldPrice
                  ? `
                    <span class="old-price">
                      ₹${series.oldPrice}
                    </span>
                  `
                  : ""
              }

            </div>


            ${
              buttonDisabled
                ? `
                  <button
                    class="series-buy-btn"
                    disabled
                    style="opacity:.65;cursor:not-allowed;"
                  >
                    Coming Soon
                  </button>
                `
                : `
                  <button
                    class="series-buy-btn"
                    data-series-id="${escapeHTML(series.id)}"
                  >
                    ${escapeHTML(series.buttonText)}
                  </button>
                `
            }

          </div>

        </div>

      </article>

    `;
  }


  /*
   * =========================================================
   * MOBILE NAVIGATION
   * =========================================================
   *
   * This keeps the Test Series page working even though
   * it doesn't load app.js.
   */

  function initNavigation() {

    const toggle =
      document.querySelector(".menu-toggle");

    const nav =
      document.querySelector(".main-nav");

    if (!toggle || !nav) return;


    toggle.addEventListener("click", () => {

      const open =
        nav.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );

    });

  }


  /*
   * =========================================================
   * SECURITY / HTML ESCAPING
   * =========================================================
   */

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


  /*
   * =========================================================
   * INIT
   * =========================================================
   */

  renderPaidSeries();

  initNavigation();


})();
