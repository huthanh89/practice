//----------------------------------------------------------------------//
// Merge Sort
//
// Average Time complexity - o(nlogn)
// Worst Time complexity   - o(nlogn)
// Space complexity        - O(n)
//----------------------------------------------------------------------//

function merge(left, right){

    let result = [];
    let lLen = left.length;
    let rLen = right.length;
    let l = 0;
    let r = 0;
    
    while(l < lLen && r < rLen){
        if(left[l] < right[r]){
            result.push(left[l++]);
        }
        else{
            result.push(right[r++]);
        }
    }  
    
    //remaining part needs to be added to the result
    
    return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr){
    var len = arr.length;
    if(len <2){
        return arr;
    }

    let mid = Math.floor(len/2);
    let left = arr.slice(0,mid);
    let right =arr.slice(mid);
    
    // send left and right to the mergeSort to broke it down into pieces
    // then merge those

    return merge(mergeSort(left),mergeSort(right));
}

//----------------------------------------------------------------------//
// Test
//----------------------------------------------------------------------//

let test = [6, 2, 3, 5, 6, 2, 6, 7, 3, 4];

/*
for(let i=0; i< 100; i++){
    test.push(Math.floor(Math.random() * 100));
}
*/
let result = mergeSort(test);

console.log(result);

//----------------------------------------------------------------------//