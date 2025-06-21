import skills from '../data-skills.js';

function Skills() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-12 shadow-2xl">
      <h2 className="flex text-2xl font-bold mb-6">
        <i className="ri-tools-line ri-lg mt-1"></i>
        <span className="ml-3">Skills & Technologies</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <i className={`${skill.icon} ri-2x text-gray-700 mb-2`}></i>
            <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;