// Интерполяция
let name = 'Ekaterina',
    age = 30,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// let, const

// function makeArray() {
//     var items = [];

//     for (var i = 0; i<10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();

// function makeArray() {
//     var items = [];

//     for (let i = 0; i<10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();

// Стелочная ункция

let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = ()=> {
            console.log(this);
        };
        say();
    }
};


obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDuble(number, basis = 2) {
    // basis = basis || 2; ES5
    console.log(number*basis);
}

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());