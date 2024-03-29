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
      if (number>100){//error if above 100
        return `${prompt("ERROR")}`
      }
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
  const number = prompt("Enter grid size: ( 1 number only, less than 100)");

  createGrid(Number(number)); 
});

const randomColorButton = document.querySelector(".random-color-button");
randomColorButton.addEventListener('click', () => {
    //adds event listener to the random color button

    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            //change background color to a random RGB color
            const red = Math.floor(Math.random() * 256); //random value between 0 and 255 for red
            const green = Math.floor(Math.random() * 256); //random value between 0 and 255 for green
            const blue = Math.floor(Math.random() * 256); //random value between 0 and 255 for blue
            const randomColor = `rgb(${red}, ${green}, ${blue})`;
            box.style.backgroundColor = randomColor;
        });
    });
});



createGrid(12); //initial grid creation