import heroImage from "../../public/assets/hero.jpg";

function Hero() {
  return (
    <div className="hero grid md:grid-cols-2 items-center  pt-10 justify-between xl:gap-10 gap-6 grid-cols-1">
        <div>
          <h5 className="text-gray-400 text-3xl mb-6">A Software Enginer</h5>
          <h1 className="text-5xl font-bold mb-6">
            Hi, I’m 
            {/* &nbsp; */}
            <span className="px-4 text-black xl:text-white xl:bg-black  ">Akhmad Wildan</span>
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
              href="#"
              className="bg-zinc-600 px-6 py-3 rounded-full  text-white hover:bg-zinc-500"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
          
          </div>
        </div>
        <div className="">
          <img
            src={heroImage}
            alt="Hero image"
            className="w-[550px] shadow-2xl md:ml-auto"
          />
        </div>
      </div>
  )
}

export default Hero