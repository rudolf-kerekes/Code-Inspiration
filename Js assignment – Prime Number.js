
//   3. Prime number
//   Write a function that checks whether a number is prime.
//   The following function call should output Prime:


var x=(isPrime(73))?"prime":"Composite";

document.write (x);

function isPrime (number){
	var result = 1;
		for (var a=2;a<number;a++){
			if(number%a==0){
			result = 0;
			break;
			}
		}	
		return result;
	}


// time: 20 min