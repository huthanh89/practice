//----------------------------------------------------------------------//
// Fibonacci
// 1, 1, 2, 3, 5, 8, 13
// Fib(n) = Fib(n-1) + Fib(n-2)
//----------------------------------------------------------------------//

function fib(index){
    
    if(index==0){
        return 0; // Seed case.
    }
    
    else if (index==1){
        return 1; // Seed case.
    }
    
    else{
        return fib(index-1) + fib(index-2);
    }
}

//----------------------------------------------------------------------//
// Fibonacci (optimized)
//
// The above function is 2^n time complexity.
// Use memoize to reduce time complexity.
// - save past computation and pull them up for future reference.
//----------------------------------------------------------------------//

//  TODO: WIP

function fib2(index){
    
    function fib2Recursion(index, memoize){

        console.log(memoize);

        if(index==0){
            return 0; // Seed case.
        }
        
        else if (index==1){
            return 1; // Seed case.
        }
        
        else{
            return fib2(index-1, memoize) + fib2(index-2, memoize);
        }
    }

    return fib2Recursion(index, []);
}

//----------------------------------------------------------------------//


console.log(fib2(7));