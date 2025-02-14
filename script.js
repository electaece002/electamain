document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.getElementById("toggle-button");
    let sidebar = document.querySelector(".sidebar-menu");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && event.target !== toggleButton) {
            sidebar.classList.remove("show");
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    slidesPerView: 1,
});