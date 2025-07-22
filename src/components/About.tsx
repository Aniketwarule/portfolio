import { motion } from 'framer-motion';
import { User, GraduationCap, LucideView } from 'lucide-react';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-slate-800">
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
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-blue-400" size={24} />
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate final year Information Technology engineering student with a deep love for software development and problem-solving. Based in Pune, India, I specialize in building comprehensive digital solutions across web and mobile platforms.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My journey in technology is driven by curiosity and the desire to create meaningful applications that solve real-world problems. I enjoy working with cutting-edge technologies and continuously learning new skills to stay ahead in the ever-evolving tech landscape.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="text-white font-semibold text-lg mb-1">
                    B.E in Information Technology
                  </h4>
                  <p className="text-slate-300 text-base">
                    Genba Sopanrao Moze College of Engineering, Balewadi, Pune
                    <span className="mx-2">•</span>Pune
                    <span className="mx-2">•</span>2026
                  </p>
                  <p className="text-slate-300 text-base">
                    <span className="font-semibold">CGPA:</span> 8.7
                  </p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="text-white font-semibold text-lg mb-1">
                    Diploma in Information Technology
                  </h4>
                  <p className="text-slate-300 text-base">
                    Government Polytechnic, Sambhajinagar
                    <span className="mx-2">•</span>Sambhajinagar
                    <span className="mx-2">•</span>2023
                  </p>
                  <p className="text-slate-300 text-base">
                    <span className="font-semibold">Percentage:</span> 85%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1UpWY5xXur8iBgQoCOHvVDfRDb0ikzm08/view?usp=drive_link', '_blank')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              <LucideView size={20} />
              View Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;