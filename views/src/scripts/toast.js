const toastElList = [].slice.call(document.querySelectorAll('.toast'))
const toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

toastList[0].show()