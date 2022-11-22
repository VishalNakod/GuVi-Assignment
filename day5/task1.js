console.log("Task 1. using anonymous function")


// Task 1. using anonymous function
// a.Print odd numbers in array

let arr=[1,2,3,4,5,6,7,8,9,10,12,13,15]

var findOddNumber=function () {  //anonymous function
    return arr.filter((e) => {
        if (e % 2 !== 0)
        console.log(e) 
    })
}
findOddNumber()

//b.Convert all the strings to title caps in a string array 

let str=["vishal","ashwini","john","ross"]
var titleCase=function() {      //anonymous function
    str.forEach(element => {
      console.log(element[0].toUpperCase() + element.slice(1))
    })
}
titleCase()

// c.Sum of all numbers in an array

var add=function(){
    let sum=0;
    arr.forEach((element)=>{
        sum=sum+element;
    }
    )
    console.log(sum)
}
add()

// d:Return all the prime numbers in an array

var findPrimeNo=function () {  //anonymous function
let result=arr.filter((number)=>{
           for (var i = 2; i < number; i++) {
            if (number%i===0) {
                return false
                }
            }
            return true
       }   
       )
       console.log(result)
     
    }
 
findPrimeNo()

// e.Return all the palindromes in an array

const palindromeArray=["did",1234,12321,"noon"]   
var findPalidromes=function () {  //anonymous function
    palindromeArray.forEach((element) => {
        if (typeof (element) == "string") {
            if (element === element.split("").reverse().join("")) {
                console.log(element)
            }
        }
        else {
            if (element === parseInt(element.toString().split("").reverse().join(""))) {
                console.log(element)
            }

        }
    })
}

findPalidromes()


// f. Return median of two sorted arrays of the same size.

let arr1=[1,2,3,4,5,6]
let arr2=[1,2,3,4,5,6]

var medianArray= function(arr1,arr2){  //anonymous function

// check the lenght of both array for same size
if(arr1.length===arr2.length){
// check the array size is odd or even
if((arr1.length)%2!==0){    
  let  median1=arr1[((arr1.length+1)/2)-1];
  let  median2=arr1[((arr2.length+1)/2)-1];
  let  median=(median1+median2)/2
  console.log(median)
}else{
    let median1=(arr1[((arr1.length/2)-1)]+arr1[(arr1.length/2)])/2
    let median2=(arr2[((arr2.length/2)-1)]+arr2[(arr2.length/2)])/2
    let median=(median1+median2)/2
    console.log(median)
}
}else{
    console.log("both array is not of same size")
}
}
medianArray(arr1,arr2)



//  var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// numArray = numArray.filter((number) => {
//   for (var i = 2; i <number; i++) {
//     if (number % i === 0) return false;
   
//   }

//   return true;
// });

// console.log(numArray);




// g.Remove duplicates from an array

let a =[1,1,3,4,5,6,7,2,4,5]
let b = []

var dublicateArray=function () {
    for (let k = 0; k < a.length; k++) {
        if (b.indexOf(a[k]) === -1) {
            b.push(a[k])

        }

    }
    console.log(b)
}

dublicateArray()

// OR using Set method

 let uniq =  new Set(a);
console.log("After removing dublicates:",uniq)






// h.Rotate an array by k times
data=[1,2,3,41,51]
let k=2
var rotateArray=function() { //anonymous function

    
    for (let i = 0; i < k; i++) {
        data.unshift(data[data.length - 1])
        data.pop()
        
    }
    console.log(data)
}
rotateArray()


