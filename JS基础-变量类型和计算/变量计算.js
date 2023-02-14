// 字符串拼接
const a = 100 + 10 //110
const b = 100 + '10' // '10010'
const c = true + '10' // 'true10'

// == 运算符
100 == '100' //true
0 == '' //true
0 == false //true
false == '' //true
null == undefined // true

// 除了 == null 之外，其他都一律用 === ， 例如：
const boj = { x: 100 }
if (boj.a == null) {
}
//相当于
// if (obj.a === null || obj.a === undefined) {}

/**
 *  truly变量： !!a === true 的变量
 *  falsly变量：!!a === false 的变量
 */
// 已下是 falsely 变量。除此以外都是 truly 变量
// if语句判断的不是true和false，它判断的就是truly变量和falsely变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false

// 逻辑判断
console.log(10 && 0) // 0
console.log('' || 'abc') // 'abc'
console.log(!window.abc) // true
