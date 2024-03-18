const calculateDarbouxSums = (n: number, from: number, to: number): { x: number[], y: number[] } => {
    const step = (to - from) / n;
    let xValues = [];
    let yValues = [];

    for (let i = 0; i <= n; i++) {
        const x = from + i * step;
        xValues.push(x);
        yValues.push(x * x);
    }

    return {x: xValues, y: yValues};
};

export {calculateDarbouxSums}