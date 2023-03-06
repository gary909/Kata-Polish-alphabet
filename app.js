function correctPolishLetters (string) {
    let myName = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] == 'ą'){
            myName += 'a';
        } else if(string[i] == 'ć'){
            myName += 'c';
        } else if(string[i] == 'ę'){
            myName = myName += 'e';
        } else if(string[i] == 'ł'){
            myName += 'l';
        } else if(string[i] == 'ń'){
            myName += 'n';
        } else if(string[i] == 'ó'){
            myName += 'o';
        } else if(string[i] == 'ś'){
            myName += 's';
        } else if(string[i] == 'ź'){
            myName += 'z';
        } else if(string[i] == 'ż'){
            myName += 'z';
        } else {
            myName += string[i];
        }
    }
    return myName;
}

console.log(correctPolishLetters("Jędrzej Błądziński")); // "Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa")); // "Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie")); // "Maria Sklodowska-Curie"
