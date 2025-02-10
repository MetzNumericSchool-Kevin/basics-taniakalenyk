// Définition de variables

const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

// Déclare une constante pour le nom de ta boutique.
const shopName = prompt("What's your shop name?");
console.log("Shop name: " + shopName);

// Déclare une variable pour le nombre de potions de soins en stock, la valeur par défaut de ton choix.
let potionNumber = prompt("How many potions do you have?", "10");
let potionNumberInt = parseInt(potionNumber);
console.log("Potion Number: " + potionNumber);

// Déclare une variable pour indiquer le prix d'une potion de soin, la valeur par défaut de ton choix.
let potionPrice = prompt("What's the price of your potion?", "7");
let potionPriceInt = parseInt(potionPrice);
console.log("Potion Price: " + potionPrice);

// Déclare une variable pour indiquer si la boutique est ouverte ou non.
let open = true;
console.log("Shop is open: " + open);