// Fibonacci Sequence 
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ....
// Each value is the sum of the 2 previous values. 
// Example: number = 5 (2+3 = number)

/*const number = parseInt(prompt("Enter a number"));*/


function fibonacci (number){
    let valueA = 1;
    let valueB = 0;
    let temp;

    while(number >= 0){
        temp = valueA;
        valueA = valueA + valueB;
        valueB = temp;
        number--;
    }
    return valueB;
}