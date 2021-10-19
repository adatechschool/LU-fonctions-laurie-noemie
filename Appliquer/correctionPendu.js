//fonction choix aléatoire d'un mot dans la liste donnée
function chooseWord() {
    let words = ["pendu", "mot", "adatechschool"]; //liste
    let randomWord = Math.floor(Math.random() * words.length); //fonction prédéfinie choix aléatoire
    let chosenWord = words[randomWord]; //???
    return chosenWord;
}
//fonction qui compare en traversant le mot, si la lettre est dedans (on traverse une string comme un tableau si exact true et on sort sinon false)
function isExisting(letter, word) {
    for (let i = 0; i < word.length; i++) {
        let character = word[i]
        if (character == letter) {
            return true;
        }
    }
    return false;
}
 
function replaceCharacters(word, letters) {
    for (let i = 0; i < word.length; i++) {
        if (isExisting(word[i], letters) == false) {
            word = word.replace(word[i], "*");
        }
    }
    return word;
}
function getLoneDifferentLetter(pastLetters) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letterInput = prompt("Enter a letter : ");
    while (isExisting(letterInput, alphabet) != true || isExisting(letterInput, pastLetters) == true) {
        if (isExisting(letterInput, alphabet) != true) {
            letterInput = prompt("Not into the alphabet bro'\nEnter one letter : ");
        } else if (isExisting(letterInput, pastLetters) == true) {
            letterInput = prompt("Already chosen... Do an effort...\nEnter one letter : ");
        }
    }
    return letterInput;
}
function jeuDuPendu() {
    let pastLetters = "";
    let chosenWord = chooseWord();
    let mask = replaceCharacters(chosenWord, pastLetters);
    let nbTries = 0;
    while (nbTries < 8 && isExisting("*", mask)) {
        let chosenLetter = getLoneDifferentLetter(pastLetters);
        pastLetters = pastLetters + chosenLetter;
        if (isExisting(chosenLetter, chosenWord) == false) {
            console.log("Try again");
            nbTries++;
        } else {
            console.log("Good one! Keep Going!");
        }
        mask = replaceCharacters(chosenWord, pastLetters);
        console.log("Current: " + mask);
    }
    if (isExisting("*", mask) == false) {
        console.log("Success");
    } else {
        console.log("You lose");
    }
}
jeuDuPendu();
