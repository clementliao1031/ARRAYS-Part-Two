function reverseArray(arr) {
    // Loop through the array - but only halfway (otherwise we unreverse and get the original array back)
    for (var i = 0; i < arr.length / 2; i++) {
        // Swap values
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

var arr1 = [3, 8, 4, 7];
reverseArray(arr1);
console.log(arr1);

var result1 = [7, 4, 8, 3];

var arr2 = [1, 8, -2, 5, 3];
reverseArray(arr2);
console.log(arr2);

var result2 = [3,5,-2,8,1];

var arr3 = [];
reverseArray(arr3);
console.log(arr3);