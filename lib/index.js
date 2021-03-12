module.exports = {
  activate () {
    inkdrop.window.setVibrancy('under-window')
  },
  deactivate () {
    inkdrop.window.setVibrancy(null)
  }
}
