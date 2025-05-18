export const Card2 = ({ title, tags, description, buttonText, image, link }) => {
  return (
    <div className=" font-darker bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center mx-auto transition hover:shadow-xl">
      
      {/* Image on Top */}
      <div className="w-full h-[200px] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-navy font-darker">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{tags}</p>
      <p className="text-gray-700 text-base mt-4">{description}</p>

      {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-navy text-white px-6 py-3 rounded-full hover:bg-tealHover transition"
        >
          {buttonText}
        </a>
    </div>
  );
};
