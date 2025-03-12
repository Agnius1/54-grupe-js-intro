const n1 = 7;
const n2 = 5;

// function declaration
function sudetis(a, b) {
  return a + b;
}
console.log(`${n1} + ${n2} = ${sudetis(n1, n2)}`);

// anonimines funkcijos logika priskirta kintamajam
const skirtumas = function (a, b) {
  return a - b;
};
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// arrow function (rodykline funkcija) (liamba function)
const sandauga = (a, b) => {
  return a * b;
};
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// jeigu logiko bloke yra tik 1 procedura
// galima nerasyti {} ir return
const dalyba = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${dalyba(n1, n2)}`);

//jeigu parametru bloke yra tik 1 parametras
// galima nerasyti ()
const kvadratu = (a) => a * a;
console.log(`${n1} * ${n1} = ${kvadratu(n1)}`);
console.log(`${n2} * ${n2} = ${kvadratu(n2)}`);

// Vardas -> V.

function name(v) {
  return v.slice(0, 1) + ".";
}
console.log(name("Chuck"));
console.log(name("Gintare"));
console.log(name("Rokas"));

function name(v) {
  return v[0] + ".";
}
console.log(name("Chuck"));
console.log(name("Gintare"));
console.log(name("Rokas"));

const nameInit = (s) => s[0] + ".";
console.log(nameInit("Chuck"));
console.log(nameInit("Gintare"));
console.log(nameInit("Rokas"));

// 'Vardenis Pavardenis' -> V.P.

// 1. 'Vardenis Pavardenis'

// 2. ['Vardenis', 'Pavardenis']

// 3a. Vardenis -> V.
// 3b. Pavardenis -> P.

// 4 V.P.

function inicialai(fullName) {
  const nameParts = fullName.split(" ");
  const firstname = nameParts[0][0] + ".";
  const lastname = nameParts[1][0] + ".";
  return firstname + lastname;
}
console.log(inicialai("Vardenis Pavardenis"));
console.log(inicialai("Chuck Norris"));
console.log(inicialai("Bruce Willis"));

const inicialaiArrow = (fullname) => {
  const nameParts = fullName.split(" ");
  const firstname = nameParts[0][0] + ".";
  const lastname = nameParts[1][0] + ".";
  return firstname + lastname;
};

function inicialai2(fullName) {
  const nameParts = fullName.split(" ");
  return nameInit(nameParts[0]) + nameInit(nameParts[1]);
}

// 5 -> false
// 4 -> true
// 3 -> false
// 2 -> true
// 1 -> false
// 0 -> true

function isEven(n) {
  return !(n % 2);
  //  return n % 2 === 0;
}
console.log(5, isEven(5));
console.log(4, isEven(4));
console.log(3, isEven(3));
console.log(2, isEven(2));
console.log(1, isEven(1));
console.log(0, isEven(0));

console.log("//", 5, "->", isEven(5));
console.log("//", 4, "->", isEven(4));
console.log("//", 3, "->", isEven(3));
console.log("//", 2, "->", isEven(2));
console.log("//", 1, "->", isEven(1));
console.log("//", 0, "->", isEven(0));

function sakinys(text) {
  return text.split(" ").length;
}
console.log(sakinys("Labas rytas, Lietuva!"));
console.log(sakinys("Ką tu? Ką vakare?"));

const sakinys2 = (text) => text.split(" ").length;
