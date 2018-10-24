//----------------------------------------------------------------------//
// Quick Sort
//
// Usually the pivot is picked at random.
// But for here, we will use the right most element
// of the array as the pivot.
//
// Average Time complexity - o(nlogn)
// Worst Time complexity   - o(n^2)
// Space complexity        - O(logn)
//----------------------------------------------------------------------//

// Pick a random pivot from array

function pickPivot(inputs){
    let max = inputs.length;
    let min = 0;
    let number = Math.random(0, inputs.length) * (max - min) + min;
    let index  = Math.floor(number);
    return {
        index: index,
        value: inputs[index]
    }
}

// Swap index A with index B.

function swap(inputs, indexA, indexB){
    let temp = inputs[indexA];
    inputs[indexA] = inputs[indexB];
    inputs[indexB] = temp;
    return inputs;
}

function partition(arr, pivot, left, right){

    let pivotValue     = arr[pivot];
    let partitionIndex = left;

    console.log(arr, 'pIndex', pivot, 'left', left, 'right', right)

    for(let i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            console.log(arr, 'pIndex', pivot, 'left', left, 'right', right, 'swap', i, partitionIndex)
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;

}

function quickSort(inputs, leftIndex, rightIndex){

    let pivot;
    let partitionIndex;

    if(leftIndex < rightIndex){
        
        pivot = rightIndex;

        partitionIndex = partition(inputs, pivot, leftIndex, rightIndex)

        // sort left
        quickSort(inputs, leftIndex, partitionIndex - 1);

        // sort right
        quickSort(inputs, partitionIndex + 1, rightIndex);

    }

    return inputs;
    
}



let test = [6, 2, 3, 5, 6, 2, 6, 7, 3, 4];

let result = quickSort(test, 0, test.length -1);

console.log(result);