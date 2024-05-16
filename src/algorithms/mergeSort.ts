// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(array: number[], left: number, mid: number, right: number): void {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    // Create temp arrays
    let L: number[] = new Array(n1);
    let R: number[] = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = array[left + i];
    for (var j = 0; j < n2; j++)
        R[j] = array[mid + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i: number = 0;

    // Initial index of second subarray
    var j: number = 0;

    // Initial index of merged subarray
    var k: number = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        }
        else {
            array[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        array[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        array[k] = R[j];
        j++;
        k++;
    }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
export default function mergeSort(array: number[], left: number, right: number): void {
    if (left >= right) {
        return;
    }
    var mid = Math.floor(left + (right - left) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
}



// var array: number[] = [12, 11, 13, 5, 6, 7];
// var arr_size = array.length;

// mergeSort(array, 0, arr_size - 1);
// console.log(array);

