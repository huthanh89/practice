/*
Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. Then print the respective minimum and maximum values as 
a single line of two space-separated long integers.

Sample Input

1 2 3 4 5

Sample Output

10 14

-----------------------------------------

// function minMaxSum
// 1. loop through inputs, sum up array and store into result array.
// 2. loop through result array to find min and max
// 3. return min and max

// Time complexity - 0(n^2)
// Space complexity - 0(n)

*/

var inputs = [1,2,3,4,5]
//var inputs = [7, 69, 2, 221, 8974];

function minMaxSum(arr){
    
    var result = [];
    
    arr.forEach(function(item1, index1){

        let sum = 0;

        arr.forEach( function(item2, index2){

            if(index1!=index2){
                sum += item2
            }

        });
        result.push(sum);
    });


    let min = result[0];
    let max = result[0];

    result.forEach(function(item){
        if(item > max){
            max = item;
        }
        if(item < min){
            min = item;
        }
    });

    return [min, max].join(' ');
}

console.log(minMaxSum(inputs));
