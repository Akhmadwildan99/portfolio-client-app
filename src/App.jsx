import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Experiences from "./components/Experiences";

function App() {
  return (
    <>
      <Hero />
      <div className="mt-10 mb-10 w-full rounded-2xl bg-white">
        <div className="elative px-4 sm:px-8 xl:px-30 shadow-2xl pt-10 pb-10 min-h-screen3/4">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:gap-20">
            <Articles />
            <Experiences />
          </div>
        </div>
      </div>
      <footer className="mt-20 flex-none">
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <a href="#" className="group -m-1 p-1"><i className="ri-linkedin-box-fill ri-xl"></i></a>
                <a href="#" className="group -m-1 p-1"><i className="ri-medium-fill ri-xl"></i></a>
                <a href="#" className="group -m-1 p-1"><i className="ri-instagram-line ri-xl"></i></a>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                © 2025 Akhmad Wildan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
