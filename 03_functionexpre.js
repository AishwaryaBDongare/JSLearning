console.log(`--------------step 1------------------`);
var sqr = function(num){

console.log("Square is-->",num*num);
}
sqr(5);
sqr(6);
sqr(25);
sqr(100);
sqr(68.8);

console.log(`--------------step 2------------------`);
console.log(`type of sqaure is-->${typeof sqr}`);


console.log(`--------------step 3------------------`);
var area = function (h,w){
 console.log(`Area of rectangle is-->${h*w}`);
}
area(499,914);

console.log(`--------------step 4------------------`);
var swapp = function (n1,n2) {
 

    console.log("before swap -->",n1,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("after swap -->",n1,n2);
}
swapp("Mahi","Raina");
swapp(55,77);

console.log(`--------------step 5------------------`);
var per = function (wordd){
    console.log(`total character-->${wordd.length}`);
    console.log(`character at index 6-->${wordd.charAt(5)}`);
    console.log(`character at index 11-->${wordd.charAt(11)}`);
    var result = wordd.length-1;
    console.log(`charcter at last using length property -->${wordd.charAt(result)}`);
    console.log(`character at first-->${wordd.charAt(0)}`);
    var ss = wordd.split(" ");
    console.log(ss);

}

per("JS the most popular lamguage of internet");