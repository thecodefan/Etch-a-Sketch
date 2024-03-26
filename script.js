  function createGrid(number) {
      const gridContainer = document.querySelector(".grid-container");
      gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
      for (let i = 1; i <= number*number; i++) {
          let div = document.createElement("div");
          div.classList.add("grid-box");
          gridContainer.appendChild(div);
      }
      document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;
    }
    

      const resetButton=document.querySelector(".reset-button");
      resetButton.addEventListener('click',() =>{
        number=prompt();
        createGrid(`${number}`);

      })
    

