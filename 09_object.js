let professor={

    name: "Dr Bill",
    DOJ: "12/11/2000",
    Subject: "Microprocessor",
    Department:"Computer",
    degress:{
        engineering :'CSC',
        phd:'Adv computing',
        MBA:'HR',
        show:  function (){
            console.log(`Degrees are : ${this.engineering},${this.phd},${this. MBA}`);
        }
    
    },
    certificates : ["Hacker Rank" ,"certificate in IFE Course ","Certifictae in Adv Programmimg "]
   
}
professor.degress.show();
professor.totalExperience = "14 years";
console.log(professor);
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);
