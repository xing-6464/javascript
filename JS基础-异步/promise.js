/**
 * @description MyPromise
 * @author 星光
 */

class MyPromise {
  state = 'pending' // 当前状态
  value = undefined // 存储成功值
  reason = undefined // 存储失败原因

  resolveCallbacks = [] // pending 状态下，存储成功的回调
  rejectCallbacks = [] // pending 状态下，存储失败的回调

  constructor(fn) {
    const resolveHandle = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.resolveCallbacks.forEach((fn) => fn(this.value))
      }
    }

    const rejectHandle = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach((fn) => fn(this.reason))
      }
    }

    try {
      fn(resolveHandle, rejectHandle)
    } catch (ex) {
      rejectHandle(ex)
    }
  }

  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

    if (this.state === 'pending') {
      const p1 = new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (e) {
            reject(e)
          }
        })

        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            reject(newReason)
          } catch (e) {
            reject(e)
          }
        })
      })

      return p1
    }

    if (this.state === 'fulfilled') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (e) {
          reject(e)
        }
      })

      return p1
    }

    if (this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (e) {
          reject(e)
        }
      })

      return p1
    }
  }

  // 就是then的一个语法糖
  catch(fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => resolve(value))
}

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}

MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = []
    const length = promiseList.length
    let resolevCount = 0

    promiseList.forEach((p) => {
      p.then((data) => {
        result.push(data)

        resolevCount++
        if (resolevCount === length) {
          resolve(result)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })

  return p1
}

MyPromise.race = function (promiseList = []) {
  let resolved = false // 标记
  const p1 = new MyPromise((resolve, reject) => {
    promiseList.forEach((p) => {
      p.then((data) => {
        if (!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch((e) => {
        reject(e)
      })
    })
  })

  return p1
}
