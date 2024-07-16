const value = document.getElementById("value")
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click",function(){
        if (button.textContent == "Increase"){
           value.textContent =  +(value.textContent)+1;
           if ((value.textContent) > 0){
                       value.style.color = "green";

           }
        }else if (button.textContent == "Decrease"){
           value.textContent =  +(value.textContent)-1;
           if ((value.textContent) < 0){
            value.style.color = "red";

}
           
        }else if (button.textContent == "Reset"){
            value.textContent =  0;
        }
        if (value.textContent == 0 ){
            value.style.color ="#102a42"
        }
}))