"use strict";

let array = [
    'apple',
    'orange',
    'lemon',
    'grape',
    'pineapple'
];
array.sort();
function outputOnDisplay(array) {
    document.write('<ol>');
    for (let i=0; i<array.length; i++){
        document.write('<li>' + array[i] + '</li>' );
    }
    document.write('</ol>');
}

function findFruit(array) {

    let n = prompt('which fruit to find?');
    n = n.toLowerCase();
    return array.indexOf(n);

}
