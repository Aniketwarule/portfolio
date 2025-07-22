import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Built with <Heart className="text-red-400" size={16} /> by Aniket Warule
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;