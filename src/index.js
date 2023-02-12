module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    const digitNames = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tensNames = {
        0: "",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const helper = (num) => {
        let hundreds = "";
        let tens = "";
        let ones = "";
        if (num % 100 < 20) {
            tens = digitNames[num % 100];
        }

        ones = tens ? "" : digitNames[num % 10];
        tens = tens ? tens : tensNames[Math.floor(num / 10) % 10];
        hundreds = num >= 100 && digitNames[Math.floor(num / 100) % 10];

        hundredsStr = hundreds ? hundreds + " hundred" : "";
        tensStr = hundreds && tens ? " " + tens : tens;
        onesStr = tens && ones ? " " + ones : ones;
        return hundredsStr + tensStr + onesStr;
    };
    return helper(number);
};
