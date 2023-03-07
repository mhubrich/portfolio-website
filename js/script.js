/* Typing animation in home section */
var typed = new Typed(".typing", {
    strings: ["Product Manager.", "Software Developer.", "Data Analyst.", "Mentor.", "Athlete.", "Friend."],
    typeSpeed: 30,
    backSpeed: 10,
    backDelay: 1000,
    loop: true
})

/* Navigation */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
function getActive() {
    for (let i = 0; i < totalNavList; i++) {
        if (navList[i].querySelector("a").classList.contains("active")) {
            return i
        }
    }
    return 0;
}
function buttonClick(reference) {
    const sectionIndex = getActive();
    showSection(reference);
    updateNav(reference);
    removeBackSection();
    addBackSection(sectionIndex);
}
document.querySelector(".about-me").addEventListener("click", function () {buttonClick(this)});
document.querySelector(".my-experience").addEventListener("click", function () {buttonClick(this)});
document.querySelector(".my-portfolio").addEventListener("click", function () {buttonClick(this)});
document.querySelector(".logo-href").addEventListener("click", function () {buttonClick(this)});
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* Dark/Light Mode */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("DOMContentLoaded", () => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})