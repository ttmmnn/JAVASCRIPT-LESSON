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
sayHi = (name) => ({
  name: name,
});

sayHi = (name, message = `${name}!`) => `Hi ${message}`;

let sum = (...nums) => {
  console.log(nums);
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum([1, 3, 5, 3, 4, 5, 7]));
