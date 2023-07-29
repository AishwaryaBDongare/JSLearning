var year = function(y){
    var lep=+y;
    if (isNaN(y)) {
        console.log(`Invalid Data`);
    } else {
        if (y%4==0 && y%100!=0) {
            console.log(`${y} is  a leap year `);   
        } else if (y%400==0) {
            console.log(`${y} is  a leap year `);   

        } else {
            console.log(`${y} is not a leap year `);   

        }
        
    }

}


year(2020);
year(1999);
year(1600);
year(1945);

year("twenty twenty");
year(undefined);
year(NaN);
year(1750);