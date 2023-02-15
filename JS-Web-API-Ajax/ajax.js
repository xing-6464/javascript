const xhr = new XMLHttpRequest()

xhr.open('GET', '/ajax.json', false)
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    } else {
      console.error(xhr.responseText)
    }
  }
}
xhr.send(null)

fetch
