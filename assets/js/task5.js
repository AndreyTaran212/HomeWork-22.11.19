"use strict";

function whoLonger() {

    let n1 = prompt('Enter your line 1');
    let n2 = prompt('Enter your line 2');
    if (n1.length > n2.length){

        return 1;

    }
    else if (n1.length<n2.length){

        return -1;

    }
    return 0;
}

function findLetter() {
    let str = ["e", "y", "u", "i", "o", "a"];
    let n = prompt("Enter your line");

    let k = [...n.toLowerCase()].reduce((a, b) => a + str.includes(b), 0);

    return k
}