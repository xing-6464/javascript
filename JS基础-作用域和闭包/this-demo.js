// this的指向问题

// 1.
function fn1() {
  console.log(this)
}
fn1() // window

fn1.call({ x: 100 }) // { x: 100 }

const fn2 = fn1.bind({ x: 200 })
fn2() // { x: 200 }

// 2.
// 正常函数
const zhangsan = {
  name: '张三',
  sayHi() {
    // this 指向当前对象
    console.log(this)
  },
  wait() {
    setTimeout(function () {
      // this === window
      console.log(this)
    })
  },
}

// 箭头函数
const zhangsan1 = {
  name: '张三',
  sayHi() {
    // this 当前对象
    console.log(this)
  },
  waitAgin() {
    setTimeout(() => {
      // this 既当前对象
      console.log(this)
    })
  },
}
