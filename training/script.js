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