





function factorial(number){

    console.log(number);

    // base case

    if(number == 0){
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }

}

console.log(factorial(6));