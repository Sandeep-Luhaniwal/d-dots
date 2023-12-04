// VIDEO JS START
let vid = document.getElementById("myVideo");
let playButton = document.getElementById("playVideo");
function playVid() {
    vid.play();
    vid.controls = true; // Show controls when video starts playing
    playButton.classList.add("d-none");
}
vid.addEventListener("play", function () {
    vid.controls = true; // Show controls when video starts playing
    playButton.classList.add("d-none");
});
vid.addEventListener("pause", function () {
    vid.controls = false; // Hide controls when video is paused
    playButton.classList.remove("d-none");
});

// VIDEO JS END