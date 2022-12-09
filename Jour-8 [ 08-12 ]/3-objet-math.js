// la plupart des méthodes s'utilisent à partir de l'objet Math

// méthodes très spécifiques
Math.PI;  // 3.141592653589793
Math.cos(12); // 0.8438539587324921
Math.sin(12);  // -0.5365729180004349
Math.pow(4,5); // 1024  (4**5); 
Math.abs(-12);  // 12


// arrondir des nombres

// au nombre le plus proche
Math.round(10.3);  //  10
Math.round(10.8);  //  11

// au nombre du dessus
Math.ceil(10.2);  // 11

// au nombre du dessous
Math.floor(10.8)  // 10

// enlever les décimales
Math.trunc(10.8) // 10


// un nombre aléatoire entre 0 et 1 exclus 
Math.random();

// un nombre aléatoire entre 0 et 10 exclus
Math.random() * 10;

// un nombre aléatoire dans un interval donné
// Math.floor(Math.random() * (max - min +1) + min)

// https://allaboutjs.medium.com/what-the-heck-is-math-random-max-min-1-min-d7cbc9d535b0

// un nombre aléatoire entre et 50 inclus
Math.floor(Math.random() * (50 - 10 + 1) + 10)


// min()  |  max()
Math.min(100, 400, 800, 10); // 10
Math.max(100, 400, 800, 10); // 800