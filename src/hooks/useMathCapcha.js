import { useState } from "react";
import { getRandomInt } from "../utills/functions";

const [val1, val2] = [getRandomInt(0, 100), getRandomInt(0, 100)];
// const [val1, val2] = [10, 10];
const res = val1 + val2;

function useMathCaptha() {

    const [val, setVal] = useState("");

    function isValid() {
        let ans;
        try {
            ans = parseInt(val);
        } catch (e) {
            throw new Error("Invalid value " + val);
        };
        return ans === res;
    }

    return [isValid, val, setVal, {first_value: val1, second_value: val2, result: res}];
}


export default useMathCaptha;