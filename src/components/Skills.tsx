import { Cloud, Shield, Server, Lock, Network, Database, Container, Code } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'cyan',
    skills: ['Azure AKS', 'Azure VMSS', 'Azure VMs', 'VNet & Subnets', 'Azure Key Vault', 'Log Analytics']
  },
  {
    title: 'Containers & Orchestration',
    icon: Container,
    color: 'blue',
    skills: ['Kubernetes', 'Docker', 'Helm', 'kubectl', 'Docker Hub']
  },
  {
    title: 'Infrastructure as Code',
    icon: Server,
    color: 'violet',
    skills: ['Terraform', 'Terraform Modules', 'Multi-environment IaC', 'Azure CLI']
  },
  {
    title: 'CI/CD & Automation',
    icon: Code,
    color: 'green',
    skills: ['GitHub Actions', 'Azure CLI', 'kubectl', 'Helm CLI', 'Automation Scripts']
  },
  {
    title: 'Monitoring & Observability',
    icon: Network,
    color: 'indigo',
    skills: ['Azure Monitor', 'Log Analytics', 'Diagnostic Settings', 'HPA Metrics', 'Azure Monitor Agent']
  },
  {
    title: 'Security',
    icon: Shield,
    color: 'emerald',
    skills: ['NSGs', 'Private Networking', 'SSH Allowlisting', 'Defender for Cloud', 'GDPR Compliance']
  },
  {
    title: 'Operating Systems',
    icon: Lock,
    color: 'rose',
    skills: ['Linux Administration', 'Ubuntu Server', 'System Configuration', 'Security Hardening']
  },
  {
    title: 'Programming & Scripting',
    icon: Database,
    color: 'amber',
    skills: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON']
  }
];

const colorClasses = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  green: 'bg-green-500/10 border-green-500/20 text-green-400',
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Skills & Expertise</h2>
          <p className="text-slate-400">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colorClass = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={category.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 border ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-slate-200 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}