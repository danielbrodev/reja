// A-TASK:
/*
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
// function FuncLetterCounter(letter, nimadirYoz) {
  //   let count = 0;
  //   for (let i = 0; i < nimadirYoz.length; i++) {
    //     if (nimadirYoz[i] === letter) {
      //       count++;
      //     }
      //   }
      //   console.log(
        //     `${nimadirYoz} sozining ichida ${letter} harfi ${count} ta bor...`
        //   );
        // }
        // FuncLetterCounter("a", "assalomu alaykum");
*/
// B-TASK
/* 
Shunday function tuzing, u 1ta 
string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga 
return qilsin. MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.\n\n@MITASK
function countStr(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      count++;
    }
  }
  return count;
}

console.log(countStr("ad2a54y79wet0sfgb9"));
*/
// C-TASK
/*
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda
 agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin. 
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true. 

function checkContent(a, b) {
  if (
    a.toLowerCase().split("").sort().join("") ===
    b.toLowerCase().split("").sort().join("")
  ) {
    return true;
  } else {
    return false;
}
}

console.log(checkContent("danieLyaxshibola", "Bolayaxshidaniel"));
*/

// D-TASK
/*
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil 
mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, 
biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
 MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non,
      lagmon,
      cola,
    };
  }
  getTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    return `${h}:${m}`;
  }
  qoldiq() {
    const time = this.getTime();
    const { non, lagmon, cola } = this.products;
    console.log(
      `hozir ${time}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`
    );
  }
  sotish(product, amount) {
    const time = this.getTime();

    if (!this.products.hasOwnProperty(product)) {
      console.log(`${product} mahsuloti mavjud emas`);
      return;
    }

    if (this.products[product] < amount) {
      console.log(`${time}da yetarli ${product} yo‘q`);
      return;
    }

    this.products[product] -= amount;
    console.log(`${time}da ${amount}ta ${product} sotildi`);
  }
  qabul(product, amount) {
    const time = this.getTime();

    if (!this.products.hasOwnProperty(product)) {
      console.log(`${product} mahsuloti mavjud emas`);
      return;
    }

    this.products[product] += amount;
    console.log(`${time}da ${amount}ta ${product} qabul qilindi`);
  }
}

const newShop = new Shop(5, 5, 5);

newShop.sotish("non", 3);
newShop.qabul("cola", 5);
newShop.qoldiq();
