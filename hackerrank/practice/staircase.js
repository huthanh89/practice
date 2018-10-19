/*
Print a staircase of size  using # symbols and spaces.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######

- Algorithm

forloop of size n to get number of '#'
inner loop of size to insert space.
use current index to determine how many '#' then line break


*/

function staircase(n) {

    let result = '';

    for(let i=1; i<=n; i++){
        
        for(let j=0; j<n-i; j++){
            result += ' '
        }

        for(let j=0; j<i; j++){
            result += '#'
        }

        result += '\n'

    }

    return result;
}

console.log(staircase(6));