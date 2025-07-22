//import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  // Cards for email, phone, location
  const contactCards = [
    {
      icon: <Mail className="text-blue-400" size={32} />,
      label: "Email",
      value: "waruleaniket@gmail.com",
      href: "mailto:waruleaniket@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={32} />,
      label: "Phone",
      value: "+91 9689344799",
      href: "tel:+919689344799"
    },
    {
      icon: <MapPin className="text-orange-400" size={32} />,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#"
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
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
            Get In Touch
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-8 mx-auto max-w-5xl">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed text-center">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Connect with me through any of the platforms below.
              </p>
            </div>

            {/* Big Social Icons */}
            <div className="flex justify-center gap-10 my-8">
              <a
                href="https://github.com/aniketwarule"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={48} />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-warule-5a9760229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={48} />
              </a>
              <a
                href="https://twitter.com/aniketwarule1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={48} />
              </a>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactCards.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="flex flex-col items-center gap-2 py-4 px-10 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-center min-w-[290px]"
                >
                  {item.icon}
                  <p className="text-slate-400 text-sm">{item.label}</p>
                  <p className="text-white break-all">{item.value}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;