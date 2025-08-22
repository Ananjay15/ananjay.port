import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = useSelector((s) => s.data.projects)
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </div>
    </section>
  )
}
