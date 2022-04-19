const dynamicGridTraveler = (n, m, memo = {}) => {
    const key = m+ ','+ n
    const key2 = n+ ','+ m
    
    if ((key in memo) | (key2 in memo)) {
        return memo[key]
    }else if (n == 0 | m ==0) {
        return 0
    } else if (n == 1 & m == 1) {
        return 1
    } 
    memo[key] = dynamicGridTraveler(n-1,m, memo) + dynamicGridTraveler(n, m-1, memo)
    memo[key2] = memo[key]
    return memo[key]
}

const testCase = [[2,2], [2,3], [3,3], [5,5], [10,10], [18,18]]

testCase.forEach((n,m) => {
    const start = performance.now();
    console.log(dynamicGridTraveler(n[0], n[1]))
    const duration = performance.now() - start;
    console.log(duration);
});