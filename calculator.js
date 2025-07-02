const calculator = (function () {
    const add = function (num1, num2) {
        return num1 + num2;
    }

    const subtract = function (num1, num2) {
        return num1 - num2;
    }

    const multiply = function (num1, num2) {
        return num1 * num2;
    }

    const divide = function (num1, num2) {
        return num1 / num2;
    }

    return {
        add,
        subtract,
        multiply,
        divide,
    }
})();

export default calculator;