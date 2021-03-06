class SmartCalculator {
    constructor(initialValue) {
        this.calculationArray = [initialValue];
        this.operands = ['^', '*', '/', '-', '+'];
    }

    add(number) {
        this.calculationArray.push('+', number);
        return this;
    }

    subtract(number) {
        this.calculationArray.push('-', number);
        return this;
    }

    multiply(number) {
        this.calculationArray.push('*', number);
        return this;
    }

    devide(number) {
        this.calculationArray.push('/', number);
        return this;
    }

    pow(number) {
        this.calculationArray.push('^', number);
        return this;
    }

    toString() {
        return this.calculate(this.calculationArray);
    }

    calculate(calculationArray) {
        let tempResult;
        for (let i = 0, lenO = this.operands.length; i < lenO; ++i) {
            let operand = this.operands[i];

            for (let len = calculationArray.length, j = len; j >= 0; --j) {
                let valueFromArray = calculationArray[j];

                if (valueFromArray === '^') {
                    tempResult = Math.pow(calculationArray[j - 1], calculationArray[j + 1]);
                    calculationArray.splice(j - 1, 3, tempResult);
                    j = len;
                } else continue;
            }

            for (let j = 0, len = calculationArray.length; j < len; ++j) {
                let valueFromArray = calculationArray[j];

                if (valueFromArray === operand) {
                    if (valueFromArray === '*') {
                        tempResult = calculationArray[j - 1] * calculationArray[j + 1];
                        calculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '/') {
                        tempResult = calculationArray[j - 1] / calculationArray[j + 1];
                        calculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '+') {
                        tempResult = calculationArray[j - 1] + calculationArray[j + 1];
                        calculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '-') {
                        tempResult = calculationArray[j - 1] - calculationArray[j + 1];
                        calculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else continue;
                }
            }
        }
        return calculationArray[0];
    }
}

module.exports = SmartCalculator;
