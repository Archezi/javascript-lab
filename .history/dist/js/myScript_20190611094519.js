    var windowHeight = document.documentElement.clientHeight;
    var windowWidth = document.documentElement.clientWidth;

var UIController = (function(){

    var DOMStrings = {
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

    
    return {

        cartWidth: function(){
            var cart = document.getElementsByClassName('cart');

            for(var i = 0; i < cart.length; i++) {
                var cWidth = Math.floor(cart[i].offsetWidth);
                cart[i].style.height = cWidth + "px";
            };
        },
        hideScroll: function(){
            var wrapper = document.querySelector(DOMStrings.wrapper);
            wrapper.style.paddingRight = wrapper.offsetWidth - wrapper.clientWidth + 'px';
        },
        windowResize: function(){
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        
            // 1. Hide scroll bar
            UIController.hideScroll();
            // 2. set even width and height to cart elements
            UIController.cartWidth();
        },
        fadeOut: function(el) {
            var element = document.querySelector(el);
            element.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1) 0s';
            element.style.opacity = 0;
        },
        fadeIn: function(el) {
            var element = document.querySelector(el);
            element.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1) 0s';
            element.style.opacity = 1;
        },
        navigationBtn: function(e) {
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
        },
        contactBtn: function(e) {
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

        },
        footerLegalBtn: function(e) {
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
        },
        footerSocialBtn: function(e) {
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
        },
        materializedForms: function() {
            var options;
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
            console.log('Materialized Forms are loaded');
        },
        layoutDefault: function() {
            // 1. perfect square
            cartWidth();
            // 2. Hide scroll bar
            hideScroll();

        },
        getDOMStrings: function() {
            return DOMStrings;
        }



    }
    
})(); 

var controller = (function(UICtrl) {

    // EVENT LISTENERS
    var setupEventListeners = function() {
        var DOM;
        DOM = UICtrl.getDOMStrings();
        ///////////////////////////////////////////////////
        // Click events 
        // 1. Navigation
        document.querySelector(DOM.menuBtn).addEventListener("click", UICtrl.navigationBtn );
        // 2.Contacts
        document.querySelector(DOM.contactBtn).addEventListener("click", UICtrl.contactBtn);
        // 3. Footer legal button
        document.querySelector(DOM.footerLegal).addEventListener("click", UICtrl.footerLegalBtn);
        // 4. Footer social button
        document.querySelector(DOM.footerSocial).addEventListener("click", UICtrl.footerSocialBtn);

        // DOM events
        // 5. Materialized forms load
        // document.addEventListener('DOMContentLoaded', UICtrl.materializedForms);
        // 6. Window resize event
        window.addEventListener('resize', UICtrl.windowResize);
        // 7. Window Onload
        window.addEventListener('onload', UICtrl.layoutDefault);

    };

    return {
        init: function() {
            console.log('Javascript Lab Website: Started');
            setupEventListeners();
            window.onload = function() {
                UICtrl.cartWidth;
                UICtrl.hideScroll;
                document.addEventListener('DOMContentLoaded', function() {
                    var options;
                    var elems = document.querySelectorAll('select');
                    var instances = M.FormSelect.init(elems, options);
                    console.log('Materialized Forms are loaded');
                });
            }

        }
    }

    UICtrl.windowResize();
})(UIController);

 controller.init();