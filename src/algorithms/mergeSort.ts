import { Element } from "../App";

export default function mergeSort(array: Element[]): Element[][] {
    let arrays: Element[][] = [];
    mergeSortHelper(array, arrays);
    return arrays;
}

function mergeSortHelper(array: Element[], arrays: Element[][]): Element[] {
    if (array.length <= 1) return array;

    // divide into left and right
    let mid: number = Math.floor(array.length / 2);
    let left_sub: Element[] = array.slice(0, mid);
    let right_sub: Element[] = array.slice(mid, array.length);

    // recursively sort both halves
    left_sub = mergeSortHelper(left_sub, arrays);
    right_sub = mergeSortHelper(right_sub, arrays);

    let sorted_array: Element[] = merge(left_sub, right_sub);
    // tracking element movements
    arrays.push([...sorted_array]);
    // console.log(arrays);
    return sorted_array;
}

function merge(left_sub: Element[], right_sub: Element[]): Element[] {
    let final_array: Element[] = [];

    let left_index: number = 0, right_index: number = 0;

    while (left_index < left_sub.length && right_index < right_sub.length) {
        if (left_sub[left_index].value < right_sub[right_index].value) {
            final_array.push(left_sub[left_index]);
            left_index++;
        } else {
            final_array.push(right_sub[right_index]);
            right_index++;
        }
    }

    final_array.push(...left_sub.slice(left_index));
    final_array.push(...right_sub.slice(right_index));

    return final_array;
}

