import { ArrowDown, ArrowRight, Mail, MapPin, Download, Code2, Server, Database, Cloud } from "lucide-react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const skills = [
  { icon: Code2, title: "Backend Development", items: ["Java", "Spring Boot", "Node.js", "Laravel", "REST API", "Microservices"] },
  { icon: Database, title: "Database", items: ["Oracle", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"] },
  { icon: Server, title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { icon: Cloud, title: "DevOps & Cloud", items: ["Docker", "Nginx", "GitLab CI/CD", "Kafka", "RabbitMQ", "Monitoring"] },
];

const projects = [
  {
    name: "Water Distribution Management",
    category: "Enterprise Application",
    icon: "💧",
    description: "Management platform for monitoring water distribution, operational data, reporting and business workflows.",
    stack: ["Next.js", "Spring Boot", "Oracle", "Docker"],
    demo: "#", github: "#"
  },
  {
    name: "Movie Explorer",
    category: "Web Application",
    icon: "🎬",
    description: "Movie discovery application with search, filtering, favorites and responsive UI.",
    stack: ["Laravel", "Next.js", "OMDb API", "MySQL"],
    demo: "#", github: "#"
  },
  {
    name: "Microservice Platform",
    category: "Backend",
    icon: "⚙️",
    description: "Scalable microservice architecture using asynchronous messaging, caching and observability.",
    stack: ["Java", "Quarkus", "Kafka", "Redis"],
    demo: "#", github: "#"
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="container-page flex min-h-screen items-center py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-sm text-violet-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <p className="mb-4 text-lg text-gray-400">Hello, I&apos;m</p>
            <h1 className="text-5xl font-black leading-tight sm:text-7xl">
              Your <span className="gradient-text">Name</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
              Senior Software Engineer & Technical Lead
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              I build scalable web applications, backend services and distributed systems
              with a strong focus on clean architecture, performance and maintainability.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
                View Projects <ArrowRight size={18}/>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/5">
                Contact Me <Mail size={18}/>
              </a>
              <a href="/cv.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-gray-300 hover:bg-white/5">
                <Download size={17}/> CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={16}/> Indonesia
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/5 bg-white/[.015] py-24">
          <div className="container-page">
            <SectionTitle eyebrow="About Me" title="Engineering with business impact." description="Replace this paragraph with your professional summary, years of experience, leadership experience, and the type of problems you enjoy solving." />
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                ["10+", "Years Experience"],
                ["30+", "Projects Delivered"],
                ["10+", "Technologies"],
              ].map(([value, label]) => (
                <div key={label} className="glass rounded-2xl p-7">
                  <div className="text-4xl font-black gradient-text">{value}</div>
                  <div className="mt-2 text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="container-page py-24">
          <SectionTitle eyebrow="Skills" title="My technical toolbox" description="Organize your skills around the kind of work you want recruiters and clients to notice." />
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map(({ icon: Icon, title, items }) => (
              <div key={title} className="glass rounded-2xl p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300"><Icon size={22}/></div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => <span key={item} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/5 bg-white/[.015] py-24">
          <div className="container-page">
            <SectionTitle eyebrow="Portfolio" title="Selected projects" description="Showcase your strongest work. Replace the sample projects below with real projects, screenshots and links." />
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
            </div>
          </div>
        </section>

        <section id="experience" className="container-page py-24">
          <SectionTitle eyebrow="Experience" title="Professional journey" />
          <div className="relative border-l border-white/10 pl-8">
            {[
              ["2024 — Present", "Senior Software Engineer / Technical Lead", "Company Name", "Lead backend architecture, technical decisions, code quality and delivery."],
              ["2021 — 2024", "Backend Engineer", "Company Name", "Developed enterprise applications, APIs and integrations."],
              ["2018 — 2021", "Software Engineer", "Company Name", "Built web applications and backend services."],
            ].map(([period, role, company, desc]) => (
              <div key={period} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#070b14] bg-violet-400" />
                <p className="text-sm text-violet-300">{period}</p>
                <h3 className="mt-2 text-xl font-semibold">{role}</h3>
                <p className="mt-1 text-gray-400">{company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container-page">
            <div className="overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/5 p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[.25em] text-violet-300">Contact</p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">Let&apos;s build something great.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                Available for senior engineering, technical lead and software architecture opportunities.
              </p>
              <a href="mailto:your@email.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black">
                <Mail size={18}/> your@email.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="container-page flex flex-col justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Your Name. All rights reserved.</p>
          <a href="#" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}