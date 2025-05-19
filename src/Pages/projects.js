import React from 'react';
import summora from '../Assets/Images/summorascreen.png';
import portfolio from '../Assets/Images/portfolio.png';
import beebox from '../Assets/Images/beebox.png';
import { Card2 } from '../Commons/Card2';

export const Project = () => {
  const cards = [
    {
      title: 'Summora – AI Summarizer',
      tags: 'ReactJS • Flask • AI Integration • UI/UX Design',
      description:
        'Summora is an AI-powered tool designed to summarize text, audio, and video content using natural language processing. Built with ReactJS and Flask, it delivers clear, structured summaries that help users extract insights quickly and efficiently.',
      buttonText: 'View Website',
      image: summora,
      link: 'https://ghaniya01.github.io/summora',
    },
    {
      title: 'Personal Portfolio Website',
      tags: 'ReactJS • Tailwind CSS • Responsive Design • UI/UX',
      description:
        'A personal portfolio showcasing my projects, skills, and experience as a software developer. Built with ReactJS and styled using Tailwind CSS for clean, modern aesthetics and full responsiveness.',
      buttonText: 'Explore Portfolio',
      image: portfolio,
      link: 'https://ghaniya01.github.io/portfolio',
    },
    {
      title: 'BeeBox – Video Upload Web App',
      tags: 'ReactJS • File Upload • UI Design • Media Handling',
      description:
        'BeeBox is a responsive video upload app that allows users to upload, preview, and manage media files seamlessly. It’s designed with a simple and clean interface to streamline content management.',
      buttonText: 'View Website',
      image: beebox,
      link: 'https://ghaniya01.github.io/beebox',
    }
  ];

  return (
    <section className="bg-gradient-to-b from-herobg2 to-herobg1 min-h-screen py-2 px-4 md:py-8 lg:py-8 xl:py-2">

      
      {/* Title Section */}
      <div className="mb-12 max-w-[1300px] mx-auto px-6 md:px-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold font-darker">
          <span className="text-brown">My Recent </span>
          <span className="text-black">Projects.</span>
        </h1>
        <p className="font-darker text-black md:text-lg mt-2">
          Enhancing user experience through smart engineering and design.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto px-6">
        {cards.map(({ title, tags, description, buttonText, image, link }, index) => (
          <Card2
            key={index}
            title={title}
            tags={tags}
            description={description}
            buttonText={buttonText}
            image={image}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};
