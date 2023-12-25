import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schema';

const projectId = process.env.NEXT_SANITY_PROJECT_ID || '';
console.log(projectId);

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

