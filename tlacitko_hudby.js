window.addEventListener('DOMContentLoaded', function() {
    var hudba = document.getElementById("music");
    var button = document.getElementById("music-button");

    button.onclick = function () {
        if (hudba.paused) {
            hudba.play();
            button.classList.add("active");
            button.classList.add("fa-solid fa-camera-retro")
            button.innerHTML = 'Hudbička <i class="fa-solid fa-music"></i>';
        } else {
            hudba.pause();
            button.classList.remove("active");
            button.innerHTML = 'Hudbička <i class="fa-solid fa-music"></i>';
            hudba.currentTime = 0;
        }
    };
});
