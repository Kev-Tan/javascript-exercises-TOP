const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  const res = arr.reduce((acc, val)=>{
      return acc+ val
  }, 0)

  return res
};

const multiply = function(arr) {
  const res = arr.reduce((acc, val)=>{
      return acc* val
  }, 1)

  return res
};

const power = function(a, b) {
  return a**b
};

const factorial = function(a) {
  let sum = 1
  for(let i = a; i>=1;i--){
    sum*=i
  }
  return sum
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
