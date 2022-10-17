const containerEl = document.querySelector(".container");

const maxValue = 100;

/* Grid creation */
for (let i = 0; i < maxValue; i++) {
    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");
    cellEl.innerText = i + 1;

    containerEl.insertAdjacentElement("beforeend", cellEl);
    console.log(cellEl);
}