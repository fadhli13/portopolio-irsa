document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".main-card");

    function checkScroll() {
        skillItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Untuk memeriksa saat halaman pertama kali dimuat
});
