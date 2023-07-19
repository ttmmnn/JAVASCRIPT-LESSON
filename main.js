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
// console.log(person.sayHi());

sayHi = function (name) {
  return `Hi ${name}!`;
};

//アロー関数の書き方
sayHi = (name) => {
  return `Hi ${name}!`;
};

//アロー関数で、1つの式の場合はreturnと｛｝をこのように省略出来る
sayHi = (name) => `Hi ${name}!`;
// console.log(sayHi('Yoshipi'));

//アロー関数の場合、パラメータが1つだけの場合、（）を省略出来る
sayHi = (name) => `Hi ${name}!`;
// console.log(sayHi('Yoshipi'));

//デフォルトパラメータ
sayHi = (name = 'User') => `Hi ${name}!`;
// console.log(sayHi());

//2つのパラメータを渡したい場合は、以下のようにする
sayHi = (name = 'User', message) => `Hi ${name}! ${message}`;
// console.log(sayHi('Yoshipi', 'I like chocolate.'));

//第1引数でデフォルトパラメータを使用したい場合は以下のようにundefinedと書くことになり、冗長化した記述となる
sayHi = (name = 'User', message) => `Hi ${name}! ${message}`;
// console.log(sayHi(undefined, 'I like chocolate.'));

//なので、デフォルトパラメータを使用する場合は、後ろの方に書くと、undefinedと書かなくても良くなる
sayHi = (name, message = 'I lile cake.') => `Hi ${name}! ${message}`;
// console.log(sayHi('yoshipi'));

//配列を使用して合計を計算する方法　ただし、引数を配列内に書くのが面倒
// let sum = (nums) => {
//   let total = 0;
//   for (num of nums) {
//     total += num;
//   }
//   return total;
// };
// console.log(sum([1, 3, 5, 3 ,4, 5, 7]));

//レストパラメーター(...)を使用すると、引数を配列にまとめることができる
let sum = (...nums) => {
  // console.log(nums);
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
// console.log(sum(1, 3, 5, 3, 4, 5, 7));

//callback関数　関数の中に関数を書くと、その関数が呼び出される
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
subtract(10, 3, (result) => {
  console.log(result);
});
