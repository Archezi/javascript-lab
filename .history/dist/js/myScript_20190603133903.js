var windowHeight = document.documentElement.clientHeight;
var windowWidth = document.documentElement.clientWidth;




let DOMStrings = {
    mainContent: '#mainContent',
    navigation: '#nav',
    menuBtn: '.header__menu',
    menuText: '#naviToggle',
    BC_leftSite: '.transactionHistory',
    headerMenu: '.header__menu',
    wrapper: '.wrapper',
    budgetCalculatorContent: '.budgetCalculatorContent',
    header: '.header',
    cart: '.cart',
    footerID: '#footer',
    footerLegal: '.footer__legal',
    footerSocial: '.footer__social',
    footerCenterLegal: '.footer__center-legal',
    footerCenterSocial: '.footer__center-social'
}

window.addEventListener('resize', windowResize);

function windowResize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();

    console.log(`window height = ` + windowHeight);
    console.log(`window width = ` + windowWidth);
}
windowResize();

function cartWidth() {
    let cart = document.getElementsByClassName('cart');
    for(var i = 0; i < cart.length; i++) {
        let cWidth = Math.floor(cart[i].offsetWidth);
        cart[i].style.height = cWidth + "px";
    }
}
// function addShadowToElement(e) {
//     let element = document.querySelector(e);
//     element.classList.toggle('z-depth-2');

// }


function hideScroll() {
    // HIDING SCROLL BAR 
    var wrapper = document.querySelector(DOMStrings.wrapper);
    wrapper.style.paddingRight = wrapper.offsetWidth - wrapper.clientWidth + 'px';
}


// Transition functions for animating changing 
function fadeOut(el) {
    var element = document.querySelector(el);
    element.style.transition = 'opacity 0.5s linear 0s';
    element.style.opacity = 0;
}
function fadeIn(el) {
    var element = document.querySelector(el);
    element.style.transition = 'opacity 0.5s linear 0s';
    element.style.opacity = 1;
}

document.querySelector(DOMStrings.menuBtn).addEventListener("click", function(e) {
    e.preventDefault();
    var el = document.querySelector(DOMStrings.mainContent);
    var nav = document.querySelector(DOMStrings.navigation);
    var menuText = document.querySelector(DOMStrings.menuText);
    setTimeout( function() {
        el.classList.toggle('contentHidden');
        nav.classList.toggle('navigationShow');
        if (menuText.innerHTML === 'Menu') {
            menuText.innerHTML = 'Close';
        } else {
            menuText.innerHTML = 'Menu';
        }
    }, 200 );
});


document.querySelector(DOMStrings.footerLegal).addEventListener("click", function(e) {
    e.preventDefault();
    var ele = document.querySelector(DOMStrings.footerID);
    var centerLegal = document.querySelector(DOMStrings.footerCenterLegal);
    
    fadeOut(DOMStrings.footerID);
    setTimeout( function(){
        ele.classList.toggle('footer__activeLegal-mobile');
        centerLegal.classList.toggle('showMobile');
        fadeIn(DOMStrings.footerID);
    }, 700);

});
document.querySelector(DOMStrings.footerSocial).addEventListener("click", function(e) {
    e.preventDefault();
    var ele = document.querySelector(DOMStrings.footerID);
    var centerSocial = document.querySelector(DOMStrings.footerCenterSocial);
    fadeOut(DOMStrings.footerID);
    setTimeout( function(){
        centerSocial.classList.toggle('showMobile');
        ele.classList.toggle('footer__activeSocial-mobile');
        fadeIn(DOMStrings.footerID);
    }, 700);
});


document.addEventListener('DOMContentLoaded', function() {
    let options, M;
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
    console.log('Materialized Forms are loaded');
});



//////////////////////////////////////////////////////////////////
// INIT FUNCTION

init = function() {
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    
    console.log('Application is running');
}

window.onload = function() {
    init();
}



