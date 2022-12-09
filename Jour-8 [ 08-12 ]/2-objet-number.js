

// la plupart des méthodes s'utilisent à partir de l'objet Number

// vérifier si cela vaut NaN
Number.isNaN(10);  // --> false
Number.isNaN('str' * 4);  // --> true

// transformer une string en number

+'4';  // --> type number
'4' - 0;  // --> type number
'4' * 1;  // --> type number
Number('4');  // --> type number
Number.parseInt('4'); // --> type number
Number.parseFloat('4');  // --> type number

Number.parseFloat('20.5px');  // --> 20.5
Number.parseInt('20.5px');  // --> 20

Number.parseInt('width: 20.5px');  // --> NaN

14.548157.toFixed(2); // --> '14.55' (type string)
14.542157.toFixed(2);  // --> '14.54' (type string)

