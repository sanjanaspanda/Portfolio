import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: "2nd Prize, International Conference on Advances in Information Technology and Management",
    description: "Secured 2nd place at ICAIM 2025 for research paper on ML applications in social sustainability.",
    year: "2025"
  },
  {
    icon: <Award className="w-8 h-8 text-blue-400" />,
    title: " 1st Prize, Synapse 2024 TIMSCDR, Viksit Bharat",
    description: "Won 1st Prize at Synapse 2024 for developing a tech-based platform addressing SDG goals.",
    year: "2024"
  },
 
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/50">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements & Awards
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognitions and accomplishments that highlight my dedication and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-700/50">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    <span className="text-sm bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;