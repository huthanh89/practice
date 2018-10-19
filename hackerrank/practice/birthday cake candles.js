/*

You are in charge of the cake for your niece's birthday and have decided the cake will have one
candle for each year of her total age. When she blows out the candles, she’ll only be able to blow
out the tallest ones. Your task is to find out how many candles she can successfully blow out.

Sample Input 0

4
3 2 1 3
Sample Output 0

2

------------------------------------

Iterate through the inputs to find the max
store the max value and its count in a hash.

Time complexity  - 0(n)
Space complexity - 0(n)

*/


// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {

    let hash = {
        value: 0,
        count: 0
    }

    ar.forEach(function(item){
        if(item > hash.value){
            hash.value = item;
            hash.count = 0;
        }
        if(item == hash.value){
            hash.count ++;
        }

    });

    return hash.count;

}

const inputs = [3, 2, 1, 3];
birthdayCakeCandles(inputs);