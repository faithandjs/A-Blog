import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const projectId = process.env.NEXT_SANITY_PROJECT_ID || '';
  console.log(projectId);

  const client = createClient({
    projectId,
    dataset: 'production',
    apiVersion: '2023-11-15',
  });

  return client.fetch(
    groq`*[_type == 'project']{
    _id, 
    name,
    "slug":slug.current,
    "image":image.asset->url,
  }`
  );
}
export async function getProject(slug: string) {
  const projectId = process.env.NEXT_SANITY_PROJECT_ID;
  console.log(projectId);

  const client = createClient({
    projectId,
    dataset: 'production',
    apiVersion: '2023-11-15',
  });

  return client.fetch(
    groq`*[_type == 'project' && slug.current==$slug][0]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    "image2":image,
    url,
    content,
    dummy
  }`,
    { slug }
  );
}

