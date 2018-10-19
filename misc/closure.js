

function adder(num1) {

    // this returns this function bellow;

    return function(num2) {
        return num1 + num2;
    }
}

var adder5 = adder(5);

var result1 = adder5(10);


console.log(result1);
