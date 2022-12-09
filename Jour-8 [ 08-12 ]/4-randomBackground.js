
const randNb  = () => Math.floor(Math.random() * (256));

function createRGB() {
    return `rgb(${randNb()}, ${randNb()},${randNb()})`;
}

function createHexColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;     
}

document.getElementById('rgbCode').addEventListener('click', () => {
    document.body.style.background = createRGB();
    document.getElementById('colorCode').textContent = createRGB();
})

document.getElementById('hexaCode').addEventListener('click', () => {
    document.body.style.background = createHexColor();
    document.getElementById('colorCode').textContent = createHexColor();
})