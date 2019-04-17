/**
 * 模拟指数功能
 * @param {number} base 底数
 * @param {number} exponent 指数
 */
function pow (base, exponent) {
    if (!exponent ||exponent === 1) {
        return base
    } else {
        return base * pow(base, exponent -1)
    }
}

// 模拟方法
console.log( pow(2) )
console.log( pow(2, 2))
// Math.pow()
console.log(Math.pow(2, 2))
// ES 7
console.log(2**2)