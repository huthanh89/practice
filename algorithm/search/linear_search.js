//----------------------------------------------------------------------//
// Linear Search
//
// Use linear search when list is un ordered. 
// Worst run time complexity - O(n)
//----------------------------------------------------------------------//

function linearSearch(array, target){

    var result = -1;

    array.forEach(function(element){
        if(element == target){
            result = target;
        }
    })
    return result
}

//----------------------------------------------------------------------//
// Test
//----------------------------------------------------------------------//

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(linearSearch(array, 13));

//----------------------------------------------------------------------//