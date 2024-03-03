document.addEventListener("DOMContentLoaded", function() {
    var scrollButtons = document.querySelectorAll(".scroll-btn");

    scrollButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var targetId = this.getAttribute("data-target");
            var targetSection = document.querySelector(targetId);
            if (targetSection) {
                var offsetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
