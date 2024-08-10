import "./style.css";

const dropDownBtn = document.querySelector(".show");
const content = document.querySelector(".dropdown");
const container = document.querySelector(".list-5");

dropDownBtn.addEventListener("click", show);

function show() {
    content.classList.toggle("visible")
}
