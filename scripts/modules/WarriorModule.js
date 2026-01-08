const WarriorModule = (() => {
  //Alle bildene er generert av ChatGPT
  const warriors = [
    {
      name: "Fighter",
      priceGold: 10,
      image: "warrior-2.jpg",
    },
    {
      name: "Berserker",
      priceGold: 20,
      image: "warrior-3.jpg",
    },
    {
      name: "Thief",
      priceGold: 15,
      image: "warrior-4.jpg",
    },
    {
      name: "Tank",
      priceGold: 15,
      image: "warrior-1.jpg",
    },
    {
      name: "Healer",
      priceGold: 17,
      image: "warrior-5.jpg",
    },
    {
      name: "Druid",
      priceGold: 17,
      image: "warrior-6.jpg",
    },
  ];

  const getAll = () => {
    return structuredClone(warriors);
  };

  return {
    getAll,
  };
})();

export default WarriorModule;
