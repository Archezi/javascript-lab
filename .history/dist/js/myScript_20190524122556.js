let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

let cart = document.getElementsByClassName('cart');
console.log(cart);
// let cWidth = cart.offsetWidth;
// console.log(cWidth);

// cart.style.height = cWidth + "px";
for(var i = 0; i < cart.length; i++) {
    let cWidth = cart.offsetWidth;
    cart[i].style.height = cWidth + "px";
    console.log('is working');
}
cartWidth = function() {
    
    

}
cartWidth();
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    cartWidth();
    

});

