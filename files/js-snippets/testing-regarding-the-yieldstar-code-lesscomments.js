// direct from kagi assitant.

function* iterateParamSpace(paramspace) {
    const keys = Object.keys(paramspace);

    function* generateCombinations(currentCombination, depth) {
        if (depth === keys.length) {
            yield { ...currentCombination };
            return;
        }

        const currentKey = keys[depth];
        const values = paramspace[currentKey];

        for (const value of values) {
            currentCombination[currentKey] = value;
            yield* generateCombinations(currentCombination, depth + 1);
        }
    }

    yield* generateCombinations({}, 0);
}

// Example usage
let paramspace = {
    dimension1: [1, 2],
    dimension2: ['A', 'B'],
    dimension3: [true, false]
};

for (const point of iterateParamSpace(paramspace)) {
    console.log(point);
}