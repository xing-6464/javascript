// 手写call
Function.prototype.myCall = function (context, ...args) {
  // step1: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
  context.func = this
  // step2: 执行函数，利用扩展运算符将数组展开
  context.func(...args)
  // step3: 删除 step1 中挂到目标对象上的函数，把目标对象”完璧归赵”
  delete context.func
}

// 手写apply
Function.prototype.myApply = function (context, args) {
  // step1: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
  context.func = this
  // step2: 执行函数，利用扩展运算符将数组展开
  context.func(...args)
  // step3: 删除 step1 中挂到目标对象上的函数，把目标对象”完璧归赵”
  delete context.func
}

// 手写bind
Function.prototype.myBind = function (context, ...args) {
  // step1: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
  context.func = this
  // step2: 返回绑定函数，利用扩展运算符将数组展开
  return () => context.func(...args)
}

var me = {
  name: 'Chris',
}

function showFullName(surName) {
  console.log(`${this.name} ${surName}`)
}

const f1 = showFullName.myBind(me, 'Lee') // Chris Lee
f1()
