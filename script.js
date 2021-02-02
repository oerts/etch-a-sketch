const resetButton = document.querySelector("#reset__grid");
const grid = document.querySelector("#grid__container");
const userInput = document.getElementById("quantity");

/*
-create divs inside grid__container

start with size 16 and create 16 * 16 divs inside the grid container
figure out a way to run the function on page load
add the same formula to the reset button so that the user can change the grid size

-set up a hover for the divs to change background color to black
*/

createGrid = () => {
    for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
    }
  };

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
      );
      grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
      );
      for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
      }
      console.log(userInput.value);
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
  });

createGrid();