console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(897323492843));

/**
 * Write a JavaScript function to print an integer with commas 
 * as thousands separators.

        Test Data :
        console.log(thousands_separators(1000));
        "1,000"
        console.log(thousands_separators(10000.23));
        "10,000.23"
        console.log(thousands_separators(100000));
        "100,000"

 * @param {Integer} x number to be saperated
 * @returns saperated number
 */
function thousands_separators(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




