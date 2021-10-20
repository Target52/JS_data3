const testNum = (number) => new Promise((resolve, reject) => {
    if (number <= 10) {
        resolve();
    } else {
        reject("Number greater 10");
    }
});

console.log(testNum(1));

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => new Promise((resolve, reject) => {
    if (array.every(x => (typeof x === "string"))) {
        resolve(array.map((x) => x.toUpperCase()));
        //resolve();
    }
    else {
        reject("Niet gehele array woorden");
    }
});

const sortWords = (array) => new Promise((resolve, reject) => {
    if (array.every(x => (typeof x === "string"))) {
        resolve(array.sort());
        //resolve();
    }
});

makeAllCaps(arrayOfWords).then((result) => console.log(sortWords(result)));