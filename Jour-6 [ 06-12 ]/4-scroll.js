

window.addEventListener('scroll', function(event){

    console.log(window.scrollY); // distance depuis le haut de l'écran 
    
    if (window.scrollY > 170) {
        // on fait réapparaître le header
        document.querySelector('header').style.top = 0;
    }
    else {
        // on fait disparaître le header
        document.querySelector('header').style.top = '-170px';
    }

    // VERSION TERNAIRE
    // document.querySelector('header').style.top = window.scrollY > 170 ? 0 : '-170px';
})