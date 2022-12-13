/*

- Créer une fonction qui prend un ou plusieurs mots en paramètre
- La fonction doit renvoyer ce mot transformé en mot d'argot "Pig Latin''
- Quand un mot commence par un voyelle on ajoute à la fin "- way " :
orange  →  orange-way
- Quand un mot commence par des consonnes, elles sont enlevées et ajoutées à la fin
suivie de "ay" :
grape  →   ape-gray

*/

function pig_latin(...words){
    let new_words = '';
    words.forEach(word => {
        if (
        word[0].toLowerCase() ===  'a' ||
        word[0].toLowerCase() ===  'e' ||
        word[0].toLowerCase() ===  'i' ||
        word[0].toLowerCase() ===  'o' ||
        word[0].toLowerCase() ===  'u' ||
        word[0].toLowerCase() ===  'y' )
        {
            word += '-way ; ' 
        }
        else{
            let str = '';
            let bool = false;
            let start_str = '';
            for(let i = 0; i < word.length; i++){
                if (
                word[i].toLowerCase() !==  'a' &&
                word[i].toLowerCase() !==  'e' &&
                word[i].toLowerCase() !==  'i' &&
                word[i].toLowerCase() !==  'o' &&
                word[i].toLowerCase() !==  'u' &&
                word[i].toLowerCase() !==  'y' &&
                !bool)
                {
                    str += word[i].toLowerCase();
                    word[i] = '';
                }else{
                    bool = true
                    start_str += word[i].toLowerCase();
                }
            }
            word = `${start_str}-${str}ay ; `
        }
        new_words += (word);
    })
    return new_words;
}





function pigLatin(...words) {
    const vowels = ["a", "e", "i", "o", "u", "y"]

    for (let i = 0; i < words.length; i++) {
        let isVowelStart = false;
        for (let vowel of vowels) {
            if (words[i].startsWith(vowel)) {
                words[i] = words[i] + "-way";
                isVowelStart = true;
            }
        }
        if (!isVowelStart) {
            let nearIndex = +Infinity;
            for (let vowel of vowels) {
                if (nearIndex > words[i].indexOf(vowel) && words[i].indexOf(vowel) !== -1)
                    nearIndex = words[i].indexOf(vowel);
            }
            words[i] = `${words[i].slice(nearIndex, words[i].length)}-${words[i].slice(0, nearIndex)}ay`
        }
    }
    return words;
}






const pigLatin2 = (words) => {
    let tab = words.split(' ');
    let latin = [];
    tab.map(item => {
        item = item.toLowerCase();
        if(/^[aieouy]/gi.test(item)){
            item = item+'-way'
            latin.push(item)
        } else if(/^[zrtpqsdfghjklmwxcvbn]/gi.test(item)){
            let consTab = item.split('')
            let letter = consTab.shift();
            consTab = consTab.join('') + '-' + letter + 'ray'
            latin.push(consTab);
        }
       
    })

    return latin.join(' ')
    
}