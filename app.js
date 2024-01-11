console.log("Hello world!");

// const body = document.getElementById("body");

// console.log(body);

// const h_1 = document.getElementById("h1");

// console.log(h_1);

const h1 = document.getElementById("h1");

h1.textContent = "Hello Whatever!";

const body = document.querySelector("body");

const h2 = document.createElement("h2");
h2.textContent = "This is a second heading!";
body.appendChild(h2);

let list = document.createElement("ol")
body.appendChild(list)

let list_item_1 = document.createElement("li")
let list_item_2 = document.createElement("li")

list.appendChild(list_item_1)
list.appendChild(list_item_2)

h1.remove();