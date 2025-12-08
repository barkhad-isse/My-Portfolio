import { Cloud } from 'lucide-react';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left side brand */}
          <div className="flex items-center gap-2 text-cyan-400">
            <Cloud className="w-6 h-6" />
            <span className="text-white">My Portfolio</span>
          </div>

          {/* Navigation buttons */}
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-cyan-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-cyan-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="text-slate-300 hover:text-cyan-400 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
