/**
 * Write a JavaScript function to check whether given value types are same or not.
 * @param {Any Value} value1 value of any type
 * @param {Any Value} value2 value of any type
 * @returns boolean as values are of same type or not
 */
function is_sameType(value1, value2) {
    if(is_nan(value1) || is_nan(value2)) {
     return is_nan(value1) === is_nan(value2);
    }
    return toString.call(value1) === toString.call(value2);
}

//Check the if value is not a number
function is_nan(val)
    {
    return val !== val;
   }

console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));

