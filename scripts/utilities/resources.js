let gold = parseInt(localStorage.getItem("gold")) || 0;
let metal = parseInt(localStorage.getItem("metal")) || 0;
let wood = parseInt(localStorage.getItem("wood")) || 0;

const goldCounter = document.querySelector("#gold-counter");
const metalCounter = document.querySelector("#metal-counter");
const woodCounter = document.querySelector("#wood-counter");

localStorage.setItem("gold", gold);
localStorage.setItem("metal", metal);
localStorage.setItem("wood", wood);

export const getMetal = () => {
  // 25% sjanse for å få gold
  let randomNumber = Math.floor(Math.random() * 4);
  // Tilfeldig sjanse for å få mellom 1 til 5 metall eller gull
  let randomAmount = Math.floor(Math.random() * 5) + 1;

  if (randomNumber == 3) {
    //Må hente inn gold for at den ikke skal resette seg om man kjøper gold med "Buy Gold" knappen og deretter miner etter gold.
    let gold = parseInt(localStorage.getItem("gold") || 0);
    gold += randomAmount;
    localStorage.setItem("gold", gold);
  } else {
    metal += randomAmount;
    localStorage.setItem("metal", metal);
  }
  showAmountOfResources();
};

export const getWood = () => {
  localStorage.setItem("wood", wood);

  // Tilfeldig sjanse for å få mellom 1 til 10 wood
  let randomAmount = Math.floor(Math.random() * 10) + 1;

  wood += randomAmount;

  showAmountOfResources();
};

//Her kan du kjøpte gold for "ekte" penger ;)
export const buyGold = () => {
  let gold = parseInt(localStorage.getItem("gold") || 0);

  const addResource = 100;

  gold += addResource;

  localStorage.setItem("gold", gold);
  showAmountOfResources();
};

// Footer som vises på alle sidene.
export const showAmountOfResources = () => {
  let gold = parseInt(localStorage.getItem("gold"));
  let metal = parseInt(localStorage.getItem("metal"));
  let wood = parseInt(localStorage.getItem("wood"));

  goldCounter.innerHTML = `  
           <img
              class="footer-list-element__img"
              src="images/gold-coin.png"
              alt="Gold coin"
            />  ${gold}`;
  metalCounter.innerHTML = `
              <img
              class="footer-list-element__img"
              src="images/metal.png"
              alt="Metal"
            />  ${metal}`;
  woodCounter.innerHTML = ` 
             <img
              class="footer-list-element__img"
              src="images/wood.png"
              alt="Wood"
            />  ${wood}`;
};
