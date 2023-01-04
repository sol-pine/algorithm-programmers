// 2023-01-04

const solution = (denum1, num1, denum2, num2) => {
    let denum = (denum1 * num2) + (denum2 * num1)
    let num = num1 * num2
    let gcd = get_gcd(denum, num)
    return [denum/gcd, num/gcd]
}

// 최대공약수를 반환하는 함수
const get_gcd = (num1, num2) => {
    return (num1 % num2) ? get_gcd(num2, num1 % num2) : num2
}