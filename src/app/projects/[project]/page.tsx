import React from 'react';

import { getProject, getProjects } from '../../utils/sanity-utils';

export default async function page({
  params,
}: {
  params: { project: string };
}) {
  const project = await getProject(params.project);
  const project2 = await getProjects();
  console.log(project2);
  return <div>{params.project}</div>;
}

