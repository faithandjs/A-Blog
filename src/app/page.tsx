import Image from 'next/image';
import Link from 'next/link';

import { getProjects } from './sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className=' min-h-screen  p-24'>
      <h2 className='font-bold text-3xl '>Project Deba!</h2>
      <div className='flex items-center justify-between  '>
        {projects.map((item: any) => {
          console.log(item);
          return (
            <div className='w-max' key={item._id}>
              <h3 className='font-semibold pb-2'>{item.name}</h3>
              <div>
                {item.image && <img src={item.image} alt='' className='w-60' />}
              </div>
              <Link
                href={`projects/${item.slug}`}
                className='font-light text-sm'>
                see more
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

