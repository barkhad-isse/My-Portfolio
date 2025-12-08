import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Get In Touch</h2>
          <p className="text-slate-400">
            Open to new opportunities, feel free to contact me.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-slate-100 mb-6">Contact Information</h3>

            <div className="space-y-4">
              
              {/* Email */}
              <a 
                href="mailto:Barkhadisse16@hotmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p>Barkhadisse16@hotmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-700 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p>Oslo, Norway</p>
                </div>
              </div>

            </div>

            {/* Social links */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400 mb-4">Follow me on social media</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/barkhad-isse-b54372295/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-slate-300" />
                </a>

                <a 
                  href="https://github.com/barkhad-isse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

