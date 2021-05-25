'use strict';

const VALUES_OPERATOR = ['+', '-', '*', '/'];

const actions = {
    '+': (values) => values.reduce((a, b) => (a + b)),
    '-': (values) => values.reduce((a, b) => (a - b)),
    '*': (values) => values.reduce((a, b) => (a * b)),
    '/': (values) => values.reduce((a, b) => (a / b)),
    default: () => alert('Action is invalid'),
};

function getAction(operator) {
    if (actions[operator]) {
        return actions[operator];
    } else {
        return actions.default;
    }
}

function getAnswerExpression() {
    let answer = '';

    do {
        answer = prompt(`Enter the expression`);
    } while (isEmptyStr(answer));

    return answer;
}

function isEmptyStr(str) {
    return (str === '' || str === null);
}

function getOperator(expression) {
    return VALUES_OPERATOR.find((operator) => (expression.indexOf(operator) >= 0));
}

function getOperands(str, sign) {
    return str.split(sign)
            .filter((item) => isEvenNumberValid(item))
            .map(Number);
}

function isEvenNumberValid(num) {
    return ((num % 2) === 0) && (num !== '');
}

function calculate(operator, values) {
    const action = getAction(operator);

    return action(values);
}

function showResult(operator, values, result) {
    return console.log(`${values.join(` ${operator} `)} = ${result}`);
}


const answerExpression = getAnswerExpression();
const operator = getOperator(answerExpression);
const operands = getOperands(answerExpression, operator);
const result = calculate(operator, operands);

showResult(operator, operands, result);