"use strict"

const inputBox  = document.getElementById("inputBox");
const listItems = document.querySelector(".listItems");
const addTask = document.querySelector(".addTask");


addTask.addEventListener("click" , (click) => 
{
    if(inputBox.value === '')
    {
        alert("You must write something");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value = ''
    saveData();

})

listItems.addEventListener("click",(click)=>
{
    if(click.target.tagName === 'LI')
    {
        click.target.classList.toggle("checked");
    }
    else if(click.target.tagName === 'SPAN')
    {
        click.target.parentElement.remove();
    }
    saveData();
},false)

function saveData() {
    localStorage.setItem("data",listItems.innerHTML);
}

function getData()
{
    listItems.innerHTML = localStorage.getItem("data");
};
getData();

// function addTask()
// {
//     if(inputBox.value === '')
//     {
//         alert("You must write something");
//     }
//     else
//     {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listItems.appendChild(li);
//     }
// }
