"use strict";

let array1 = [];

for (let i=0; i<10; i++ ){

    array1[i] = Math.round(Math.random()*100)

}

let array2 = [];

for (let i=0; i<5; i++ ){

    array2[i] = Math.round(Math.random()*100)

}


function addItemFromMassiv(array1,array2) {
    let result1 = [];
    let result2 = [];
    for(let elem of array1){
        if(!result1.includes(elem)){
            result1.push(elem);
        }
    }
    for(let elem of array2){
        if(!result2.includes(elem) && !result1.includes(elem)){
            result2.push(elem);
        }
    }
    console.log(result1.concat(result2));
}

function addUniqueElement(array1, array2) {
    let res = [];
    for(let elem of array1){
        if(array2.includes(elem) && !res.includes(elem)){
            res.push(elem);
        }
    }
    console.log(res);
}

function newElement(array1, array2) {

    let res = [];
    for (let elem of array1){
        if(!array2.includes(elem)){
            res.push(elem);
        }
    }
    console.log(res);
}