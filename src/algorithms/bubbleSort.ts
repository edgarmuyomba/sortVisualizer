import { Element } from "../App";

export default function bubbleSort(array: Element[]): Element[][] {
    let arrays: Element[][] = [];

    let n: number = array.length;

    for (var i = 0; i < n; n++) {
        let swapped: boolean = false;

        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] != null && array[j + 1] != null) {
                if (array[j].value > array[j + 1].value) {
                    let temp: Element = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                    swapped = true;
                    // tracking element movements
                    arrays.push([...array]);
                }
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arrays;
}
