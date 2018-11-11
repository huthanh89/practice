
/*
// Question = Create a function
//
// given an unsorted array return the second smallest value.

// Assumptions
//
// Will there passed in array every be null?
// Does the array have duplicate numbers?


Implementation
    var min1 - smallest
    var min2 - 2nd smallest

    Loop through the array
        
        if index is 1
            set element into min2
        
        if index > 2
            if min2 > element
                swap min2 with element
        if index is 0 
            store first element into min
        if min1 > min2
            swap min2 with min2

    return min2

runtime 
0(n)
we cannot improve
*/

let testInputs = [9, 3, 1, 2, 5, 4, 1, 6];

// Expect 2nd min to be 3.

function findMin(inputs){

    let min1;
    let min2;

    inputs.forEach(function(input, index){

        //console.log(min1, min2, input);

        if(index==0){
            min1 = input;
        }
        if(index==1){
            min2 = input;
        }
        if(index>1){
            if(input<min2){
                min2 = input;
            }
        }
        if(min1>min2){
            let temp = min1;
            min1 = min2;
            min2 = temp;
        }
    });

    return min2;
}

console.log(findMin(testInputs));

