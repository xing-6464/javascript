const input1 = document.querySelector('.input1')

// 防抖
function debounce(fn, delay = 500) {
  let timer = null

  return function () {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

input1.addEventListener(
  'input',
  debounce(function () {
    console.log(input1.value)
  }, 200)
)
