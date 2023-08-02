console.log(`---------------------step 1-------------------------`);
let array = [20,31,40,25,23,11,29,9,60,2,11];
let len=array.length;
console.log(len);

console.log(`---------------------step 2-------------------------`);
console.log(`first element in array is ${array[0]} and last elemnet is ${array[array.length-1]}`);


console.log(`---------------------step 3------------------------`);
console.log(`thired last elemnt is ${array[array.length-3]}`);

console.log(`---------------------step 4------------------------`);
for (let index = 0; index < array.length; index=index+2) {
    const element = array[index];
    console.log(element);
    
}


console.log(`---------------------step 5------------------------`);
for (let index = 1; index < array.length; index=index+2) {
    const element = array[index];
    console.log(element);
}
console.log(`---------------------step 6------------------------`);


let c = 0;
for (let index = 0; index < array.length; index=index+2) {
    const element = array[index];
    c=c+element;
}
console.log(c);

console.log(`---------------------step 7------------------------`);

let sumodd=0;
for (let index = 1; index < array.length; index=index+2) {
    const element = array[index];
    sumodd=sumodd+element;

}    console.log(sumodd);
console.log(`---------------------step 8------------------------`);
let sumarray=0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sumarray=sumarray+element;
    
}console.log(sumarray);

console.log(`---------------------step 9------------------------`);


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    if (element%5==0) {
        console.log(`it is multiple of 5 ---->${element}`);
        
    } 
}
console.log(`---------------------step 10------------------------`);
let incl = array.includes(115);
console.log(incl);

console.log(`---------------------step 11------------------------`);
let inc = array.includes(23);
console.log(inc);


console.log(`---------------------step 12------------------------`);
array.splice(2,0,55,66)
console.log(array);

console.log(`---------------------step 13------------------------`);
 let remove=array.slice(4)
console.log(remove);
