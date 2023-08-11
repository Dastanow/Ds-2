// const btnred = document.querySelector('rad')
// const btngreen = document.querySelector('green')
// const btnblack = document.querySelector('black')
// const body = document.querySelector('body')

// btnred.addEventListener('click',  onColorChange)
// btngreen.addEventListener('click',)
// btnblack.addEventListener('click')

// let intervaId = null;
// btngreen.disabled = true;


// function onColorChange(){

// intervaId = setInterval(() => {
//     body.style.backgroundColor = getRandomColor()
// }, 1000)

// function onColorGreen(){
//     clearInterval(intervaId)
// }


// function getRandomColor(){
//     return `#${Math.floor(Math.random() * 1677775).toString(16).padStart(6, 0)}`
// }

// }
const btnRed = document.querySelector('button[data-Red]');
const btnYellow = document.querySelector('button[data-Yellow');
const btnGeen = document.querySelector('button[data-Green');
const body = document.querySelector('body')

btnRed.addEventListener('click', onColorChange)
btnYellow.addEventListener('click', onColorYellow)
btnGeen.addEventListener('click', onColorGreen)

let intervalId = null;
// btnStop.disabled = true;

function onColorChange(){

    intervalId = setInterval(() => {
        body.style.backgroundColor = 'red'
        clearInterval(intervalId)
        console.log(setInterval);
    }, 1000)
}
function onColorYellow(){
    intervalId = setInterval(() => {
        body.style.backgroundColor = 'Yellow'
        clearInterval(intervalId)
     console.log(onColorYellow);
    },1000)
}
    function onColorGreen(){
        intervalId = setInterval(() => {
            body.style.backgroundColor = 'green'
            clearInterval(intervalId)
            console.log(onColorGreen);
    }, 1000)
    
}



