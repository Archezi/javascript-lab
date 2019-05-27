let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

cartWidth = function() {
    const cart = document.querySelector(".cart");
    let cWidth = cart.offsetWidth;
    cart.style.height = cWidth + "px";
    console.log(cWidth);
}
cartWidth();
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    

});

