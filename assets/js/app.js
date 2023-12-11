// ************  VIDEO JS START ************ 
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

//  ************  VIDEO JS END  ************
//  ************ SIDENAVBAR JS  ************ 
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

// ************ Back to Top ************
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ************ SECURE DATA BUTTON JS ************ 

let isSimulationActive = false;

function startSimulation() {
  if (isSimulationActive) return;

  isSimulationActive = true;

  let elementClasses = [
    ".first-text-secure",
    ".second-text-secure",
    ".third-text-secure",
    ".fourth-text-secure",
    ".fifth-text-secure",
    ".six-text-secure",
    ".seven-text-secure",
    ".eight-text-secure",
  ];

  // Disable the button
  let button = document.getElementById("securedatabtn"); // Replace 'your-button-id' with your button's ID
  button.disabled = true;
  button.classList.remove("common_btn");

  // Change cursor style to 'no-drop'
  button.style.cursor = "not-allowed";

  elementClasses.forEach((elementClass, index) => {
    let currentElement = document.querySelector(elementClass);
    if (currentElement) {
      currentElement.style.opacity = "0";
      setTimeout(
        () => (currentElement.style.opacity = "1"),
        1000 + 800 * index
      );
    }
  });

  setTimeout(() => {
    isSimulationActive = false;
    // Enable the button after the simulation completes
    button.disabled = false;
    button.classList.add("common_btn");
    button.style.cursor = "pointer"; // Change cursor back to default or as needed
  }, 1000 + 800 * (elementClasses.length - 1));
}


// ************ AOS ANIMATION ************
AOS.init({
  duration: 700,
  once: true,
});