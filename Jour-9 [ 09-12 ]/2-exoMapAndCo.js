const towns = ['New-York', 'Tokyo', 'Agadir', 'Berlin', 'Pattaya', 'Londres'];


// --> "paris_berlin_londres_new-york_tokyo"

/**
 * 
 *  string d'arrivée commence par paris
 *  pas de ville contenant la lettre a (à part paris)
 *  tout en minuscule
 *  underscore entre chaque ville 
 *  trié par ordre alphabétique (après paris)  
 * 
 *  filter - map - sort - reduce
 * 
 */


let result = towns.map( item => item.toLowerCase() )
                    .filter( item => !item.includes('a'))
                    .sort()
                    .reduce( (acc, curr) => acc + '_' + curr, 'paris');

// --> 'paris_berlin_londres_new-york_tokyo'