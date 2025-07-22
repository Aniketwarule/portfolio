import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Cloud,
  Terminal,
  Layers,
  MessageCircle,
  Users,
  Puzzle,
  Clipboard
} from 'lucide-react';

const Skills = () => {
  const programmingLanguages = [
    { name: "Java", icon: <Code className="w-4 h-4" /> },
    { name: "JavaScript", icon: <Globe className="w-4 h-4" /> },
    { name: "Python", icon: <Code className="w-4 h-4" /> },
    { name: "Kotlin", icon: <Smartphone className="w-4 h-4" /> },
    { name: "PHP", icon: <Server className="w-4 h-4" /> },
    { name: "C#", icon: <Code className="w-4 h-4" /> },
    { name: "SQL", icon: <Database className="w-4 h-4" /> },
    { name: "C/C++", icon: <Terminal className="w-4 h-4" /> },
  ];

  const frameworks = [
    { name: "React", icon: <Globe className="w-4 h-4" /> },
    { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Node.js", icon: <Server className="w-4 h-4" /> },
    { name: "Express.js", icon: <Server className="w-4 h-4" /> },
    { name: "Next.js", icon: <Globe className="w-4 h-4" /> },
    { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Flask", icon: <Server className="w-4 h-4" /> },
    { name: "Django", icon: <Server className="w-4 h-4" /> },
  ];

  const tools = [
    { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
    { name: "Docker", icon: <Layers className="w-4 h-4" /> },
    { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
    { name: "Firebase", icon: <Database className="w-4 h-4" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
    { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
    { name: "VS Code", icon: <Code className="w-4 h-4" /> },
    { name: "Android Studio", icon: <Smartphone className="w-4 h-4" /> },
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageCircle className="w-4 h-4" /> },
    { name: "Team Leadership", icon: <Users className="w-4 h-4" /> },
    { name: "Problem Solving", icon: <Puzzle className="w-4 h-4" /> },
    { name: "Project Management", icon: <Clipboard className="w-4 h-4" /> }
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const SkillCategory = ({ title, skills, hoverColor }: { title: string, skills: any[], hoverColor: string }) => (
    <motion.div
      variants={categoryVariants}
      className="mb-8"
    >
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
            className={`
              bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg 
              border border-slate-600 transition-all duration-200 cursor-pointer
              ${hoverColor}
            `}
          >
            <div className="flex items-center gap-2">
              <span className="text-slate-400">{skill.icon}</span>
              <span className="text-slate-300 text-sm font-medium">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-12 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={categoryVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SkillCategory 
                title="Programming Languages" 
                skills={programmingLanguages} 
                hoverColor="hover:border-blue-400"
              />
              <SkillCategory 
                title="Frameworks & Libraries" 
                skills={frameworks} 
                hoverColor="hover:border-purple-400"
              />
            </div>
            <div>
              <SkillCategory 
                title="Tools & Platforms" 
                skills={tools} 
                hoverColor="hover:border-teal-400"
              />
              <SkillCategory 
                title="Soft Skills" 
                skills={softSkills} 
                hoverColor="hover:border-orange-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;