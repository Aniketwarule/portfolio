import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Android Developer Intern",
      company: "Robonist Tech Solutions Pvt. Ltd.",
      duration: "December 2024 - March 2025",
      location: "Hybrid (Pune, India)",
      description: [
        "Developed and tested scalable android applications using Kotlin and Java, resulting in a 30% increase in app stability and user engagement. ",
        "Collaborated with UX/UI designers to streamline mobile application interfaces, leading to a 25% improvement in user satisfaction. ",
        "Integrated CI/CD pipelines using Jenkins, reducing app deployment time by 50%. and enhancing overall development efficiency during tenure at Robonist Tech Solutions",
        //"Participated in code reviews and agile development processes"
      ]
    },
    {
      title: " Software Developer Intern",
      company: "Nataraj Services",
      duration: "January 2023 - March 2023",
      location: "Chatrapati Sambhajinagar, India",
      description: [
        "Developed a scalable backend architecture using Node.js and Express.js, handling up to 10,000 daily users with minimal downtime.",
        "Managed and optimized a MongoDB database with over 50,000 records, improving query performance by 35% and ensuring 100% data accuracy during transactions.",
        "Enhanced website performance by ensuring 95% uptime, significantly boosting user satisfaction and operational efficiency.",
        //"Optimized application performance resulting in 40% faster load times"
      ]
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Professional Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>

                  <div className="bg-slate-800 p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;