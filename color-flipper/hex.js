const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".btn-hero");
const main = document.querySelector("main");
let color = "#"
button.addEventListener('click',function(){
    for (let i=0;i<6;i++){
        color += `${hex[Math.round(Math.random()*(hex.length-1))]}`;

    }
main.style.backgroundColor = color; 
color = "#";
})