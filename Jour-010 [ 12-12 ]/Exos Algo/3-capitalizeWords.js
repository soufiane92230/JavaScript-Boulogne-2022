/*
- Créer une fonction qui prend une phrase en paramètre.
- Cette phrase comporte plein de majuscules placées un peu n'importe où.
- Cette fonction doit renvoyer cette même phrase avec une majuscule à la première lettre
de chaque mot uniquement
*/


function capitalizeWord(sentence) {
    let result = sentence.toLowerCase().split(" ");
    let arr= [];
    result.forEach(element => {
        arr.push(element.replace(element[0], element[0].toUpperCase()));
    });
    return arr.join(" ");
}

function capitalize_word(sentence){
    let new_sentence = '';
    let is_space = true;
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] !== ' '){
            !is_space && (new_sentence += sentence[i].toLowerCase());
            is_space && (new_sentence += sentence[i].toUpperCase());
            is_space = false;
        }
        else{
            new_sentence += ' ';
            is_space = true;
        }
    }
    return new_sentence;
}

function CapitalizeTheWords(sentence) {
    return sentence.toLowerCase()
                        .split(' ')
                        .map(item => item[0].toUpperCase()+item.slice(1))
                        .join(' ');
}