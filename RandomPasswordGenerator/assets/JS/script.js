const inputBox = document.querySelector("#inputBox");
const passGeneratorBtn = document.querySelector(".getPassBtn");
const img = document.querySelector("#img");
const length = 12 ;
const upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCaseLetters = "mnbvcxzlkjhgfdsapoiuytrewq";
const number = "1234567890";
const symbols = "!@#$%^&*()<>+~{]}[*-/=";
const allCharacters = upperCaseLetters + lowerCaseLetters + number + symbols ;

passGeneratorBtn.addEventListener("click" , (click) => 
{
    console.log(inputBox.value);

    let password = "";

    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length)
    {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length) ];
    }

    inputBox.value = password;
})

img.addEventListener("click" , (click) => 
{
    inputBox.select();
    document.execCommand("copy");
})

let i = 0;
let txt = `Generate a random password`; /* The text */
let speed = 150; /* The speed/duration of the effect in milliseconds */



function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


document.addEventListener("DOMContentLoaded" , ()=>
{
    typeWriter();
})

