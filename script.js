const operator = getOperator();
const operands = getOperands();
const result = showResult(operator, operands);

console.log(result);

function getOperator() {
    let sign = '';

    do {
        sign = prompt('Enter the operator');
    } while (!isOperatorValid(sign));

    return sign;
}

function isOperatorValid(sign) {
    return (
        (sign === '+') ||
        (sign === '-') ||
        (sign === '*') ||
        (sign === '/')
    );
}

function getOperands() {
    let answer = '';

    do {
        answer = prompt(`Enter the operands separated by commas`);
    } while (!isOperandsValid(answer));

    let arrayOperands = answer.split(',');

    const operands = arrayOperands.filter((item) => isEvenNumberValid(item)).map((item) => Number(item));

    return operands;
}

function isOperandsValid(str) {
    return (str !== null && str !== '');
}

function isEvenNumberValid(num) {
    return (
        !isNaN(num) &&
        ((num % 2) === 0) &&
        (num !== '') 
    );
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

    return (`${expression} = ${result}`);
}