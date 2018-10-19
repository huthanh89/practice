'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    
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

    result =  [min, max];

    return result;

}

const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

console.log(miniMaxSum(arr));