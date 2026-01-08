import showArmy from "./utilities/show-buy-menu.js";
import { showAmountOfResources } from "./utilities/resources.js";
import { addWarrior, addAnimal, addWarMachine } from "./utilities/add-units.js";

let gold = parseInt(localStorage.getItem("gold"));
let metal = parseInt(localStorage.getItem("metal"));
let wood = parseInt(localStorage.getItem("wood"));

// Byttet ut alle target med currentTarget for å unngå bug ved at
// knappen ikke fungerer om man trykker på img i knappen.
const buyUnit = (event) => {
  let goldPrice = parseInt(event.currentTarget.dataset.gold);
  let metalPrice = parseInt(event.currentTarget.dataset.metal);
  let woodPrice = parseInt(event.currentTarget.dataset.wood);

  let unitType = event.currentTarget.dataset.unit;
  let unitName = event.currentTarget.dataset.name;
  let unitImage = event.currentTarget.dataset.image;

  if (gold >= goldPrice && metal >= metalPrice && wood >= woodPrice) {
    gold -= goldPrice;
    metal -= metalPrice;
    wood -= woodPrice;

    localStorage.setItem("gold", gold);
    localStorage.setItem("metal", metal);
    localStorage.setItem("wood", wood);

    if (unitType === "warrior") {
      addWarrior(unitName, unitImage);
    }
    if (unitType === "animal") {
      addAnimal(unitName, unitImage);
    }
    if (unitType === "warMachine") {
      addWarMachine(unitName, unitImage);
    }

    showAmountOfResources();
  } else {
    event.currentTarget.style.background = "red";
    event.currentTarget.style.borderColor = "black";
    event.currentTarget.innerHTML = "Need more resources.";
  }
};

const setButtons = () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => button.addEventListener("click", buyUnit));
};

(() => {
  showArmy();
  showAmountOfResources();
  setButtons();
})();
