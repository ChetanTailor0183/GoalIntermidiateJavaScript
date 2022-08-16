/**
 * Write a JavaScript function to get ISO-8601 numeric 
 * representation of the day of the week (1 (for Monday) to 7 
 * (for Sunday)).

            Test Data :
            dt = new Date(2015, 10, 1);
            console.log(ISO_numeric_date(dt));
            7
            
 * @param {Date} d as date
 * @returns day of the week eg 1 for monday, 2 for tuesday etc.
 */
function ISO_numeric_date (d) {
    var res = d.getDay();
    if(res === 0) {return 7};
    return res;
    
    }
    
console.log(ISO_numeric_date(new Date(2015, 10, 1)));
console.log(ISO_numeric_date(new Date(2015, 10, 2)));
console.log(ISO_numeric_date(new Date(2018, 3, 5)));
console.log(ISO_numeric_date(new Date(2018, 3, 6)));

