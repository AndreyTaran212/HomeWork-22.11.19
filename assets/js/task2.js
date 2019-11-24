"use strict";

let array = [];

for (let i=0; i<10; i++ ){

    array[i] = Math.round(Math.random()*100)

}

function alertMassiv(array) {

    for (let i of array){

        console.log(i);

    }

}

function evenElement(array) {

    for (let i of array){
        if(i%2===0){
            console.log(i);
        }
    }

}

function sumOfElement(array) {
    let sum = 0;
    for (let i of array){
        sum = sum + i;

    }
    console.log(sum);
}

function maxOfElement(array) {
    let n =0;
    for (let i of array){
        if(n<i){
            n = n + i;
        }

    }
console.log(n);
}

function addNewElement(array) {

    let n = prompt('Enter index');
    let e = prompt('Enter your element');
    array.splice(n,0,e);
    console.log(array);
}

function deleteElement(array) {

    let n = prompt('Enter index');
    array.splice(n,1);
    console.log(array);
}