const alpha = Array.from(Array(26)).map((e,i) => i+97);
const alphabet = alpha.map(x=>String.fromCharCode(x));
const template = alphabet.concat(alphabet);


const encode = document.querySelector(".encode");
const decode = document.querySelector(".decode");
const message = document.querySelector("#input")
const Shift = document.querySelector("#shift")

encode.addEventListener("click",function(){
  let encodeText = message.value
    let encodeMove = +(Shift.value);
    encodeText = encodeText.toLowerCase();
    encodeMove = encodeMove%26
    encodeCipher(encodeText,encodeMove)
})
decode.addEventListener("click", function(){
    let decodeText = message.value;
    decodeText = decodeText.toLowerCase();
    let decodeMove = +(Shift.value);
    decodeMove = decodeMove%26
    decodeCipher(decodeText,decodeMove);
})

function encodeCipher(text,move){
    let storage = [];
    text = text.split(" ");
    text.forEach(text => 
        {text = text.split("").map((x) => ((alphabet.indexOf(x))+move)%26);
        text = text.map((x) => alphabet.at(x));
        storage.push(text);}
       
    )  
    let encodedMessage = '';
    
    storage.forEach(text => encodedMessage += text.join("")+[" "])    
    console.log(encodedMessage);
    return encodedMessage.trim();
};

function decodeCipher(text,move){
    let storage = [];
    text = text.split(" ");
    text.forEach(text => 
        {text = text.split("").map((x) => ((alphabet.indexOf(x))-move+26)%26);
        text = text.map((x) => alphabet.at(x));
        storage.push(text);}
       
    )  
    let decodedMessage = '';
    storage.forEach(text => decodedMessage += text.join("")+[" "])
    console.log(decodedMessage);
    return decodedMessage.trim();
};







// const numericVal = Array.from(Array(10).keys())
// const num = [... Array(10).keys()]
// range = (start,end,step) => Array.from({length:(end-start)/step+1},(_,i)=>start + i*step)

// console.log(range("A".charCodeAt(0),"Z".charCodeAt(0),1).map((x)=>String.fromCharCode(x)))

/* function caesarCipher(text , mode , shift){
if mode == encode: receive shift amount from the user and shift all the letters accordingly;
if mode === decode : receive shift amount and decode the text 
}*/

