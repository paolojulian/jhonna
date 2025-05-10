export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  address?: string;
  projectLink?: string;
  projectLinkText?: string;
  images: {
    id: string;
    src: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: 'sce',
    title: 'Skin Care Essentials',
    subtitle: 'Hair Studio, Aesthetic Clinic & Clinical Services',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    address: 'London, United Kingdom',
    projectLink: 'https://skincareessentials.co.uk/',
    images: [
      {
        id: 'sce-1',
        src: '/images/projects/sce/sce-1.png',
      },
      {
        id: 'sce-2',
        src: '/images/projects/sce/sce-2.png',
      },
      {
        id: 'sce-3',
        src: '/images/projects/sce/sce-3.png',
      },
    ],
  },
  {
    slug: 'ccc',
    title: 'City Care Companions',
    subtitle: 'Domiciliary Care & Temporary Staffing Services',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    address: 'London, United Kingdom',
    projectLink: 'https://citycarecompanions.co.uk/',
    images: [
      {
        id: 'ccc-1',
        src: '/images/projects/ccc/1.png',
      },
      {
        id: 'ccc-2',
        src: '/images/projects/ccc/2.png',
      },
      {
        id: 'ccc-3',
        src: '/images/projects/ccc/3.png',
      },
    ],
  },
  {
    slug: 'applete',
    title: 'Applete',
    subtitle: 'Sports Event Booking',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    projectLink:
      'https://play.google.com/store/apps/details?id=com.applete.app&hl=en',
    images: [
      {
        id: 'applete-1',
        src: '/images/projects/applete/1.png',
      },
      {
        id: 'applete-2',
        src: '/images/projects/applete/2.png',
      },
      {
        id: 'applete-3',
        src: '/images/projects/applete/3.png',
      },
    ],
  },
  {
    slug: 'ovk',
    title: 'OVK Plan',
    subtitle: 'Inspection Guidelines',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    address: 'Sweden, Europe — App is for private use',
    images: [
      {
        id: 'ovk-1',
        src: '/images/projects/ovk/1.png',
      },
      {
        id: 'ovk-2',
        src: '/images/projects/ovk/2.png',
      },
      {
        id: 'ovk-3',
        src: '/images/projects/ovk/3.png',
      },
    ],
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel Booking App',
    subtitle: 'Booking & Reservation',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    projectLink:
      'https://www.figma.com/design/Os5RYokIkkoUAsxOYhimuk/Hotel-Booking-and-Reservation?m=auto&t=8nJ9ZtTNaHH3nQcJ-6',
    projectLinkText: 'Figma — Personal Project',
    images: [
      {
        id: 'hotel-booking-1',
        src: '/images/projects/hotel-booking/1.png',
      },
      {
        id: 'hotel-booking-2',
        src: '/images/projects/hotel-booking/2.png',
      },
      {
        id: 'hotel-booking-3',
        src: '/images/projects/hotel-booking/3.png',
      },
    ],
  },
  {
    slug: 'beauty',
    title: 'Beauty Products',
    subtitle: 'Ecommerce',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    projectLink:
      'https://www.figma.com/design/WBpmJaE3LO9YATWcAVi7JM/Beauty-Products?node-id=1282-12225&p=f&t=ZiHYw1yIYK5L9065-0',
    projectLinkText: 'Figma — Personal Project',

    images: [
      {
        id: 'beauty-1',
        src: '/images/projects/beauty/1.png',
      },
      {
        id: 'beauty-2',
        src: '/images/projects/beauty/2.png',
      },
      {
        id: 'beauty-3',
        src: '/images/projects/beauty/3.png',
      },
    ],
  },
];
