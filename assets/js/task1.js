"use strict";

function factorial(n) {

    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);

}

function allNumber(num1, num2) {

    if (num1 === num2) {
        return num1;
    }
    if (num1 > num2) {

        return num2 + " " + allNumber(num1, num2 + 1);

    }

    return num1 + " " + allNumber(num1 + 1, num2);

}

/*

function logRange(from, to) {

    if (from <= to) {
        console.log(from);
        logRange(from + 1, to);
    }

}

function logRangeReverse(from, to) {

    if (from <= to) {
        console.log(to);
        logRangeReverse(from, to - 1);
    }

}


function getRangeArray(from, to, arr = []) {

    if (from <= to) {
        arr.push(from);
        getRangeArray(from + 1, to, arr);
    }
    return arr;
}

function getRangeReverseArray(from, to, arr = []) {

    if (from <= to) {
        arr.push(to);
        getRangeReverseArray(from, to - 1, arr);
    }
    return arr;
}

*/

function reversAllNumber(num1, num2) {

    if (num1 === num2) {
        return num1;
    }

    if (num1 > num2) {

        return num1 + " " + reversAllNumber(num1 - 1, num2);

    }

    return num2 + " " + reversAllNumber(num1, num2 - 1);

}

function reversNumber(num) {

    if (num < 10){

        return num;

    }
    return Number(num%10 +""+ reversNumber(Math.floor(num/10)));


}

function sumOfNumber2(num) {

    if (num < 10){

        return num;

    }
    return num%10 +sumOfNumber2(Math.floor(num/10));


}

function numberOfSkobkaYoba(num) {

    if(num === 1){

        return '()';

    }

    return "("+numberOfSkobkaYoba(num-1)+")";

}

