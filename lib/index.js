module.exports = {
  activate () {
    inkdrop.window.setVibrancy('ultra-dark')
  },
  deactivate () {
    inkdrop.window.setVibrancy(null)
  }
}
