import React from 'react';

export const Card2 = ({ title, tags, description, buttonText, image, link }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-2xl font-bold text-navy font-darker mb-2">{title}</h2>
          <p className="text-sm text-grayMuted mb-3">{tags}</p>
          <p className="text-base text-charcoal leading-relaxed">{description}</p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-navy text-white px-6 py-3 rounded-full hover:bg-[#803f20] transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
