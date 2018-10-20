/**

Complete the function gradingStudents in the editor below. It should return an integer array 
consisting of rounded grades. gradingStudents has the following parameter(s): grades: 
an array of integers representing grades before rounding

If the difference between the  and the next multiple of 5 is less than 3, round grade up to the next multiple
of 5. If the value of grade is less than 40, no rounding occurs as the result will still be a failing grade.


Sample Input 0

73
67
38
33

Sample Output 0

75
67
40
33

-----------------------

- Agorithm -
iterate array
    check if element should be rounded upward
        if less than 5 to next multiple then round up
        do not round anything under 40
return updated array

 */

function round5(x)
{
    return Math.ceil(x/5)*5;
}

function gradingStudents(grades) {

    let result = [];

    grades.forEach(function(grade){

        if(grade < 37){
            result.push(grade);
        }else{
            let rounded = round5(grade);

            let diff = rounded - grade;

            console.log(rounded, grade, diff);

            if(diff < 3){
                result.push(rounded);
            }else{
                result.push(grade);
            } 
        }


    });

    console.log(result);

    return result;
}

let inputs = [73, 67, 38, 33];

gradingStudents(inputs);