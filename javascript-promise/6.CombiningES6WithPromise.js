/** array destructuring **/
var numbers = [10, 20];
var [n1, n2] = numbers; // destructuring

console.log(n1); //10
console.log(n2); // 20

/** object destructuring **/
var position = {x: 50, y: 100};
var {x, y} = position; // destructuring
console.log(x); //50
console.log(y); //100
