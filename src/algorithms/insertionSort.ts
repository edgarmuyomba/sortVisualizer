export default function insertionSort(array: number[]): void {
    for (var i = 0; i < array.length; i++) {
        let key: number = array[i];
        let j: number = i - 1;

        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}