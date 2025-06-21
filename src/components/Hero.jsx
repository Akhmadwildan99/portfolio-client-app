import { useState } from "react";
import heroImage from "/assets/hero.jpg";
import CV from "/assets/CV_Akhmad_Wildan.pdf";

function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download completion after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 500);
  };

  return (
    <section id="hero" className="hero grid md:grid-cols-2 items-center pt-10 justify-between xl:gap-10 gap-6 grid-cols-1">
      <div>
        <h5 className="text-gray-400 text-3xl mb-6">A Software Engineer</h5>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Hi, I'm 
          <span className="px-4 text-black xl:text-white xl:bg-black">Akhmad Wildan</span>
        </h1>
        <p className="text-base/loose text-gray-500">
          I am a passionate Full Stack Web Developer with over 2 years of
          experience, primarily focused on backend development using Java and
          Spring Boot. In the past 4 months, I have successfully transitioned
          into a full-stack role, where I have utilized my expertise in Java,
          Spring Boot, and Vue.js to create dynamic, user-friendly web
          applications. My experience includes designing robust RESTful APIs,
          optimizing database interactions, and implementing responsive
          front-end interfaces.
        </p>
        <div className="flex items-center gap-4 mt-3">
          <a
            href={CV}
            className={`bg-zinc-600 px-6 py-3 rounded-full text-white hover:bg-zinc-500 transition-all flex items-center ${isDownloading ? 'cursor-wait' : ''}`}
            download
            onClick={handleDownload}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                Download CV <i className="ri-download-line ri-lg ml-1"></i>
              </>
            )}
          </a>
        </div>
      </div>
      <div>
        <img
          src={heroImage}
          alt="Akhmad Wildan portrait"
          className="w-full max-w-[550px] shadow-2xl md:ml-auto"
          loading="eager"
        />
      </div>
    </section>
  )
}

export default Hero