let arr = [1,2,3,4,5];

findSecondLowestAndSecondGreatest(arr);

/**
 * This function finds the second largest and second lowest number of any array.
 * Problem Statement -> Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 * Sample array : [1,2,3,4,5]
 * Expected Output : 2,4
 * 
 * @param {Array} arr Sorted array of Integers
 */
function findSecondLowestAndSecondGreatest(arr) {
    let lowest = arr[0];
    let largest = arr[arr.length-1];

    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] > lowest) {
            console.log("Second Shortest Number is " + arr[i]);
            break;
        }
        if(i==arr.length-1){
            console.log("Unable to find second shortest, Probably all numbers are same\n");
        }
    }

    for (let i = arr.length-1 ; i >= 0 ; i--) {
        if (arr[i] < largest) {
            console.log("Second Largest Number is " + arr[i]);
            break;
        }
        if(i==0){
            console.log("Unable to find second largest, Probably all numbers are same");
        }
    }
}
