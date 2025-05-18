import sms from '../Assets/Icons/sms.png';
import github from '../Assets/Icons/github.png';
import linkedin from '../Assets/Icons/linkedin.png';
import instagram from '../Assets/Icons/instagram.png';

const socials = [
  { image: sms, link: "mailto:ganiyatusanuusi@gmail.com", alt: "Email Ghaniya" },
  { image: github, link: "https://github.com/ghaniya01", alt: "GitHub Profile" },
  { image: linkedin, link: "https://www.linkedin.com/in/ganiyatu-sanuusi-750a8118a/", alt: "LinkedIn Profile" },
  { image: instagram, link: "https://instagram.com/yourusername", alt: "Instagram Profile" }
];

export const Footer = () => {
  return (
    <footer className="w-full bg-navy text-white py-10 px-6 flex flex-col items-center gap-6">
      
      {/* Social Links */}
      <nav aria-label="Social media links" className="flex gap-4 sm:gap-6 flex-wrap justify-center">
        {socials.map(({ image, link, alt }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            className="hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-brown flex items-center justify-center w-12 h-12 rounded-full shadow-md hover:bg-opacity-90 transition">
              <img src={image} alt={alt} className="w-6 h-6" />
            </div>
          </a>
        ))}
      </nav>

      {/* Footer Note */}
      <small className="text-xs sm:text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} <span className="text-white font-medium">TechwithGhaniya</span>. All rights reserved.
      </small>
    </footer>
  );
};
