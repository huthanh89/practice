



function fib(index){

    // base case

    if(index==0){
        return 0;
    }
    else if(index==1){
        return 1;
    }
    else{
        return fib(index-1) + fib(index-2);
    }

}


console.log(fib(9));