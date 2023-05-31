// const animals = [
//   { name: "cat", sound: "meow" },
//   { name: "dog", sound: "woof" }
// ];

//Providing default value (If value is undefined then use this value)
// const animals = [{}, { name: "dog", sound: "woof" }];

//Destructuring + Nested Objects
const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

//Destructuring + setState function
function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;

export { useAnimals };
