// Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//I predict const verdict will log 'Miss Scarlet' as the murderer. because const scenario is declared outside of the function, so it is a global variable. 


// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//I predict const verdict will log "The murderer is 'Professor Plum" or there will be an error because murderer is assigned globally as a const and cant be reassigned as murderer = 'Mrs. Peacock' inside the declare Murderer function. 

//Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//First Verdict: "Mrs. Peacock" because murderer = 'Mrs. Peacock' is inside the local scope of the function declareMurderer() so it re assigns murderer inside the function.

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
//Second Verdict: "Professor Plum" because let murderer = "Professor Plum" is declared as a global variable. 

//Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//Prediction:
//the weapon is the Revolver
//because changeWeapon() replaces the weapon in the scenario object to "Revolver" in the global scope. scenario.weapon is a global variable, and even though its a const, the items inside of it can be changed. 

//Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//     const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//Prediction:
//verdict = The murderer is Mrs. White
//changeMurder() changes the murderer to Mr. Green, and then inside that function, plotTwist changes the murderer again to Mrs. White. 

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Prediction:
//verdict = The murderer is Miss Scarlet
//changeMurderer() changes murder to Mr Green, then plotTwist runs inside that and and changes the murderer to Colonel Mustard. inside plotTwist, const unexpectedOutcome is called and changes murderer to Miss Scarlet..... I clearly dont understand whats going on here. because it was wrong.

//Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
//I really dont know how to explain it .... but my guess is the weapon is 'candle stick'. 

//Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Prediction:
//verdict = The murderer is Professor Plum
//because Mrs. Peacok is a local variable iniside an if statement that isnt assigned to anything. 
//ah ok just checked it and Im wrong. I really just have no idea what Im doing apparently. 