console.log(`----------------Assignmnet 2----------------`);

function stringHand() {
    console.log(`--------------step1----------------`);
    var str ="    Hey you are doing good , keep it up      ";
    console.log(str);
    console.log(`--------------step2----------------`);
    console.log(`Lenght of string is--> ${str.length}`);
     var res= str.trim();

     console.log(`--------------step3----------------`);
     console.log(`removed extra spaces--> ${res}`);

     console.log(`--------------step4----------------`);

     console.log(`extra spaces removed are--> ${str.length-res.length}`);

     console.log(`--------------step5----------------`);
     console.log(`first character is--> ${res.charAt(0)},last character is --> ${res.charAt(res.length-1)}`);

     console.log(`--------------step6----------------`);
     console.log(`Total words are--> ${res.split(" ")}`);

     console.log(`--------------step7----------------`);
     console.log(`Index of "Good " is--> ${res.indexOf("good")}`);

     console.log(`--------------step8----------------`);
     console.log(`string starting from 22 ${res.slice(22)}`);

     console.log(`--------------step9----------------`);
     console.log(`String end with "up "--> ${res.endsWith("up")}`);

     console.log(`--------------step10----------------`);
     console.log(`string starts with "Hey"--> ${res.startsWith("Hey")}`);





}
stringHand();