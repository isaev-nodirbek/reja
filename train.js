// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

function getHighestIndex(arr) {
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

const result = getHighestIndex([5, 21, 12, 21, 8]);
console.log("Result: ", result);

// TASK F:

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

// function findDoublers(str) {
//   let letters = [];

//   for (let a = 0; a < str.length; a++) {
//     if (letters.includes(str[a])) {
//       return true;
//     }

//     letters.push(str[a]);
//   }

//   return false;
// }

// const result = findDoublers("Hello");
// console.log("Result: ", result);

// TASK E:
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function getReverse(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }
// const result = getReverse("hello");
// console.log("Result: ", result);

// TASK - D
// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// }

// const check = checkContent("mitgroup", "gmtiprou");
// console.log(check); // true

// TASK - C
/*
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

@MITASK
*/
// const moment = require("moment");
// class Shop {
//   constructor(bread, lagman, cola) {
//     this.bread = bread;
//     this.lagman = lagman;
//     this.cola = cola;
//   }
//   qoldiq() {
//     const now = new Date();
//     const time = moment(now).format("HH:mm");
//     console.log(
//       `At ${time}, There are ${this.bread} bread, ${this.lagman} lagman and ${this.cola} cola!`,
//     );
//   }

//   sell(product, quantity) {
//     if (product === "bread") {
//       this.bread -= quantity;
//     } else if (product === "lagman") {
//       this.lagman -= quantity;
//     } else if (product === "cola") {
//       this.cola -= quantity;
//     } else {
//       console.log("Product not found");
//     }
//     this.qoldiq();
//     const now = new Date();
//     const time = moment(now).format("HH:mm");
//     console.log(`At ${time}, ${quantity} ${product} sold.`);
//   }

//   receive(product, quantity) {
//     if (product === "bread") {
//       this.bread += quantity;
//     } else if (product === "lagman") {
//       this.lagman += quantity;
//     } else if (product === "cola") {
//       this.cola += quantity;
//     } else {
//       console.log("Product not found");
//     }
//     const now = new Date();
//     const time = moment(now).format("HH:mm");
//     console.log(`At ${time}, ${quantity} ${product} received.`);
//     this.qoldiq();
//   }
// }

// const shop = new Shop(10, 5, 2);
// //shop.qoldiq();
// shop.receive("melon", 12);
// //shop.receive("cola", 4);

// function countDigits(string) {
//   let number = 0;
//   for (let a = 0; a < string.length; a++) {
//     if (string[a] >= "0" && string[a] <= "9") {
//       number++;
//     }
//   }
//   return number;
// }

// const answer = countDigits("jfbhsvfhjsv34h3ouyruegifgyid");
// console.log("Answer: ", answer);

// TASK - A
// Harf sifatida kiritilgan birinchi parametr,
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

// function countLetter(letter, word) {
//   let count = 0;
//   for (let a = 0; a < word.length; a++) {
//     if (word[a] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));

// console.log(countArguments("", [], "ball", "7", 6, {}));

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
