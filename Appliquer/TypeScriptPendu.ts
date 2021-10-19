const wordsList = ['Colombie', 'Argentine', 'Venezuela', 'Guatemala', 'Ouzbekistan', 'Portugal']
let pastLetters: string[] = [];
function randomWord(list:string[]){
    let random = list[Math.floor(Math.random() * list.length)];
    //console.log(randomWord);
    return random
}

function replaceCharacters(word:string){
    for (let i=0; i<word.length; i++){
        word = word.replace(word[i],'*'); 
    }
    //console.log(word);
}


function askForLetter():string{ 
    let newLetter:string = prompt("Please choose a letter");
    return newLetter;
    
}

console.log(askForLetter());


