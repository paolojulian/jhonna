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
    description: `Skin Care Essentials is based in London, United Kingdom. It offers three services: an aesthetic clinic, a hair studio, and clinical services. The aesthetic clinic focuses on skin boosting, non-surgical treatments to enhance skin health and beauty. The hair studio offer care hair treatments and styling for every hair types. Clinical services include at home blood test kits for accessible health tracking. 

UI design is my main focus in this project, plus I get to design eye catching monthly promos for the website and their social media.`,
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
    description: `City Care Companions is a healthcare service based in Wandsworth, London, United Kingdom. there offers personalized home care services, including assisted living, live-in support, specialized medical care, and end-of-life assistance. We also provide temporary healthcare staffing to support care homes and private individuals. 

As the UI Designer, I collaborated with the Project Manager and developers to ensure a seamless user experience. I also designed the company logo for City Care Companions.`,
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
    description: `Applete is a sports app where you can join games and activities, participate in tournaments, or easily reserve sports courts. My role in this project is UI Designer. I collaborated with the Project Manager and developers to create a user-friendly experience that’s easy to understand.`,
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
    description: `The OVK Plan, based in Sweden, Europe, serves as an inspection guideline that promotes consistency and fairness by standardizing evaluation procedures across different inspectors. To simplify their workflow and save time managing multiple forms, I created a UI design that makes tasks easier and more organized.`,
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
    description: `Hotel booking app is the process of reserving accommodation at a hotel in advance. This ensures that you have a place to stay during your travel or staycation.

I chose hotel booking as one of my personal projects because I understand the key information users need before booking a room, such as availability, pricing, and amenities. I’ve also booked rooms myself several times, so I’m familiar with the process.`,
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
    description: `Online beauty products are items you can order online and have delivered to your home.

As someone who enjoys browsing beauty products online, I decided to redesign a beauty e-commerce page for my personal project. This made it easier for me to create a site that’s simple and enjoyable to use. `,
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
