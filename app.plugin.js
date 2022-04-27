const { withAndroidManifest } = require('@expo/config-plugins')
module.exports = function androiManifestPlugin(config) {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults.manifest
    androidManifest.queries = {
      intent: {
        action: { $: { 'android:name': 'android.intent.action.VIEW' } },
        category: {
          $: { 'android:name': 'android.intent.category.BROWSABLE' },
        },
        data: { $: { 'android:scheme': 'https' } },
      },
      package: { $: { 'android:name': 'com.google.android.apps.fitness' } },
    }
    return config
  })
}
