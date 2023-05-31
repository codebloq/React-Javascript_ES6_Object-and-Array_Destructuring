import animals, { useAnimals } from "./data";

// console.log(animals);
//Destructured Array
const [cat, dog] = animals;

// console.log(cat);

//Destructuring + setState function
// console.log(useAnimals(cat));
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();
//------------**-------------**----------------//

//Destructured Object
// const { name: catName, sound: catSound } = cat;

// console.log(catSound);

//Providing default value (If value is undefined then use this value)
// const { name = "Fluffy", sound = "Grrr" } = cat;

// console.log(name, sound);

//Destructuring + Nested Objects
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water }
// } = cat;

// console.log(water);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
