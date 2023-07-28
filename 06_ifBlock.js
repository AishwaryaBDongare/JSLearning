


console.log(`----------------------------step 1--------------------------------------`);

function voteligible(age) {
    var tem = +age;
   if (age<=0 ||age>120 || isNaN(tem)) {
        console.log(`${age} age is invalid`);
    
   } else {
        if (age>=18) {
            console.log(`You are eligible for voting `);
        } else {
            console.log(`You are not eligible for voting `);

        }
   }


}
voteligible("50");
voteligible("sa");
voteligible(30);
voteligible(2);
voteligible(null);
voteligible(undefined);


console.log(`----------------------------step 2--------------------------------------`);

function str(strings){
   var result = strings.length ;
   if (result>10) {
    console.log(`lenght of given string contains more than 10 character `);
   } else {
    console.log(`lenght of given string does not contains more than 10 character `);

   }

}
str("JavaScript - E56");


console.log(`------------------------------step 3-------------------------------------`);

     function startwith(val){
       
 
            if (val.startsWith("Java")) {
                console.log(`Given string starts with Java`);
            } else {
                console.log(`Given string does not starts with Java`);

            }
        }
     
     startwith("JavaScript Language");
   