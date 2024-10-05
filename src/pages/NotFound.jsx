import image from "../assets/images/bg.jpg";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="relative">
          <h1
            className="text-[230px] leading-none font-extrabold text-transparent bg-clip-text bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }} // Using template literals to insert the image URL
          >
            Oops!
          </h1>
        </div>
        <h2 className="text-2xl font-bold text-black uppercase mt-4">
          404 - Page not found
        </h2>
        <p className="text-sm text-black mt-4 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-bold uppercase rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Go To Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
