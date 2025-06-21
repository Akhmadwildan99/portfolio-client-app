import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="mt-10 mb-10 w-full rounded-2xl bg-white">
          <div className="relative px-4 sm:px-8 xl:px-30 shadow-2xl pt-10 pb-10 min-h-3/4">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:gap-20">
              <section id="articles">
                <Articles />
              </section>
              <section id="experiences">
                <Experiences />
              </section>
            </div>
            <section id="skills" className="mt-20">
              <Skills />
            </section>
          </div>
        </div>
      </main>
      <footer className="mt-20 flex-none">
        <div className="border-t border-zinc-100 pt-10 pb-16">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
                <a href="https://www.linkedin.com/in/akhmad-wildan-452a4b203" aria-label="LinkedIn" className="group -m-1 p-1"><i className="ri-linkedin-box-fill ri-xl"></i></a>
                <a href="https://medium.com/@wildante" aria-label="Medium" className="group -m-1 p-1"><i className="ri-medium-fill ri-xl"></i></a>
                <a href="https://www.instagram.com/wildante__/" aria-label="Instagram" className="group -m-1 p-1"><i className="ri-instagram-line ri-xl"></i></a>
              </div>
              <p className="text-sm text-zinc-400">
                © {new Date().getFullYear()} Akhmad Wildan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;