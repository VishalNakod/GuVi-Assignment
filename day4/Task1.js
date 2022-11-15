
//   Task1:How to compare two JSON have the same properties without order
  
  var obj1={name:"Person1",age:5}
  var obj2={age:5,name:"Person1"}
      
 console.log( JSON.stringify(obj1) === JSON.stringify(obj2))
 console.log("Comaprision result is false")
 
      
