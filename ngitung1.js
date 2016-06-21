var start = new Date().getTime();
/*
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var myArray = []
var aNumber;
for (i=1; i<=10000000; i++){
	x = getRandomArbitrary(1, 100);
	y = getRandomArbitrary(1, 100);
	z = getRandomArbitrary(1, 100);
	console.log("Inserting x: " + x + ",y: " + y + "and z:" + z)
	if (Math.pow(x,2) == Math.pow(y,2) + Math.pow(z,2) && x+y+z <= 2000 && x > 0 && y > 0 && z > 0){
		console.log("I Found It! x: " + x + ",y: " + y + "and z:" + z)
	}
} */

/* Soal No. 57 Zenius
Ada berapa segitiga siku-siku yang dapat dibentuk dengan semua sisinya integer dengan keliling antara 1 sampai 20,000 (inclusive)? 

Note: segitiga dengan sisi [3,4,5] dan [4,3,5] dianggap satu segitiga yang sama. Tapi [15,20,25] berbeda dengan [10,24,26] (dihitung sebagai 2 segitiga yang berbeda) walaupun jumlah sisinya sama. 
*/
/*

function takSama(a, b){
	while(b != 0){
		c = a % b;
		a = b;
		b = c;
	}
	return a;
}

*/
function triple(n){
	counter = 1;
	if (n>0){
		for(a = 1; a <= n-1; a++){
			for(b = a + 1; b <= n; b++ ){
				//if (takSama(a,b) == 1) {
					for(c = b + 1; c <= n + 1; c++){
						if(a*a + b*b == c*c /*&& a + b + c = n*/){
							if(a + b + c == 1000){
								console.log(a + " " + b + " " + c + " (" + counter  + ")" + "[" + (a+b+c) + "]");
								console.log(a*b*c);
								counter++;

							}
						}
					}
				//}
			}
		}
		counter -= 1;
		console.log("ketemu " + counter + " triple! yeay");
	} else {
		console.log("jangan angka negatif woy!");
	}
}

triple(1000);

/*
Problem #2
Sesuai dengan definisi |x| yang terkenal itu, maka berapa nilai dari:
|x+1|+|x−2|+|x+3|+|x−4|+...+|x−100|
Untuk nilai x = 50
*/
/*
var x = 50;
var hasil;
var arrayAngka = [];
var z = 0;

for (i=1 ; i <= 100; i++){
	if (isOdd(i)){
		var hasilOdd = Math.abs(50 + i);
		console.log("  " + hasilOdd);
		arrayAngka.push(hasilOdd);

	} else if (isEven(i)){
		var hasilEven = Math.abs(50 - i);
		console.log(hasilEven);
		arrayAngka.push(hasilEven);
	}
}

for (k = 0; k < arrayAngka.length; k++){
	z = z + arrayAngka[k];
}
console.log(z);


function isEven(n) {
   return isNumber(n) && (n % 2 == 0);
}
function isOdd(n){
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}
function isNumber(n){
   return n == parseFloat(n);
}
*/

/* 
Problem #4
Didefinisikan n! untuk sebuah n anggota bilangan cacah sebagai berikut: 
n!=1 untuk n = 0, dan n!=n∗(n−1)! untuk n>0
Didefinisikan P(n) sebagai jumlah faktorial dari digit-digit n dalam basis 10.
Contoh :
P(123)=1!+2!+3!=1+2+6=9

Berapakah nilai ∑k=1nP(k) untuk n = 1000 ?
*/
/*
function factorial(num){
	for (i = num - 1; i > 0; i--){
		num = num * i;
	}
	return num;
}

var sum = 0;


function sumFactorial(num){
	num = num.toString();
	for (i = 0; i < num.length; i++){
		sum = sum + factorial(parseInt(num.charAt(i))); //This thing not working!
	} 

	console.log(sum);
	
}

sumFactorial(123);
*/


/*Problem #47
Berapakah jumlah semua palindrom antara 1,000,000,000 sampai 10,000,000,000 (inclusive)?*/

/*
var palindromeArray = [];


var i = 1000000000,
	counter;
while (i < 10000000000){
	counter = i.toString().split("");
	if ( counter.toString() === counter.reverse().toString()){
		palindromeArray.push(i);
	}
	i++;
}

console.log("Total Palindrome: " + (palindromeArray.length-1));

var x = 0;

for (i = 0; i < palindromeArray.length - 1; i++){
	x = x + palindromeArray[i];
}

console.log("Sum of Palindrome: " + x);


/*
function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

function isInt(n) {
    return n === +n && n === (n|0);
}

function simpleFractionTwo(x, y){
	smallest = Math.min(x, y);
	for (i = 2; i <= smallest; i+=2) {
		if (isInt(x) && isInt(y)){
			x = x/i;
			y = y/i;
		} else {
			break;
		}
	}
	var fractionArray = [x,toFixed(y)];
	console.log(fractionArray);
}

simpleFractionTwo(58728499200, 1869589271916194400000);

*/

/*
var i;
var fib = []; //Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=3; i++){
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}
*/
var end = new Date().getTime();
var time = end - start;
console.log('Executed in ' + time + 'ms');


