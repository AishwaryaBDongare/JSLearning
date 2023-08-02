

let array =["Banana","Orange","Apple","Mango","Water melon"];
console.log(array);

console.log(`--------------------step 1-------------------------`);
console.log(`first element in array is ${array[0]} and last elemnet is ${array[array.length-1]}`);

console.log(`--------------------step 2-------------------------`);

array.unshift("Papya");
console.log(array);
console.log(`--------------------step 3-------------------------`);

array.splice(4,1)
console.log(array);
console.log(`--------------------step 4-------------------------`);
array.push("Pineapple");
console.log(array);

console.log(`--------------------step 5-------------------------`);

array.splice(4,0,"Dragon Fruit")
console.log(array);

console.log(`--------------------step 6-------------------------`);

array.splice(2,1,"Kiwi")
console.log(array);

console.log(`--------------------step 7-------------------------`);
for (let index = 1; index <=4; index++) {
    const element = array[index];
    console.log(element);
}

console.log(`--------------------step 8-------------------------`);


for (let index = array.length-3; index < array.length; index++) {
    const element = array[index];
    console.log(element);
   
}