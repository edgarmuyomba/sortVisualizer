export default function insertionSort(array: number[]): number[][] {
    let arrays: number[][] = [];

    for (var i = 0; i < array.length; i++) {
        let key: number = array[i];
        let j: number = i - 1;

        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
            // tracking element movements
            var tmp_array = Array.from(array);
            arrays.push(tmp_array);
        }
        array[j + 1] = key;
    }
    return arrays;
}