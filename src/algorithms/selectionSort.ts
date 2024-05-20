export default function selectionSort(array: number[]): number[][] {
    let arrays: number[][] = [];

    for(var i = 0; i < array.length - 1; i++) {
        let min_idx: number = i;
        for (var j = i+1; j < array.length; j++) {
            if (array[min_idx] > array[j]) {
            min_idx = j;
            }
        }
        let temp: number = array[i];
        array[i] = array[min_idx];
        array[min_idx] = temp;
        // tracking element movements
        var tmp_array = Array.from(array);
        arrays.push(tmp_array);
    }
    return arrays;
}