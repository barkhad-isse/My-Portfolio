import { Cloud, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Only cloud icon now */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="p-4 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <Cloud className="w-12 h-12 text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-slate-100 mb-4">
          Barkhad Isse
        </h1>
        <h2 className="text-slate-300 mb-6">
          Junior Cloud Engineer
        </h2>

        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Aspiring Cloud Engineer with practical experience working with Kubernetes (AKS), Docker,
          Helm, Azure infrastructure, Linux, and Terraform. Built cloud-native projects that strengthened
          my understanding of scaling, monitoring, and securing workloads in Azure.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="https://github.com/barkhad-isse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          >
            <Github className="w-6 h-6 text-slate-300" />
          </a>

          <a 
            href="https://www.linkedin.com/in/barkhad-isse-b54372295/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          >
            <Linkedin className="w-6 h-6 text-slate-300" />
          </a>

          <a 
            href="mailto:Barkhadisse16@hotmail.com"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          >
            <Mail className="w-6 h-6 text-slate-300" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            View Projects
          </button>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
          >
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
}
