//using selectors inside the element
// traversing the dom
const questions = document.querySelectorAll(".question");
const showButton = document.querySelectorAll(".question-btn .plus-icon");
const hideButton = document.querySelectorAll(".question-btn .minus-icon")
showButton.forEach(button => button.addEventListener('click',function(){
    questions.forEach(question =>{
        if (button.parentElement.parentElement.parentElement === question){
            question.classList.add("show-text");
       }
    } )


}))
        console.log(questions[0])

hideButton.forEach(button => button.addEventListener("click", ()=>{
    questions.forEach(question =>{
        if (button.parentElement.parentElement.parentElement === question){
             question.classList.remove("show-text");
        }
       
    })
}))