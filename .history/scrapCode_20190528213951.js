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