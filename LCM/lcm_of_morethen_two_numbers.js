//var element_array = [100,90,80,7];
var element_array = [2,4,5];
console.log(lcm_of_array_elements(element_array));

/**
Write a JavaScript function to get the least common multiple (LCM)
of more than 2 integers.
Test Data :
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));

Output :
25200
150
 * 
 * @param {element_array} // Array of elements
 * @returns //lcm Of array of elements
 */
function lcm_of_array_elements(element_array)
    {
        var lcm_of_array_elements = 1;
        var divisor = 2;
        while (true)
        {
            var counter = 0;
            var divisible = false;
            for (i = 0; i < element_array.length; i++)
            {
                // lcm_of_array_elements (n1, n2, ... 0) = 0.
                // For negative number we convert into
                // positive and calculate lcm_of_array_elements.
                if (element_array[i] == 0)
                {
                    return 0;
                }
                else if (element_array[i] < 0)
                {
                    element_array[i] = element_array[i] * (-1);
                }
                if (element_array[i] == 1)
                {
                    counter++;
                }
                // Divide element_array by devisor if complete
                // division this is  without remainder then replace
                // number with quotient, used for find next factor
                if (element_array[i] % divisor == 0)
                {
                    divisible = true;
                    element_array[i] = parseInt(element_array[i] / divisor);
                }
            }
            // If divisor able to completely divide any number
            // from array multiply with lcm_of_array_elements
            // and store into lcm_of_array_elements and continue
            // to same divisor for next factor finding.
            // else increment divisor
            if (divisible)
            {
                lcm_of_array_elements = lcm_of_array_elements * divisor;
            }
            else 
            {
                divisor++;
            }
            // Check if all element_array is 1 indicate
            // we found all factors and terminate while loop.
            if (counter == element_array.length)
            {
                return lcm_of_array_elements;
            }
        }
    }


