import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Experiences from "./components/Experiences";

function App() {
  return (
    <>
      <Hero />
      <div className="mt-10 w-full rounded-2xl bg-white">
        <div className="elative px-4 sm:px-8 xl:px-30 shadow-2xl pt-10 pb-5 min-h-screen3/4">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:gap-20">
            <Articles />
            <Experiences />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
