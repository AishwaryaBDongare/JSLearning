function str(word) {
    var res = word.length;
    console.log(`Length of given string is-->${res} length squre-->${res * res}`);


}
str("JavaScript");
str("Google Chrome");
str("Developer Smart");
console.log(`-------------------------------------------------------`);
function nw(strn) {
    var len =strn.length;
    console.log(`Length is-->${len}`);

    var sult = strn.split(" ");
    var res = sult.length;
    console.log(`total words in string ${res} and ssqure is ${res * res}`);

    console.log(`divide the length with total words in string is -->${len / res}`);


}
nw("I am Angular  Developer");

console.log(`------------------------------------------------------`);

console.log(`---------------step 1-----------------`);

var greaterNumber = function (n1, n2) {

    var res = n1 > n2 ? n1 : n2;
    console.log(`Greater number is-->${res}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`---------------step 2-----------------`);

var evenodd = function (num) {
    var result = num % 2 ==0 ?"even" :"odd";
    console.log(`Given number is -->${result}`);
}
evenodd(29);
evenodd(44);
evenodd(101);
evenodd(0)
console.log(`---------------step 3-----------------`);

var wordLength = function(val){
    var n= val.length;
    var enod = n%2 == 0 ?"even":"odd";
    console.log(`Length of the string is -->${enod}`);

}
wordLength("JavaScript");
wordLength("developer");
wordLength("google");