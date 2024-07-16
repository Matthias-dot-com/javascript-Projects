const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector(".btn-hero");
const main = document.querySelector("main")

button.addEventListener('click',function(){
main.style.backgroundColor = colors[Math.round(Math.random()*4)];
})