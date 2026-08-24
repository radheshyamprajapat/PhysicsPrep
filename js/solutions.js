document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("solutionsContainer");

    const searchInput =
        document.getElementById("solutionSearch");

    const noSolutions =
        document.getElementById("noSolutions");


    if (!container ||
        !window.PHYSICS_SOLUTIONS) {

        console.error(
            "PHYSICS_SOLUTIONS data not found."
        );

        return;
    }


    function renderSolutions(searchTerm = "") {

        container.innerHTML = "";

        const search =
            searchTerm.trim().toLowerCase();

        let totalResults = 0;


        PHYSICS_SOLUTIONS.forEach(subject => {

            const matchingTopics =
                subject.topics.filter(topic => {

                    if (!search) {
                        return true;
                    }

                    return (
                        subject.name
                            .toLowerCase()
                            .includes(search)
                        ||
                        topic.name
                            .toLowerCase()
                            .includes(search)
                    );

                });


            if (matchingTopics.length === 0) {
                return;
            }


            totalResults += matchingTopics.length;


            const subjectSection =
                document.createElement("section");

            subjectSection.className =
                "solution-subject";


            subjectSection.innerHTML = `

                <div class="subject-title">

                    <div class="subject-icon">
                        ${subject.icon || "📚"}
                    </div>

                    <div class="subject-heading">

                        <h3>
                            ${escapeHTML(subject.name)}
                        </h3>

                        <p>
                            ${matchingTopics.length}
                            topic${matchingTopics.length !== 1 ? "s" : ""}
                        </p>

                    </div>

                </div>


                <div class="topic-grid"></div>

            `;


            const topicGrid =
                subjectSection.querySelector(
                    ".topic-grid"
                );


            matchingTopics.forEach(topic => {

                const card =
                    document.createElement("a");


                card.className =
                    "solution-topic-card";


                card.href =
                    topic.pdf;


                card.target = "_blank";


                card.rel =
                    "noopener noreferrer";


                card.setAttribute(
                    "aria-label",
                    `Open solution for ${topic.name}`
                );


                card.innerHTML = `

                    <div class="topic-icon">
                        📄
                    </div>

                    <div class="topic-info">

                        <h4>
                            ${escapeHTML(topic.name)}
                        </h4>

                        <span>
                            View Solution PDF
                            <strong>→</strong>
                        </span>

                    </div>

                `;


                topicGrid.appendChild(card);

            });


            container.appendChild(
                subjectSection
            );

        });


        noSolutions.hidden =
            totalResults !== 0;

    }


    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                renderSolutions(
                    this.value
                );

            }
        );

    }


    renderSolutions();


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton =
        document.getElementById(
            "mobileMenuBtn"
        );

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (menuButton && navLinks) {

        menuButton.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle(
                    "mobile-open"
                );

            }
        );

    }

});
