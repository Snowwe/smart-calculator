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
        return this.calculate();
    }

    calculate() {
        let tempResult;
        for (let i = 0, lenO = this.operands.length; i < lenO; ++i) {
            let operand = this.operands[i];

            for (let len = this.colculationArray.length, j = len; j >= 0; --j) {
                let valueFromArray = this.colculationArray[j];

                if (valueFromArray === '^') {
                    tempResult = Math.pow(this.colculationArray[j - 1], this.colculationArray[j + 1]);
                    this.colculationArray.splice(j - 1, 3, tempResult);
                    j = len;
                } else continue;
            }

            for (let j = 0, len = this.colculationArray.length; j < len; ++j) {
                let valueFromArray = this.colculationArray[j];

                if (valueFromArray === operand) {
                    if (valueFromArray === '*') {
                        tempResult = this.colculationArray[j - 1] * this.colculationArray[j + 1];
                        this.colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '/') {
                        tempResult = this.colculationArray[j - 1] / this.colculationArray[j + 1];
                        this.colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '+') {
                        tempResult = this.colculationArray[j - 1] + this.colculationArray[j + 1];
                        this.colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else if (valueFromArray === '-') {
                        tempResult = this.colculationArray[j - 1] - this.colculationArray[j + 1];
                        this.colculationArray.splice(j - 1, 3, tempResult);
                        j = 0;
                    }
                    else continue;
                }
            }
        }
        return this.colculationArray[0];
    }
}

module.exports = SmartCalculator;
