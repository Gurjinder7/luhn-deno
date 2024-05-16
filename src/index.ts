
interface IOutput {
    input: string;
    valid: boolean;
    remainder: number | null;
    message: string;
}

export function checkLuhn(inputNumber: string): IOutput {

    let result: IOutput = {
        input: inputNumber,
        valid: false,
        message:'',
        remainder: null,
    }

    let patternForNumber = /^\d+$/gm;
    if(!patternForNumber.test(inputNumber)) {
        result.message = 'Input should only contains numeric values';
        return result;
    };
    
    const digits = inputNumber.split("").map(Number);
    let total = 0;

    for(let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            let twice = digits[i]*2;
            if (twice > 9) {
                let splitTwoDigits = twice.toString();
                let sum = Number(splitTwoDigits[0]) + Number(splitTwoDigits[1]);
                total = total + sum;
            } else {
                total = total + twice;
            }
        } else {
            total = total + digits[i];
        }
    }

    if (total % 10 === 0) {
        result.remainder = 0;
        result.message = "Number is valid";
        result.valid = true;
    } else {
        result.remainder = total % 10;
        result.message = "Number is invalid";
    }

    return result;

}


export default checkLuhn;