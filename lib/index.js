const remote = require('@electron/remote')

module.exports = {
  activate() {
    remote.nativeTheme.themeSource = 'dark'

    const acrylicEnabled = inkdrop.config.get('core.mainWindow.acrylicEnabled')
    if (!acrylicEnabled) {
      inkdrop.notifications.addError('Acrylic background not enabled', {
        detail: 'Go to Preferences → Themes → Enable the experimental feature "Acrylic translucent background".',
        dismissable: true
      })
    }
  },
  deactivate() {
    remote.nativeTheme.themeSource = 'system'
  }
}
