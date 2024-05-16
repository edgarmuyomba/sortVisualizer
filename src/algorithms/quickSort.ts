// Function to partition the array and return the partition index
function partition(arr: number[], low: number, high: number): number {
    // Choosing the pivot
    let pivot: number = arr[high];
  
    // Index of smaller element and indicates the right position of pivot found so far
    let i: number = low - 1;
  
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
}

// The main function that implements QuickSort
export default function quickSort(arr: number[], low: number, high: number) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi: number = partition(arr, low, high);
  
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
