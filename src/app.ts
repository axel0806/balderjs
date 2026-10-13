let primes:number[] = [2], x = 2, sum = 0

while(true) {
    let a = true
    x+=1
    for(let i = 0; i < primes.length; i++) {
        if(x % primes[i] == 0) {
            a = false
            break
        }
    }
    if (a) primes.push(x)
    if (primes[primes.length-1] <2e6){
        for(let i = 0; i < primes.length-1; i++) {
            sum += primes[i]
        }
    }
}
output(sum)


function primeOfN(n:number) {
    while(primes.length <= n) {
        let a = true
        x+=1
        for(let i = 0; i < primes.length; i++) {
            if(x % primes[i] == 0) {
                a = false
                break
            }
        }
        if (a) primes.push(x)
    }
    return primes[n]
}









// PYTHAGOREAN TRIPPLE
//
// let a = 1, b = 1, c = 1

// for (let i = 0; i < 1000; i++) {
//     a = i
//     if (a+b+c==1000 && a**2+b**2==c**2 && a < b && b<c) {
//         output(`a = ${a}, b = ${b}, c = ${c}`)
//         output(a*b*c)
//         break
//     }
//     for (let j = 0; j < 1000; j++) {
//         b = j
//         if (a+b+c==1000 && a**2+b**2==c**2 && a < b && b<c) {
//             output(`a = ${a}, b = ${b}, c = ${c}`)
//             output(a*b*c)
//             break
//         }     
//         for (let k = 0; k < 1000; k++) {
//             c = k
//             if (a+b+c==1000 && a**2+b**2==c**2 && a < b && b<c) {
//                 output(`a = ${a}, b = ${b}, c = ${c}`)
//                 output(a*b*c)
//                 break
//             }

//         }
//     }
// }
