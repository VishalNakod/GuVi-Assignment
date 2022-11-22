console.log("Task3:Do the below programs in arrow functions.")



// 3. Do the below programs in arrow functions.



// a. Print odd numbers in an array
let arry=[1,2,3,4,5,6,7,8,9,10,12,13,15]

var findOddNumber= ()=> {  //arrow function
    return arry.filter((e) => {
        if (e % 2 !== 0)
        console.log(e) 
    })
}
findOddNumber()


//b.Convert all the strings to title caps in a string array 

let str1=["vishal","ashwini","john","ross"]
var titleCase=()=> {      //arrow function
    str1.forEach(element => {
      console.log(element[0].toUpperCase() + element.slice(1))
    })
}
titleCase()


// c.Sum of all numbers in an array

var add=()=>{ //arrow function
    let sum=0;
    arry.forEach((element)=>{
        sum=sum+element;
    }
    )
    console.log(sum)
}
add()


// d:Return all the prime numbers in an array

var findPrimeNo= ()=> {  //arrow function
    let result=arry.filter((number)=>{
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

const palindromeArray1=["did",1234,12321,"noon"]   
var findPalidromes=()=> {  //anonymous function
    palindromeArray1.forEach((element) => {
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
    


