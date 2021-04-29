//generating a random pokemon id
const generateId = () => {
  Math.floor(Math.random() * 898) + 1;
};

//calling generatedId and assigning it to an initail variable
let id = generatedId();

//initializing an array that will hold Pokemon already guessed
let guessedPokemon = [];

//checking to see if pokemon has already been guessed or if Id = 899
const newIdGenerated = () => {
  if (guessedPokemon.includes(id) || id === 899) {
    id = generatedId();
  } else {
    //adding Pokemon already played to guessedPokemon array
    guessedPokemon.push(id);
  }
};

//Extra for right now:
let gen1Pokemon = [];
let gen2Pokemon = [];
let gen3Pokemon = [];
let gen4Pokemon = [];
let gen5Pokemon = [];
let gen6Pokemon = [];
let gen7Pokemon = [];
let gen8Pokemon = [];

// should I do a bunch of for loops or one big for loop with while loops in it?
for (let i = 1; i < 899; i++) {
  if (i < 152) {
    gen1Pokemon.push(i);
  } else if (i < 252) {
    gen2Pokemon.push(i);
  } else if (i < 387) {
    gen3Pokemon.push(i);
  } else if (i < 494) {
    gen4Pokemon.push(i);
  } else if (i < 650) {
    gen5Pokemon.push(i);
  } else if (i < 722) {
    gen6Pokemon.push(i);
  } else if (i < 810) {
    gen7Pokemon.push(i);
  } else if (i < 899) {
    gen8Pokemon.push(i);
  }
}

for (let i = 1; i < 152; i++) {
  gen1Pokemon.push(i);
  return gen1Pokemon;
}

for (let i = 152; i < 252; i++) {
  gen2Pokemon.push(i);
  return gen2Pokemon;
}

for (let i = 252; i < 387; i++) {
  gen3Pokemon.push(i);
  return gen3Pokemon;
}

for (let i = 387; i < 494; i++) {
  gen4Pokemon.push(i);
  return gen4Pokemon;
}

for (let i = 494; i < 650; i++) {
  gen5Pokemon.push(i);
  return gen5Pokemon;
}

for (let i = 650; i < 722; i++) {
  gen6Pokemon.push(i);
  return gen6Pokemon;
}

for (let i = 722; i < 810; i++) {
  gen7Pokemon.push(i);
  return gen7Pokemon;
}

for (let i = 810; i < 899; i++) {
  gen5Pokemon.push(i);
  return gen5Pokemon;
}

//adding array items to the chosenGenerations
// const chosenGenerationFunc = () => {

//   let chosenGeneration = [];
// }
