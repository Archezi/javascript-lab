(document.ready = function() {
    var DOMStrings = {
    BC_leftSite: '.transactionHistory',
    headerMenu: '.header__menu'
}

var budgetTransactionHistory = document.querySelector(DOMStrings.BC_leftSite);
var headerMenu = document.querySelector(DOMStrings.headerMenu);
if (client.offsetWidth < 800) {
    budgetTransactionHistory.getElementsByClassName.maxWidth = headerMenu.offsetWidth;
}
})();