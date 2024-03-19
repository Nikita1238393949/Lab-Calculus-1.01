interface Trapezoid {
    f: (x: number) => number
    a: number
    b: number
    n: number
}

const calculateDataSetforFunc = () => {
    const funcPoints = []
    const from = 1
    const to = 2
    for (let x = from; x <= to; x += 0.05) {
        const y = x * x
        funcPoints.push({x: x, y: y})
    }
    return funcPoints
}

const trapezoidIntegral = ({f, a, b, n}: Trapezoid): number => {
    const h = (b - a) / n;
    let sum = 0.5 * (f(a) + f(b));
    for (let i = 1; i < n; i++) {
        sum += f(a + i * h);
    }
    return sum * h;
}


export {calculateDataSetforFunc, trapezoidIntegral}