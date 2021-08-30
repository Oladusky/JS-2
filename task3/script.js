const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = '';
    trafficLightEl3.style.background = '';
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);

    
}


function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl1.style.background = '';
    trafficLightEl3.style.background = '';
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl1.style.background = '';
    trafficLightEl2.style.background = '';
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);
// trafficLightEl2.addEventListener('click', trafficLightEl1);
// trafficLightEl3.addEventListener('click', trafficLightEl1);
