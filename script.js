'use strict';

const answerExpression = getAnswerExpression();
const operator = getOperator(answerExpression);
const operands = getOperands(answerExpression, operator);
showResult(operator, operands);

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

function getOperator(str) {
    if (str.indexOf('+') >= 0) {
        return ('+');
    } else if (str.indexOf('-') >= 0) {
        return ('-');
    } else if (str.indexOf('*') >= 0) {
        return ('*');
    } else if (str.indexOf('/') >= 0) {
        return ('/');
    }
}

function getOperands(str, sign) {
    const array = str.split(sign);

    const operands = array.filter((item) => isEvenNumberValid(item)).map((item) => Number(item));

    return operands;
}

function isEvenNumberValid(num) {
    return ((num % 2) === 0) && (num !== '');
}

function calculate(sign, numbers) {
    switch (sign) {
        case '+':
            return numbers.reduce((acc, num) => (acc + num));
        case '-':
            return numbers.reduce((acc, num) => (acc - num));
        case '*':
            return numbers.reduce((acc, num) => (acc * num));
        case '/':
            return numbers.reduce((acc, num) => (acc / num));
    }
}

function showResult(sign, numbers) {
    const result = calculate(sign, numbers);

    const expression = numbers.reduce((acc, num) => `${acc} ${sign} ${num}`);

    return console.log(`${expression} = ${result}`);
}