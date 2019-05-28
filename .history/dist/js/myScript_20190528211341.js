
let DOMStrings = {
    mainContent: '#mainContent',
    navigation: '#nav',
    menuBtn: '.header__menu',
    menuText: '#naviToggle',
    BC_leftSite: '.transactionHistory',
    headerMenu: '.header__menu',
    wrapper: '.wrapper',
    budgetCalculatorContent: '.budgetCalculatorContent',
    header: '.header'
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

cartWidth = function() {
    let cart = document.getElementsByClassName('cart');
    for(var i = 0; i < cart.length; i++) {
        let cWidth = cart[i].offsetWidth;
        cart[i].style.height = cWidth + "px";
    }
}

hideScroll = function() {
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
    var el = document.querySelector(DOMStrings.mainContent);
    var nav = document.querySelector(DOMStrings.navigation);
    var menuText = document.querySelector(DOMStrings.menuText);
    var target = event.target || event.srcElement;
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

    function adjustLayout() {
        var wrapper = document.querySelector(DOMStrings.wrapper);
        var budgetTransactionHistory = document.querySelector(DOMStrings.BC_leftSite);
        var headerMenu = document.querySelector(DOMStrings.headerMenu);
        var header = document.querySelector(DOMStrings.header);
        var bcc = document.querySelector(DOMStrings.budgetCalculatorContent);
        
        // adjusting max padding for iPad
        bcc.style.minHeight =  (window.innerHeight - (header.offsetHeight * 2)) + "px";
        
        // adjusting width of the budget container to perfectly align with width of the menu button right border on tablet size
        if (wrapper.offsetWidth < 800 && wrapper.offsetWidth > 500) {
            budgetTransactionHistory.style.maxWidth = headerMenu.clientWidth + "px";
        } 
    }

window.addEventListener('resize', () => {
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();

});

document.addEventListener('DOMContentLoaded', function() {
    let options;
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
    console.log('Materialized Forms are loaded');
});


init = function() {
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();
    adjustLayout();
    console.log('Application is running');
}

window.onload = function() {
    init();
}



