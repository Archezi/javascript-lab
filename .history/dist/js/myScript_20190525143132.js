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
    console.log(wrapper.offsetWidth);
    console.log(wrapper.clientWidth);
}

headerHeight = function() {
    let header = document.querySelector('.header');
    let headerHeightValue = header.offsetHeight;
    
    return headerHeightValue;
}
headerHeight();
minContentHeight = function() {
    let content = document.querySelector(".content");
    content.style.paddingTop = headerHeightValue + "px";
    content.style.paddingBottom = headerHeightValue + "px";
}
minContentHeight();


window.addEventListener('resize', () => {
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();
    // 3. Header hight 
    headerHeight();

});


init = function() {
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();

    console.log('Application is running');
}

window.onload = function() {
    
    init();
}


