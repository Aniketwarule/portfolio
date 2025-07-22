//import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: "GATE 2025 Qualified",
      description: "Successfully qualified Graduate Aptitude Test in Engineering with competitive score",
      category: "Academic"
    },
    {
      icon: <Trophy className="text-orange-400" size={32} />,
      title: "Multiple Hackathon Winner",
      description: "Won first place in 3 hackathons",
      category: "Competition"
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "LeetCode Problem Solver",
      description: "Solved 500+ algorithmic problems with consistent progress and improved ranking",
      category: "Coding"
   },
    // {
    //   icon: <Star className="text-blue-400" size={32} />,
    //   title: "CodeChef 4-Star Rating",
    //   description: "Achieved 4-star rating on CodeChef competitive programming platform",
    //   category: "Programming"
    // }
  ];

  const stats = [
    { number: "500+", label: "DSA Problems Solved" },
    //{ number: "4⭐", label: "CodeChef Rating" },
    { number: "3", label: "Hackathon Wins" },
    { number: "10+", label: "Hackathons Attended" },
    { number: "15+", label: "Projects Completed" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="achievements" className="py-20 bg-slate-800">
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
            Achievements & Recognition
          </motion.h2>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;