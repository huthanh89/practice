//----------------------------------------------------------------------//
// String Permutation
//
// recur down the tree, and take permutations of last layer
// swap first letter with every other letter
//
//               man
//               ^
//   man---------amn--------nam
//   ^           ^          ^
// man mna-----amn anm----nam ama
//
//----------------------------------------------------------------------//

// Swap position A with position B in the string.
// return string.

function swap(str, positionA, positionB){

    let charA = str[positionA];
    let charB = str[positionB];

    if(charA==undefined || charB==undefined){
        return str;
    }

    // Replace position A with B

    str = str.substring(0, positionA) + charB + str.substring(positionA + 1, str.length);

    // Replace position B with A

    str = str.substring(0, positionB) + charA + str.substring(positionB + 1, str.length);

    return str;
}

// Get a string and return all permutation of that string.

function permutation(intialString){

    let result = [];

    function permRecursion(str, position){
        if(str.length - 1 < position ){
            result.push(str);
            return;
        }
        else{

            for(let i=position; i< str.length; i++){
                let swappedString = swap(str, position, i);
                permRecursion(swappedString, position + 1);
            }
        }

    }
    permRecursion(intialString, 0)
    return result;

}

console.log(permutation('shoe'));