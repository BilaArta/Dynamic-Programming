const GridTraveler = (n, m) => {
    if (n == 0 | m ==0) {
        return 0
    } else if (n == 1 & m == 1) {
        return 1
    } 
    return GridTraveler(n-1,m) + GridTraveler(n, m-1)
}

const testCase = [[2,2], [2,3], [3,3], [5,5], [10,10], [18,18]]

testCase.forEach((n,m) => {
    const start = performance.now();
    console.log(GridTraveler(n[0], n[1]))
    const duration = performance.now() - start;
    console.log(duration);
});


// console.log(dynamicGridTraveler(2,2))
// console.log(dynamicGridTraveler(2,3))
// console.log(dynamicGridTraveler(3,3))
// console.log(dynamicGridTraveler(5,3))