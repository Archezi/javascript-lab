function adjustLayout() {
    var wrapper = document.querySelector(DOMStrings.wrapper);
    var budgetTransactionHistory = document.querySelector(DOMStrings.BC_leftSite);
    var headerMenu = document.querySelector(DOMStrings.headerMenu);
    var header = document.querySelector(DOMStrings.header);
    var bcc = document.querySelector(DOMStrings.budgetCalculatorContent);
    
    // adjusting max padding for iPad
    bcc.style.minHeight =  (window.innerHeight - (header.offsetHeight * 2)) + "px";
    
    // adjusting width of the budget container to perfectly align with width of the menu button right border on tablet size
    if (wrapper.offsetWidth < 800 && wrapper.offsetWidth > 500) {
        budgetTransactionHistory.style.maxWidth = headerMenu.clientWidth + "px";
    } 
}
adjustLayout()
