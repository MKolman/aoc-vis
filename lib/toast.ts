function createToast(msg: string, timeout?: number) {
  timeout = timeout || 2000
  const el = document.createElement('div')
  el.classList.add('toast')
  el.style.setProperty('--ani-time', `${timeout}ms`)
  el.textContent = msg
  const timeoutId = setTimeout(() => el.remove(), timeout*2)
  el.onclick = () => {
    clearTimeout(timeoutId)
    el.remove()
  }
  document.body.appendChild(el)

}

export { createToast }
