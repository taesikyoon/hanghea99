function sum() {
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index]; 
    }
    console.log(arguments instanceof Array);
    return total;
}

let sumOf1to3 = sum(1,2,3);
console.log(sumOf1to3);

function testArg() {
    let newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}

testArg('a','b');