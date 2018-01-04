const _ = require("lodash");

// number of words

// let word = "hello My Name is adam";
// var arr = word.split(" ");
// console.log(arr.length);

//get last value from array

// let array = [1,2,3,4,10];
// var val = array[array.length - 1]; 
// console.log(val);


//check number is odd or even

// let numbers = [1,2,3,4,5,6];
// for(let num in numbers){
// if(numbers[num] % 2 === 0){
//     console.log(numbers[num] + " = even");
// }else{
//     console.log(numbers[num] + " = odd");
// }
// }


// var name = "Adam Moghal"
// var array = name.split(" ");
// var reverse = array.reverse();

// console.log(reverse)

//sort alphabetically
// var word = "javascript";
// var charachters = word.split("")
// console.log(charachters)
// var sort = charachters.sort()
// console.log(sort.join(""));

// smallest number
// let numbers = [542,54,85,749,46,964,212,1456,456484,8464];
// var smallest = Math.min(...numbers);
// console.log(smallest)


var stuff = ["football","basketball","cricket","tennis", "football", "cricket"]

    let noDuplicates = Array.from(new Set(stuff));
    console.log(noDuplicates)