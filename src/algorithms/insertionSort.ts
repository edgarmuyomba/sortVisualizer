import { Element } from "../App";

export default function insertionSort(array: Element[]): Element[][] {
    let arrays: Element[][] = [];

    for (var i = 0; i < array.length; i++) {
        let key: Element = array[i];
        let j: number = i - 1;

        while (j >= 0 && key.value < array[j].value) {
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