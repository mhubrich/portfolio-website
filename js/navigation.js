/**
 * This class handles all in-app navigation performed by user click events.
 *
 * The class is capable of managing navigation for:
 * 1) Left-side menu
 * 2) Buttons
 * 3) Resume tabs
 */
class Navigation {

    constructor() {
        this._navList = document.querySelectorAll(".nav li");
        this._totalNavList = this._navList.length;
        this._sectionList = document.querySelectorAll(".section");
        this._totalSectionList = this._sectionList.length;
        this._navTogglerBtn = document.querySelector(".nav-toggler");
        this.init();
    }

    /**
     * Sets up all click listeners.
     */
    init() {
        this.addNavClickListener();
        this.addButtonClickListener();
        this.addTabsClickListener();
        this.addNavTogglerClickListener();
    }

    /**
     * Click listeners for all left-side menu sections.
     */
    addNavClickListener() {
        for (let i = 0; i < this._totalNavList; i++) {
            const a = this._navList[i].querySelector("a");
            a.addEventListener("click",  () => {
                this.removeBackSection();
                for (let j = 0; j < this._totalNavList; j++) {
                    if (this.modifyClassList(this._navList[j].querySelector("a"), "contains", "active")) {
                        this.addBackSection(j);
                    }
                    this.modifyClassList(this._navList[j].querySelector("a"), "remove", "active");
                }
                this.modifyClassList(a, "add", "active");
                this.showSection(a);
                if (window.innerWidth < 1200) {
                    this.asideSectionTogglerBtn();
                }
            });
        }
    }

    /**
     * Click listeners for all all buttons.
     */
    addButtonClickListener() {
        for (let btn of document.querySelectorAll(".href")) {
            btn.addEventListener("click", () => {this.buttonClick(btn)});
        }
    }

    /**
     * Click listeners for all resume tabs.
     */
    addTabsClickListener() {
        for (let tab of document.querySelectorAll(".resume-tabs a")) {
            tab.addEventListener("click", () => {this.tabClick(tab)});
        }
    }

    /**
     * Click listener for the navigation toggler button.
     */
    addNavTogglerClickListener() {
        this._navTogglerBtn.addEventListener("click", () => this.asideSectionTogglerBtn());
    }

    /**
     * Helper class to handle button clicks.
     * 
     * @param {Object} element      Reference to the HTML button element.
     */
    buttonClick(element) {
        const sectionIndex = this.getActive();
        this.showSection(element);
        this.updateNav(element);
        this.removeBackSection();
        this.addBackSection(sectionIndex);
    }

    /**
     * Helper class to handle tab clicks.
     * 
     * @param {Object} element      Reference to the HTML tab element.
     */
    tabClick(element) {
        for (let title of document.querySelectorAll(".resume-title")) {
            this.modifyClassList(title, "remove", "active");
        }
        this.modifyClassList(element.querySelector(".resume-title"), "add", "active");
        for (let item of document.querySelectorAll(".resume-item")) {
            this.modifyClassList(item, "remove", "active");
        }
        this.modifyClassList(document.getElementById(element.className), "add", "active");
    }

    /**
     * Helper class to modify the class list of an HTML element.
     * 
     * @param {Object} element      Reference to the HTML element.
     * @param {String} fn           Name of the function to invoke.
     * @param {String} arg          Argument to pass to function `fn`.
     */
    modifyClassList(element, fn, arg) {
        return element.classList[fn](arg);
    }

    /**
     * Helper class to modify the class list of all section elements.
     * 
     * @param {String} fn           Name of the function to invoke.
     * @param {String} arg          Argument to pass to function `fn`.
     */
    iterateSectionList(fn, arg) {
        for (let section of this._sectionList) {
            this.modifyClassList(section, fn, arg);
        }
    }

    /**
     * Removes the `back-section` token from the class lists of all section elements.
     */
    removeBackSection() {
        this.iterateSectionList("remove", "back-section");
    }

    /**
     * Adds the `back-section` token to the `num`-th section element.
     * 
     * @param {Number} num        Position in `sectionList`.
     */
    addBackSection(num) {
        this.modifyClassList(this._sectionList[num], "add", "back-section");
    }

    /**
     * Switches the active section shown on screen.
     * 
     * @param {Object} element      Reference to the HTML element.
     */
    showSection(element) {
        this.iterateSectionList("remove", "active");
        const target = element.getAttribute("href").split("#")[1];
        this.modifyClassList(document.querySelector("#" + target), "add", "active");
    }

    /**
     * Updates the left-side navigation when a new section becomes avtive.
     * 
     * @param {Object} element      Reference to the HTML element.
     */
    updateNav(element) {
        for (let i = 0; i < this._totalNavList; i++) {
            const a = this._navList[i].querySelector("a");
            this.modifyClassList(a, "remove", "active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === a.getAttribute("href").split("#")[1]) {
                this.modifyClassList(a, "add", "active");
            }
        }
    }

    /**
     * Returns the index of current active section.
     * 
     * @returns {Number}    Index of the current active section in `navList`.
     */
    getActive() {
        for (let i = 0; i < this._totalNavList; i++) {
            if (this.modifyClassList(this._navList[i].querySelector("a"), "contains", "active")) {
                return i
            }
        }
        return 0;
    }

    /**
     * Opens/closes the left-side menu.
     */
    asideSectionTogglerBtn() {
        this.modifyClassList(document.querySelector(".aside"), "toggle", "open");
        this.modifyClassList(this._navTogglerBtn, "toggle", "open");
        this.iterateSectionList("toggle", "open");
    }
}


/* Initialize navigation */
const nav = new Navigation();