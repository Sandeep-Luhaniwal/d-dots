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

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("overflow-hidden");
});

// Get all the nav tabs and add click event listeners
const navTabs = document.querySelectorAll(".nav-links");
navTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
    // Additional code for handling tab clicks can be added here if needed
  });
});

// BACK TO TOP
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > document.classList.h) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none ";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
