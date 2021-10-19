
      
      //   Génère un mot aléatoire

      function chooseWord () {
        var motRandom = list[Math.floor(Math.random() * list.length)]
        return motRandom
      }

      // Remplace les lettres par des étoiles

      // function replaceCharacters (word, letters) {
      //   for (let i = 0; i < word.length; i++) {
      //     word = word.replace(word[i], '*')
      //     console.log(word)
      //   }
      // }
      // replaceCharacters(word)

      function replaceCharacters (word, letters) {
        for (let i = 0; i < word.length; i++) {
          if (isLetterExisting(word[i],letters) == false) {
            word = word.replace(word[i], '*')
          }
        }
        return document.write(word);
      }

      // Traversée du tableau pour vérifier si nouvelle lettre déjà citée
      function isLetterExisting (newLetter, pastLetters) {
        for (let i = 0; i < pastLetters.length; i++) {
          if (newLetter == pastLetters[i]) {
            return true
          }
        }
        return false
      }

      // Choix de lettre par user et vérifications
      function getLoneDifferentLetter () {
        newLetter = prompt('Choisissez une lettre')

        if (newLetter.length > 1) {
          alert("Merci de ne saisir qu'une lettre")
        } else if (isLetterExisting(newLetter, pastLetters)) {
          alert('Vous avez déjà donné cette lettre')
        } else {
          pastLetters.push(newLetter)
          console.log(pastLetters)
        }

        return newLetter
      }
      //Vérif nouvelle lettre est dans le mot choisi au hasard
      function letterInWord (newLetter, chooseWord) {
        isLetterExisting(newLetter, chooseWord)
      }

      // document.write(replaceCharacters(word, letters))

      // function hangMan (numOfErrors) {}

      //ALGORITHME

      var list = [
        'Chine',
        'Argentine',
        'Honduras',
        'Bolivie',
        'Danemark',
        'Zimbabwe',
        'Ouzbekistan',
        'Biélorussie',
        'Comores',
        'Mauritanie'
      ]
      var numOfErrors=0; 
      var letters="";
      var word= chooseWord();
      var pastLetters;
      var mask=replaceCharacters(word, letters);
      document.write(mask);
      console.log(mask);
      

      // while (numOfErrors < 8) {
      //     var newLetter = getLoneDifferentLetter(letters);
      //     letters=letters+newLetter
      //     if (letterInWord(newLetter, word)) {
      //         document.write("bonne lettre");
      //     }
      //     else {
      //         document.write("mauvaise lettre");
      //         numOfErrors=numOfErrors+1;
      //     }
      //     mask=replaceCharacters(word, letters);
      //     document.write(mask);
          
      // //     if ("*" in mask) :
      // //         drawHangman(numOfErrors)
      // //     else:
      // //       print("vous avez gagné")
      // //       break
      // }