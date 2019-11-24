'use strict';

/*function MyArray() {

    this.length = 0;

    this.push(...arguments);

}

MyArray.prototype = {

    pop() {

        if(this.length > 0){

            const result = this[--this.length];
            delete this[this.length];
            return result;
        }

    },
    push() {

        for(let value of arguments){

            this[this.length++] = value;

        }

        return this.length;
    },

};
*/

/*const arr = [1,3,4,5,2,4,12,0,7,2,1,8,42,1,];

arr.forEach(

function powEach(currentValue, index, arr) {

    arr[index] = pow(currentValue, 2);

    }
);

    function pow(base, exponent) {

    if(exponent === 1){

        return base;

    }

    return base * pow(base, exponent -1);

}*/

/*
const  users = [
    {
        name: 'Test1',
        age: 22,

    },
    {
        name: 'Test2',
        age: 22,

    },
    {
        name: 'Test3',
        age: 22,

    },
    {
        name: 'Test4',
        age: 22,

    },


];

users.forEach(
    function (value) {

        value.isSelected = false

    }
);
const  isSomeAdult = users.map(
    function (user) {
        return user.age >10

    }
);
*/

/*
const users =[];

for (let i=0;i<10;i++){

    users.push(
        {
            name: `User${i+1}`,
            age:10+i,
        }

    );
}

const resultArr = users.map(
    function (user) {
        return user.age;

    }
);*/

/*
function  counterCreator() {

    let count = 0;

    return {

        increment() {
            return ++count;
        },

        decrement() {
            return --count;
        },
    }

}

const counter1 = counterCreator();

const counter2 = counterCreator();
*/

/*
function fib(n) {

    if(n<1 ){
        return;
    }

    if(n<=2){
        return 1;
    }
    return fib(n-1)+fib(n-2);

}*/

/*function checkPalindrome() {

    let str = prompt('Enter word');

    const result = str.split('').reverse().join('').toLowerCase();

     if (result === str.toLowerCase()){
         return alert(' Its palindrome!!!');
     }
     return alert(' Try again ');


}*/

/*const checkPalindrome = str => {

    str = str.replace( /[^а-яa-z]/ig , "");


    return  str.toLowerCase() === str.split("").reverse().join("").toLowerCase();

/!*    str.toLowerCase() === str.split('').reverse().join('').toLowerCase();*!/
};

do {

    const  userStr = prompt('Input yor message');

    if (!userStr){

        break;
    }

    alert(checkPalindrome(userStr))
} while (true); */

/*
class AnimalC {

    getVoice() {
        console.log(this.voice);
    }

}

class CatC extends AnimalC {

    constructor(name) {
        super();
        this.name = name;
        this.voice = 'Meow-meow';

    }

}

const  catC = new CatC('Barsik', 3);*/
