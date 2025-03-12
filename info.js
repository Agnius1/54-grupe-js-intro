// ternary operatorius:
// Naudojimas: Kai reikia parašyti trumpą ir paprastą sąlygą, dažniausiai priskiriant reikšmę kintamajam.
// Geroji praktika: Naudoti tik tada, kai sąlyga ir veiksmai yra trumpi ir aiškūs.Jei sąlyga tampa ilga ar neaiški, geriau naudoti if/else struktūrą.
// Sintaksė:
 
// condition ? expressionIfTrue : expressionIfFalse;
// condition ? expressionIfTrue : condition ? expressionIfTrue : expressionIfFalse;
 
// const day2 = 3;
 
// day2 === 1 ? console.log("Pirmadienis") : day2 === 2 ? console.log("Antradienis") : console.log("Kita diena")
 
// Geroji praktika:
// if/else struktūra suteikia didžiausią lankstumą, todėl ji yra tinkamiausia sudėtingesnėms sąlygoms ir kai reikia patikrinti kelias skirtingas sąlygas.
// switch struktūra yra naudinga, kai reikia palyginti vieną kintamąjį su daugybe konkrečių reikšmių.Ji padeda išvengti ilgo if/else if sekos ir padaro kodą skaitomesnį.
// Ternary operatorius(condition ? exprIfTrue : exprIfFalse) yra naudingas trumpiems sprendimams ir kai reikia greitai priskirti reikšmę kintamajam.Tačiau, jei sąlyga tampa sudėtinga arba reikia atlikti daugiau nei vieną veiksmą, geriau naudoti if/else.