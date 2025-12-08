import { GraduationCap } from 'lucide-react';

const education = {
  degree: {
    title: 'Bachelor in Cybersecurity',
    institution: 'Kristiania University Of Applied Sciences',
    period: 'August 2023 - Present',
    grade: 'Average grade: 4.13',
    description:
      'Bachelor’s degree in cybersecurity with a strong focus on offensive security, cloud security and modern cyber defense practices.',
    highlights: [
      'Hands-on experience with penetration testing and ethical hacking',
      'Security in cloud environments (Azure) and web application protection',
      'Threat hunting, incident response and digital forensics',
      'Working with tools like Splunk, Docker and NGINX in security monitoring'
    ]
  }
};

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Education</h2>
          <p className="text-slate-400">
            Academic background
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Degree */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-100 mb-1">{education.degree.title}</h3>
                <p className="text-slate-300 mb-1">
                  {education.degree.institution}
                </p>
                <p className="text-slate-400 mb-1">{education.degree.period}</p>
                <p className="text-cyan-400">{education.degree.grade}</p>
              </div>
            </div>

            <p className="text-slate-400 mb-6">
              {education.degree.description}
            </p>

            <div className="mb-6">
              <h4 className="text-slate-200 mb-3">Key Focus Areas</h4>
              <div className="space-y-2">
                {education.degree.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

