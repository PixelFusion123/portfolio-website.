document.querySelector(".search-bar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        alert("Search functionality will be added soon!");
    }
});

const videos = document.querySelectorAll(".video");

videos.forEach(video => {
    video.addEventListener("click", function() {
        alert("Video playback feature coming soon!");
    });
});
