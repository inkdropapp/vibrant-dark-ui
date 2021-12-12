module.exports = {
  activate () {
    const acrylicEnabled = inkdrop.config.get('core.mainWindow.acrylicEnabled')
    if (!acrylicEnabled) {
      inkdrop.notifications.addError('Acrylic background not enabled', {
        detail: 'Go to Preferences → Themes → Enable the experimental feature "Acrylic translucent background".',
        dismissable: true
      })
    }
  },
  deactivate () {
  }
}
