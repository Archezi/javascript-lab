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

cartWidth();
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    cartWidth();
    

});

