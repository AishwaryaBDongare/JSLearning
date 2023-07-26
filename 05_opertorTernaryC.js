console.log(`--------------------------Assignment 1-----------------------------------`);

var elig = function (n1,n2,n3,name){
    var result = n1 == 70 ||n2 == 80 ||n3 == 90 ?  `Congrates, ${name} you are eligible for interview`:`Sorry, ${name} you are not eligible for the interview`;
    console.log(`${result}`);



}
elig(80,86,90,"Aishwarya");

elig(60,79,88,"oggy");
elig(70,65,55,"vaishali");

console.log(`--------------------------Assignment 2-----------------------------------`);


function maleMarriageEligibility(gen,age,BoyName){
    var result = age >=21 ?`Hey, ${BoyName} you are eligible for Marriage`: `Hey, ${BoyName} you are not eligible for Marriage`;
    console.log(result);


}
maleMarriageEligibility("Male",25,"Bill gates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(`-------------------------------------------------------------------------------`);

function feMaleMarriageEligibility(gen,age,gName){
    var result = age >=18 ?`Hey, ${gName} you are eligible for Marriage`: `Hey, ${gName} you are not eligible for Marriage`;
    console.log(result);
}
feMaleMarriageEligibility("Female",16,"Jenifer");
feMaleMarriageEligibility("Female",27,"Malinda Gates");