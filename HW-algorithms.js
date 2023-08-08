/*
Написать функцию, вычисляющую сумму тех чисел в диапазоне от 1 до n, которые делятся на m.
Решить задачу:
а) через цикл
б) через рекурсию
*/

function sumBetween(n, m){    //цикл
    let sum = 0
    for (let i = 0; i <= n; i++){
        if(i % m === 0 ){
            sum = sum + i
        }
    }
    console.log(sum)
}

sumBetween(10, 5)

function sumBetweenRec (n, m, temp = 1, sum = 0){    //рекурсия
    if (temp > n) return sum
    if (temp % m === 0){
        sum += temp
    }
    return sumBetweenRec(n, m, temp+1, sum)
}

console.log(sumBetweenRec(10, 5))

/*
Вычислить n-й член последовательности, заданной формулами:
a(2n) = a(n) + a(n-1),
a(2n+1) = a(n) — a(n-1),
a(0) = a(1) = 1.
*/
function sequence (n, sum = 0){
    if (sum > n) {
        return sum
    }
    if (n === 0 || n === 1){
        return 1
    } else if (n % 2 === 0){
        return sequence(n/2, sum) + sequence(n / 2 - 1, sum)
    } else {
        return sequence((n-1) / 2, sum) - sequence((n-1) / 2-1, sum)
    }
}

console.log(sequence(8))