const body = document.querySelector("body");

const containerButton = document.createElement("div");
containerButton.classList.add("container-button");
body.appendChild(containerButton);

const button = document.createElement("button");
button.classList.add("set-size");
button.textContent = "Resize";
containerButton.appendChild(button);

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

let row = undefined;
let border = undefined;
let item = undefined;
let size = undefined;

function makeGrid(size = 16) {
    let counter = 0;
    for (let i=0; i<=size-1; i++){
        row = document.createElement("div");
        row.classList.add("row");
    
        for (let j=0; j<=size-1; j++){
            border = document.createElement("div");
            border.classList.add("border");
            row.appendChild(border);
            item = document.createElement("div");
            item.classList.add("item");
            item.setAttribute("id", `${counter}`);
            item.style.opacity = "0";
            border.appendChild(item);
            counter++;
        }
        container.appendChild(row);
    }
}

makeGrid(16);

function clearBody() {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

console.log(container.childNodes);

button.addEventListener("click", () => {
    clearBody();
    sizeInp = prompt("Please enter required size.\nMaximum valid size is 100.\nAll inputs above would be set to maximum valid value.", "16");
    sizeInp = parseInt(sizeInp);
    
    if (sizeInp > 100) {
        sizeInp = 100;
        alert("Size was set to max valid: 100");
    } else if (sizeInp < 0) {
        sizeInp = 0;
        alert("Size was set to min valid: 0");
    }

    makeGrid(sizeInp);

})

function random(number=255) {
    return Math.floor(Math.random() * (number + 1));
}

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.id) {
        console.log(`Mouse over ${target.id}`);
        console.log(document.getElementById(target.id));
        document.getElementById(target.id).style.backgroundColor = `rgb(${random()} ${random()} ${random()})`;
        document.getElementById(target.id).style.opacity = `${parseFloat(document.getElementById(target.id).style.opacity) + 0.1}`;
        console.log(document.getElementById(target.id).style.opacity)
    }
    
})
