
const bgFirst = document.getElementById("svg-background-first");
const bgSecond = document.getElementById("svg-background-second");
const svgTextFirst = document.getElementById("svg-text-first");
const svgText = document.getElementById("svg-text-hover-first");
const svgTextHoverSecond = document.getElementById("svg-text-hover-second");
const svgTextHoverThree = document.getElementById("svg-text-hover-three");
function svgHover() {
    svgTextFirst.classList.add("text-fill-black");
    svgTextHoverThree.classList.add("text-fill-black");
    bgFirst.classList.add("text-fill-white");
    svgText.classList.add("text-fill-white");
    svgTextHoverSecond.classList.add("text-fill-white");
    bgSecond.classList.add("text-fill-light-black");
}
function svgHoveRemove() {
    svgTextFirst.classList.remove("text-fill-black");
    svgTextHoverThree.classList.remove("text-fill-black");
    bgFirst.classList.remove("text-fill-white");
    bgSecond.classList.remove("text-fill-light-black");
    svgText.classList.remove("text-fill-white");
    svgTextHoverSecond.classList.remove("text-fill-white");
}
const bgThird = document.getElementById("svg-background-third");
const text_3 = document.getElementById("svg_text_three");
const text_4 = document.getElementById("svg_text_four");
function svgHover2() {
    text_3.classList.add("text-fill-black");
    text_4.classList.add("text-fill-black");
    bgThird.classList.add("text-fill-white");
    bgSecond.classList.add("text-fill-light-black");
    svgText.classList.add("text-fill-white");
    svgTextHoverSecond.classList.add("text-fill-white");
}
function svgHoveRemove2() {
    text_3.classList.remove("text-fill-black");
    text_4.classList.remove("text-fill-black");
    bgThird.classList.remove("text-fill-white");
    bgSecond.classList.remove("text-fill-light-black");
    svgText.classList.remove("text-fill-white");
    svgTextHoverSecond.classList.remove("text-fill-white");
}