// 51

function oshir1ga(arr) {
  // Har bir massiv elementiga 1 qo'shish
  return arr.map((element) => element + 1);
}

console.log(oshir1ga([0, 1, 2, 3]));
console.log(oshir1ga([2, 4, 6, 8]));
console.log(oshir1ga([-1, -2, -3, -4]));

//   52

var ism = "Donyor";
var familiya = "Olimov";
var natija = `${ism} ${familiya}`;
console.log(natija);

//   53

var holatiYaxshimi = true;
var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";

console.log(holati);

// 54

function sozUzunligi(str) {
  return str.length % 2 === 0;
}

console.log(sozUzunligi("apples"));
console.log(sozUzunligi("pears"));
console.log(sozUzunligi("cherry"));

// 55
function daraja(x, y) {
  return x ** y;
}

console.log(daraja(5, 5));
console.log(daraja(10, 10));
console.log(daraja(3, 3));

// 56
function songiElement(arr) {
  return arr[arr.length - 1];
}

console.log(songiElement([1, 2, 3]));
console.log(songiElement(["cat", "dog", "duck"]));
console.log(songiElement([true, false, true]));

// 57

function kabisa(yil) {
  if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(kabisa(2020)); // true
console.log(kabisa(2021)); // false
console.log(kabisa(1968)); // true

// 58
function soz(word) {
  return word.slice(1);
}

console.log(soz("apple"));
console.log(soz("cherry"));
console.log(soz("plum"));

// 59

function teskariBool(bool) {
  return !bool;
}

console.log(teskariBool(true));
console.log(teskariBool(false));

// 60
function juftMiToqmi(son) {
  if (son % 2 === 0) {
    return "Juft";
  } else {
    return "Toq";
  }
}

console.log(juftMiToqmi(3));
console.log(juftMiToqmi(146));
console.log(juftMiToqmi(19));

// 61

function qutilar(qavati) {
  return qavati ** 2;
}

console.log(qutilar(1));
console.log(qutilar(2));
console.log(qutilar(0));

// 62
function arrayToString(arr) {
  // Massiv elementlarini bitta string qilib qaytarish
  return arr.join("");
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));  
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// 63

function birlash(arr1, arr2) {
  // Massivlarni birlashtirib bitta massiv ko'rinishida qaytarish
  return arr1.concat(arr2);
}

console.log(birlash([1, 3, 5], [2, 6, 8]));
console.log(birlash([7, 8], [10, 9, 1, 1, 2]));  
console.log(birlash([4, 5, 1], [3, 3, 3, 3, 3]));

// 64

function topIndex(arr, str) {
  // Elementning massiv ichida nechinchi indexda turishini qaytarish
  return arr.indexOf(str);
}

console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(topIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(topIndex(["a", "g", "y", "d"], "d")); 
console.log(topIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// 65

function arrElement(arr, index) {
  const roundedIndex = Math.floor(index);
  // Indexdagi massiv elementini qaytarish
  return arr[roundedIndex];
}

console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));   
console.log(arrElement([1, 2, 3, 4, 5, 6], 8.0 / 2));  
console.log(arrElement([1, 2, 3, 4], 6.535355314 / 2));

// 66
function namuna(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(namuna([1, 2, 3, 4, 5])); 
console.log(namuna([-1, 0, 1]));
console.log(namuna([0, 4, 8, 12]));

// 67
function sozSon(soz) {
  const raqamlar = ["nol", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
  const index = raqamlar.indexOf(soz);

  return index !== -1 ? index : "Noto'g'ri so'z";
}

console.log(sozSon("bir")); 
console.log(sozSon("ikki"));
console.log(sozSon("uch")); 
console.log(sozSon("nol")); 
console.log(sozSon("salom"));

// 68
function bormi(arr, son) {
  return arr.includes(son);
}

console.log(bormi([1, 2, 3, 4, 5], 3));
console.log(bormi([1, 1, 2, 1, 1], 3)); 
console.log(bormi([5, 5, 5, 6], 5));   
console.log(bormi([], 5));              

// 69

function sonString(arr) {
  let natija = [];
  for (let i = 0; i < arr.length; i++) {
    natija.push(String(arr[i]));
  }
  return natija;
}

console.log(sonString([1, 2, "a", "b"]));
console.log(sonString(["abc", 123, "def", 456]));
console.log(sonString([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(sonString([3, 8, 8, 5, 2, 0]));                       

// 71

function sayohat(odamlar) {
  if (odamlar <= 0) {
    return 0;
  } else {
    return Math.ceil(odamlar / 4) - 1;
  }
}

console.log(sayohat(5)); 
console.log(sayohat(11));
console.log(sayohat(0)); 

// 72

function boshJoy(str) {
  return str.includes(" ");
}

console.log(boshJoy("hello"));        
console.log(boshJoy("hello, world"));
console.log(boshJoy(" "));            
console.log(boshJoy(""));              
console.log(boshJoy(",./!@#"));        

// 73
function hajm(quti) {
  return quti.width * quti.length * quti.height;
}

console.log(hajm({ width: 2, length: 5, height: 1 }));
console.log(hajm({ width: 4, length: 2, height: 2 }));
console.log(hajm({ width: 2, length: 3, height: 5 }));

// 74

function sonlar(son1, son2, arr) {
  let natija = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > son1 && arr[i] < son2) {
      natija.push(arr[i]);
    }
  }
  return natija;
}

console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(sonlar(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(sonlar(7, 32, [1, 2, 3, 78]));

// 75

function turlar(arr) {
let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(typeof arr[i]);
  }
  return result;
}

console.log(turlar([1, 2, "null", []])); 
console.log(turlar(["214", true, false, 2, 2.15, [], null]));
console.log(turlar([21.1, "float", "array", ["I am array"], null, true, 214]));

// 76

function qaytarString(str, miqdor) {
  if (typeof str !== 'string') {
    return "Not A String !!";
  }

  return str.repeat(miqdor);
}

console.log(qaytarString("Mubashir", 2));
console.log(qaytarString("Matt", 3));
console.log(qaytarString(1990, 7));

// 77

function koplik(str) {
  return str.includes("lar")
  }

  console.log(koplik("daraxtlar"));
  console.log(koplik("meva"));
  console.log(koplik("odamlar"));
  console.log(koplik("o'quvchi"));