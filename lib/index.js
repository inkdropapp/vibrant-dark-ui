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
    // https://forum.inkdrop.app/t/vibrant-dark-theme-becomes-bright-when-closing-preferences/4979
    // remote.nativeTheme.themeSource = 'system'
  },
}
