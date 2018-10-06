class SmartCalculator {
    constructor(initialValue) {
        this.colculationArray = [initialValue];
        this.operands = ['^', '*', '/', '-', '+'];
    }

    add(number) {
        this.colculationArray.push('+', number);
        return this;
    }

    subtract(number) {
        this.colculationArray.push('-', number);
        return this;
    }

    multiply(number) {
        this.colculationArray.push('*', number);
        return this;
    }

    devide(number) {
        this.colculationArray.push('/', number);
        return this;
    }

    pow(number) {
        this.colculationArray.push('^', number);
        return this;
    }

    toString() {
        return this.calculate(this.colculationArray);
    }

    calculate(colculationArray) {
        let tempResult;
        for (let i = 0, lenO = this.operands.length; i < lenO; ++i) {
            let operand = this.operands[i];

            for (let len = colculationArray.length, j = len; j >= 0; --j) {
                let valueFromArray = colculationArray[j];

                if (valueFromArray === '^') {
                    tempResult = Math.pow(colculationArray[j - 1], colculationArray[j + 1]);
                    colculationArray.splice(j - 1, 3, tempResult);
                    j = len;
                } else continue;
            }

            for (let j = 0, len = colculationArray.length; j < len; ++j) {
                let valueFromArray = colculationArray[j];

                if (valueFromArray === operand) {
                    if (valueFromArray === '*') {
                        tempResult = colculationArray[j - 1] * colculationArray[j + 1];
                        colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '/') {
                        tempResult = colculationArray[j - 1] / colculationArray[j + 1];
                        colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '+') {
                        tempResult = colculationArray[j - 1] + colculationArray[j + 1];
                        colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '-') {
                        tempResult = colculationArray[j - 1] - colculationArray[j + 1];
                        colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else continue;
                }
            }
        }
        return colculationArray[0];
    }
}

module.exports = SmartCalculator;
