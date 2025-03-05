document.addEventListener("DOMContentLoaded", function () {
    // Ladda in Navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Fel vid inläsning av navbar:", error));

    // Ladda in Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Fel vid inläsning av footer:", error));
});
// Initiera TwentyTwenty när sidan har laddats
$(window).on("load", function () {
    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.5, // Starta med handtaget i mitten
        orientation: 'horizontal' // Horisontell jämförelse
    });
});
