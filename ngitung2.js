var start = new Date().getTime();
function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}


/* 
Problem #54

Berapakah jumlah semua bilangan prima yang memenuhi syarat berikut: 
Terdiri dari 7 digits
Digit ke 3 adalah 3
Digit ke 6 adalah 5
In short, the sum of all primes possessing this pattern **3**5*
*/
/*
var digit3,
    digit6,
    iString,
    totali,
    i, 
    num = 1,
    x = 0;
    iArray = [];

for (i = 1000000; i <= 9999999; i++) {
    iString = i.toString();
    digit3 = iString.charAt(2);
    digit6 = iString.charAt(5);
    if ( digit3 == "3" &&  digit6 == "5" && isPrime(i)){
        console.log("SELECTED: " + i);
        x = x + i;
        console.log(x);
    }
}
*/




/*
Problem #55

Jika p(i) menandakan bilangan prima positif ke i. Maka kita bisa dapatkan: 
p(1)=2 , p(2)=3 , p(3)=5 , p(4)=7 , dan seterusnya. 

Berapakah nilai: ∑i=1np(p(i)) untuk n = 10,000.

*/
/*
function primePrimeN(n){

    var primeArray = [0],
    counter
    x = 0;

    for (i = 0; i <= n*1000; i++){
        if (isPrime(i)){
            primeArray.push(i);
        }
    }

    for (j = 1; j <= n; j++){
        counter = primeArray[j];
        x = x + primeArray[counter];
        console.log(x);
    }
    console.log("RESULT IS: " + x);
}

primePrimeN(10000);
*/




/*
Problem #56

Binary adalah sistem penulisan dalam basis 2, which is a common system untuk merepresentasikan data di digital domain. 

Berapa digit kah yang kita butuhkan untuk menuliskan 100,000 pertama bilangan prima positif secara berurutan dalam binary system? 

Contoh: 2 ditulis 10, 3 ditulis 11, 5 ditulis 101, 7 ditulis 111, dst. Jadi 4 bil prima pertama jika dituliskan dalam binary system adalah 1011101111, dan totalnya kita butuh 10 digits.
*/
/*
var primeArray = [],
    binaryArray = [],
    sumBinary,
    binaryPrime;

 for (i = 0; i <= 10000000; i++){
        if (primeArray.length < 100000){
            if (isPrime(i)){
                primeArray.push(i);
            }
        } else {
            break;
        }
    }
console.log(primeArray.length);
console.log(primeArray[3]);
for (k = 0; k <= primeArray.length-1 ; k++){
    var primeNumber = primeArray[k];
    binaryPrime = primeNumber.toString(2);
    binaryArray.push(binaryPrime);
}

sumBinary = binaryArray.join("");
console.log(sumBinary.length);


*/
/* Problem #18


var kantongFaktor = [];
var kantongKantong = [];
/*
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


function faktorFaktor(num){
    for (i = 0; i <= num; i++){
        if (num%i == 0){
            kantongFaktor.push(i);
        }
    }
    return kantongFaktor.length;
}
*//*

for (i = 1; i <= 1000 ; i++ ) {
    console.log("Bilangan: "+ i);
    for (k = 0; k <= i; k++){
        if (i%k == 0){
            kantongFaktor.push(k);
        }  
    }
    kantongKantong.push(kantongFaktor.length); 
    kantongFaktor.length = 0; 
}

console.log(kantongKantong);

/*

var sesuatu = Math.max.apply(null, kantongKantong);
console.log(sesuatu); 
*//*

var x ;



var primeArray = [];
for (i = 0; i <= 10000; i++){
    if (primeArray.length < 100){
        if (isPrime(i)){
            primeArray.push(i);
        }
    } else {
        break;
    }
}

x = primeArray.reduce( function(a,b) {
    return a*b;
});

console.log("Length: " + primeArray.length);
console.log("primeArray multiply: " + x);


/*
var coordinatePack = [[3,9],[5,15],[2,5],[-1,5],[-2,2],[5,7],[9,21],[8,19],[-5,-12],[4,9],[6,12],[7,15],[-7,-19],[-9,-18],[11,21],[12,32],[15,130],[21,45],[-19,-15],[-10,17],[-7,-10]] ;
var newPack = []
for (i = 0; i < coordinatePack.length; i++){
    var coordinate = coordinatePack[i],
        x = coordinate[0],
        y = coordinate[1];
    if ( y == 2 * x + 3 ){
        newPack.push(coordinate);
    }
}
console.log(newPack);
*/

/*
var primeArray = [];
for (i = 0; i <= 1000000; i++){
    if (primeArray.length < 2000){
        if (isPrime(i)){
            primeArray.push(i);
        }
    } else {
        break;
    }
}
var x = 0;

for (i = 1000; i <= 2000; i++) {
    x = x + primeArray[i-1];
}
console.log(x);
*/
/*
function faktorFaktor(num){
    for (i = 0; i <= num; i++){
        if (num%i == 0){
            console.log(i);
            kantongFaktor.push(i);
        }
    }
    return kantongFaktor;
}

console.log(faktorFaktor(1076869384819200));
*/

/*
var anArray = [],
    x = 0;
for (i = 1; i <= 100000000; i++){
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0&& i % 7 === 0){
        anArray.push(i);
    }
}
for (i = 0; i < anArray.length; i++){
    x = x + anArray[i];
}
console.log(x);

*/


/*
var primeArray = [],
    x = 0;
for (i = 0; i <= 10000000; i++){
    if (primeArray.length < 10000){
        if (isPrime(i) && i < 10000){
            primeArray.push(i);
        }
    } else {
        break;
    }
}

console.log(primeArray[primeArray.length-1]);
for (i = 0; i < primeArray.length; i++){
    x = x + primeArray[i];
}

console.log(x);
*/


/* Fibonnacci Prime */
/*
var i;
var fib = [];
var fibPrimeArray = [];
var billion = 1000000000;

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=50; i++){
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-1] + fib[i-2];
    if (fib[i] <= 1000000000){
        if (isPrime(fib[i])){
            fibPrimeArray.push(fib[i]);
        }
    } else {
        break;
    }
}

console.log(fibPrimeArray);
console.log("Semua bilanganya: " + fibPrimeArray.length);
*/

// Jawaban P1
var anArray = [];
x = 0;
for (k = 1; k <= 100; k++){
    anArray.push(k);
}
for (i = 0; i < anArray.length; i++){
    x = x + anArray[i];
}

console.log(x);










var end = new Date().getTime();
var time = end - start;
console.log('Script was executed in ' + time + 'ms');

