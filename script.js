function createGrid(number) {
  const gridContainer = document.querySelector(".grid-container");

  // clear existing grid boxes before creating a new grid
  gridContainer.innerHTML = '';

  gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  for (let i = 1; i <= number * number; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-box");
      gridContainer.appendChild(div);
      div.addEventListener('mouseover', () => {
          div.style.backgroundColor = "red";
      });
  }

  document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;

  const clearButton = document.querySelector(".clear-button");
  clearButton.addEventListener('click', () => {
      const gridBoxes = document.querySelectorAll('.grid-box');
      gridBoxes.forEach(box => {
          box.style.backgroundColor = ''; 
      });
  });
}

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', () => {
  const number = prompt("Enter grid size:");

  createGrid(Number(number)); 
});

createGrid(12); // Initial grid creation
