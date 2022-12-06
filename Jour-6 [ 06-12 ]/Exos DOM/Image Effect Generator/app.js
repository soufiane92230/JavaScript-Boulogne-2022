

const buttons = [...document.querySelectorAll('button')];
const inputs = [...document.querySelectorAll('input')];
const img = document.querySelector('img');

// faire apparaître les inputs range
buttons.forEach(btn => {
    btn.onclick = event => {
        let effectName = event.target.textContent;
        document.querySelector(`[data-effect='${effectName}']`).toggleAttribute('hidden');
        event.target.toggleAttribute('hidden');
    }
})

// récupérer les valeurs de chaque range
inputs.forEach(input => {
    input.oninput = function() {
        
        let imageEffect = this.dataset.effect;
        
        // attribuer les unités de mesures correspondantes à l'effet choisi
        if (imageEffect === 'contrast') {
            effectUnit = '';
        }
        else if (imageEffect === 'hue-rotate') {
            effectUnit = 'deg';
        }
        else if (imageEffect === 'blur') {
            effectUnit = 'px';
        }
        else {
            effectUnit = '%'
        }
        
        let imgStyle = img.style.filter;

        // si l'effet à déjà été utilisé
        if (imgStyle.includes(imageEffect)) {
         
            // repérer où commence et finit l'effet avec sa valeur
            let startIndex = imgStyle.indexOf(imageEffect);
            let endIndex = imgStyle.indexOf(')', startIndex);
            
            // remplacer l'ancienne valeur par la nouvelle valeur dans la chaîne de caractères 
            let newStyle = `${imgStyle.slice(0,startIndex)}${imageEffect}(${this.value}${effectUnit})${imgStyle.slice(endIndex+1)}`         
            img.style.filter = newStyle;
        }
        else {
            img.style.filter += `${imageEffect}(${this.value}${effectUnit})`;
        }
    }

    // réafficher le bouton à la place de l'input range
    input.ondblclick = function() {
        this.toggleAttribute('hidden');
        document.querySelector(`[data-effect=${this.dataset.effect}] + button`).toggleAttribute('hidden');
    }
})