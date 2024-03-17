// // console.log("hello ")

// // function xyz(){
// //     console.log(a)
// // }
// // xyz()
// // var a = 10;

// // let arr1 = [1,2,3,4]
// // let arr2 = arr1
// // arr2[0]=4
// // console.log(arr1)
// // console.log(arr2)

// // function fac (num){
// //     if(num<=0){
// //         return 1
// //     }
// //     return num * fac(num-1)
// // }

// // console.log(fac(3))

// // function palindrome (str){
// //     for(var i =0; i< str.length/2;i++){
// //         if(str[i]==str[str.length-1]){
// //             return "palindrom"
// //         }else{
// //             return "not a palindrome"
// //         }
// //     }
// // }

// // console.log(palindrome('mom'))

// // var a = console.log('hello')
// // if(a){
// //     console.log('hello')
// // }else{
// //     console.log('world')
// // }

// // var arr3 = [1,2,3,4,5,6,7]
// // var arr4 = arr3.filter([5])
// // console.log(arr4)

// // var arr4 = [2,3,4,5,6,7]
// // const result = arr4.filter(checkAge)
// // function checkAge(arr4){
// //     return arr4!==5
// // }
// // console.log(result)

// // var newArr = []
// // var a  = [1,2,4,'aws']
// // for (var i = 0; i< a.length; i++ ){
// //     // console.log(typeof(a[i]))
// //     if(typeof(a[i])==='number'){
// //         // console.log('string')
// //         newArr.push(a[i])
// //     }else{
// //         console.log(' string')
// //     }
// // }
// // console.log(newArr)

// // const newArr = []
// // const l = [1,2,3,'WDF']
// // function filter_list(l) {
// //   // Return a new array with the strings filtered out
// //   for (var i = 0;i<l.length; i++ ){
// //     if(typeof(l[i])==='number'){
// //       newArr.push(l[i])
// //     }else{
// //       console.log('not string')
// //     }
// //   }
// //   return newArr;
// // }
// // filter_list(l)

// // const num1 = 132189

// // const digitalChange = (num1) =>{
// //   let str = num1.toString()
// //   let num2 = 0
// //   const splitStr =str.split('')
// //   for (var i =0 ; i< splitStr.length;i++){
// //    num2 =num2 + parseInt(splitStr[i])

// //   }
// //   console.log(num2)
// // }

// // digitalChange(num1)

// // You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// // #Examples:
// // Kata.getMiddle("test") should return "es"

// // const str = 'tes'
// // var newlen = Math.floor(str.length / 2)
// // console.log(newlen)
// // var newArr;
// // if(str.length % 2==0){
// //   // console.log(str[newlen-1])
// //   // console.log(str[newlen])
// //   newArr = (str[newlen-1] + str[newlen])
// //   console.log(newArr)

// // }else{
// //   // console.log('odd')
// //   newArr = str[newlen]
// //   console.log(newArr)
// // }

// // Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// // Examples
// // "the-stealth-warrior" gets converted to "theStealthWarrior"

// // var s = 'the-stealth-warrior';
// // var newStr =' '
// // const toCamel = (s)=>{
// //  for(var i=0;i<s.length;i++){
// //   newStr += s[i]
// //   if(s[i]=='-'){

// //   }
// //  }
// //  console.log(newStr)
// // }
// // toCamel(s)

// // function dummy(){

// // }

// // var a = 5 ;
// // let = a =6
// // const a = 34;
// // console.log(a)
// // function xyz(){
// //     // a = 10
// //     // let b = 9;
// //     a = 9
// //     console.log(a)
// //     // console.log(b)
// // }
// // xyz()
// // console.log(b)

// // const xyz = () =>{
// //     console.log('hello')
// // }

// // xyz()

// let arr= [1,2,4,5]
// let arr2 = [5,6,7]
// arr[1]=0
// console.log(arr)

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Input: nums = [3,2,3]
// Output: 3

// const majorityFind = (arr)=>{
//   let count = 0
//   let repeatNum = null
//   for (let num of arr){
//     console.log(num)
//     if(count == 0){
//       repeatNum = num
//     }
//     count += (num == repeatNum) ? 1 : -1
//   }
//   return repeatNum
// }

// console.log(majorityFind([1,2,3,2]))

// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]

// var arr = ["call", "call", "call"];
// const countFunc = (n) => {
// var temp =[]
//   for (var i = 0; i < arr.length; i++) {
//     temp.push(n+i)
//   }
//   return temp
// };

// console.log(countFunc(10))

//number palindrome
// const numPalindrome = (x)=>{
//     var x = String(x)
//     for (var i =0; i< x.length;i++){
//         if(x[i]!==x[x.length-1-i]){
//             return 'not a palindrome'
//         }
//     }
//     return 'palindrome'
// }

// console.log(numPalindrome(100021))

//hoisting in js
// x = 23; 
// var x; 
// console.log(x)

// //hoisting in let const
// // let or const me bhi hoisting hoti he but farq ye he k temporal dead zone banjata.
// y = 5;
// let y;
// console.log(y)

//arrow function me hoisting nhi hoti
// console.log(myFunc()); // TypeError: myFunc is not a function
// var myFunc = () => {
//   return "Hello!";
// };

const obj = {
    name: 'minhaj',
    age: 10,
    job: 'dev'
}

const arr = [1,2,3,4,5]

const {name,age,job}=obj
const [first, ...rest] = arr
console.log(first, rest)

const arr2= [1,2,3,4]
const result = arr2.map((num)=>num*2)
console.log(result)
const arr3 = arr2.sort()
console.log(arr3)

let x =5
if(true){
    let x=10
}
console.log(x)
