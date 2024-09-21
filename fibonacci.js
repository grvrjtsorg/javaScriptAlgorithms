function fibonacci(n) {
    let fiboResult = [0, 1];
    if (n == 1) return [0];
    if (n == 2) return fiboResult;
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            let a = fiboResult[i - 2] + fiboResult[i - 1];
            fiboResult.push(a);
        }
        return fiboResult;
    }
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))

function fibonacci1(n) {
    let fiboResult = [0, 1];
    for (let i = 2; i < n; i++) {
        fiboResult[i] = fiboResult[i - 2] + fiboResult[i - 1];
    }
    return fiboResult;
}
console.log(fibonacci1(2))
console.log(fibonacci1(3))
console.log(fibonacci1(4))
console.log(fibonacci1(5))

