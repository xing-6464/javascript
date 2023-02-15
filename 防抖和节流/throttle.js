const div1 = document.querySelector('.div1')
// throttle

// let timer = null
// div1.addEventListener('drag', function (e) {
//   if (timer) {
//     return
//   }

//   timer = setTimeout(() => {
//     console.log(e.offsetX, e.offsetY)

//     timer = null
//   }, 100)
// })

function throttle(fn, delay = 100) {
  let timer = null

  return function (e) {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)

      timer = null
    }, 100)
  }
}

div1.addEventListener(
  'drag',
  throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
  })
)
