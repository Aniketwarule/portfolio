import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "VentureBloom",
      description: "Created an AI platform for startup validation and investor matching. Features automated business research, analytics, and sector-based recommendations with modular workspace and real-time insights.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "AI APIs"],
      github: "https://github.com/Aniketwarule/VentureBloom",
      live: "https://venturebloom.vercel.app/",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "WorkerGo (Web + Android)",
      description: "Built a platform connecting employers and verified daily wage workers across web and Android. Integrated payment automation and real-time job tracking, reducing payment delays by 80% with 1,000+ job matches.",
      techStack: ["React", "Android", "Node.js", "Payment APIs", "Real-time tracking"],
      github: "https://github.com/Aniketwarule/WorkerGO",
      live: "#", // To be added later
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Decentralized Donation Platform",
      description: "Developed Ethereum-based donation platform using Next.js and Node.js. Enabled trustless smart contracts and Web3 wallet integration with 99.9% uptime and efficient fund transfers.",
      techStack: ["Next.js", "Node.js", "Ethereum", "Web3", "Smart Contracts"],
      github: "https://github.com/Aniketwarule/Crazy8_ByteCamp2025",
      live: "https://ngo-ledger-r8bx.vercel.app/",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Dark Store Management Platform",
      description: "Built a logistics system for dark stores with real-time staff coordination and order tracking. Implemented inventory categorization based on demand to optimize accessibility and improved routing for enhanced fulfillment.",
      techStack: ["React", "Node.js", "MongoDB", "Real-time tracking", "Logistics APIs"],
      github: "https://github.com/Aniketwarule/Dark_store_platform",
      live: "#",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Nuturelite",
      description: "Developed an ecommerce platform providing trustworthy information for informed decisions on healthy eating. Empowers individuals with credible content on nutrition, healthy food choices, physical activity, and food safety.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/Aniketwarule/nuturemite.io",
      live: "https://nuturemite-lemon.vercel.app/",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    },
    {
      title: "Krishi-Maharshi",
      description: "Launched MERN stack app for farmers, optimizing crop schedules and agricultural insights. Designed AI features for planting, irrigation, and pest management, raising productivity by 30%.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "AI/ML"],
      github: "https://github.com/Aniketwarule/KM",
      live: "#", // To be added later
      image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.live}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;