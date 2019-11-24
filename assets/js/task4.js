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
