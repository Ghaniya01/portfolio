export const About = () => {
  const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'TAILWIND', 'PYTHON', 'REACTJS', 'TYPESCRIPT', 'FLASK'];

  const sectionPadding = 'px-6 md:px-12';
  const headingClass = 'font-darker text-3xl md:text-[45px] font-bold leading-tight md:leading-[1.3] text-left';
  const contentBoxClass = 'border border-softGreen rounded-2xl';
  const skillButtonClass =
    'bg-grade1 text-navy border border-softGreen px-8 py-3 rounded-full text-base md:text-2xl font-semibold shadow-md transition-all hover:bg-opacity-90';

  return (
    <div className="bg-herobg1">

      {/* Section Title */}
      <section className={`bg-grade2 flex flex-wrap justify-between ${sectionPadding} pt-12 items-center`}>
        <h2 className={headingClass}>
          Discover the Developer<br />Behind the Projects
        </h2>
      </section>

      {/* About Text */}
      <section className={`bg-grade2 text-navy ${sectionPadding} py-12 mx-6 md:mx-12 mt-8 ${contentBoxClass} text-lg md:text-[40px] font-darker leading-normal md:leading-[1.5]`}>
        Hi, I’m <span className="font-bold">Ghaniya</span>, a passionate software developer who creates digital experiences that are as functional as they are beautifully crafted.
        My journey started with a curiosity about how websites work behind the scenes. I’ve explored several areas of tech — from product design to technical assistance — but what excites me most is building things.
        That curiosity has evolved into a deep passion for developing clean, efficient, and scalable software solutions.
      </section>

      {/* Skills Heading */}
      <section className={`${sectionPadding} py-8`}>
        <h2 className={headingClass}>
          Skills and Strengths That<br />Define My Work
        </h2>
      </section>

      {/* Skills List */}
      <section className={`mb-24 text-brown ${sectionPadding} py-8 mx-6 md:mx-12 ${contentBoxClass} text-lg md:text-[40px] font-darker leading-normal md:leading-[1.5]`}>
        <p className="mb-6">
          These are the languages, frameworks, and tools I specialize in, allowing me to build responsive, scalable, and user-focused solutions.
        </p>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <button key={index} className={skillButtonClass}>
              {skill}
            </button>
          ))}
        </div>
      </section>

    </div>
  );
};
