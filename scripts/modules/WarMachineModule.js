const WarMachineModule = (() => {
  //Alle bildene er generert av ChatGPT
  const warMachines = [
    {
      name: "Catapult",
      priceGold: 50,
      priceMetal: 50,
      priceWood: 200,
      image: "catapult.png",
    },
    {
      name: "Cannon",
      priceGold: 70,
      priceMetal: 300,
      priceWood: 100,
      image: "cannon.png",
    },
  ];

  const getAll = () => {
    return structuredClone(warMachines);
  };

  return {
    getAll,
  };
})();

export default WarMachineModule;
