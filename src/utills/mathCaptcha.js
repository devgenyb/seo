function mathCaptha() {
    const [val1, val2] = [useMathCaptha(0, 100), useMathCaptha(0, 100)];
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default mathCaptha;