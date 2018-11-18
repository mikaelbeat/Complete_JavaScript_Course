var budgetController = (function(){



})();



var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getInput: function(){
            return {
                // Will be either inc or exp
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value
                };
        },
            getDOMstring: function(){
                return DOMstrings;
            }
    }

})();



var controller = (function(budgetCtrl, UICtrl){

    var DOM = UIController.getDOMstring();

    var ctrlAddItem = function() {

        var input = UICtrl.getInput();
        console.log(input);

    }

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController, UIController);