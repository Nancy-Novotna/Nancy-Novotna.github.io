window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById("music");
    const buttons = document.querySelectorAll(".music-button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                btn.classList.add("active");
                btn.classList.add("fa-solid fa-camera-retro")
            } else {
                audio.pause();
                btn.classList.remove("active");
                audio.currentTime = 0;
            }
        });
    })})
