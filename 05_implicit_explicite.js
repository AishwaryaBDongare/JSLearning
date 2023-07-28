
console.log(`Implicit conversion to string `);



result = "3" + 2;
console.log(`Result is --->${result}`);
console.log(`"2"is converted into string`);
console.log(`--------------------------------------`);

result ="3" + true;
console.log(`Result is --->${result}`);

console.log(`"true"is converted into string`);
console.log(`--------------------------------------`);

result = "3" + undefined;
console.log(`Result is --->${result}`);

console.log(`"undefined"is converted into string`);
console.log(`--------------------------------------`);

result = "3" + null;
console.log(`Result is --->${result}`);

console.log(`"null"is converted into string`);
console.log(`--------------------------------------`);

console.log(`Implicit Boolean conversion to number`);
res = "4" - true;
console.log(`Result is --->${res}`);
console.log(`"true"is converted into number`);
console.log(`--------------------------------------`);


res = "4" + true;
console.log(`Result is --->${res}`);
console.log(`"true"is converted into number`);
console.log(`--------------------------------------`);




res = "4" + false;
console.log(`Result is --->${res}`);
console.log(`"false"is converted into number`);
console.log(`--------------------------------------`);

console.log(`Implicit string conversion to Number`);
res="4" - "2";
console.log(`Result is --->${res}`);
console.log(`string is converted into number is converted into number`);
console.log(`--------------------------------------`);

res="4" - 2;
console.log(`Result is --->${res}`);
console.log(`"4" is converted into number is converted into number`);
console.log(`--------------------------------------`);


res="4" * 2;
console.log(`Result is --->${res}`);
console.log(`"4" is converted into number is converted into number`);
console.log(`--------------------------------------`);

res="4" / 2;
console.log(`Result is --->${res}`);
console.log(`"4" is converted into number is converted into number`);
console.log(`--------------------------------------`);
