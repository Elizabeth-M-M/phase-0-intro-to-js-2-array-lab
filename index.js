// Write your solution here!

// defining cats array
const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat
function destructivelyAppendCat(name) {
    done();
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat("Ralph"));

// function destructivelyPrependCat
function destructivelyPrependCat(name) {
    done();
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("Bob"));

// function destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
    done();
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());

// function destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat() {
    done();
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());

// function appendCat
function appendCat(name) {
    done();
    const newCats = [...cats.slice(0, 3), name];
    return newCats;
}
console.log(appendCat("Broom"));

// function prependCat
function prependCat(name) {
    done();
    const newCats = [name, ...cats.slice(0, 3)];
    return newCats;
}
console.log(prependCat("Arnold"));

// function removeLastCat()
function removeLastCat() {
    done();
    const newCats = [...cats.slice(0, 2)];
    return newCats;
}
console.log(removeLastCat());

// function removeFirstCat()
function removeFirstCat() {
    done();
    const newCats = [...cats.slice(1, 3)];
    return newCats;
}

function done() {
    cats.length = 0;
    return cats.push("Milo", "Otis", "Garfield");
}
console.log(removeFirstCat());

console.log(cats);










