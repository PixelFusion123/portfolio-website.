document.addEventListener("DOMContentLoaded", function () {
    // Select all existing butterflies
    const butterflies = document.querySelectorAll(".butterfly");

    // Remove each butterfly immediately
    butterflies.forEach(butterfly => {
        butterfly.remove();
    });

    // Stop new butterflies from being created
    clearInterval(window.butterflyInterval);
});

