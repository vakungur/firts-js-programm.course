'use strict';


/* var leftBorderWidth = 1;
let second = 2;
const pi = 3.14 */

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(persone["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bnp'];

// console.log(arr[2]);

// alert("Hello, world!");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Есть ли Вам 18?", "Да");
// console.log(typeof(answer));

// console.log("arr" + " - object");

// let incr = 10,
//     decr = 10;



// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// console.log("2" == 2);
// console.log("2" === 2);

// let isChecked = true,
//     isClose =  true;

// console.log(isChecked &&(/* || */) isClose);

/* if(2*4 == 8) {
    console.log("Верно!")
} else {
    console.log("Неверно")
} */

let num = 50;
if (num < 49) {
    console.log("Неверно!")
}  else if (num > 100) {
    console.log("Много")
} else {
    console.log("Верно")
};

(num == 50) ? console.log("Верно") : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все еще много!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что то пошло не так");
        break;
}