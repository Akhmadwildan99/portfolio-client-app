import articles from '../data-articles.js'; // Adjust the import path as necessary

function Articles() {
  return (
    <>
        <div className="mx-auto  grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none">

          {articles.map((article) => (
            <article key={article.id} className="group relative flex flex-col items-start">
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 ">
                  <div
                    className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition 
                    sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                  ></div>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">
                      {article.title}
                    </span>
                  </a>
                </h2>
                <time
                  className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                  datetime="2022-09-05"
                >
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                  </span>
                  September 5, 2022
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {article.description}
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                >
                  Read article <i className="ri-arrow-drop-right-line ri-lg"></i>
                </div>
              </article>
          ))}
              
              
            </div>
    </>
  )
}

export default Articles;