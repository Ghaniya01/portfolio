export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-herobg1 to-herobg2 min-h-screen flex flex-col items-start px-6 md:px-12 lg:px-36">
      
      {/* Intro Text */}
      <p className="font-darker text-secondtext text-[20px] md:text-[25px] mt-28 md:mt-40 mb-4 md:mb-8">
        Hello, I'm Ghaniya,
      </p>

      {/* Main Heading */}
      <h1 className="text-navy text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight w-full text-left font-darker break-words">
        a software developer passionate about solving problems with technology.
      </h1>

      {/* Description and CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12 md:mt-24 mb-12 w-full max-w-6xl">

        {/* Description */}
        <p className="order-1 md:order-2 font-darker text-secondtext text-[18px] sm:text-[20px] md:text-[22px] leading-tight max-w-4xl">
          I build clean, responsive tech solutions using ReactJS on the front end and Python on the back end. 
          From crafting scalable UIs to integrating APIs and databases, 
          I enjoy turning complex problems into smooth, intuitive solutions — 
          and I’m always ready for new challenges.
        </p>

        {/* CTA Button */}
        <a href="#contact" className="order-2 md:order-1 w-full md:w-auto">
          <button className="bg-navy text-white py-4 px-8 rounded-full text-lg shadow-md hover:bg-tealHover transition-all w-full md:w-auto">
            Reach Out →
          </button>
        </a>

      </div>
    </section>
  );
};
