'use strict';
let container = document.querySelector(".container");
let h1 = document.getElementsByTagName("h1")[0];
let userTop = +prompt("Top");
let userRight = +prompt("right");
let myHtml = prompt("your alert");
function transition(){
    container.style.top = userTop + 'px';
    console.log(userTop);

    container.style.right =userRight + 'px';
    h1.innerText = `${myHtml}`;
}
transition();

