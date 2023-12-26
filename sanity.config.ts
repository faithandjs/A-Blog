import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './src/app/schema';

const projectId = process.env.NEXT_SANITY_PROJECT_ID || '';

const config = defineConfig({
  projectId: 'dcj17n2g',
  // projectId,
  dataset: 'production',
  title: 'Project Deba',
  apiVersion: '2023-11-15',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;

