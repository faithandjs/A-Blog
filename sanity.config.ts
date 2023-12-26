import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { projectId } from './src/app/sanity/sanity-api';

import schemas from './src/app/sanity/schema';

const config = defineConfig({
  projectId,
  dataset: 'production',
  title: 'Project Deba',
  apiVersion: '2023-11-15',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;

