// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)

// let seconds = 60;
// while (seconds >= 0) {

//   switch (seconds) {
//     case 50:
//       console.log('Orbiter transfers from ground to internal power');
//       seconds--;
//       continue;
//     case 31:
//       console.log('Ground launch sequencer is go for auto sequence start');
//       seconds--;
//       continue;
//     case 16:
//       console.log('Activate launch pad sound suppression system');
//       seconds--;
//       continue;
//     case 10:
//       console.log('Activate main engine hydrogen burnoff system');
//       seconds--;
//       continue;
//     case 6:
//       console.log('Main engine start');
//       seconds--;
//       continue;
//     case 0:
//       console.log('Solid rocket booster ignition and liftoff!');
//       seconds--;
//       continue;
//     default:
//       console.log('T-' + seconds + ' seconds');
//   }

//   seconds--;
// }
// ---------
// const bills = [50.23, 19.12, 34.01,
//   100.11, 12.15, 9.90, 29.11, 12.99,
//   10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];
// const totals = bills.map(function (total) {
//   total *= 1.15;
//   return Number(total.toFixed(2));
// })
// console.log(totals);
// --------------
// const numbersOld = [
//   [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//   [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//   [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//   [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//   [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//   [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//   [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//   [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//   [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//   [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];
// var numbers = [];
// for (let numberOld of numbersOld) {
//  const numberImproved = numberOld.map(function (number) {
//     number = number % 2 === 0 ? 'even' : 'odd';
//     return number;
//   })
//   numbers.push(numberImproved);
// }
// console.log(numbers);
// ----------------

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row++) {
  for (let col = 0; col < numbers[row].length; col++) {
    numbers[row][col] = numbers[row][col] % 2 === 0 ? 'even' : 'odd';
  }
}
console.log(numbers);