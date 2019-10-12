'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === 'string' &&
                (typeof (a)) != null &&
                (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log(`Минимальный уровень достатка`);
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
            console.log(`Средний уровень достатка`);
        } else if (appData.moneyPerDay > 2000) {
            console.log(`Высокий уровень достатка`);
        } else {
            console.log(`Произошла ошибка`);
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            if ((typeof (items)) === 'string' &&
                (typeof (items)) != null &&
                items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
                appData.income.forEach(function(item, i, income){
                    let n = i + 1;
                    alert(n + ' - Способы доп. заработка: ' + item);
                });
            } else {
                i = i - 1;
            }
        }
    },
};

let buttonStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button'),
    optionalExpensesBtn = document.getElementsByTagName('button'),
    countBudgetBtn = document.getElementsByTagName('button'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('.savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
   