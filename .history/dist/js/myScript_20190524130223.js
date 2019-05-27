import { inherits } from "util";

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

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    cartWidth();
    

});

init = function() {
    // 1. Hide scroll bar
        hideScroll();
    // 2. set even width and height to cart elements
        cartWidth();
    
}

window.onload = function() {
    
    init();
}


