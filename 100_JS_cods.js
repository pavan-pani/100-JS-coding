
// 1.Remove Duplicate Characters from String 
// Input:  'priya riya supriya' 
// Output:  'priya su' 

// const Input = 'priya riya supriya'
// const output = []

// for(let char of Input){
//     if(!output.includes(char)){
//         output.push(char)
//     }
// }
// console.log("Input : ",Input)
// console.log("Output : ",output.join(''))



// ---------------------------------------------------------------------------------------------------------------------------------//

// 2. Remove Duplicate Elements from Array and Count Elements using Set 
// Input:  [55, 44, 55, 67, 67, 8, 8, 65, 1, 2, 3, 3, 34, 5] 
// Output:  [55, 44, 67, 8, 65, 1, 2, 3, 34, 5] 
// Count:  10 

// const input = [55, 44, 55, 67, 67, 8, 8, 65, 1, 2, 3, 3, 34, 5] 
// const output = new Set(input).size

// console.log("Input : ",input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 3.Remove Duplicate Characters from Array using Filter 
// Input:  ['a', 1, 'a', 2, '1'] 
// Output:  ['a', 1, 2, '1'] 

// const input = ['a', 1, 'a', 2, '1'] 

// const output = input.filter((item, index,)=>{
//     if(input.indexOf(item)>=index) return true
//     else return false
// })

// console.log("Input : ",input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//
// 4.String Reverse without Reversing Individual Words 
// Input:  "India is my country" 
// Output:  "aidnI si ym yrtnuoc"

// const input = "India is my country"

// const output = input.split(' ').map((value)=>{
//     return value.split('').reverse().join('')
// })

// console.log("Input : ",input)
// console.log("Output : ",output.join(' '))

// ---------------------------------------------------------------------------------------------------------------------------------//

// 5. String Reverse with Reversing Individual Words 
// Input:  "India is my country" 
// Output:  "yrtnuoc ym si aidnI" 

// const input = "India is my country" 
// var output =' '
// for (let index = input.length - 1 ; index >= 0; index--) {
//     output += input.charAt(index);
// }
// console.log("Input : ",input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//
// 6. String Reverse without Using Inbuilt Function 
// Input:  "India is my country" 
// Output:  "yrtnuoc ym si aidnI" 

// const input = "India is my country" 
// var output =' '
// for (let index = input.length - 1 ; index >= 0; index--) {
//     output += input[index];
// }

// console.log("Input : ",input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//
// 7.Find Factorial of User Input Number 
// Input:  5 
// Output:  The factorial is 120

// const input = 5
// var output = 1
// for(let i=1;i<=input;i++) output*=i

// console.log("Input : ", input)
// console.log("The factorial is : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//
// 8. Check if Two Strings are Anagram 
// Input:  "Army", "Mary" 
// Output:  True 

// const str1 = "Army"
// const str2 = "Mary" 

// console.log("Input : ", str1, str2)

// ///using without inbuilt funation - O(n)
// function isAnagram(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   }
//   const set = new Set(str1.toLowerCase());
//   for (i of str2.toLowerCase()) {
//     if (set.has(i)) {
//       continue;
//     } else return false;
//   }
//   return true;
// }

// ///using inbuilt funation - O(n log(n))
// function isAnagram(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   } else {
//     if (
//       str1.toLowerCase().split("").sort().join("") ==
//       str2.toLowerCase().split("").sort().join("")
//     )
//       return true;
//     else return false;
//   }
// }

// console.log(isAnagram(str1, str2))



// ---------------------------------------------------------------------------------------------------------------------------------//

// 9.Swapping of Two Numbers Using Third Variable 
// Input:  a = 10, b = 20 
// Output:  20, 10 

// let a=10
// let b=20
// console.log("Input : ",a, b)

// let temp=a
// a=b
// b=temp

// console.log("Output : ",a, b)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 10. Swapping of Two Numbers Without Using Third Variable 
// Input:  a = 10, b = 20 
// Output:  20, 10 

// var [a,b] = [10,20]
// console.log("Input : ",a, b)

// // using destracting
// // var [a,b]=[b,a]

// //using add & sub
// a = a+b //30
// b = a-b // 30-20 =10
// a = a-b //30-10 = 20

// console.log("Output : ",a, b)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 11.Check if String or Number is Palindrome Using Reverse 
// Input:  "madam" 
// Output:  Palindrome 

// let input = "12321"


// function isPalindrome(str){
//     if(str == str.split('').reverse().join('')) return true
//     else return false
// }

// console.log("Input : ",input)
// console.log("Output : ",isPalindrome(input))

// ---------------------------------------------------------------------------------------------------------------------------------//
// 12.Check if String or Number is Palindrome Using Half-Length Comparison 
// Input:  "12321" 
// Output:  Palindrome 

// let input = "123321"

// //with inbuit methods
// function isPalindrome(str){
//     if(str.endsWith(str.substring(0, Math.floor(str.length / 2)).split('').reverse().join(''))) return true
//     else return false
// }



// //with for loop
// function isPalindrome(str){
//     for (let index = 0; index < Math.floor(str.length / 2); index++) {
//         if(str.charAt(index) == str.charAt(str.length - index - 1)) continue
//         else return false    
//     }
//     return true
// }



// with 2 pointer
// function isPalindrome(str) {
//   for (let i = 0, k = str.length - 1; i < str.length / 2; i++, k--) {
//     if (str.charAt(i) == str.charAt(k)) continue;
//     else return false
//   }
//   return true;
// }

// console.log("Input : ",input)
// console.log("Output : ",isPalindrome(input))

// ---------------------------------------------------------------------------------------------------------------------------------//

// 13. Find Longest Word from a String 
// Input:  "supriya is a masooooom good girl" 
// Output:  "masooooom" 

// let input = "supriya is a masooooom good girl"

//using reducer
// const output = input.split(' ').reduce((acc, val)=> {
//     console.log(acc, val)
//     if(acc.length < val.length) return val
//     else return acc
// })

//using for loop
// var output =''
// for (const val of input.split(' ')) {
//     if(output.length < val.length) output = val
// }


// console.log("Input : ",input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 14.Find Longest Word Using Sort 
// Input:  "Priya is a good girl" 
// Output:  "Priya" 
// const input = "Priya is a good girl"  

// const output = input.split(' ').sort((a,b)=>{
//         if(b.length > a.length) return -1
//         else if (b.length < a.length) return 1
//         else return 0
//     })

// console.log("Input : ",input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 16.Find Longest Common Prefix from Array of Strings 
// Input:  ["go", "google", "gosh"] 
// Output:  "go" 

// const input = [ "google", "gosh", 'google']

// var countChar = {}
// var tempChar = ''
// for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input[i].length; j++) {
//         tempChar += input[i].charAt(j)
//         for(let str of input){
//             if(str.startsWith(tempChar)) countChar[tempChar] = (countChar[tempChar] || 0 ) + 1
//         } 
//     }
// }

// var output = {
//     outstr:'',
//     count:0
// }
// console.log(countChar)
// for(let str in countChar){
//     console.log(countChar[str])
//     if(output.count < countChar[str] || output.count == countChar[str]) {
//         output.count = countChar[str]
//         output.outstr = str
//     }
    
// }


// console.log("Input : ",input)
// console.log("Output : ",output.outstr)



/*
///chatGPT answer

// Find Longest Common Prefix from Array of Strings
// Input: ["google", "gosh", "google"]
// Output: "go"

const input = ["google", "gosh", "google", 'g'];

function findLongestCommonPrefix(arr) {
    if (!arr.length) return "";

    // Start with the first string as the base prefix
    let prefix = arr[0];

    // Iterate over the remaining strings
    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            // Reduce prefix by removing the last character until it matches
            prefix = prefix.slice(0, -1);
            // If prefix becomes empty, return ''
            if (!prefix) return "";
        }
    }
    return prefix;
}

const output = findLongestCommonPrefix(input);

console.log("Input :", input);
console.log("Output :", output);
*/

// ---------------------------------------------------------------------------------------------------------------------------------//

// 17.Find Vowels and Their Count in a String 
// Input:  "priya" 
// Output:  i, a 
// Count:  2 

// const input = "priya"
// const vowels = 'AEIOUaeiou'

// var output = 0

// for(let char of input){
//     if(vowels.includes(char)) output++
// }

// console.log("Input : ", input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 18. Character Occurrence in a String 
// Input:  "priyapri", "p" 
// Output:  2 

// const input = "priyapri"
// const inChar = 'p'
// let output = 0

// for (const char of input) {
//     if(char==inChar) output++
// }

// console.log("Input : ", input, inChar)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 19.Find First Pair Whose Sum is Zero 
// Input:  [-5, -4, -3, -2, 1, 2, 3, 4, 5] 
// Output:  [-5, 5] 

// const input = [1, -4, -3, -2, 1, 2, 3, 4, 5] 

// console.log("Input : ", input)

// for (const val of input) {
//     if(input.includes(-val)) {
//         console.log("Output : ", [val, -val])
//         break
//     }
// }


// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 20.Find First Pair Whose Sum is Zero Using Indexing 
// Input:  [-5, -4, -3, -2, 0, 2, 4, 6] 
// Output:  [-2, 2] 

// const input = [1, -4, -3, -2, 1, 2, 3, 4, 5] 

// console.log("Input : ", input)

// for (const val of input) {
//     if(input.includes(-val)) {
//         console.log("Output : ", [input.indexOf(val), input.indexOf(-val)])
//         break
//     }
// }

// console.log("Input : ", input, inChar)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//


// 21.Find Largest Pair Sum from Array with Unsorted Elements 
// Input:  [9, 7, 8, 4, 5, 6, 1, 2, 3] 
// Output:  17

// const input = [9, 7, 8, 4, 5, 6, 1, 2, 3] 

// let fristMax = -Infinity 
// let secendMax = -Infinity 

// for (let val of input) {
//     if(val >  fristMax){
//         secendMax = fristMax
//         fristMax = val 
//         console.log("If 1 : ", fristMax, secendMax, val)
//     }
//     else if(val > secendMax){
//         secendMax = val
//         console.log("If 2 : ", fristMax, secendMax, val)
//     }
// }


// console.log("Input : ", input)
// console.log("Output : ",fristMax + secendMax)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 24.Fibonacci Series (Print Series) 
// Input:  5 
// Output:  [0, 1, 1, 2, 3, 5] 
// const input = 20

// const output = []
// for(let i=0; i < input;i++){
//     if(i == 0 || i == 1) output.push(i)
//     else output.push(output[output.length - 1] + output[output.length - 2])
// }

// console.log("Input : ", input)
// console.log("Output : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//

// 26.Find Missing Elements in Array and Add to Existing Elements 
// Input:  [1, 2, 5] 
// Output:  [1, 2, 3, 4, 5, 6] 

// const input = [1, 2, 5];
// const output = [];

// for (let i = 0; i < input.length - 1; i++) {
//   const start = input[i];
//   const end = input[i + 1];

//   for (let num = start; num < end; num++) {
//     output.push(num);
//   }
// }
// output.push(input[input.length - 1]);
// output.push(input[input.length - 1] + 1);

// console.log("Input :", input);
// console.log("Output:", output);


// ---------------------------------------------------------------------------------------------------------------------------------//
// 27. Find Missing Number in Array 
// Input:  [1, 2, 3, 4, 5, 6, 7, 8, 10] 
// Output:  9
// const input = [1, 2, 3, 5, 6, 7, 8, 10]

// for(let i=0;i<input.length -1; i++){
//     if(input[i] != input[i+1] -1) console.log("Output:", input[i]+1)
// }


// console.log("Input :", input);
// console.log("Output:", input.reduce((acc, val, index)=>{
//     if(acc + 1 != val) return acc
//     return val
// },0));


// ---------------------------------------------------------------------------------------------------------------------------------//
// 28,Sort String or Character Array 
// Input:  ['d', 'g', 'y', 'e', 'r', 'p'] 
// Output:  ['d', 'e', 'g', 'p', 'r', 'y']

// let input = ['d', 'g', 'y', 'e', 'r', 'p'] 

// console.log("Output : ", input.sort())
// console.log(input[0]===input[1])

// console.log("Input :", input);
// console.log("Output:", output);


// ---------------------------------------------------------------------------------------------------------------------------------//
// 29.  Sort Numbers in Array 
// Input:  [1, 23, 34, 2, 76, 78] 
// Output:  [1, 2, 23, 34, 76, 78] 

// var input = [1, 23, 34, 2, 76, 78] 

// let temp;
// for(let i=0;i<input.length -1; i++){
//     for(let j=0;j<input.length -1;j++){
//         if(input[j]>input[j+1]){
//             let temp = input[j]
//             input[j] = input[j+1]
//             input[j+1] = temp
//         }
//     }
// }

// // console.log("Input :", input);
// console.log("Output:", input);

// ---------------------------------------------------------------------------------------------------------------------------------//

// 30.  Check if Number is Prime 
// Input:  17 
// Output:  True
// let input = 17
// var output = true

// for(let i = 2; i < input; i++){
//     if(input%i == 0){
//         output = false
//         break
//     }
// }
// console.log("Input :", input);
// console.log("Output:", output);

// ---------------------------------------------------------------------------------------------------------------------------------//
// 31.  Print All Prime Numbers from 2 to 100 
// Input:  100 
// Output:  2, 3, 5, 7, 11, 13, ..., 97 

function isPrime(num){
    // if(num < 2) return false
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
let output = []

for(let a=2;a<=100;a++){
    if(isPrime(a)){
        output.push(a)
    }
}
// console.log("Input :", input);
console.log("Output:", output);

// ---------------------------------------------------------------------------------------------------------------------------------//