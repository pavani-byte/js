// task-1
var demo = (x,y,callback) =>{
    return callback(x,y)
}
 demo(3,4, function(x,y)  {
   var result1= x+y;
   console.log("sum:",result1)
})

// task-2
var greet = callback =>{
    return callback("Alice")
}
greet( function(name){
    var result="hello"+ " " +name;
    console.log(result)
})

// task-3
var caluculate = (num1,num2,callback) => {
    return callback(num1,num2)
}
caluculate(10,5, function(num3,num4){
var result = num4-num3
console.log("difference:", result)
})
