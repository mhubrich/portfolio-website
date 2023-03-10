/* Navigation functions */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length,
    navTogglerBtn = document.querySelector(".nav-toggler");

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

function asideSectionTogglerBtn() {
    document.querySelector(".aside").classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

function buttonClick(reference) {
    const sectionIndex = getActive();
    showSection(reference);
    updateNav(reference);
    removeBackSection();
    addBackSection(sectionIndex);
}


/* Initialize navigation */
navTogglerBtn.addEventListener("click", () => asideSectionTogglerBtn());
document.querySelector(".about-me").addEventListener("click", function () {buttonClick(this)});
document.querySelector(".my-experience").addEventListener("click", function () {buttonClick(this)});
document.querySelector(".my-portfolio").addEventListener("click", function () {buttonClick(this)});
document.querySelector(".contact-me").addEventListener("click", function () {buttonClick(this)});
document.querySelector(".logo-href").addEventListener("click", function () {buttonClick(this)});