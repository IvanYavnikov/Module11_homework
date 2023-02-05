let arr = [1, 2, 3, 4, 5, 6, 7];
function countOfOdd(arr) {
  let countd = 0;
  let counte = 0;
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 !== 0) {
       countd++
     } if (arr[i] % 2 == 0) {
        counte++
     }
  }
  return console.log(`Количество нечетных чисел: ${countd};`, `Количество четных чисел: ${counte};`);
}
countOfOdd(arr);
