/**

Use recursion to traverse backwards in order to reverse the string.

 */



function isPalidrome(string){

    function reverse(string){
    
        // base case
    
        if(string.length == 1){
            return string[0];
        }
    
        else{
            return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
        }

    }
    
    return string == reverse(string);

}


console.log('RESULT', isPalidrome('cattac'));