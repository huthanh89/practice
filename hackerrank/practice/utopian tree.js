/*
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles
in height. Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. 
How tall will her tree be after  growth cycles?

For example, if the number of growth cycles is , the calculations are as follows:

Period  Height
0          1
1          2
2          3
3          6
4          7
5          14

Sample Input

0
1
4

Sample Output

1
2
7

-------------------
- Algorithm -
create an array with growth rate up to index 60.
iterate through inputs
    get corresponding growth rate and store into result array
return result array

*/


function utopianTree(n) {

    let growthArray = [1, 2];
    let result = [];
    let next = null;

    for(let i=2; i<100; i++){

        if(i%2==0){
            next = growthArray[i-1] + 1;
            growthArray.push(next);
        }else{
            next = growthArray[i-1] * 2;
            growthArray.push(next);
        }

    }

    n.forEach(function(input){
        result.push(growthArray[input]);
    });

    console.log(result);
    return result;

}

let inputs = [0, 1, 4];

utopianTree(inputs);