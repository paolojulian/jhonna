export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  address?: string;
  projectLink?: string;
  images: {
    id: string;
    src: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "sce",
    title: "Skin Care Essentials",
    subtitle: "Hair Studio, Aesthetic Clinic & Clinical Services",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    address: "London, United Kingdom",
    projectLink: "https://skincareessentials.co.uk/",
    images: [
      {
        id: "sce-1",
        src: "/images/projects/sce/sce-1.png",
      },
      {
        id: "sce-2",
        src: "/images/projects/sce/sce-2.png",
      },
      {
        id: "sce-3",
        src: "/images/projects/sce/sce-3.png",
      },
    ],
  },
];
