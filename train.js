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
*/
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
