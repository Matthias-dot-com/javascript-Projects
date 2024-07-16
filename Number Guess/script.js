const button = document.querySelector(".btn");
const field = document.querySelector("#input");
const life = document.querySelector(".life");
const hidDis = document.querySelector(".hidDis");

// random number generating function
let computer = Math.ceil(Math.random() * 100);
console.log(computer);
button.addEventListener("click", function () {
  if (+(field.value) === computer) {
    hidDis.style.display = "block";
    hidDis.textContent = "You win dude";
    hidDis.style.color = "green";
  } else if (+(life.textContent) >= 1) {
    {
      if (+(field.value) > computer) {
        hidDis.style.display = "block";
        hidDis.textContent = "Too High";
        hidDis.style.color = "red";
      } else if (+(field.value) < computer) {
        hidDis.style.display = "block";
        hidDis.textContent = "Too Low";
        hidDis.style.color = "red";
      }

     life.textContent =  +(life.textContent) -1; 
    }
   
  } else{
       hidDis.style.display = "block" ;
       hidDis.textContent = " Game Over ";
       hidDis.style.color = "red";
    }
});
