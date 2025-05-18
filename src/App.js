import { Navbar } from "./Pages/navbar";
import { Hero } from "./Pages/hero.js";
import { Project } from "./Pages/projects.js";
import { About } from "./Pages/about.js";
import { Blog } from "./Pages/blog.js";
import { ContactForm } from "./Pages/contactme.js";
import { Footer } from "./Pages/footer.js";

function Portfolio() {
return (
  <div className="bg-gradient-to-b from-[#F9FAFB] via-[#EEF1F5]">

    <Navbar
      buttons={['Home', 'Projects', 'About', 'Blog']}
      text2="Contact Me"
    />
    
    <div id="home">
      <Hero />
    </div>

    <div id="projects">
      <Project />
    </div>

    <div id="about">
      <About />
    </div>

    <div id="blog">
      <Blog />
    </div>

    <div id="contact">
      <ContactForm/>
    </div>

    <div id="contactdetails">
      <Footer/>
    </div>

  </div>
  
  );
}

export default Portfolio;
