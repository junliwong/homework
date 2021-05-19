//代码题一

function getString(str) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 10, str);
    });
}

getString('hello ').then(value=>{
    console.log(value);
    return getString(value + 'lagou, ');
}).then(value=>{
    console.log(value);
    return getString(value + 'I love you');
}).then(value=>{
    console.log(value);
});

// let aTask = getString('hello ');
// let bTask = getString('lagou, ');
// let cTask = getString('I love you');

// async function contactString (...tasks) {
//     let res = new Array(tasks.length);
//     for(let i=0; i<tasks.length; i++){
//         res[i] = await tasks[i];
//     }
//     let string = '';
//     for(let i=0; i<res.length; i++){
//         string += res[i];
//     }
//     return string;
// }

// let p = contactString(aTask, bTask, cTask);
// console.log('===>', p);
// p.then((value)=>{
//     console.log(value instanceof Promise);
//     console.log('Done ====> , ', value);
// });



