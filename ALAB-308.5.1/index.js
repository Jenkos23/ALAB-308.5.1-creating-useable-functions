


// Part 1: Thinking Functionally
function workingWithArray(arr){
    // Sum the array
    const sumArray = arr.reduce((acc, current) => acc + current, 0);
    //find the average of the arrray
    const averageArr = sumArray/arr.length
    return {sumArray, averageArr};


}

// Function to take an array of strings and return the longest string
function longestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}
// Function to take an array of strings and a number, and return an array of strings longer than the given number
function stringsLongerThan(strings, length) {
    return strings.filter(string => string.length > length);
}

// Function to print every number between 1 and n using recursion
function printNumbers(n, current = 1) {
    if (current > n) return; 
    console.log(current); // Print the current number
    printNumbers(n, current + 1); 
}




// Example using the functions above:
console.log(workingWithArray([1, 2, 3, 4, 8, 30])); // Output: sumArray 48, averageArr: 8
console.log(longestString(['say', 'hello', 'in', 'the', 'morning'])); // Output: "morning"
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // Output: ["hello", "morning"]
printNumbers(5); // Output: 1 2 3 4 5



// Part 2: Thinking Methodically
let thinkMeth = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
  

    //Sort the array by age.
    sortArray = thinkMeth.sort((a,b) => a.age - b.age);
    console.log(sortArray)

    // Filter the array to remove entries with an age greater than 50.
    const threshold = 50; // remove entries with an age greater 50
    const filteredArr = thinkMeth.filter((item) => item.age <= threshold);
    console.log(filteredArr);

    //Map the array to change the “occupation” key to “job” and increment every age by 1.
   const increaseAgeAndchangeJob= thinkMeth.map((element) => ({...element, age: parseInt(element.age) + 1, job: element.occupation}));

   // Remove the old "occupation" key
  increaseAgeAndchangeJob.forEach(item => delete item.occupation);
   console.log(increaseAgeAndchangeJob)


//Use the reduce method to calculate the sum of the ages. Then use the result to calculate the average age
const sumAge = thinkMeth.reduce((accum, item) => accum + parseInt(item.age), 0);
console.log(sumAge);

const avgAge = sumAge/ thinkMeth.length;
console.log(avgAge);



//Part 3: Thinking Critically
// Take an object and increment its age field

function ageIncrement (student){
     // Check if age exists and is a number
     if (student.age !== undefined && !isNaN(student.age)) {
        student.age = parseInt(student.age) + 1;
    } else {
        console.log("Age property is missing or not a number.");
    }

}

// Example object
const student = {
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: "41" // age is a string
};

// Increment age
console.log("Before increment:", student);
ageIncrement(student);
console.log("After increment:", student);




























































/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
// function reverseString(str) {
//     const strArray = str.split("");
//     const revArray = strArray.reverse();
//     const revString = revArray.join("");
//     return revString;
//   }
  
//   function reverseString2(str) {
//     return str.split("").reverse().join("");
//   }
  
//   function reverseString3(str) {
//     let revString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       revString += str[i];
//     }
//     return revString;
//   }
  
//   function reverseString4(str) {
//     if (str === "") return "";
//     else return reverseString4(str.substr(1)) + str.charAt(0);
//   }
  
//   function reverseString5(str) {
//     return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
//   }
  
//   console.log(reverseString("!dlroW olleH"))
//   console.log(reverseString2("!dlroW olleH"))
//   console.log(reverseString3("!dlroW olleH"))
//   console.log(reverseString4("!dlroW olleH"))
//   console.log(reverseString5("!dlroW olleH"))