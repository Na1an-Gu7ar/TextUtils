import ui, {a, b, d} from './module2.mjs'
console.log(ui);    // prints default value
console.log(a);
console.log(b);
console.log(d);

// This will throw error that's why .mjs
// import ui from './module2.js'
// console.log(ui)