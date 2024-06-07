// Largest number in a list.
// Write a function that takes a list of numbers as input and
// returns the largest number in the list.

function largestNumber(list) {
   let order =  list.sort((a,b) => b-a)
    return order[0];
    
}




console.log(largestNumber([3, 41, 234, 12, 9, 74, 15]))