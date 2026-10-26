// Finds the largest pandigital prime below N.
// A pandigital number has k digits and uses each digit 1 to k exactly once.
const N = 1e7
let largest = 0

for (let i = N - 1; i > 1; i--) {
    if (isPrime(i) && isPandigital(i)) { 
        largest = i
        break
    }
}

output(largest)