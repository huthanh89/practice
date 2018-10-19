

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
// const addTwo = createBase(2)
// addTwo(4);// return 6

function createBase(base) {

    let x = base;

    return function(add) {
        return x + add;
    }
}

let addSix = createBase(6);

console.log(addSix(16));






