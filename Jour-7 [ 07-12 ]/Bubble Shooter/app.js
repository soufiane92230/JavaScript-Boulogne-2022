// audio when crushing bubble
const clinck = new Audio('glass-break.mp3');

// crushing counter
let count = 0;

// whole creating bubble function
const create_bubble = () => {

    // create random color
    const random_rgb = () => Math.floor(Math.random() * 255);
    const random_alfa = () => (Math.random() * (0.7 - 0.2) + 0.2).toFixed(1);
    const random_color = `rgba(${random_rgb()}, ${random_rgb()}, ${random_rgb()}, ${random_alfa()})`;

    // create random size
    const random_size = Math.floor(Math.random() * 100 + 50) + 'px';

    // create bubble
    const bubble = document.createElement('div');
    bubble.style.backgroundColor = random_color;
    bubble.classList.add('bubble');
    bubble.style.width = random_size;
    bubble.style.height = random_size;

    // create random position
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.top = Math.random() * 100 + '%';

    // create random movement
    bubble.style.setProperty('--left', Math.random() * 100 + '%');

    // remove bubble at click
    bubble.addEventListener('click', (e) => {
        e.target.remove();
        clinck.play();
        clinck.volume = 0.2;
        count++;
        document.querySelector('h3').textContent = count;
    })

    // add bubble to body
    document.body.append(bubble);
}


// create bubble each 0.5 second
setInterval(() => {
    create_bubble();
}, 500);