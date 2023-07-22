console.log("----step 1----");
function hello() {
    console.log("Welcome To JavaScript");
}
hello();

console.log("----step 2----");
function greting() {
    console.log("lets learn functions");
}
greting();

console.log("----step 3----");
function personalDetails(firstName,lastName,collegeName) {
    console.log("First Name -->",firstName);
    console.log("Last Name -->",lastName);
    console.log("College Name -->",collegeName);

}
val1="Aishwarya";
val2="Dongare";
val3="AIT";
personalDetails(val1,val2,val3);

console.log("----step 4----");
function swapValue(n1, n2){
    console.log("before swap -->",n1,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("after swap -->",n1,n2);
    console.log("--------------------------");

}
var name1="Virat";
var name2="Anushka";
swapValue(name1,name2);
var num1=1000;
var num2=2000;
swapValue(num1,num2);

console.log("----step 5----");
function add(a1,a2,a3){
    console.log("values -->",a1,a2,a3);
    var result=a1+a2+a3;
    return result ;
}
var v1=10.23;
var v2 = 600;
var v3=40;
var res =add(v1,v2,v3);
console.log("result is -->",res);
console.log("--------------------------");


var v1="Hello";
var v2 = "Good";
var v3="Morning";
var res =add(v1,v2,v3);
console.log("result is=",res);

console.log("----step 5----");
function bank(bname,accnum,loc,pincode){
    console.log("Bank Name -->",bname,"Account Number -->",accnum,"Location",loc,"Pin Code",pincode);
    console.log("--------------------------");


}
var vv1="CITI  Bank";
var vv2=3456782345;
var vv3="Pune";
var vv4=431202;
bank(vv1,vv2,vv3,vv4);

var vv1="Axis  Bank";
var vv2=3456556565;
var vv3="Mumbai";
var vv4=431352;
bank(vv1,vv2,vv3,vv4);

var vv1="HDFC  Bank";
var vv2=7558772345;
var vv3="Pune";
var vv4=4355552;
bank(vv1,vv2,vv3,vv4);