
// Assignment 1: Function and Array

function max(...numbers){
  var args = Array.from(numbers);
  var sortedArgs = args.sort();
  var lastNumber = sortedArgs[sortedArgs.length-1];
  console.log(lastNumber);
  
}
max(1, 2, 4, 5);
max(5, 2, 7, 1, 6); 

// Assignment 2: Object

function calculate(args){ 
let result;
  if(args.op==="+"){
    result=args.n1+args.n2;
  }else if(args.op==="-"){
    result=args.n1-args.n2;
  }else{
    result="Not supported";
  }
  return result; 
}
class args {
  constructor(n1, op, n2) {
    this.n1 = n1;
    this.op = op;
    this.n2 = n2;
  }
};

const way1 = new args(1,'+',2);
console.log(calculate(way1));

var way2 = {n1:3, op:'-', n2:4};
console.log(calculate(way2));

// Assignment 3: Function, Array, and Object

function avg(data){
  let sum = 0;
  let avg = 0;
  for( var i = 0; i < arr.size; i += 1 ){
    sum += arr.products[i].price;
  }
  avg = sum/arr.size;
  return avg;
}
let avg = {
  size:3,
  products:[
    {
    name:"Product 1",
    price:100 },
    {
    name:"Product 2",
    price:700 },
    {
    name:"Product 3",
    price:250 }
    ]
};

console.log(avg(avg));
