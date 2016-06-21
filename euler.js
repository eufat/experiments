var start = new Date().getTime();
// my answers from projecteuler.net
// common functions
function isEven(n) {
   return isNumber(n) && (n % 2 == 0);
}
function isOdd(n){
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}
function isNumber(n){
   return n == parseFloat(n);
}

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function fibSeq(nFib, max){
	var fibArray = [], fib = [];fib[0] = 0; fib[1] = 1;
	for(i = 2; i <= nFib; i++){
	    fib[i] = fib[i-1] + fib[i-2];
	    if (fib[i] <= max ){
	    	fibArray.push(fib[i]);
	    	
	    } else {
	        break;
	    }
	}
	return fibArray;
}

var faktorFaktor = function(num){
	var kantongFaktor = [];
    for (i = 0; i <= num; i++){
        if (num%i == 0){
            kantongFaktor.push(i);
        }
    }
    return kantongFaktor;
}


//try to understand this later
var getPrimeFactors = function(num) {
    num = Math.floor(num);
    var root, factors = [], x, sqrt = Math.sqrt, doLoop = 1 < num;
    while( doLoop ){
        root = sqrt(num);
        x = 2;
        if (num % x) {
            x = 3;
            while ((num % x) && ((x += 2) < root));
        }
        x = (x > root) ? num : x;
        factors.push(x);
        doLoop = ( x != num );
        num /= x;
    }
    return factors;
}

// 1 
/*
var x = 0;
for (i = 0; i < 1000; i++){
	if (i % 3 == 0 || i % 5 == 0){
		x = x + i;
	}
}

console.log(x);
*/

// 2

/*
var x = 0;
var fourMillion = 4000000;
function fibSeqEven(nFib, max){
	var fibArray = [], fib = [];fib[0] = 0; fib[1] = 1;
	for(i = 2; i <= nFib; i++){
	    fib[i] = fib[i-1] + fib[i-2];
	    if (fib[i] <= max ){
	    	if (isEven(fib[i])){
	    		fibArray.push(fib[i])
	   		}
	    } else {
	        break;
	    }
	}
	return fibArray;
}

var fibArray = fibSeqEven(1000, fourMillion);
for (i = 0; i < fibArray.length; i++){
	x = x + fibArray[i];
	console.log(x)
}
console.log("Total Is: " + x);
*/

// 3

/*

var arrayFaktor = getPrimeFactors(600851475143);
for (i = arrayFaktor.length-1; i > 0;  i--){
	if(isPrime(arrayFaktor[i])){
		console.log(arrayFaktor[i]);
		break;
	}
}

*/

//4

//5

//6
/*
var diffSquareSum = function(number){
	var square = [];
	for (i = 1; i <= number; i++){
		square.push(i*i);
	}

	var sum = [];
	for (i = 1; i <= number; i++){
		var x = 0;
		x = x + i;
		sum.push(i);
	}

	var sumArray = function(array){
		var x = 0;
		for (i = 0; i < array.length; i++){
			x = x + array[i];
		}
		return x;
	}
	console.log(sumArray(sum)*sumArray(sum) - sumArray(square));
}

diffSquareSum(100);
*/
//7

/*
var primeArray = [];
for (i = 0; i <= 1000000; i++){
    if (primeArray.length < 10001){
        if (isPrime(i)){
            primeArray.push(i);
        }

    }
}
console.log(primeArray[primeArray.length-1])

*/

var primeArray = [];
for (i = 0; i <= 2000000; i++){
    if (isPrime(i)){
        primeArray.push(i);
    }
}
var x = 0;
for (i = 0; i < primeArray.length; i++){
	x = x + primeArray[i];
}


console.log(x)



var end = new Date().getTime();
var time = (end - start) / 1000;
console.log('\n(Excuted in '+time + 's)');