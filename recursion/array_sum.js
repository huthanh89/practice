/*

Write a JavaScript program to compute the sum of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 

*/



const inputs = [1, 2, 3, 4, 5, 6];

function sumRecur(inputs){


    console.log('down', inputs, inputs.length);

    // base case

    if(inputs.length == 1){
        return inputs[0];
    }
    else{        
        return inputs.pop() + sumRecur(inputs);
    }

}


console.log('Result: ', sumRecur(inputs))