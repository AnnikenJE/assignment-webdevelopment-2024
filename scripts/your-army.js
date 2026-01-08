import { showAmountOfResources } from "./utilities/resources.js";
import {
  showWarriors,
  showAnimals,
  showWarMachines,
} from "./utilities/add-units.js";

const searchInput = document.querySelector("#search-input");
const searchInputBtn = document.querySelector("#search-input__btn");
const resetGameBtn = document.querySelector("#reset-game__btn");
const warriorSection = document.querySelector("#warrior-section");
const animalSection = document.querySelector("#animal-section");
const warMachineSection = document.querySelector("#war-machine-section");
const showAllUnitsBtn = document.querySelector("#show-all-units__btn");

const warrior = "warrior";
const animal = "animal";
const warMachine = "warMachine";

// Skal filtrere alle units etter navn
const filterUnits = () => {
  clearSectionOutput();

  let warriors;
  let animals;
  let warMachines;

  const input = searchInput.value.toLowerCase();

  if (localStorage.getItem(warrior) != null) {
    warriors = JSON.parse(localStorage.getItem(warrior));
  } else {
    warriors = [];
  }

  if (localStorage.getItem(animal) != null) {
    animals = JSON.parse(localStorage.getItem(animal));
  } else {
    animals = [];
  }

  if (localStorage.getItem(warMachine) != null) {
    warMachines = JSON.parse(localStorage.getItem(warMachine));
  } else {
    warMachines = [];
    warMachineSection.innerHTML = ``;
  }

  const filteredWarriors = warriors.filter((warrior) =>
    warrior.name.toLowerCase().includes(input)
  );

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(input)
  );

  const filteredWarMachines = warMachines.filter((warMachine) =>
    warMachine.name.toLowerCase().includes(input)
  );

  filteredWarriors.forEach((warrior) => {
    warriorSection.innerHTML += `
      <article class="unit-article">
      <p>${warrior.name}</p>
      <div class="unit-img__wrapper">
      <img class="unit-img" src="images/${warrior.image}" alt="${warrior.name}">
      </div>
      </article>
    `;
  });

  filteredAnimals.forEach((animal) => {
    animalSection.innerHTML += `
      <article class="unit-article">
      <p>${animal.name}</p>
      <div class="unit-img__wrapper">
      <img class="unit-img" src="images/${animal.image}" alt="${animal.name}">
      <div>
      </article>
    `;
  });

  filteredWarMachines.forEach((warMachine) => {
    warMachineSection.innerHTML += `
       <article class="unit-article">
        <p>${warMachine.name}</p>
        <div class="unit-img__wrapper">
        <img class="unit-img" src="images/${warMachine.image}" alt="${warMachine.name}">
        </div>
        <article>
    `;
  });
};

const clearSectionOutput = () => {
  warriorSection.innerHTML = "";
  animalSection.innerHTML = "";
  warMachineSection.innerHTML = "";
};

const clearLocalStorage = () => {
  localStorage.clear();

  //Må oppdateres for å fjerne det som vises på nettsiden.
  showWarriors();
  showAnimals();
  showWarMachines();
  //Må sette verdien til 0 for å unngå NaN
  localStorage.setItem("gold", 0);
  localStorage.setItem("metal", 0);
  localStorage.setItem("wood", 0);
  showAmountOfResources();
};

const showAllUnits = () => {
  clearSectionOutput();

  showWarriors();
  showAnimals();
  showWarMachines();
};

(() => {
  searchInputBtn.addEventListener("click", filterUnits);
  resetGameBtn.addEventListener("click", clearLocalStorage);
  showAllUnitsBtn.addEventListener("click", showAllUnits);

  showWarriors();
  showAnimals();
  showWarMachines();
  showAmountOfResources();
})();
