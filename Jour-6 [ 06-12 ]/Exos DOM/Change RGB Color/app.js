const rangeInputs = [...document.querySelectorAll('input')];

rangeInputs.forEach(item => {
    item.addEventListener('input', event => {

        // redColor, greenColor et blueColor font référence aux ID des 3 inputs range
        let rgbCode = `rgb(${redColor.value}, ${greenColor.value}, ${blueColor.value})`;

        document.body.style.backgroundColor = rgbCode;
        
        event.target.title = event.target.value;
        
        document.getElementById('rgbCode').textContent = rgbCode;


    })
})
