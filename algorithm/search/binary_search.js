//----------------------------------------------------------------------//
// Binary Search
//
// Use linear search when list is sorted. 
// Worst run time complexity - O(logn)
//----------------------------------------------------------------------//

function binarySearch(array, target){

    let middleIndex = Math.floor(array.length/2);
    let middleValue = array[middleIndex];
    let rightArray  = array.splice(middleIndex);
    let leftArray   = array;

    console.log(middleValue, leftArray, rightArray);

    // Target located.

    if(target == middleValue){
        return target;
    }

    // Base case, exit if array has 1 element left.

    else if(leftArray.length + rightArray.length == 1 ){
        return -1;
    }

    // Use left array. <--

    else if (target < middleValue){
        return binarySearch(leftArray, target);
    }

    // Use right array. -->

    else{
        return binarySearch(rightArray, target);
    }

}

//----------------------------------------------------------------------//
// Test
//----------------------------------------------------------------------//

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(binarySearch(array, 3));

//----------------------------------------------------------------------//