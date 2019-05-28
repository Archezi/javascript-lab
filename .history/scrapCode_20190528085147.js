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