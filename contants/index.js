import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "citizenpass",
    title: "Citizen Pass",
  },
  {
    id: "map",
    title: "Mandala",
  },
  {
    id: "street",
    title: "Street",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "careers",
    title: "Career",
  },
];

const services = [
  {
    title: "Become a VIP member at Yama by obtaining your Citizen Pass.",
    icon: web,
  },
  {
    title:
      "Exclusive Membership with access to Yama Activations, airdrops, and experiences.",
    icon: mobile,
  },
  {
    title: "VIP access to all Yama events, panels, discussions, and meet-ups.",
    icon: backend,
  },
  {
    title:
      "Citizen Pass holders are guaranteed 1 free Yama NFT from our pfp collection launching in 2024.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Where it all began",
    company_name: "April, 2023",
    // icon: starbucks,
    // iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "The Citizen Pass Program is launched publicly on Twitter relating to the lore of Yama.",
      "Private Discord is launched.",
      "Early supporters of our content are sent a DM inviting them to our Discord to claim a Citizen Role. 1 Citizen Role = 1 guaranteed Citizen Pass mint.",
    ],
  },
  {
    title: "Community Growth",
    company_name: "November, 2023",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "500 Citizens onboarded into our Discord.",
      "Collaborations with blue-chip Web3 communities.",
      "AMAs and Twitter Spaces.",
    ],
  },
  {
    title: "Citizen Pass Mint Day",
    company_name: "Between Dec-Jan",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Mint will take place during December '23 or January '24",
      "Max supply: 500",
      "Mint price: Free Mint for Citizen Role holders in the Yama Discord",
      "Users pay for Ethereum gas fees while minting their NFT",
    ],
  },
  {
    title: "Citizen Pass available on Secondary Markets",
    company_name: "Available after mint",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
