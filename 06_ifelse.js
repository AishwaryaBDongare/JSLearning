var eligibitly = function (age,gen){

        if (age>=21 && gen=="Male") {
            console.log(`He is eligible for Marriage`);

            console.log(`-----------------`);
        } else {
            if (age>=18 && gen =="Female") {
                console.log(`She is eligble for Marriage `);
                console.log(`-----------------`);

            } else {    

                if (age>=21 && gen=="other") {
                    console.log(`Invalid data`);
                    console.log(`-----------------`);

                } else {
                    console.log(`You are not eligible for marriage`);
                    console.log(`-----------------`);

                    
                }
                        }
        }


}


eligibitly(17 ,"Male");
eligibitly(25 ,"Male");
eligibitly(28 ,"Female");
eligibitly(16 ,"Female");
eligibitly(35 ,"other");
eligibitly(41 ,"other");