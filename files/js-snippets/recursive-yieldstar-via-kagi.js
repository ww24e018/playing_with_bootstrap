// direct from kagi assitant.

function* iterateParamSpace(paramspace) {
    // Extract the keys (dimensions) from the paramspace object
    const keys = Object.keys(paramspace);

    // Helper function to generate combinations recursively
    function* generateCombinations(currentCombination, depth) {
        // If the current depth equals the number of dimensions, yield the combination
        if (depth === keys.length) {
            yield { ...currentCombination };
            return;
        }

        // Get the current dimension's values
        const currentKey = keys[depth];
        const values = paramspace[currentKey];

        // Iterate over each value in the current dimension
        for (const value of values) {
            // Add the current value to the combination
            currentCombination[currentKey] = value;
            // Recur for the next dimension
            yield* generateCombinations(currentCombination, depth + 1);
        }
    }

    // Start the combination generation with an empty object and depth 0
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