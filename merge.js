function merge_sort(array) {
    if (array.length <= 1) return array;

    // divide into left and right
    let mid = Math.floor(array.length / 2);
    let left_sub = array.slice(0, mid);
    let right_sub = array.slice(mid, array.length);

    // recursively sort both halves
    left_sub = merge_sort(left_sub);
    right_sub = merge_sort(right_sub);

    return merge(left_sub, right_sub);
}

function merge(left_sub, right_sub) {
    let final_array = [];

    let left_index = 0, right_index = 0;

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

console.log(merge_sort([9,8,7,6,5,4,3,2,1]));