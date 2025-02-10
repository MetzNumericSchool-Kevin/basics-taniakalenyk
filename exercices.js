// 1. Définition de variables

const nameSorcerer = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nameSorcerer + " ! 🎉");

// Déclare une constante pour le nom de ta boutique.
const shopName = prompt("Quel est le nom de ta boutique ?");
console.log("Nom de la boutique : " + shopName);

// Déclare une variable pour le nombre de potions de soins en stock, la valeur par défaut de ton choix.
let potionNumber = prompt("Combien de potions avez-vous ?", "10");
let potionNumberInt = parseInt(potionNumber);
console.log("Nombre de potions : " + potionNumber);

// Déclare une variable pour indiquer le prix d'une potion de soin, la valeur par défaut de ton choix.
let potionPrice = prompt("Quel est le prix d'une potion de soin ?", "7");
let potionPriceInt = parseInt(potionPrice);
console.log("Prix d'une potion : " + potionPrice);

// Déclare une variable pour indiquer si la boutique est ouverte ou non.
let open = true;
console.log("La boutique est ouverte : " + open);

// 2. Affichage conditionnel

if (open) {
  console.log(
    `Bienvenue dans la boutique ${shopName.toUpperCase()}, Aventurier !`
  );
} else {
  console.log(
    `La boutique ${shopName.toUpperCase()} est fermée, revenez plus tard Aventurier ! 😴`
  );
}

// 3. Affichage conditionnel avec switch

let choice = parseInt(
  prompt(
    `Bienvenue dans mon humble boutique, Aventurier.
    Que veux-tu savoir ? 🤔
    
    Choisissez une option :
    1. Le nom de la boutique
    2. Le nom du Sorcier
    3. Le prix d'une potion de soin
    4. La quantité d'une potion de soin`
  )
);

switch (choice) {
  case 1:
    console.log(`Le nom de la boutique est ${shopName}`);
    break;
  case 2:
    console.log(`Le nom du Sorcier est ${nameSorcerer}`);
    break;
  case 3:
    console.log(`Le prix d'une potion de soin est ${potionPrice} 🪙`);
    break;
  case 4:
    console.log(`La quantité d'une potion de soin est ${potionNumber}`);
    break;
  default:
    console.log(
      "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
    );
}

// 4. Calcul du prix total d'une commande de potion

let quantity = parseInt(prompt("Combien de potions veux-tu acheter ?"));
let totalPrice = quantity * potionPriceInt;
console.log(
  `Prix de ${quantity} potions de soins : ${totalPrice} 🪙, mon cher Aventurier. 💸`
);
