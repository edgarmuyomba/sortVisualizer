export default function bubbleSort(array: number[]): number[][] {
    let arrays: number[][] = [];

    let n: number = array.length;

    for (var i = 0; i < n; n++) {
        let swapped: boolean = false;

        for (var j = 0; j < n-i-1; j++) {
            if (array[j] > array[j+1]) {
                let temp: number = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                swapped = true;
                // tracking element movements
                var tmp_array: number[] = Array.from(array);
                arrays.push(tmp_array);
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arrays;
}
