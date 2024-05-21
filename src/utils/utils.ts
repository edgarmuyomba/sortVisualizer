import { Element } from "../App";

export function arrayToStructuredArray(array: number[]): Element[] {
    return array.map((value, index) => { return { id: index, value: value, active: false } });
}

export function structuredArrayToArray(array: Element[]): number[] {
    return array.map((element) => element.value);
}