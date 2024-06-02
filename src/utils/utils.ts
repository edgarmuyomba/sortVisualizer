import { Element, Speed } from "../App";

export function arrayToStructuredArray(array: number[]): Element[] {
    return array.map((value, index) => { return { id: index, value: value, active: false } });
}

export function structuredArrayToArray(array: Element[]): number[] {
    return array.map((element) => element.value);
}

export async function elementAnimations(arrays: Element[][], setArray: (arg0: Element[]) => void, speed: Speed): Promise<void> {
    let new_arrays: Element[][] = findActiveElements(arrays);
    for (let array of new_arrays) {
        setArray(array);
        await sleep(speed);
    }
}

function findActiveElements(arrays: Element[][]): Element[][] {
    let new_arrays: Element[][] = arrays.map((array1: Element[], index: number) => {
        let array2: Element[] = arrays[index + 1];
        if (array2 != null) {
            let active: Element | undefined = findMovedElement(array1, array2);
            return active != null
                ? array1.map((element: Element) => {
                    if (element === active) return { id: element.id, value: element.value, active: true };
                    else return element;
                })
                : array1;
        }
        return array1;
    })
    return new_arrays;
}

function findMovedElement(array1: Element[], array2: Element[]): Element | undefined {
    const indexMap = new Map();
    for (let i = 0; i < array1.length; i++) {
        indexMap.set(array1[i], i);
    }

    for (let j = 0; j < array2.length; j++) {
        const element = array2[j];
        const originalIndex = indexMap.get(element);
        if (originalIndex !== j) {
            return element;
        }
    }
}

const sleep = (speed: Speed) => {
    let speedFactor: number = 75;
    switch(speed) {
        case Speed.fast:
            speedFactor = 50;
            break;
        case Speed.medium:
            speedFactor = 75;
            break;
        case Speed.slow:
            speedFactor = 100;
            break;
    }

    return new Promise((resolve) => setTimeout(resolve, speedFactor));
  };