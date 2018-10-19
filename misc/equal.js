
// === compares type and value
// == compares value

let a= "hello"; 
let b= "hello"; 
let c= new String("hello"); 
let d= c; 
let e= new String("hello");

console.log(a==b, a, b); // true value are the same
console.log(a==c, a, c); // true value are the same
console.log(c==d, c, d); // true value are the same
//console.log(c.equals(d));
console.log(c==e, c, e); // false two different object
//console.log(c.equals(e));