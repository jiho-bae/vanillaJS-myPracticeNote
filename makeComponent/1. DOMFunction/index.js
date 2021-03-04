// DOM function
// DOM = Document Object Module
console.log(document);

// getElementById, querySelector ...

const title = document.getElementById("titleId");
title.innerText = "hi i change your title!";

console.log(title);

const span = document.querySelector("#spanId");
span.innerText = "hi? this is querySelector";

console.log(span);

const h1 = document.querySelector(".h1Class");
h1.innerText = "I Change my H1!";
h1.style.color = "red";

const h4 = document.querySelector("h4");
h4.innerText = "I change my h4";
h4.style.fontSize = "5px";

const spans = document.querySelectorAll("span");
spans[3].innerHTML = `
    <div>
        <p>this is my text</p>
        <h6>this is my h6</h6>
    </div>
`; // you can add HTML Tags.
