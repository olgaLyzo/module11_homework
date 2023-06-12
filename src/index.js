
let num;
function check(num){
	if (typeof window !== 'undefined') {
  	num = +prompt("put the number");
}
  if(typeof num !== "number" || isNaN(num)){
  	return "you write uncorrect data";   
  }
  if(num % 2 === 0){
  	return "its an even number";
  }else{
  	return "its an odd number";
  }  
}
const result = check(num);
console.log(result);

module.exports = {check};