
const starWarzPics = ['c3p0', 'chewbacca', 'darthVader', 'darthMaul', 'emperorPalpatine', 'ewok', 'jabbaTheHutt', 'jawa', 'princessLeia', 'quiGonJinn', 'r2d2', 'stormTrooper'];

const randomPics = [...document.querySelectorAll('.randomPic')];

const clickedPics = [];

function getRandomPic() {
    return starWarzPics[Math.floor(Math.random() * starWarzPics.length)];
}

function areItemsTheSame(arr) {
    return arr.every((item, ind, arr) => item === arr[0]);
}

function makeItBlink() {
    setInterval(()=> {
        for (pic of randomPics) {   
            pic.classList.add('noBorder');              
            pic.classList.toggle('blink');
        }}, 150);
        document.getElementById('result').style.color = '#f7d514'; 
    }
    
    function displayError() {
        for (pic of randomPics) {                    
            pic.classList.add('error');
        }
        document.getElementById('result').style.color = '#FF3343'; 
}

randomPics.forEach(randomPic => {
    
    // dipslay random pic 
    let intervalID = setInterval(() => {
        randomPic.innerHTML = `<img src="img/${getRandomPic()}.png">`;        
    }, 1000);


    randomPic.onclick = (e) => {

        // stop dipslay random pic 
        clearInterval(intervalID);

        // add blue border
        e.target.closest('div').classList.add('choosenPic');


        // extract caracter name of src 🔥🔥 //
        let clickedPic;

        // 🚧 if div is clicked instead of img 🚧 //
        if(e.target.tagName === 'DIV'){
            let insidePic = e.target.children[0];
            clickedPic = insidePic.src.slice(insidePic.src.indexOf('img')+4, -4);
        }
        else {
            clickedPic = e.target.src.slice(e.target.src.indexOf('img')+4, -4);
        }

        // put  caracter name in array
        clickedPics.push(clickedPic);
        

        // 3 clicks --> check if all the sames 
        if (clickedPics.length === 3){

            if (areItemsTheSame(clickedPics)) {
                document.getElementById('result').innerHTML = 'YOU WIN !!!';
                makeItBlink();
            }
            else {
                document.getElementById('result').innerHTML = 'YOU LOOSE ...';
                displayError();
            }
        }

    }
})
