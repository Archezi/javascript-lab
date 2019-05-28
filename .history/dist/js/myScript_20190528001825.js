
let DOMStrings = {
    mainContent: '#mainContent',
    navigation: '#nav',
    menuBtn: '.header__menu'
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
    let wrapper = document.querySelector('.wrapper');
    wrapper.style.paddingRight = wrapper.offsetWidth - wrapper.clientWidth + 'px';
}
minContentHeight = function() {
    let header = document.querySelector('.header');
    let wrapper = document.querySelector('.wrapper');
    console.log(wrapper.offsetWidth);
    let budgetCalculatorContent = document.querySelector(".budgetCalculatorContent");
    let headerHeightValue = header.offsetHeight;
    let content = document.querySelector(".budgetCalculatorDisplay");
    content.style.paddingTop = headerHeightValue + "px";
    content.style.paddingBottom = headerHeightValue + "px";
    content.style.minHeight = wrapper.clientHeight - (headerHeightValue * 2) + "px";
    if(wrapper.offsetWidth > 1025) {

        budgetCalculatorContent.style.minHeight = wrapper.clientHeight - (headerHeightValue * 2) + "px";
    }
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

document.querySelector(DOMStrings.menuBtn).addEventListener("click", function() {
    var el = document.querySelector(DOMStrings.mainContent);
    var nav = document.querySelector(DOMStrings.navigation);
    setTimeout( function() {
        el.classList.toggle('contentHidden');
        nav.classList.toggle('navigationShow');
    }, 200 );

    console.log("toggle is working");
    


});


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

document.addEventListener('DOMContentLoaded', function() {
    let options;
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
    console.log('Materialized Forms are loaded');
});


// Barba transition effect
var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */
  
      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
  
    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */
  
      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },
  
    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */
  
      var _this = this;
      var $el = $(this.newContainer);
  
      $(this.oldContainer).hide();
  
      $el.css({
        visibility : 'visible',
        opacity : 0
      });
  
      $el.animate({ opacity: 1 }, 400, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */
  
        _this.done();
      });
    }
  });
  
  /**
   * Next step, you have to tell Barba to use the new Transition
   */
  
  Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */
  
    return FadeTransition;
  };



init = function() {
    
    // 1. Hide scroll bar
    hideScroll();
    // 2. set even width and height to cart elements
    cartWidth();
    // 3. Min height of the content set for 100% available space on screen - height of the footer and header
    minContentHeight();
    // 4. Initialization of select function from materialized framework
    controller.init();
    // 5. Initialization of barba.js library
    Barba.Pjax.start();
    console.log('Application is running');
}

window.onload = function() {
    init();
}


