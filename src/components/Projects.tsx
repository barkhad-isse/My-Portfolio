import { Github, Cloud, Shield, Server, Lock } from 'lucide-react';

const projects = [
  {
    title: 'Kubernetes + AKS Autoscaling Deployment',
    description:
      'Built and containerized a FastAPI application using Docker, deployed to k3d and Azure AKS using Helm. Implemented HPA based on CPU metrics and validated scaling behavior.',
    tech: ['Kubernetes', 'AKS', 'Docker', 'Helm', 'HPA', 'FastAPI'],
    icon: Cloud,
    color: 'cyan',
    githubUrl: 'https://github.com/barkhad-isse/k8s-aks-autoscaling-demo',
  },
  {
    title: 'Terraform + Azure Virtual Infrastructure',
    description:
      'Deployed complete production-style Azure environment with VMSS, Load Balancer, Key Vault, PostgreSQL. Configured monitoring, security, and multi-environment support with GitHub Actions CI.',
    tech: ['Terraform', 'Azure VMSS', 'Load Balancer', 'Key Vault', 'GitHub Actions'],
    icon: Server,
    color: 'blue',
    githubUrl: 'https://github.com/barkhad-isse/terraform-azure-project',
  },
  {
    title: 'Azure Secure VM Deployment & Monitoring Lab',
    description:
      'Deployed secure Ubuntu VM with NSG restrictions, Boot Diagnostics, Azure Monitor Agent, and Defender for Cloud integration for vulnerability scanning and threat detection.',
    tech: ['Azure VM', 'NSG', 'Log Analytics', 'Defender for Cloud', 'Security'],
    icon: Shield,
    color: 'emerald',
    githubUrl: 'https://github.com/barkhad-isse/azure-secure-vm-lab',
  },
  {
    title: 'SOC Portfolio – Detection & Threat Hunting Labs',
    description:
      'Hands-on SOC (Security Operations Center) projects and labs focused on detection engineering, monitoring, threat hunting, and incident response, using realistic security scenarios and tooling.',
    tech: ['SOC', 'SIEM', 'Threat Hunting', 'Incident Response', 'Detection Engineering'],
    icon: Shield,
    color: 'emerald',
    githubUrl: 'https://github.com/barkhad-isse/soc-portfolio',
  },
  {
    title: 'OSINT Recon Toolkit',
    description:
      'A lightweight Python tool that automates open-source intelligence (OSINT) collection for any given domain. Retrieves WHOIS data, DNS A-records, and SSL certificate information from public sources and outputs a structured JSON report.',
    tech: ['Python', 'OSINT', 'DNS', 'WHOIS', 'SSL', 'Security Automation'],
    icon: Lock,
    color: 'rose',
    githubUrl: 'https://github.com/barkhad-isse/osint-recon-toolkit',
  },
  {
    title: 'Krysselista – Agile Development Project',
    description:
      'Led as Scrum Master for developing a secure digital check-in/check-out system for kindergartens. Focus on GDPR compliance, access control, and data security. Partner: FrostByte AS.',
    tech: ['Scrum Master', 'GDPR', 'Security', 'Agile', 'Access Control'],
    icon: Lock,
    color: 'rose',
    
  },
];

const colorClasses = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
};

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Projects</h2>
          <p className="text-slate-400">
            Selected projects in cloud and cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const colorClass =
              colorClasses[project.color as keyof typeof colorClasses];

            return (
              <div
                key={project.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 border ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-slate-200 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Show GitHub button only if URL exists */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
