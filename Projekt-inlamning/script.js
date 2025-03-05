// Initiera TwentyTwenty när sidan har laddats
$(window).on("load", function () {
    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.5, // Starta med handtaget i mitten
        orientation: 'horizontal' // Horisontell jämförelse
    });
});
// Mobile Menu 
document.getElementById("mobile-menu").addEventListener("click", function () {
    document.querySelector(".navbar-ul").classList.toggle("active");
});

function openLightbox(imageSrc) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = imageSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}