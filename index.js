        const skills = [

            "🎓 HTML",
            "🎓 CSS",
            "🎓 JavaScript",
            "🎓 C Programming",
            "🎓 C++",
            "🎓 Core Java",
            "🎓 SQL",
            "🎓 PostgreSQL",
            "🎓 MongoDB",
            "🎓 Responsive Web Design",
            "🎓 Problem Solving",
            "🎓 Database Design"

        ];

        const reveals =
            document.querySelectorAll("section");

        window.addEventListener("scroll", () => {

            reveals.forEach(section => {

                let top =
                    section.getBoundingClientRect().top;

                if (top < window.innerHeight - 100) {

                    section.classList.add("active");

                }

            });

        });

        const projects = [

            {
                title: "🛒🛍️ Grocery Management System",
                description: "Database management system using PostgreSQL."
            },

            {
                title: "❌⭕ Tic Tac Toe",
                description: "Interactive JavaScript game project."
            },

            {
                title: "✊✌️🖐 Rock Paper Scissors",
                description: "Fun JavaScript based game."
            }

        ];

        const skillContainer =
            document.getElementById("skills-container");

        skills.forEach(skill => {

            const div =
                document.createElement("div");

            div.classList.add("skill");

            div.innerHTML = skill;

            skillContainer.appendChild(div);

        });

        const projectContainer =
            document.getElementById("projects-container");

        projects.forEach(project => {

            const card =
                document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
`;

            projectContainer.appendChild(card);

        });

        const roles = [
            "Frontend Developer",
            "JavaScript Developer",
            "PostgreSQL Learner",
            "Programming Enthusiast"
        ];

        let roleIndex = 0;

        setInterval(() => {

            document.getElementById("typing").textContent =
                roles[roleIndex];

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }, 2000);

        const themeBtn =
            document.getElementById("theme-toggle");

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light");

            themeBtn.innerHTML =
                document.body.classList.contains("light")
                    ?
                    "☀️"
                    :
                    "🌙";

            localStorage.setItem(
                "theme",
                document.body.classList.contains("dark")
            );

        });

        if (localStorage.getItem("theme") === "true") {
            document.body.classList.add("light");
        }

        document.getElementById("contactForm")
            .addEventListener("submit", function (e) {

                e.preventDefault();

                let name =
                    document.getElementById("name").value;

                let email =
                    document.getElementById("email").value;

                let message =
                    document.getElementById("message").value;

                let error =
                    document.getElementById("error");

                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    error.innerHTML =
                        "Please fill all fields";

                    error.style.color = "red";

                    return;

                }

                error.innerHTML =
                    "Message Submitted Successfully";

                error.style.color = "green";

            });
