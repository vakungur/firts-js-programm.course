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

/* let num = 50;
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
} */
// let num = 50;
/* while (num < 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
} */



// Задачи на понимание основ JS (с реальных собеседований)
// Ответьте на вопросы. Если возникают затруднения - воспользуйтесь выводом в консоль (console.log()
// Вопросы к этому заданию
/* 
•	Какое будет выведено значение: let x = 5; alert( x++ ); ?

Ответ: 5
Потому что сначала выведет значение переменной, а потом она будет
инкрементирована.

•	Чему равно такое выражение: [ ] + false - null + true ?
Ответ: NaN
Ошибка в математических операндах.

•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
Ответ: 2
Операторы присваивания право-асоциативны.

•	Чему равна сумма [ ] + 1 + 2?
Ответ: Строке “12”
[ ] – пустая строка, и поэтому сравнивая её с остальными операндами, они будут
становиться строкой.

•	Что выведет этот код: alert( "1"[0] )?
Ответ: Диалоговое окно alert со значением 1
Потому что обращаемся к первому элементу строки, то есть к “1”.

•	Чему равно 2 && 1 && null && 0 && undefined ?
Ответ: null
Отсутствие объекта.

•	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Ответ: Разница в типах данных
!!( a && b ) всегда возвращает значение логического типа.

•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
Ответ: 3
Сначала, по таблице приоритетов операторов, сравниваем 2 && 3, вернется 3, 
потому что при сравнении 2 && 3 операторы истинные и возвращается последний
оператор. Потом null || 3, null будет приравниваться к логическому типу и тогда
false || 3, вернется 3. 3 || 4, 3 это true и поэтому сразу возвращаеться 3.

•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
Ответ: Неправда
Сравниваем два разных объекта, т.к. массивы – это объекты.

•	Что выведет этот код: alert( +"Infinity" ); ?
Ответ: Диалоговое окно alert со значением Infinity числового типа
Унарный плюс переводит строку в number, а Infinity – это тип number.

•	Верно ли сравнение: "ёжик" > "яблоко"?
Ответ: Верно
Потому что сравниваются коды первых символов строк по Юникодовской таблице.
В ней “ё” = 1105, а “я” = 1103.

•	Чему равно 0 || "" || 2 || undefined || true || falsе ?
Ответ: 2
Потому что при 0 || "" возвращeться false. При 2 || true возвращаеться 2. */

// Функции
// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage("Hello world");

/* function calc(a,b) {
    return (a + b);
}
console.log(calc(3,4));
console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum); */


/* console.log(calc(3,4));
console.log(calc(8,4));

let calc = function(a,b){
    return (a + b);
} */

// let calc = (a,b) => {a+b};
// console.log(calc(3,4));
// console.log(calc(8,4));

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// let twelve = "12.2px";
// console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// Callback - функции
/* function first() {
    // что то делаем
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("Я прошел 3й урок!")
}) */

// Объекты

/* let options = {
    width: 1024,
    height: 1024,
    name: "test",
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;
console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length); */
// Массивы

// let arr = ["fist", 2, 3, 4, 5];

// /* arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");
// arr[99] = 99;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr); */

// arr.forEach(function(item, i, mass){
//     console.log(i + ": " + item + " (массив " + mass + ")");
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7,];

// for (let key of mass){
//     console.log(key);
// }

/* let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr); */

/* let arr = ['sacc', 'csacsac', 'cascsac'],
    i = arr.join(', ');
    console.log(i); */

    /* let arr = ['sacc', 'csacsac', 'cascsac'],
        i = arr.sort();
    console.log(arr); */

    /* let arr = [1, 15, 4],
        i = arr.sort(compareNum);

    function compareNum(a,b) {
        return a-b;
    }
    console.log(arr); */

    // ООП
    /* let soldier = {
        health: 400,
        armor: 100
    };

    let john = {
        health: 100
    };

    john.__proto__ = soldier;
    console.log(john);
    console.log(john.armor) */

    