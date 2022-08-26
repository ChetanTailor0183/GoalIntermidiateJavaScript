/**Write a JavaScript function to print all the methods 
 * in an JavaScript object.

        Test Data :
        console.log(all_properties(Array));
        ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

 * @param {Object} obj as Array 
 * @returns returns all the methods in form of an array
 */
const returnMethods = (obj = {}) => {
    const members = Object.getOwnPropertyNames(obj);
    const methods = members.filter(el => {
       return typeof obj[el] === 'function';
    })
    return methods;
 };

 
 console.log(returnMethods(Array.prototype));

