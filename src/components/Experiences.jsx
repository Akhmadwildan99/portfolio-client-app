import experiences from '../data-experiences.js';

function Experiences() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-12 shadow-2xl">
      <h2 className="flex text-2xl font-bold mb-6">
        <i className="ri-macbook-line ri-lg mt-1"></i>
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {experiences.map((experience) => (
          <li key={experience.id} className="flex gap-4">
            <div className="relative mt-1 flex h-20 w-20 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5">
              <img
                src={experience.logo}
                alt={`${experience.company} company logo`}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900">{experience.company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500">{experience.role}</dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400" aria-label={`${experience.startDate} until ${experience.endDate}`}>
                <time dateTime={experience.startDate}>{experience.startDate}</time>
                <span aria-hidden="true">-</span>
                <time dateTime={experience.endDate}>{experience.endDate}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Experiences;