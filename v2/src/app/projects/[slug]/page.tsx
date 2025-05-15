import AppTypography from '@/components/AppTypography';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import { projects } from '@/config/projects';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectViewPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <div className='container flex flex-col gap-10 pb-10'>
        <Link
          href='/'
          className='flex flex-row items-center gap-2 group text-red-500'
        >
          <ArrowLeftIcon className='pb-1 group-hover:-translate-x-2 transition-transform' />
          <AppTypography>Back</AppTypography>
        </Link>

        <div>
          <AppTypography as='h1' variant='heading-lg' className='uppercase'>
            {project.title}
          </AppTypography>
          <AppTypography
            as='h2'
            variant='heading-lg'
            className='text-neutral-400 uppercase'
          >
            {project.subtitle}
          </AppTypography>
        </div>

        <AppTypography>{project.description}</AppTypography>

        <AppTypography variant='heading-sm'>
          {!!project.address && <span>{project.address} </span>}
          {!!project.projectLink && (
            <>
              @
              <a
                href={project.projectLink}
                className='text-blue-500'
                target='_blank'
              >
                {project.projectLinkText || project.projectLink}
              </a>
            </>
          )}
        </AppTypography>
      </div>
      <div className='w-full lg:container overflow-x-auto lg:overflow-x-visible no-scroll px-3 scroll-px-3'>
        <div
          className={cn(
            'flex lg:grid',
            'w-fit lg:w-full',
            'gap-2 lg:gap-4',
            'flex-row lg:grid-cols-3'
          )}
        >
          {project.images.map((image) => (
            <div
              key={image.id}
              className='aspect-square relative rounded-2xl overflow-hidden lg:shadow-2xl size-[75vw] sm:size-[60vw] lg:w-full lg:h-auto'
            >
              <Image alt={image.id} src={image.src} fill />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
