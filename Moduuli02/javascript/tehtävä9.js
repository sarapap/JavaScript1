'use strict';
function even(array) {
  let array2 = []
    for (let i of array) {
        if (i % 2 == 0) {
            array2.push(i)
        }
    } return array2
}

let test_list = [2, 4, 7, 9, 11, 14, 21, 24]
console.log(test_list)
console.log(even(test_list))

