import { Menu } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070b14]/75 backdrop-blur-xl">
      <nav className="container-page flex h-18 items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-violet-400">&lt;</span>YN<span className="text-cyan-300">/&gt;</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-gray-300 hover:text-white">About</a>
          <a href="#skills" className="text-sm text-gray-300 hover:text-white">Skills</a>
          <a href="#projects" className="text-sm text-gray-300 hover:text-white">Projects</a>
          <a href="#experience" className="text-sm text-gray-300 hover:text-white">Experience</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/hasbi001"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-300 hover:bg-white/5 hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hasbialifirdaus/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-300 hover:bg-white/5 hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        <button className="rounded-lg border border-white/10 p-2 md:hidden"><Menu size={20}/></button>
      </nav>
    </header>
  );
}