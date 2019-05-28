
    var DOMStrings = {
    BC_leftSite: '.transactionHistory',
    headerMenu: '.header__menu'
}
function adjustLayout() {

    var budgetTransactionHistory = document.querySelector(DOMStrings.BC_leftSite);
    var headerMenu = document.querySelector(DOMStrings.headerMenu);
    console.log(headerMenu.offsetWidth);
    if (client.offsetWidth < 800) {
        budgetTransactionHistory.getElementsByClassName.maxWidth = headerMenu.offsetWidth;
    }
    console.log('page layout is working');
}
adjustLayout();
