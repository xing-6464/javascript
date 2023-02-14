// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方！！

// 1.函数作为返回值
// function create() {
//   const a = 1000
//   return function () {
//     console.log(a)
//   }
// }

// const fn = create()
// const a = 2000
// fn() // 1000

// 2.函数作为参数被传递
function print(fn) {
  const a = 200
  fn()
}
const a = 100
function fn() {
  console.log(a)
}
print(fn)
