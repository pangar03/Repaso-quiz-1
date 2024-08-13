export const createFruitsObject = (fruits) => {
    const fruitObject = {};

    fruits.forEach(fruit => {
        if (!fruitObject[fruit]) {
            fruitObject[fruit] = 1;
        } else {
            fruitObject[fruit]++;
        }
    });

    return fruitObject;
};