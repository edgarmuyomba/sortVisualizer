export default function mergeSort(array: number[]): number[] {
    if (array.length <= 1) return array;

    // divide into left and right
    let mid: number = Math.floor(array.length / 2);
    let left_sub: number[] = array.slice(0, mid);
    let right_sub: number[] = array.slice(mid, array.length);

    // recursively sort both halves
    left_sub = mergeSort(left_sub);
    right_sub = mergeSort(right_sub);

    return merge(left_sub, right_sub);
}

function merge(left_sub: number[], right_sub: number[]): number[] {
    let final_array: number[] = [];

    let left_index: number = 0, right_index: number = 0;

    while(left_index < left_sub.length && right_index < right_sub.length) {
        if (left_sub[left_index] < right_sub[right_index]) {
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