/*

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

Sample Input

3
11 2 4
4 5 6
10 8 -12

The primary diagonal is:

11
   5
     -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10

Sample Output

15

Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15
-------------------------------------------

iterate row
    iterate column
        sumA = 0,0 + 1,1 + 2,2
        sumB = 0,2 + 1,1 + 2,0

return abs of sumA - sumb

*/


function diagonalDifference(arr) {

    let sumA = 0;
    let sumB = 0
    let flag = false;
    let result = 0;
    let count = arr.length-1;

    arr.forEach(function(item, row){

        for(let col=0; col<arr.length; col++){
            
            if(row==col){
                sumA += arr[row][col];
            }
        }

        sumB += arr[row][count];
        count=count-1;

    });

    result = Math.abs(sumA - sumB);

    console.log(result);

    return result;
}

let inputs = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

diagonalDifference(inputs);