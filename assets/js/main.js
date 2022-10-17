const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");

const maxValue = 100;

/* Grid creation */
for (let i = 0; i < maxValue; i++) {
    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");
    cellEl.innerText = i + 1;

    containerEl.insertAdjacentElement("beforeend", cellEl);
    console.log(cellEl);
}

/* Button that generates the grid */
buttonEl.addEventListener("click", function () {
    containerEl.classList.remove("d-none");
    buttonEl.classList.add("d-none");
});