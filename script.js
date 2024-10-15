const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
let item = undefined;
for (let i=0; i<=15; i++){
    item = document.createElement("div");
    item.setAttribute("id", "item");
    container.appendChild(item);
}