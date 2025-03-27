
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

const input = 5
var output = 1
for(let i=1;i<=input;i++) output*=i

console.log("Input : ", input)
console.log("The factorial is : ",output)

// ---------------------------------------------------------------------------------------------------------------------------------//