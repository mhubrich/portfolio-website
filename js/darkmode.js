/**
 * Checks if the OS preference is dark mode.
 * 
 * @returns {boolean}   True, if OS prefers dark mode, false otherwise.
 */
function isOSDarkMode() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Sets the dark or light color schema based on OS preference.
 * 
 * @param {String} id   ID of the dark mode settings HTML element.
 */
function initDarkMode(id) {
    const icon = document.getElementById(id);
    if (isOSDarkMode()) {
        document.documentElement.classList.add("dark");
        icon.classList.add("fa-sun");
    } else {
        document.documentElement.classList.remove("dark");
        icon.classList.add("fa-moon");
    }
}

/**
 * Toggles from dark to light mode and vice versa.
 * 
 * @param {String} id   ID of the dark mode settings HTML element.
 */
function toggleDarkMode(id) {
    const icon = document.getElementById(id);
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.documentElement.classList.toggle("dark");
}


/* Initialize dark mode */
window.addEventListener("DOMContentLoaded", () => initDarkMode("darkmode-toggle"));
document.querySelector(".day-night").addEventListener("click", () => toggleDarkMode("darkmode-toggle"));