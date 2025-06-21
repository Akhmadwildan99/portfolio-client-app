import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (section) {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar py-7">
      <div className="flex items-center justify-between md:border-b-2 md:border-gray-400">
        <div className="logo">
          <h1 className="text-3xl font-bold bg-gray-700 text-white p-2 md:bg-transparent md:text-black">
            nadliw
          </h1>
        </div>
        <ul
          className={`flex items-center md:gap-10 lg:gap-8 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 
            md:opacity-100 bg-gray-300/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${
              active ? "top-0 opacity-100" : "-top-10 opacity-0"
            }`}
        >
          <li>
            <button onClick={() => handleNavClick()} className="text-lg font-medium cursor-pointer text-black">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('articles')} className="text-lg font-medium cursor-pointer text-black">
              Articles
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('experiences')} className="text-lg font-medium cursor-pointer text-black">
              Experiences
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('skills')} className="text-lg font-medium cursor-pointer text-black">
              Skills
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
};