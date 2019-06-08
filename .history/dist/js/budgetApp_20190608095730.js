///////////////////////////////////////
/**
  1. Add event handler 
  2. Get input values
  3. Add the new item to our data structure
  4. Add the new item to the UI
  5. Calculate budget
  6. Update the UI
*/

//////////////////////////////////////////
// BUDGET CONTROLLER

var budgetController = (function(){
    var Expense, Income, data, calculateTotal;
  
    Expense = function(id, description, value) {
      this.id = id;
      this.description= description;
      this.value = value;
      this.percentage = -1;
    };
  
    Income = function(id, description, value) {
      this.id = id;
      this.description= description;
      this.value = value;
    };
  
    Expense.prototype.calcPercentage = function(totalIncome) {
      if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) *100) ;
      } else {
        this.percentage = -1;
      }
    };
  
    Expense.prototype.getPercentage = function() {
      return this.percentage;
    }
  
  
    calculateTotal = function(type) {
      var sum = 0;
      data.allItems[type].forEach(function(cur) {
        sum += cur.value;
        
      });
      data.totals[type] = sum;
    };
  
    data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
    }
    
    return {
      
      // We will use function constructor to create new object
      addItem: function(type, des, val) {
        var newItem, ID;
  
        if(data.allItems[type].length > 0) {
          ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } else {
          ID = 0;
        }
              
        //Create new item based on 'inc' or 'exp' type
        if(type === 'exp') {
          newItem = new Expense(ID, des, val);
        } else if (type === 'inc') {
          newItem = new Income(ID, des, val);
        }
  
        data.allItems[type].push(newItem);
  
        return newItem;
      },
  
      deleteItem: function(type, id) {
        var ids, index; 
        
        ids = data.allItems[type].map(function(current) {
          return current.id;
        });
  
        
        index = ids.indexOf(id);
  
        if (index !== -1) {
          data.allItems[type].splice(index, 1);
      }
  
      },
      calculateBudget: function() {
  
        // calculate total income and expenses
        
        calculateTotal('inc');
        calculateTotal('exp');
  
        // calculate the budget: income - expenses
  
        data.budget = data.totals.inc - data.totals.exp;
        // calculate the percentage of income that we spend
        if(data.totals.inc > 0){
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
          data.percentage = -1;
        }
        
      },
  
      calculatePercentages: function() {
  
        data.allItems.exp.forEach(function(cur){
          cur.calcPercentage(data.totals.inc);
        });
  
      },
  
      getPercentages: function() {
  
        var allPerc = data.allItems.exp.map(function(cur){
            return cur.getPercentage();
        })
        return allPerc;
  
      },
  
      getBudget: function() {
  
        return {
          budget: data.budget,
          totalInc: data.totals.inc,
          totalExp: data.totals.exp,
          percentage: data.percentage
        }
  
      },
      testing: function() {
        console.log(data);
      }
  
  
    }
  
  })();
  
  //////////////////////////////////////////
  // UI CONTROLLER
  
  var UIController = (function(){
  
    // list of classes used to DOM manipulation and reading inputs
    var DOMstrings = {
      inputType: '.inputType',
      inputDescription: '.inputDescription',
      inputValue: '.inputValue',
      inputBtn: '.addBtn',
      incomeContainer: '.incomeHistory',
      expenseContainer: '.expensesHistory',
      totalFoundsLabel: '.totalFunds',
      totalIncomeLabel: '.incomeFunds',
      totalExpenseLabel: '.expensesFunds',
      totalExpensePercentage: '.expensesFunds-percentage',
      historyContainer: '.transactionHistory',
      itemPercentage: '.listItem__expPercentage',
      dateLabel: '.current-date',
      btnText: '.button-text',
      header: '.header',
      budgetCalculatorContent: '.budgetCalculatorContent'
    };
    var formatNumber = function(num, type) {
      var numSplit, int, dec;
  
       num = Math.abs(num)
       num = num.toFixed(2);
  
       numSplit = num.split('.')
  
       int = numSplit[0];
       if(int.length > 3) {
         int = int.substr(0, int.length - 3) + ',' + int.substr(int.length -3 , int.length);
       }
       dec = numSplit[1];
      return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec + ' €';
  
    }
  
    var nodeListForEach = function(list, callback) {
  
      for ( var i = 0; i < list.length; i++) {
        callback(list[i], i);
      }
  
    };
  
    return {
  
      getInput: function(){ 
  
        return {
          type: document.querySelector(DOMstrings.inputType).value,
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
        }
  
      },
      
      adjustLayout: function() {
        var header = document.querySelector(DOMstrings.header);
        var bcc = document.querySelector(DOMstrings.budgetCalculatorContent);
        
        // adjusting max padding for iPad
        bcc.style.minHeight =  (window.innerHeight - (header.offsetHeight * 2)) + "px";
      },

      addListItem: function(obj, type) {
  
        var html, newHtml, element;
  
        
        // 1. Create HTML string with placeholder text
        if( type === 'inc') {
  
          element = DOMstrings.incomeContainer; 
          html = `  <div class="listItem" id="inc-%id%">
                        <div class="b b-b"></div>
                        <div class="listItem__description">%description%</div>
                        <div class="listItem__rightPanel">
                            <div class="listItem__value listItem__value-income">%value%</div>
                            <div class="listItem__delete">
                                <i class="tiny material-icons ListItem__delete-button">clear</i>
                            </div>
                        </div>
                    </div>`

        //   html = '<div class="list-item" id="inc-%id%"><div class="item__description">%description%</div><div class="right"><div class="item__value item__value-income"> %value%</div><div class="item__delete"><button type="button" class="item__delete--btn  "><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="#000000" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg></button></div></div></div>'
        } else if (type === 'exp') {
  
          element = DOMstrings.expenseContainer;
          html = ` <div class="listItem" id="exp-%id%">
                <div class="b b-b"></div>
                <div class="listItem__description">%description%</div>
                <div class="listItem__rightPanel">
                    <div class="listItem__value listItem__value-income">%value% <br>  <span class="listItem__expPercentage">( 22% )</span></div>
                    <div class="listItem__delete">
                        <i class="tiny material-icons ListItem__delete-button">clear</i>
                    </div>
                </div>
            </div>`
        //   html = '<div class="list-item" id="exp-%id%"><div class="item__description">%description%</div><div class="right"><div class="item__value item__value-expense"> %value%</div><div class="item_value_percentage">25%</div><div class="item__delete"><button type="button" class="item__delete--btn  "><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="#000000" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg></button></div></div></div>'
        }
  
        // 2. Replace the placeholder text with actual data
        newHtml = html.replace('%id%', obj.id);
        // because we already replace html with newHtml we will have to update now newHtml to further update our initial html
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
  
        // 3. Insert the HTML into the DOM before end of the div
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
  
      },
  
      deleteListItem: function(selectorID) {
        var el;
  
        el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);
      },
  
      clearFields: function() {
        var fields;
  
        fields = document.querySelectorAll(DOMstrings.inputDescription + ' , ' + DOMstrings.inputValue);
  
        fieldsArray = Array.prototype.slice.call(fields);
        // we are setting and empty array for each element of the array using forEach method
        fieldsArray.forEach(function(current, index, array){
          
          current.value = "";
        });
  
        //set focus to first input cell in this situation thats description input
        fieldsArray[0].focus();
      },
      displayBudget: function(obj){
  
        // lest grab our data from displayBudget(budget);
        obj.budget > 0 ? type = 'inc' : type = 'exp';
  
        document.querySelector(DOMstrings.totalFoundsLabel).textContent = formatNumber(obj.budget, type) ;
        document.querySelector(DOMstrings.totalIncomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMstrings.totalExpenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
  
        // test if percentage is greater than 0 to eliminate result infinity when divide by 0
        if (obj.percentage > 0) {
          document.querySelector(DOMstrings.totalExpensePercentage).textContent = obj.percentage + '%';
        } else {
          document.querySelector(DOMstrings.totalExpensePercentage).textContent = '---';
        }
  
      },
  
      displayPercentages: function(percentages) {
  
        var fields = document.querySelectorAll(DOMstrings.itemPercentage);
        //it will return node list
  
        nodeListForEach(fields, function(current, index){
          if (percentages[index] > 0 ) {
            current.textContent = percentages[index] + '%';
          } else {
            current.textContent = '---';
          }
        });
  
      },
  
    //   displayMonth: function() {
    //     var now, year, month, months;
  
    //     now = new Date();
  
    //     year = now.getFullYear();
  
  
    //     month = now.getMonth();
    //     months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    //     document.querySelector(DOMstrings.dateLabel).textContent = months[month]+ ' ' + year;
    //   },
  
      changedType: function() {
          var btn, btnText;
          var fields = document.querySelectorAll(
            DOMstrings.inputType + ',' +
            DOMstrings.inputDescription + ',' +
            DOMstrings.inputValue );
  
            nodeListForEach(fields, function(cur) {
              cur.classList.toggle('form-control-red');
            });
  
            btn = document.querySelector(DOMstrings.inputBtn);
            btn.classList.toggle('red-btn');
            btnText = document.querySelector(DOMstrings.btnText);
  
            // if (btnText.innerHTML === 'Add funds') {
            //   btnText.innerHTML = 'Add expenses'
            // } else {
            //   btnText.innerHTML = 'Add funds'
            // }
      },
      
  
      getDOMstrings: function() {
        return DOMstrings;
      }
  
    };
  
  
  })();
  
  
  //////////////////////////////////////////
  // APP CONTROLLER
  var controller = (function(budgetCtrl, UICtrl) {
   
    // we are setting up our event listeners 
    var setupEventListeners = function() {
      var DOM;
      // access to our class strings object
      DOM = UICtrl.getDOMstrings();
      // click event
      document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
      // key press event
      document.addEventListener('keypress', function(e) {
        // we are checking if enter was pressed and then execute function
        if(e.keyCode === 13 || e.which === 13) {
          ctrlAddItem(); 
        }
      });
  
      document.querySelector(DOM.historyContainer).addEventListener('click', ctrlDeleteItem)
  
      document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType)
    };
  
    var updateBudget = function() {
      var budget;
      
      // 1. Calculate budget
      budgetCtrl.calculateBudget();
      // 2. Return budget
      budget = budgetCtrl.getBudget();
      // 3. Display the budget on the UI
      UICtrl.displayBudget(budget); 
  
    };
  
    var updatePercentages = function() {
  
      var percentages;
      // 1. Calculate the percentages
      budgetCtrl.calculatePercentages();
      // 2. Read percentages from the budget controller 
      percentages = budgetCtrl.getPercentages();
      // 3. Update the UI with the new percentages
      UICtrl.displayPercentages(percentages);
      
    };
  
  
    var ctrlAddItem = function() {
      var input, newItem;
  
      // 1. Get field input data
      input = UICtrl.getInput();
  
      if(input.description !== "" && !isNaN(input.value) && input.value > 0 ){
        
        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);  // addListItem: function(obj, type)
        // 4. Clear the fields 
        UICtrl.clearFields();
        
        // 5. Calculate and update budgetUpdate budget
        updateBudget();
  
        // 6. Calculate and update percentages 
        updatePercentages();
      } 
    };
  
  
    var ctrlDeleteItem = function(event) {
      var itemID, splitID, type, ID;
  
      itemID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  
      if (itemID) {
  
        // our id string is created by " type-id " 
        splitID = itemID.split('-');
        type = splitID[0]; 
        ID = parseInt(splitID[1]); // we convert string to number 
  
        // 1. delete the item from the data structure
        budgetCtrl.deleteItem(type, ID); 
  
        // 2. Delete the item from the UI
        UICtrl.deleteListItem(itemID);
  
        // 3. Update and show the new budget
        updateBudget();
  
        // 4. Calculate and update percentages 
        updatePercentages();
      }
    };
  
    return {
      init: function() {
        console.log('Budget App:  started');
        setupEventListeners();
        UICtrl.adjustLayout();
        UICtrl.displayBudget({
          budget: 0,
          totalInc: 0,
          totalExp: 0,
          percentage: -1
        });
      }
    }
  
  })(budgetController, UIController);
  
  controller.init();
  