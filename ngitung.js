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

function triple(n){
	counter = 1;
	if (n>0){
		for(a = 1; a <= n-1; a++){
			for(b = a + 1; b <= n; b++ ){
				if (takSama(a,b) == 1) {
					for(c = b + 1; c <= n + 1; c++){
						if (a*a + b*b == c*c && a + b + c <= n){
							console.log(a + " " + b + " " + c + " (" + counter  + ")" + "[" + (a+b+c) + "]");
							counter++;
						}
					}
				}
			}
		}
		counter -= 1;
		console.log("ketemu " + counter + " triple! yeay");
	} else {
		console.log("jangan angka negatif woy!");
	}
}

triple(20000);

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

/*Palindrome */
var palindromeArray = [];

for (i = 1000000000; i < 100000000000; i++){
	var theString = i.toString();
	if (theString.charAt(0) == theString.charAt(9) &&
		theString.charAt(1) == theString.charAt(8) &&
		theString.charAt(2) == theString.charAt(7) &&
		theString.charAt(3) == theString.charAt(6) &&
		theString.charAt(4) == theString.charAt(5)){
		palindromeArray.push(i);
		console.log(i);
	}
}
console.log("PALINDROME TOTAL: " + palindromeArray.length);