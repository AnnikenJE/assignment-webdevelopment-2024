import WarriorModule from "../modules/WarriorModule.js";
import AnimalModule from "../modules/AnimalsModule.js";
import WarMachineModule from "../modules/WarMachineModule.js";

const warriorSection = document.querySelector("#warrior-section");
const animalSection = document.querySelector("#animal-section");
const warMachineSection = document.querySelector("#war-machine-section");

const goldCoinImage = `<img class="gold-coin__img" src="images/gold-coin.png" alt="gold coin" >`;
const metalImage = `<img class="metal__img" src="images/metal.png" alt="gold coin">`;
const woodImage = `<img class="wood__img" src="images/wood.png" alt="gold coin"">`;

const warriors = WarriorModule.getAll();
const animals = AnimalModule.getAll();
const warMachines = WarMachineModule.getAll();

// Funksjon som skal vise units du kan kjøpe på nettsiden
const showArmy = () => {
  warriors.forEach((warrior) => {
    warriorSection.innerHTML += `
    <article class="warrior-article">
        <h3 class="unit-name"> ${warrior.name}</h3>
        <div class="unit-img__wrapper">
        <img class="unit-img" src="images/${warrior.image}" alt="${warrior.name}">
        </div>
        <button data-name="${warrior.name}" data-image="${warrior.image}" data-gold="${warrior.priceGold}" data-metal="0" 
      data-wood="0" data-unit="warrior" class="unit-price__btn">BUY ${goldCoinImage} ${warrior.priceGold}</button>
    </article>
    `;
  });

  animals.forEach((animal) => {
    animalSection.innerHTML += `
    <article class="animal-article">
    <h3 class="unit-name"> ${animal.name}</h3>
    <div class="unit-img__wrapper">
    <img class="unit-img" src="images/${animal.image}" alt="${animal.name}">
    </div>
     <button data-name="${animal.name}" data-image="${animal.image}" data-gold="${animal.priceGold}" data-metal="0" 
      data-wood="0" data-unit="animal" class="unit-price__btn">BUY ${goldCoinImage} ${animal.priceGold}</button>
    </article>
    `;
  });

  warMachines.forEach((warMachine) => {
    warMachineSection.innerHTML += `
    <article class="war-machine-article">
    <h3 class="unit-name"> ${warMachine.name}</h3>
    <div class="unit-img__wrapper">
    <img class="unit-img" src="images/${warMachine.image}" alt="${warMachine.name}">
    </div>
    <button 
      data-warMachine="war-machine" 
      data-name="${warMachine.name}" 
      data-image="${warMachine.image}"
      data-gold="${warMachine.priceGold}" 
      data-metal="${warMachine.priceMetal}" 
      data-wood="${warMachine.priceWood}" 
      data-unit="warMachine"
      class="unit-price__btn"> 
      ${warMachine.priceGold} ${goldCoinImage} 
      ${warMachine.priceMetal} ${metalImage}
      ${warMachine.priceWood} ${woodImage}
      </button>
    </article>
    `;
  });
};

export default showArmy;
