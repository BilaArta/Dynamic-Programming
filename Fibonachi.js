const fibonachi = (n) => {
    if (n <=2) {
        return 1
    } else {
        return fibonachi(n-1) + fibonachi(n-2)
    }
}

const testCase = [3,5,7,8,12,15,21]

testCase.forEach(n => {
    const start = performance.now();
    console.log(fibonachi(n))
    const duration = performance.now() - start;
    console.log(duration);
});