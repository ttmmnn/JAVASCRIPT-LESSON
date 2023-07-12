// console.log(add(3, 4));
function add(a, b) {
  return a + b;
}
add(3, 4);
// console.dir(add);
// console.log(add.name);
// console.log(add.length);
const newAdd = add;
// console.log(newAdd(3, 4));
let sayhi = function hi() {};
sayhi = function () {
  return 'hi';
};
// console.log(sayhi());

const person = {
  name: 'John',
  sayHi: function () {
    return 'hi';
  },
};

sayHi = function (name) {
  return `Hi ${name}!`;
};
sayHi = (name) => `Hi ${name}!`;

console.log(sayHi('John'));
