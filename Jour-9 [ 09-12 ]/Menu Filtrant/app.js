
const colors = ['#00ffff', '#ffc400', '#1aff00', '#ff00bf'];

const buttons = document.querySelectorAll('button:not(.btn-reset)');

const getRandomColor = () => Math.floor(Math.random() * 4);

for (let i=0; i<buttons.length; i++) {
    buttons[i].style.backgroundColor = colors[i];
    buttons[i].onclick = displayDiv;
}


for (let i=0; i<=50; i++) {
    let div = document.createElement('div');
    div.classList.add('colorDiv');
    div.style.backgroundColor = colors[getRandomColor()];
    document.querySelector('.colors').append(div);
}

const allColorDivs = document.querySelectorAll('.colorDiv');

function displayDiv(e) {
    document.querySelector('.colors').innerHTML = '';
    const divsToDisplay = [...allColorDivs].filter( item => item.style.backgroundColor === e.target.style.backgroundColor );
    divsToDisplay.forEach( div => document.querySelector('.colors').append(div));
}

document.querySelector('.btn-reset').addEventListener('click', () => {
    allColorDivs.forEach( div => document.querySelector('.colors').append(div));
} )