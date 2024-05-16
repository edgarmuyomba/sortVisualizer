export default function bubbleSort(array: number[]): void {
    let n: number = array.length;

    for (var i = 0; i < n; n++) {
        let swapped: boolean = false;

        for (var j = 0; j < n-i-1; j++) {
            if (array[j] > array[j+1]) {
                let temp: number = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
