
let meteo = '❄️';
let message;

switch(meteo) {
    case '☀️' : message = `it's shinny`;   // if (meteo === '☀️')
    break;
    case '❄️' : message = `it's snowy`;
    break;
    case '🌧️' : message = `it's rainy`;
    break;
    default : message = `don't know...`;
}

console.log(message);


//  comparaisons avec switch()

/*
- de 0
entre 0 et 9
entre 10 et 24
entre 25 et 35
+ de 35
*/

let temp = 250;
let msg;

switch(true) {
    case temp < 0 : msg = 'ça caille';   // if (temp < 0 === true)
    break;
    case temp < 20 : msg = 'il fait frais';  
    break;
    case temp < 30 : msg = 'il fait bon';   
    break;
    default: msg = 'il fait chaud';
}
console.log(msg);


// plusieurs case avec la même instruction //

let userMood = '';
let mailTxt;

switch (userMood) {
    case '😣' :    
    case '😒' :    
    case '🤮' : mailTxt = 'Nous sommes désolés';
    break;
    
    case '😍' :
    case '🙂' : mailTxt = 'Nous sommes contents';
    break;

    default : mailTxt = 'veuillez nous donner votre avis'
}

console.log(mailTxt);

// switch vs object

let mood = '🤮';
let moodWord;

let userMoodObject = {
    '😒' : 'pas content',
    '🤮' : 'vraiment pas content',
    '🙂' : 'content',
    '😍' : 'très content'
}

moodWord = userMoodObject[mood];
console.log(moodWord);

let myObj = {
    prop: 'value',
    prop2: 'value'
}

let weather = '';
let weatherIcon;

const weatherObj = {
    sunny : '☀️',
    cloudy : '☁️',
    snowy : '❄️',
    rainy : '🌧️',
    '': '❓❓',
    undefined : '❓'
}

weatherIcon = weatherObj[weather];

console.log(weatherIcon);


