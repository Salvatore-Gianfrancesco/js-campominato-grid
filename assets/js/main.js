const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");

const maxValue = 100;

/* Grid creation */
for (let i = 0; i < maxValue; i++) {
    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");
    cellEl.innerText = i + 1;

    containerEl.insertAdjacentElement("beforeend", cellEl);
    // console.log(cellEl);
}

/* Button that generates the grid */
buttonEl.addEventListener("click", function () {
    containerEl.classList.remove("d-none");
    buttonEl.classList.add("d-none");
});

const cellList = document.getElementsByClassName("cell");
// console.log(cellList);
// console.log(cellList[3]);

/* Background toggler */
for (let i = 0; i < cellList.length; i++) {
    const cellEl = cellList[i];
    cellEl.addEventListener("click", function () {
        cellEl.classList.toggle("light_blue");
        console.log(i + 1);
    });
}