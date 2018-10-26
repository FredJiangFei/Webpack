// import 'babel-polyfill'
import sum from './sum'

console.log('sum(23, 24) =', sum(23, 24))

 let fun = () => { };
const NUM = 20;
let arr = [1, 2, 3];
let arrB = arr.map(i => i * 2);
console.log('new Set(arrB):', new Set(arrB));