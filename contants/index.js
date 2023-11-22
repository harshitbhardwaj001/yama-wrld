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
      id: "citizenpass",
      title: "Citizen Pass",
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
      id: "career",
      title: "Career",
    },
  ];
  
  const services = [
    {
      title: "Become part of the project by minting an ether capsule.",
      icon: web,
    },
    {
      title: "The road to world domination is one that takes time.",
      icon: mobile,
    },
    {
      title: "Anything is possible withing the ether universe.",
      icon: backend,
    },
    {
      title: "Step into the ether by revealing your Ether Capsules.",
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
      title: "How to acquire citizen pass?",
      company_name: "Get access to our citizen pass!!",
      // icon: starbucks,
      // iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "Most Citizen Passes are only cleared for Citizens who reside on that level.",
        "In the world of Yama a black-market Citizen Pass allows for unrestricted travel across different levels of the Island Country with an untraceable ID and no trace of criminal records.",
        "A clean slate!!",
        "What will you do with such power?",
      ],
    },
    {
      title: "Early Adopter",
      company_name: "Do you want to be the part of the early community?",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "We're looking to onboard people who truly believe in our vision and want to build with us for the long term. Engaging with our Twitter Posts is one way of showing your support early on!",
        "Yama is a digital IP behemoth in the making. The characters and stories we post on Twitter are from the original world of Yama. We love to see people creating adaptations of our art, story, and ideas and tagging us!",
        "We want to bring on people who are excited to rep Yama! Whether that's through consistent tweets, tagging friends, or talking about it.",
        "We value all the collaborations we get through our DMs and on our social media feed. Collaborations are at the forefront of Web3 and we'd love to invite people into our community who help facilitate these partnerships.",
      ],
    },
    {
      title: "Secondary Market",
      company_name: "Couldn't get the early pass? No worries we got you covered.",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "OpenSea",
        "Metamask",
        "Blur",
      ],
    },
    {
      title: "Voila! Citizen Pass Membership",
      company_name: "Woahh!! You just got yourself a citizen pass!",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "1 Free Yama NFT Mint!",
        "Access to The Dhaba.",
        "Ongoing Perks.",
        "Exclusive Access to Drops!!",
      ],
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