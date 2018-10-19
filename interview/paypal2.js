// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// SOLUTION 1

function getProductsOfAllIntsExceptAtIndex(integers){

    let result = [];

    for(let i=0; i< integers.length; i++){
        
        let product = 1;
        
        for(let j=0; j<integers.length; j++){
            if(i!=j){
                product = product * integers[j];
            }
        }
        
        result.push(product);
        
    }

    console.log('result', result);
    return result;

}

// SOLUTION 2 - written more clearly.

function getProductsOfAllIntsExceptAtIndex(integers){

    let result = [];

    integers.forEach(function(integer, index1){


        let product = 1;

        integers.forEach(function(integer2, index2){

            if(index1!=index2){
                product = product * integer2;
            }

        });

        result.push(product);

    });

    console.log(result);

}


getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]);