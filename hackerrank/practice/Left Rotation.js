/*

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array
as a single line of space-separated integers.


Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4

Input (stdin)Download
20 10
41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51

Download
20 10
41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51
Expected OutputDownload
77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77


*/


function rotate(inputs, index){


    let first = inputs.splice(0, index);

    let second = inputs;

    let result = second.join(' ') + ' ' + first.join(' ');

    return result;
}

let inputs = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
let rotation = 10;

rotate(inputs, index);