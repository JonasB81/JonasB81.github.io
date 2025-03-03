document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // Vänta tills menyn är inlagd i DOM:en innan vi lägger till eventlistener
            const menuToggle = document.querySelector(".menu-toggle");
            const navLinks = document.querySelector(".nav-links");

            if (menuToggle && navLinks) {
                menuToggle.addEventListener("click", () => {
                    navLinks.classList.toggle("nav-active");
                });
            }
        });
});
