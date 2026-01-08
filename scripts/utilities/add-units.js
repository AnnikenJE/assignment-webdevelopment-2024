const warriorSection = document.querySelector("#warrior-section");
const animalSection = document.querySelector("#animal-section");
const warMachineSection = document.querySelector("#war-machine-section");

const warrior = "warrior";
const animal = "animal";
const warMachine = "warMachine";

let warriors;
let animals;
let warMachines;

//Legger til units i local storage
export const addWarrior = (name, image) => {
  const newWarrior = {
    name,
    image,
  };

  if (localStorage.getItem(warrior) != null) {
    warriors = JSON.parse(localStorage.getItem(warrior));
  } else {
    warriors = [];
  }

  warriors.push(newWarrior);
  localStorage.setItem(warrior, JSON.stringify(warriors));
};

export const addAnimal = (name, image) => {
  const newAnimal = {
    name,
    image,
  };

  if (localStorage.getItem(animal) != null) {
    animals = JSON.parse(localStorage.getItem(animal));
  } else {
    animals = [];
  }

  animals.push(newAnimal);
  localStorage.setItem(animal, JSON.stringify(animals));
};

export const addWarMachine = (name, image) => {
  const newWarMachine = {
    name,
    image,
  };

  if (localStorage.getItem(warMachine) != null) {
    warMachines = JSON.parse(localStorage.getItem(warMachine));
  } else {
    warMachines = [];
  }

  warMachines.push(newWarMachine);
  localStorage.setItem(warMachine, JSON.stringify(warMachines));
};

// Skriver ut units fra local storage.
export const showWarriors = () => {
  if (localStorage.getItem(warrior) != null) {
    warriors = JSON.parse(localStorage.getItem(warrior));
  } else {
    warriors = [];
    warriorSection.innerHTML = "";
  }

  warriors.forEach((warrior) => {
    warriorSection.innerHTML += `
      <article class="unit-article">
      <p>${warrior.name}</p>
      <div class="unit-img__wrapper">
      <img class="unit-img--purchased" src="images/${warrior.image}" alt="${warrior.name}">
      </div>
      </article>
    `;
  });
};

export const showAnimals = () => {
  if (localStorage.getItem(animal) != null) {
    animals = JSON.parse(localStorage.getItem(animal));
  } else {
    animals = [];
    animalSection.innerHTML = ``;
  }

  animals.forEach((animal) => {
    animalSection.innerHTML += `
      <article class="unit-article">
      <p>${animal.name}</p>
      <div class="unit-img__wrapper">
      <img class="unit-img--purchased" src="images/${animal.image}" alt="${animal.name}">
      <div>
      </article>
    `;
  });
};

export const showWarMachines = () => {
  if (localStorage.getItem(warMachine) != null) {
    warMachines = JSON.parse(localStorage.getItem(warMachine));
  } else {
    warMachines = [];
    warMachineSection.innerHTML = ``;
  }

  warMachines.forEach((warMachine) => {
    warMachineSection.innerHTML += `
        <article class="unit-article">
        <p>${warMachine.name}</p>
        <div class="unit-img__wrapper">
        <img class="unit-img--purchased" src="images/${warMachine.image}" alt="${warMachine.name}">
        </div>
        <article>
    `;
  });
};
