// Dark mode toggle functionality

const themeButton = document.getElementById("theme-toggle");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// Dynamic footer year update

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `&copy; ${year} Umaia Islam Athay. All rights reserved.`;

}