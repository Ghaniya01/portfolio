import React from 'react';

export const Blog = () => {
  const posts = [
    {
      title: 'Fixing Tailwind CSS in React',
      description: 'From confusion to clarity: how I finally installed Tailwind CSS in my React project.',
      date: 'May 16, 2025',
    },
    {
      title: 'Securing Sensitive Data in React',
      description: 'From mistake to best practice: securing API keys in React projects.',
      date: 'May 12, 2025',
    },
  ];

  const sectionWrapper = 'bg-navy text-white py-20 px-4 md:px-10 rounded-lg';
  const badgeClass = 'text-sm mb-4 border border-white px-4 py-1 inline-block rounded-full';
  const headingClass = 'text-3xl md:text-5xl font-bold font-darker leading-snug max-w-3xl mx-auto mb-12 text-center';
  const cardClass = 'p-6 border border-gray-300 rounded-xl hover:shadow-lg transition';
  const linkButtonClass = 'inline-block bg-white text-navy px-6 py-3 rounded-full font-medium transition hover:scale-105';

  return (
    <section className={sectionWrapper}>
      {/* Badge */}
      <p className={badgeClass}>Blog</p>

      {/* Section Heading */}
      <h2 className={headingClass}>
        I share my tech journey: lessons, bugs, breakthroughs & tools here.
      </h2>

      {/* Blog Posts */}
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map(({ title, description, date }, index) => (
          <article key={index} className={cardClass}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-white mb-4">{date}</p>
            <p className="text-base">{description}</p>
          </article>
        ))}
      </div>

      {/* Blog Link */}
      <div className="text-center mt-12">
        <a
          href="https://techwithghaniya.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkButtonClass}
        >
          Visit Full Blog
        </a>
      </div>
    </section>
  );
};
