/**
 * There are two arrays with individual values, 
 * write a JavaScript program to compute the sum of each 
 * individual index value from the given arrays.

            Sample array :
            array1 = [1,0,2,3,4];
            array2 = [3,5,6,7,8,13];
            Expected Output :
            [4, 5, 8, 10, 12, 13]
 */

//array variables for references
var array1 = [1,0,2,3,4];
var array2 = [3,5,6];


if(array1.length>array2.length){
    let i = 0;
    //modifying array1 with the help of array2
    while(i < array2.length){
        array1[i] = array1[i]+array2[i];
        i++;
    }
    console.log(array1);
}
else{
    let i = 0;
    //modifying array2 with the help of array1
    while(i < array1.length){
        array2[i] = array1[i]+array2[i];
        i++;
    }
    console.log(array2);
}



