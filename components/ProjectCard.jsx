import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="glass group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
      <div className="grid-bg flex h-48 items-center justify-center border-b border-white/5">
        <div className="rounded-2xl bg-white/5 px-6 py-5 text-center">
          <div className="text-4xl">{project.icon}</div>
          <p className="mt-2 text-xs uppercase tracking-widest text-gray-500">{project.category}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">{item}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <a href={project.demo} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">Live Demo <ExternalLink size={15}/></a>
          <a
            href={project.github} 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code <FaGithub size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}