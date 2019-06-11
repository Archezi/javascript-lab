// minContentHeight = function() {
//     let header = document.querySelector('.header');
//     let wrapper = document.querySelector('.wrapper');
//     console.log(wrapper.offsetWidth);
//     let budgetCalculatorContent = document.querySelector(".budgetCalculatorContent");
//     let headerHeightValue = header.offsetHeight;
//     let content = document.querySelector(".budgetCalculatorDisplay");
//     content.style.paddingTop = headerHeightValue + "px";
//     content.style.paddingBottom = headerHeightValue + "px";
//     content.style.minHeight = wrapper.clientHeight - (headerHeightValue * 2) + "px";
//     if(wrapper.offsetWidth > 1025) {
//         budgetCalculatorContent.style.minHeight = wrapper.clientHeight - (headerHeightValue * 2) + "px";
//     }
// }


// function adjustLayout() {
//     var wrapper = document.querySelector(DOMStrings.wrapper);
//     var budgetTransactionHistory = document.querySelector(DOMStrings.BC_leftSite);
//     var headerMenu = document.querySelector(DOMStrings.headerMenu);
//     var header = document.querySelector(DOMStrings.header);
//     var bcc = document.querySelector(DOMStrings.budgetCalculatorContent);
    
//     // adjusting max padding for iPad
//     bcc.style.minHeight =  (window.innerHeight - (header.offsetHeight * 2)) + "px";
    
//     // adjusting width of the budget container to perfectly align with width of the menu button right border on tablet size
//     if (wrapper.offsetWidth < 800 && wrapper.offsetWidth > 500) {
//         budgetTransactionHistory.style.maxWidth = headerMenu.clientWidth + "px";
//     } 
// }



// adjusting width of the budget container to perfectly align with width of the menu button right border on tablet size
    // if (wrapper.offsetWidth < 800 ) {
    //     budgetTransactionHistory.style.maxWidth = headerMenu.clientWidth + "px";
    // } 


var CartBox = document.querySelector(DOMStrings.cart);
CartBox.addEventListener("mouseenter", function(e) {
    CartBox.classList.add('z-depth-2');
});
CartBox.addEventListener("mouseleave", function(e) {
    CartBox.classList.remove('z-depth-2');
});



    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.typekit.net/fry3bii.css">
        <link rel="stylesheet" href="dist/css/style.comp.css">
        <title>Javascript Lab</title>
    </head>
    <body>
        <div class="wrapper">
            <div class=" container">
                <!-- <canvas id="noise" class="noise"></canvas> -->
                <div class="content__wrapper">
                    <div id="mainContent" class="content">
                        <div class="placeholder"></div>
                        <!-- ======================================================================== -->
                        <div class="main">
                            <section class="main__grid-display">
                            
                                <a href="dist/pages/budgetCalculator/budgetCalculator.html" class="cart ">
                                    <div class="cart__title">
                                        <span>Budget Calculator</span>
                                    </div>
                                </a>
                                <div class="cart ">
                                    <div class="cart__title">
                                        <span>Budget Calculator</span>
                                    </div>
                                </div>
                                <div class="cart ">
                                    <div class="cart__title">
                                        <span>Budget Calculator</span>
                                    </div>
                                </div>
                                <div class="cart ">
                                    <div class="cart__title">
                                        <span>Budget Calculator</span>
                                    </div>
                                </div>
                                <div class="cart ">
                                    <div class="cart__title">
                                        <span>Budget Calculator</span>
                                    </div>
                                </div>
    
    
                            </section>
                        </div>
                       <!-- ========================================================================= -->
                        <div class="placeholder"></div>
                    </div>
                    
                    
                    
                    <footer class="footer">
                        <a href="#" class="footer__legal">
                            <div class="b b-t"></div>
                            <div class="a-link">Legal</div>
                        </a>
                        <div class="footer__center">
                            <div class="b b-l"></div><div class="b b-t"></div><div class="b b-r"></div>
                            <div class="footer__center-legal ">
                                <!-- <span>&copy; Copyright 2018, Example Corporation</span> -->
                                <div class="b b-r"></div>
                            </div>
                            <div class="footer__center-social "></div>
                        </div>
                        <a href="#" class="footer__social">
                            <div class="b b-t"></div>
                            <div class="a-link">Social</div>
                        </a>
                    </footer>
                </div>
                
    
    
                <header class="header">
                    <a class="header__menu" href="#">
                        <div class="b b-b"></div>
                        <div id="naviToggle" class="a-link ">Menu</div>
                    </a>
                    <div class="header__center">
                        <div class="b b-l"></div><div class="b b-b"></div><div class="b b-r"></div>
                        <a 
                        href="#" 
                        class="logo-link">
                        <h1 class="logo-text">Lukasz Kaczmarek</h1></a>
                    </div>
                    <a href="#" class="header__contact">
                        <div class="b b-b"></div>
                        <div  class="a-link">Contact</div>
                    </a>
                </header>
                <div class="navigation">
                    <div id="nav"  class="nav">
                        <div class="nav__wrapper">
                            <ul>
                            <li>
                                <a href="#" class="nav__link">About</a>
                            </li>
                            <li>
                                <a href="#" class="nav__link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" class="nav__link">Projects</a>
                            </li>
                            <li>
                                <a href="" class="nav__link">Skills</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    
    
        <!-- <script src="dist/js/noiseCanvas.js"></script> -->
        <!-- <script src="dist/js/jquery.min.js" type="text/javascript"></script> -->
        <!-- <script src="dist/js/barba.min.js" type="text/javascript"></script> -->
        <!-- <script src="dist/js/pageTransition.js" type="text/javascript"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <!-- <script src="dist/js/pageLayout.js" type="text/javascript"></script> -->
        <script src="dist/js/myScript.js" type="text/javascript"></script>
    </body>
    </html>















    var windowHeight = document.documentElement.clientHeight;
    var windowWidth = document.documentElement.clientWidth;




let DOMStrings = {
    mainContent: '#mainContent',
    navigation: '#nav',
    menuBtn: '.header__menu',
    contactBtn: '.header__contact',
    contactContainer: '.contacts',
    menuText: '#naviToggle',
    contactText: '#contactToggle',
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



function hideScroll() {
    // HIDING SCROLL BAR 
    var wrapper = document.querySelector(DOMStrings.wrapper);
    wrapper.style.paddingRight = wrapper.offsetWidth - wrapper.clientWidth + 'px';
}


// Transition functions for animating changing 
function fadeOut(el) {
    var element = document.querySelector(el);
    element.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1) 0s';
    element.style.opacity = 0;
}
function fadeIn(el) {
    var element = document.querySelector(el);
    element.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1) 0s';
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
document.querySelector(DOMStrings.contactBtn).addEventListener("click", function(e) {
    e.preventDefault();
    var el = document.querySelector(DOMStrings.mainContent);
    var contact = document.querySelector(DOMStrings.contactContainer);
    var menuText = document.querySelector(DOMStrings.contactText);
    setTimeout( function() {
        el.classList.toggle('contentHidden');
        contact.classList.toggle('contact-active');
        if (menuText.innerHTML === 'Contact') {
            menuText.innerHTML = 'Close';
        } else {
            menuText.innerHTML = 'Contact';
        }
    }, 200 );
});

document.querySelector(DOMStrings.footerLegal).addEventListener("click", function(e) {
    e.preventDefault();
    var ele = document.querySelector(DOMStrings.footerID);
    var centerLegal = document.querySelector(DOMStrings.footerCenterLegal);

    if(windowWidth < 500) {
        fadeOut(DOMStrings.footerID);
        setTimeout( function(){
            ele.classList.toggle('footer__activeLegal-mobile');
            centerLegal.classList.toggle('showMobile');
            fadeIn(DOMStrings.footerID);
        }, 700);
    } else {

        if(centerLegal.classList.contains('globalVisible')) {
            centerLegal.classList.remove('globalVisible');
            setTimeout(
                function() {
                centerLegal.classList.remove('opacityTransition');

                }, 10
            );
        } else {
            
            centerLegal.classList.add('opacityTransition');
            centerLegal.classList.add('globalVisible');
        }
    }
});
document.querySelector(DOMStrings.footerSocial).addEventListener("click", function(e) {
    e.preventDefault();
    var ele = document.querySelector(DOMStrings.footerID);
    var centerSocial = document.querySelector(DOMStrings.footerCenterSocial);
    if(windowWidth < 500) {
        fadeOut(DOMStrings.footerID);
        setTimeout( function(){
            ele.classList.toggle('footer__activeSocial-mobile');
            centerSocial.classList.toggle('showMobile');
            fadeIn(DOMStrings.footerID);
        }, 700);
    } else {

        if(centerSocial.classList.contains('globalVisible')) {
            centerSocial.classList.remove('globalVisible');
            setTimeout(
                function() {
                    centerSocial.classList.remove('opacityTransition');

                }, 10
            );
        } else {
            
            centerSocial.classList.add('opacityTransition');
            centerSocial.classList.add('globalVisible');
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var options;
    
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



