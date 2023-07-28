function gradeCalculator(marks) {
    var res = +marks;
    if (marks <= 0 || marks > 100 || isNaN(marks)) {
        console.log(`Invalid marks , Please provide valid Marks`);
        console.log(`----------------------------------`);
    } else {
        if (marks >= 90) {
            console.log(`Fantactic marks: ${marks}, your grade is A+  :)`);
            console.log(`----------------------------------`);

        } else {
            if (marks >= 75 && marks < 90) {
                console.log(`Excellent marks: ${marks}, your grade is A :)`);
                console.log(`----------------------------------`);


            } else {
                if (marks >= 50 && marks < 75) {
                    console.log(`Good marks: ${marks}, your grade is B :|`);
                    console.log(`----------------------------------`);


                } else {
                     (marks >= 35 && marks < 50) 
                        console.log(` Marks: ${marks}, your grade is C , Need improvement :(`);
                        console.log(`----------------------------------`);


                    

                }
            }


        }
    }


}
gradeCalculator(98);
gradeCalculator(80);
gradeCalculator(90);
gradeCalculator(0);
gradeCalculator(150);
gradeCalculator(-7);
gradeCalculator(35);
gradeCalculator(29);
gradeCalculator(64);
gradeCalculator(49);
gradeCalculator("91");
gradeCalculator("Eighty");
gradeCalculator(undefined);
gradeCalculator(null);