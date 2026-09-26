// Dark mode toggle functionality

const themeButton = document.createElement("button");

themeButton.textContent = "🌙 Dark Mode";

themeButton.setAttribute(
    "aria-label",
    "Toggle dark mode"
);

document.body.appendChild(themeButton);


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

});


// Dynamic footer year update

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `&copy; ${year} Umaia Islam Athay. All rights reserved.`;

}


console.log("Portfolio website loaded successfully.");