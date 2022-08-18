console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.', 19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

/**
 * Write a JavaScript function to truncates a string if it is longer than the specified 
 * number of characters. Truncated strings will end with a translatable ellipsis sequence
 *  ("…") (by default) or specified characters.

        Test Data :
        console.log(text_truncate('We are doing JS string exercises.'))
        console.log(text_truncate('We are doing JS string exercises.',19))
        console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

        "We are doing JS string exercises."
        "We are doing JS ..."
        "We are doing !!"
        
 * @param {String} string //String to be truncated
 * @param {Integer} num //Number of chars to be shown to user
 * @param {String} char //type of string to be concaninated to the original string
 * @returns Trimmed and concatinated string according to user parameters
 */
function text_truncate(string, num, char) {
    if (num != null && char != null){
        num -= char.length;
        if (string.length > num) {
            let newString = string.slice(0, num);
            newString += char;
            return newString;
        }
        return string;
    }
    else if(num != null && char == null){
        num -= 3;
        if (string.length > num) {
            let newString = string.slice(0, num);
            newString += "...";
            return newString;
        }
        return string;
    }
    else{
        return string;
    }
    
}




