let bio = document.querySelector("#bio");
let skills = document.querySelector("#skills");
let education = document.querySelector("#education");

const sec1 = document.querySelector("#sec1");
const sec2 = document.querySelector("#sec2");
const sec3 = document.querySelector("#sec3");

sec1.addEventListener("click", function showBio() {
  skills.style.display = "none";
  education.style.display = "none";
  bio.style.display = "block";
  sec1.classList.add("active-tab");
  sec2.classList.remove("active-tab");
  sec3.classList.remove("active-tab");
});

sec2.addEventListener("click", function showSkills() {
  bio.style.display = "none";
  education.style.display = "none";
  skills.style.display = "flex";
  sec2.classList.add("active-tab");
  sec1.classList.remove("active-tab");
  sec3.classList.remove("active-tab");
});
sec3.addEventListener("click", function showEducation() {
  bio.style.display = "none";
  skills.style.display = "none";
  education.style.display = "block";
  sec3.classList.add("active-tab");
  sec1.classList.remove("active-tab");
  sec2.classList.remove("active-tab");
});

// Dark Mode Toggle
const modeToggle = document.querySelector("#mode");
let DarkMode = 1; // Default is DARK MODE

const navbar = document.querySelector("#navbar"); // single nav div
const panels = document.querySelectorAll(".panel");
const overlay = document.querySelector("#rightOverlay");
const texts = document.querySelectorAll("h1, h2, h3, p, a, ul, li");
const icon = document.querySelectorAll("i");
const btn = document.querySelectorAll("button");




modeToggle.addEventListener("click", function toggleDarkMode() {
  if (DarkMode === 1) {
    // Switch to LIGHT MODE
    modeToggle.innerHTML = `<i class="ri-moon-fill"></i>`;
    modeToggle.style.color = "black";
    // Also set icon color directly for reliability
    const modeIcon = modeToggle.querySelector('i');
    if (modeIcon) modeIcon.style.color = "black";

    panels.forEach((panel) => {
      panel.style.background = "linear-gradient(to left, #7fb2f6ff 5%, #eaf8fb 100%)";
    });

    texts.forEach((text) => {
      text.style.color = "#000000ff";
    });

    icon.forEach((ic) => {
      ic.style.color = "#051d2eff";
    });

    btn.forEach((button) => {
      button.style.color = "black";  
    }
    );
    
    navbar.style.background = "linear-gradient(90deg, #62a7fcff 30%, #80b1f5ff 100%)";
    // overlay.style.background = "linear-gradient(30deg, #0268ceff 50%, #eaf8fb 100%)";
    DarkMode = 0;

  } else {
    // Switch to DARK MODE
    modeToggle.innerHTML = `<i class="ri-sun-fill"></i>`;
    modeToggle.style.color = "white";
    // Also set icon color directly for reliability
    const modeIcon = modeToggle.querySelector('i');
    if (modeIcon) modeIcon.style.color = "white";

    panels.forEach((panel) => {
      panel.style.background = "linear-gradient(to left, #001921 10%, #003a4a 100%)";
    });

    texts.forEach((text) => {
      text.style.color = "white";
    });

    icon.forEach((ic) => {
      ic.style.color = "white"; 
    }
    );

    btn.forEach((button) => {
      button.style.color = "#001e26";    
    }
    );

    navbar.style.background = "linear-gradient(90deg, #001a21 10%, #014457 100%)";
    // overlay.style.background = "linear-gradient(30deg, #001e26 40%, #004b60 100%)";

    DarkMode = 1;
  }
});


window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "mobile.css";
    document.head.appendChild(link);
  }
});

let menuIcon = document.querySelector("#menuicon");
let menu = document.querySelector("#menu");
let navbarDiv = document.querySelector("#navbar");
menuIcon.addEventListener("click", function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    navbarDiv.style.height = "10%";
  } else {
    menu.style.display = "block";
    navbarDiv.style.height = "auto";
  }
});