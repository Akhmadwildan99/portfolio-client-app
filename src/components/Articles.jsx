import articles from '../data-articles.js';

function Articles() {
  return (
    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none">
      <h2 className="text-2xl font-bold mb-6 text-zinc-800">Articles</h2>
      {articles.map((article) => (
        <article key={article.id} className="group relative flex flex-col items-start">
          <h3 className="text-base font-semibold tracking-tight text-zinc-800">
            <div
              className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition 
              sm:-inset-x-6 sm:rounded-2xl"
            ></div>
            <a href={`/article/${article.slug}`}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">
                {article.title}
              </span>
            </a>
          </h3>
          <time
            className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 pl-3.5"
            dateTime={article.date}
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
            </span>
            {article.date}
          </time>
          <p className="relative z-10 mt-2 text-sm text-zinc-600">
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
  )
}

export default Articles;