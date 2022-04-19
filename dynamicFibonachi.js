const dynamicFibonachi = (n, memo={}) => {
    if (n in memo) {
        return memo[n]
    }
    if (n <=2) {
        return 1
    } else {
        memo[n]= dynamicFibonachi(n-1, memo) + dynamicFibonachi(n-2, memo)
    }
    return memo[n]
}

const testCase = [3,5,7,8,12,15,21]

testCase.forEach(n => {
    const start = performance.now();
    console.log(dynamicFibonachi(n))
    const duration = performance.now() - start;
    console.log(duration);
});