import {
  getMetal,
  getWood,
  showAmountOfResources,
  buyGold,
} from "./utilities/resources.js";

const harvestMetalBtn = document.querySelector("#harvest-metal__btn");
const harvestWoodBtn = document.querySelector("#harvest-wood__btn");
const buyGoldForRealMoneyBtn = document.querySelector(
  "#buy-gold-for-real-money__btn"
);

(() => {
  showAmountOfResources();

  harvestMetalBtn.addEventListener("click", getMetal);
  harvestWoodBtn.addEventListener("click", getWood);
  buyGoldForRealMoneyBtn.addEventListener("click", buyGold);
})();
