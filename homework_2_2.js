//代码题 二 

const fp = require('lodash/fp');

let cars = [
    {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: 'Ferrari FF', horsepower: 660, dollar_value: 1300000, in_stock: false}
];

//练习1
//获取最后一条数据的属性'in_stock'的值
let fn = fp.flowRight(fp.prop('in_stock'),fp.last);
let propVal = fn(cars);
console.log(propVal);

//练习2
//获取第一条数据的属性'name'的值
fn = fp.flowRight(fp.prop('name'),fp.first);
propVal = fn(cars);
console.log(propVal);

let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length;
}

//练习3
//求车的平均价格
fn = fp.flowRight(_average, fp.map(item => item.dollar_value));
let averagePrice = fn(cars);
console.log(averagePrice);

//练习4

