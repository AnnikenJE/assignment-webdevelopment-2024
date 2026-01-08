const AnimalModule = (() => {
  //Alle bildene er generert av ChatGPT
  const animals = [
    {
      name: "Elephant",
      priceGold: 70,
      image: "elephant.png",
    },
    {
      name: "Horse",
      priceGold: 50,
      image: "horse.png",
    },
  ];

  const getAll = () => {
    return structuredClone(animals);
  };

  return {
    getAll,
  };
})();

export default AnimalModule;
