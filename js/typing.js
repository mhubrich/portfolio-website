/**
 * Creates a new typing animation.
 *
 * Uses the `typed.js` library to create an animation on the given `element`.
 *
 * @param {String} element      Class name of the HTML element to be animated.
 * @param {array} strings       Array of strings to be typed.
 * @param {number} typeSpeed    Type speed in milliseconds.
 * @param {number} backSpeed    Backspacing speed in milliseconds.
 * @param {number} backDelay    Time before backspacing in milliseconds.
 * @param {boolean} loop        Loop strings.
 * 
 * @returns {Typed}             Instance of a new Typed object that starts animation.
 */
function typing(element, strings, typeSpeed=30, backSpeed=10, backDelay=1000, loop=true) {
    return new Typed(element, {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        backDelay: backDelay,
        loop: loop
    })
}


/* Start typing animation in home section */
const typed = typing(".typing",
    ["Product Manager.",
    "Software Developer.",
    "Data Analyst.",
    "Mentor.",
    "Athlete.",
    "Friend."]
);