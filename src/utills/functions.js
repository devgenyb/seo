export function mathCaptha() {
    const [val1, val2] = [getRandomInt(0, 100), getRandomInt(0, 100)];
    const res = val1 + val2;

    return function isValid(val) {
        try {
            parseInt(val);
        } catch (e) {
            throw new Error("Invalid value " + val);
        };
        return val === res;
    }
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


export function sliceText(text, countOfChars) {
    // обрезает текст до последнего предыдущего пробела
    for (let i = countOfChars; i > 0; i--) {
        if (text[i] == " ") {
            text = text.slice(0, i);
            break;
        }
    }
    return text;
}
