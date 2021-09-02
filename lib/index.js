module.exports = {
  activate () {
    if (process.platform === 'darwin') {
      inkdrop.window.setVibrancy('under-window')
    }
  },
  deactivate () {
    if (process.platform === 'darwin') {
      inkdrop.window.setVibrancy(null)
    }
  }
}
