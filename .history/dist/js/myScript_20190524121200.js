let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

cartWidth = function() {
    const cart = document.querySelector(".cart");
    let cWidth = cart.offsetWidth;
    for(var i = 0; i < cart.clientHeight; i++) {
        cart[i].style.height = cWidth + "px";
    }
    

}
cartWidth();
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    cartWidth();
    

});

