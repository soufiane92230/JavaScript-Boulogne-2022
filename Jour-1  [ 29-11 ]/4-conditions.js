
let userAge = 30;


// si ce qui est entre les parenthèses est true, les instructions entre les acccolades qui suivent sont exécutées
if (userAge < 18) {
    console.log('désolé il va falloir attendre');
}
else {
    console.log('vous pouvez entrer');
}


let weather = '☀️';
let message;

if (weather === '☀️') {
    message = 'il fait beau';
}
else if (weather === '☁️') {
    message = 'il fait nuageux';
}
else if (weather === '❄️') {
    message = 'il neige';
}
else {
    message = 'je ne sais pas';
}

console.log(message)