// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(num1, num2) {
  if (arguments.length == 1) {
    return Math.floor(Math.random() * num1);
  } else if (arguments.length == 2) {
    return Math.floor(Math.random() * (num2 - num1)) + num1;
  }
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
