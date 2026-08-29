// TASK - A
// Harf sifatida kiritilgan birinchi parametr,
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

function countLetter(letter, word) {
  let count = 0;
  for (let a = 0; a < word.length; a++) {
    if (word[a] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("e", "engineer"));

// NodeJS event loop and Callback functions
/* There are 2 types of backend langauges
  
  1-Single threat => NodeJS Bunda barcha request uchun bitta threat bo'ladi asosiy threat ga yordamchi threat poollar bo'ladi. Bu resource saving
  Single threatda logic muhim. Yaxshi logic uchun Callback and asynchronous functionlarni yaxshi bilish muhim!!!!!!!!!
  
  2-Multi threat => PhP  Bunda har bir request uchun alohida threat ochiladi. Requestlar soni nechta bolsa shuncha threat bo'ladi

  */

// console.log("Advices by Jack Ma");
// const list = [
//   "Be a good Student", // 0-20
//   "Choose the right boss and make more mistakes", // 20-30
//   "Start your own business", //30-40
//   "Do  what  You are good at", //40-50
//   "Make investment on Youth", //50-60
//   "Take a rest, There is no point", // 60
// ];

// CALLBACK function
// function giveAdvice(a, callback) {
//   if (typeof a !== "number") callback("Insert Number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// giveAdvice(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("Answer: ", data);
// });
// console.log("passed here 1");

// ASYNC function Bu synchronous function dan keyin ishga tushadi JavaScript da .
// async function giveAdvice(a) {
//   if (typeof a !== "number") throw new Error("Insert Number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// call via then/catch
// console.log("passed here 0");
// giveAdvice(25)
//   .then((data) => {
//     console.log("Answer:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR: ", err);
//   });
// console.log("passed here 1");

// call via asyn/await
// async function run() {
//   let answer = await giveAdvice(25);
//   console.log(answer);
//   //   answer = await giveAdvice(70);
//   //   console.log(answer);
//   //   answer = await giveAdvice(41);
//   //   console.log(answer);
// }
// run();
