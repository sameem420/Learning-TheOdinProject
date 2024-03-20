const container = document.querySelector("#container");
let rows = document.getElementsByClassName("gridRow");
let cell = document.getElementsByClassName("cell");
const btnClear = document.querySelector("#btnClear");
const btnNew = document.querySelector("#btnNew");

let size = 0;

btnNew.addEventListener("click", function () {
  size = +prompt("number of squares per side for the new grid (Max : 100)");

  Array.from(rows).forEach((item) => {
    container.removeChild(item);
  });

  makeRows(size);
  makeColumns(size);
});

function makeRows(rowsSize) {
  for (let r = 0; r < rowsSize; r++) {
    const row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

function makeColumns(columnsSize) {
  for (let k = 0; k < rows.length; k++) {
    for (let c = 0; c < columnsSize; c++) {
      let newCell = document.createElement("div");
      rows[c].appendChild(newCell).className = "cell";
    }
  }
}

//Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

defaultGrid();

Array.from(cell).forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "red";
  });
});

function clear() {
  Array.from(cell).forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

btnClear.addEventListener("click", () => {
  clear();
});
