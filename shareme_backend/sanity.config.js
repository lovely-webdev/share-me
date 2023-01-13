import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shareme_jsm_backend',

  projectId: 'r4u4ggud',
  dataset: 'shareme',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
