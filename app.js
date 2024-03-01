// console.log("hello ")


// function xyz(){
//     console.log(a)
// }
// xyz()
// var a = 10;

// let arr1 = [1,2,3,4]
// let arr2 = arr1
// arr2[0]=4
// console.log(arr1)
// console.log(arr2)

// function fac (num){
//     if(num<=0){
//         return 1
//     }
//     return num * fac(num-1)
// }

// console.log(fac(3))

// function palindrome (str){
//     for(var i =0; i< str.length/2;i++){
//         if(str[i]==str[str.length-1]){
//             return "palindrom"
//         }else{
//             return "not a palindrome"
//         }
//     }
// }

// console.log(palindrome('mom'))

// var a = console.log('hello')
// if(a){
//     console.log('hello')
// }else{
//     console.log('world')
// }

// var arr3 = [1,2,3,4,5,6,7]
// var arr4 = arr3.filter([5])
// console.log(arr4)

// var arr4 = [2,3,4,5,6,7]
// const result = arr4.filter(checkAge)
// function checkAge(arr4){
//     return arr4!==5
// }
// console.log(result)

// var newArr = []
// var a  = [1,2,4,'aws']
// for (var i = 0; i< a.length; i++ ){
//     // console.log(typeof(a[i]))
//     if(typeof(a[i])==='number'){
//         // console.log('string')
//         newArr.push(a[i])
//     }else{
//         console.log(' string')
//     }
// }
// console.log(newArr)

// const newArr = []
// const l = [1,2,3,'WDF']
// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   for (var i = 0;i<l.length; i++ ){
//     if(typeof(l[i])==='number'){
//       newArr.push(l[i])
//     }else{
//       console.log('not string')
//     }
//   }
//   return newArr;
// }
// filter_list(l)


// const num1 = 132189 

// const digitalChange = (num1) =>{
//   let str = num1.toString()
//   let num2 = 0
//   const splitStr =str.split('')
//   for (var i =0 ; i< splitStr.length;i++){
//    num2 =num2 + parseInt(splitStr[i])

//   }
//   console.log(num2)
// }

// digitalChange(num1)

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"

const str = 'tes'
var newlen = Math.floor(str.length / 2)
console.log(newlen)
var newArr;
if(str.length % 2==0){
  // console.log(str[newlen-1])
  // console.log(str[newlen])
  newArr = (str[newlen-1] + str[newlen])
  console.log(newArr)

}else{
  // console.log('odd')
  newArr = str[newlen]
  console.log(newArr)
}

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// ['a','b','c','d','f'] -> 'e'

// const arr = ['a', 'b', 'c', 'd']

