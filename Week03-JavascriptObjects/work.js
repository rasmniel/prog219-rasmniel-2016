var calculator = {
    operandA: 0,
    operandB: 0,
    add: function() {
        return this.operandA + this.operandB;
    },
    subtract: function() {
        return this.operandA - this.operandB;
    }
};

var multiply = function() {
    return calculator.operandA * calculator.operandB;
};

var me = {
    firstName: 'Rasmus',
    lastName: 'Nielsen'
};

calculator.operandA = me.firstName.length;
calculator.operandB = me.lastName.length;

console.log(me.firstName + ' ' + me.lastName);
console.log('OperandA: ' + calculator.operandA);
console.log('OperandB: ' + calculator.operandB);
console.log('Adding operands: ' + calculator.add());
console.log('Subtracting operands: ' + calculator.subtract());
console.log('Multiplying by mind...: ' + multiply());
