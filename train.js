class shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  time() {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}`);
  }

  qoldiq() {
    this.time();
    console.log(
      `Hozirda ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud`,
    );
  }
  sotish(product, sotish) {
    this.time();
    // 1 - usul
    // if (product == "non") {
    //     this.non -= sotish
    // }
    // else if (product == "lagmon") {
    //     this.lagmon -= sotish
    // }
    // else if (product == "cola") {
    //     this.cola -= sotish
    // } else {
    //     console.log("malumot kiritishda xato")
    // }
    // 2 - usul
    if (this[product] !== undefined) {
      this[product] -= sotish;
      console.log(`${sotish} dona ${[product]} sotildi`);
    } else {
      console.log("malumot kiritishda xato");
    }
  }

  qabul(product, qabul) {
    this.time();
    if (this[product] !== undefined) {
      this[product] += qabul;
      console.log(`${qabul} dona ${[product]} qo'shildi`);
    } else {
      console.log("malumot kiritishda xato");
    }
  }
}

const myShop = new shop(4, 5, 6);
//myShop.qoldiq();
//myShop.sotish("non", 2);
myShop.sotish("melon", 10);
//myShop.qabul("cola", 100);
myShop.qoldiq();

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
