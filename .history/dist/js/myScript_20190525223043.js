// import { inherits } from "util";

let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


cartWidth = function() {
    let cart = document.getElementsByClassName('cart');
    for(var i = 0; i < cart.length; i++) {
        let cWidth = cart[i].offsetWidth;
        cart[i].style.height = cWidth + "px";
    }
}
hideScroll = () => {
    // HIDING SCROLL BAR 
    let wrapper = document.querySelector('.wrapper');
    wrapper.style.paddingRight = wrapper.offsetWidth - wrapper.clientWidth + 'px';
    
    
}

minContentHeight = function() {
    let header = document.querySelector('.header');
    let wrapper = document.querySelector('.wrapper');
    let budgetCalculatorContent = document.querySelector(".budgetCalculatorContent");
    let headerHeightValue = header.offsetHeight;
    let content = document.querySelector(".budgetCalculatorDisplay");
    content.style.paddingTop = headerHeightValue + "px";
    content.style.paddingBottom = headerHeightValue + "px";
    content.style.minHeight = wrapper.clientHeight - (headerHeightValue * 2) + "px";
    budgetCalculatorContent.style.minHeight = wrapper.clientHeight - (headerHeightValue * 2) + "px";
}


window.addEventListener('resize', () => {
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();
    // 3. Min height of the content set for 100% available space on screen - height of the footer and header
    minContentHeight();

});


init = function() {
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();
    // 3. Min height of the content set for 100% available space on screen - height of the footer and header
    minContentHeight();
    // 4. Initialization of select function from materialized framework
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, options);
    });
    console.log('Application is running');
}

window.onload = function() {
    
    init();
}


