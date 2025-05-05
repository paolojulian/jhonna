import AppTypography from "@/components/AppTypography";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import { projects } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default function Home({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="container flex flex-col gap-10 pb-10">
      <Link
        href="/"
        className="flex flex-row items-center gap-2 group text-red-500"
      >
        <ArrowLeftIcon className="pb-1 group-hover:-translate-x-2 transition-transform" />
        <AppTypography>Back</AppTypography>
      </Link>

      <div>
        <AppTypography as="h1" variant="heading-lg" className="uppercase">
          {project.title}
        </AppTypography>
        <AppTypography
          as="h2"
          variant="heading-lg"
          className="text-neutral-400 uppercase"
        >
          {project.subtitle}
        </AppTypography>
      </div>

      <AppTypography>{project.description}</AppTypography>

      <AppTypography variant="heading-sm">
        {!!project.address && <span>{project.address}</span>}
        {!!project.projectLink && (
          <>
            @
            <a
              href={project.projectLink}
              className="text-blue-500"
              target="_blank"
            >
              {project.projectLink}
            </a>
          </>
        )}
      </AppTypography>

      <div className="grid grid-cols-3 gap-4">
        {project.images.map((image) => (
          <div
            key={image.id}
            className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image alt={image.id} src={image.src} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
