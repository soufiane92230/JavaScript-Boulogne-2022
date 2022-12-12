/*
Créer une fonction qui décode une phrase selon le Code de César
- Ce code décale chaque caractères de 13 places dans l'alphabet
- Utiliser cette fonction pour décrypter les codes suivants :
- BCRAPYNFFEBBZF
- URYYB JBEYQ
- PRPV RFG ZBA PBQR FRPERG
*/


function rotate_by_13(word){

    let final_word = '';
    
    for(let i = 0; i < word.length; i++){
        final_word += String.fromCharCode(word.toUpperCase().charCodeAt(i)+13 < 90 ? word.toUpperCase().charCodeAt(i)+13 : word.toUpperCase().charCodeAt(i)-13);
    }
    
    return final_word.replace(/[-]/g, ' ');
}