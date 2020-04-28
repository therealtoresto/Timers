'use strict';

const fs = require('fs');

setTimeout(() => {
    console.log('callback #01 setTimeout 0');
}, 0);

setTimeout(() => {
    console.log('callback #02 setTimeout 0');
}, 0);

setTimeout(() => {
    console.log('callback #03 setTimeout 1');
}, 1);

setTimeout(() => {
    console.log('callback #04 setTimeout 1');
}, 1);

setImmediate(() => {
    console.log('callback #05 setImmediate');
});

setImmediate(() => {
    console.log('callback #06 setImmediate');
});

const t7 = setInterval(() => {
    clearInterval(t7);
    console.log('callback #07 setInterval 0');
}, 0);
const t8 = setInterval(() => {
    clearInterval(t8);
    console.log('callback #08 setInterval 0');
}, 0);

process.nextTick(() => {
    console.log('callback #09 process.nextTick');
});

process.nextTick(() => {
    console.log('callback #10 process.nextTick');
});

(callback => callback())(() => {
    console.log('callback #11 callback');
});

(callback => callback())(() => {
    console.log('callback #12 callback');
});

fs.readFile('./4-order.js', 'utf8', () => {
    console.log('callback #13 readFile');
});

fs.readFile('./4-order.js', 'utf8', () => {
    console.log('callback #14 readFile');
});

console.log('main ended');