// Write your solution here!

// defining cats array
const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat
function destructivelyAppendCat(name) {
    resetCats();
    cats.push(name);
    return cats;
}
// console.log(destructivelyAppendCat("Ralph"));

// function destructivelyPrependCat
function destructivelyPrependCat(name) {
    resetCats();
    cats.unshift(name);
    return cats;
}
// console.log(destructivelyPrependCat("Bob"));

// function destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
    resetCats();
    cats.pop();
    return cats;
}
// console.log(destructivelyRemoveLastCat());

// function destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat() {
    resetCats();
    cats.shift();
    return cats;
}
// console.log(destructivelyRemoveFirstCat());

// function appendCat
function appendCat(name) {
    resetCats();
    let newCats = [...cats, name];
    return newCats;
}
// console.log(appendCat("Broom"));

// function prependCat
function prependCat(name) {
    resetCats();
    let newCats = [name, ...cats];
    return newCats;
}
// console.log(prependCat("Arnold"));

// function removeLastCat()
function removeLastCat() {
    resetCats();
    let newCats = [...cats];
    newCats.splice(-1);
    return newCats;
}
// console.log(removeLastCat());

// function removeFirstCat()
function removeFirstCat() {
    resetCats();
    let newCats = [...cats];
    newCats.splice(0,1);
    return newCats;
}
// console.log(removeFirstCat());

function resetCats() {
    cats.length = 0;
    return cats.push("Milo", "Otis", "Garfield");
}


console.log(cats);










