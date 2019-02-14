//loads the particle js animation
particlesJS.load('particles-js', 'settings/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

//initializes smooth scrolling on home-container
//var Scrollbar = window.Scrollbar;
//Scrollbar.init(document.querySelector('.home-container'));
const scroll = new Scrooth({
    element: document.querySelector('.home-container'),
    strength: 18,
    acceleration: 1.9,
    deceleration: .935,
});


//shorthand for queryselector and queryselectorall
//2nd parameter is a boolean and if true returns array of elements from querselectorall
function getElem(selector, array){
    if(array){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}

//returns a CSSStyleDeclaration object of the selector
function getStyles(selector){
    let elem;
    if(typeof selector == 'object'){
        elem = selector;
    }else{ 
        elem = getElem(selector);
    }
    console.log(elem);
    return window.getComputedStyle(elem);
}

//applies appropriate positioning(correcting the positioning in Z axis) on the elements that have been pushed backward using translateZ
const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const perspective = parseInt(getStyles('.home-container').perspective);                                           //perspective of the main mother element
getElem('.parallax-img-container', true).forEach(function(currentNode, index){                                                //translateZ value of mm image
    let mm_translateZ = new WebKitCSSMatrix(getStyles(currentNode.querySelector('img')).webkitTransform).m43;
    let X = parseInt(currentNode.getBoundingClientRect().x) + (parseInt(getStyles(currentNode).width) / 2);                   //x coordinate of the element's middle point
    let mm_left = X - (viewport_width/2);                                                                                     //distance of mm from the middle of the viewport
    currentNode.querySelector('img').style.left = (( mm_left * Math.abs(mm_translateZ) ) / perspective) + 'px';
})


//setting up scrollreveal
const defaults = {
    delay: 375,
    duration: 600,
    distance: '100px',
    container: '.home-container',
    //interval: 0,
    origin: 'bottom',
    //easing: 'cubic-bezier(.51,.24,.65,1.02)'
}
var sr = ScrollReveal(defaults);

sr.debug = true;                         //debug mode
sr.reveal('.landing-text', {});
sr.reveal(document.querySelectorAll('.skill'), {
    opacity: .1,
    //container: '.scroll-content'
});


