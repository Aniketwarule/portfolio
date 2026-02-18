import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'VentureBloom',
      description:
        'AI-driven platform for startup validation and investor matching using React. Modular architecture enabling campaign management, business analytics, and sector-based recommendations. Real-time data processing and scalable frontend UI/UX across distributed systems.',
      tech: ['React', 'TypeScript', 'Node.js', 'AI APIs'],
      github: 'https://github.com/Aniketwarule/VentureBloom',
      live: 'https://venturebloom.vercel.app/',
    },
    {
      title: 'DAOShip',
      description:
        'Multi-chain platform (Avalanche & Algorand) launching DAOs in under 5 mins. Developed interoperable smart contracts using Solidity and PyTeal for secure voting and treasury management. Built scalable no-code interface with Next.js.',
      tech: ['Next.js', 'Solidity', 'PyTeal', 'Algorand', 'Avalanche'],
      github: 'https://github.com/Aniketwarule/DAOShip',
    },
    {
      title: 'Decentralized Donation Platform',
      description:
        'Developed Ethereum-based donation platform using Next.js and Node.js. Enabled trustless smart contracts and Web3 wallet integration and efficient fund transfers.',
      tech: ['Next.js', 'Ethereum', 'Web3', 'Smart Contracts'],
      github: 'https://github.com/Aniketwarule/Crazy8_ByteCamp2025',
      live: 'https://ngo-ledger-r8bx.vercel.app/',
    },
    {
      title: 'WorkerGo (Web + Android)',
      description:
        'Built a platform connecting employers and verified daily wage workers across web and Android. Integrated payment automation and real-time job tracking, reducing payment delays',
      tech: ['React', 'Android', 'Node.js', 'Payment APIs'],
      github: 'https://github.com/Aniketwarule/WorkerGo',
    },
    {
      title: 'Dark Store Management',
      description:
        'Built a logistics system for dark stores with real-time staff coordination, order tracking, and intelligent inventory management. Built with React, Node.js, MongoDB, and Real-time APIs.',
      tech: ['React', 'Node.js', 'MongoDB', 'Real-time APIs'],
      github: 'https://github.com/Aniketwarule/Dark_store_platform',
    },
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-60 pb-10 md:pb-12">
      <div className="mb-10">
        <h1 className="font-mono text-2xl md:text-5xl font-normal tracking-normal text-[rgb(131,98,63)] dark:text-[rgb(235,209,183)] mb-3">
          Projects
        </h1>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <article
            key={index}
            className="border border-neutral-300 dark:border-neutral-800 p-5 md:p-8 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="flex items-start justify-between mb-4 gap-3">
              <h2 className="font-mono text-xl md:text-2xl text-neutral-900 dark:text-neutral-50">
                {project.title}
              </h2>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 font-mono text-xs border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-150"
                >
                  <Github className="w-4 h-4" />
                  <span className="font-mono">Code</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-150"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-mono">Live</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
