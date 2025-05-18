import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'okyedwn1',
    dataset: 'production'
  },
  autoUpdates: true,
})