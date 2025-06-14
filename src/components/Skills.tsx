import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Globe, Zap, TrendingUp, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-purple-500 to-blue-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript/TypeScript', level: 88 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 88 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      color: 'from-cyan-500 to-teal-500',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'SpringBoot', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL/Firebase', level: 85 },
      ],
    },
    {
      title: 'Mobile & Cloud',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Google Cloud', level: 75 },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', category: 'editor' },
    { name: 'Git/GitHub', category: 'version-control' },
    { name: 'Docker', category: 'devops' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Vercel', category: 'deployment' },
    { name: 'Firebase', category: 'backend' },
    { name: 'Postman', category: 'api' },
    { name: 'Android Studio', category: 'mobile' },
    { name: 'Figma', category: 'design' },
    { name: 'Canva', category: 'design' },
    { name: 'Eclipse', category: 'editor' },
    { name: 'UIPath', category: 'automation' },
    { name: 'Automation Anywhere', category: 'automation' }
  ];

  const getToolColor = (category: string) => {
    const colors = {
      editor: 'from-blue-500 to-cyan-500',
      'version-control': 'from-orange-500 to-red-500',
      devops: 'from-purple-500 to-pink-500',
      cloud: 'from-yellow-500 to-orange-500',
      deployment: 'from-green-500 to-teal-500',
      backend: 'from-indigo-500 to-purple-500',
      api: 'from-pink-500 to-rose-500',
      build: 'from-cyan-500 to-blue-500',
      testing: 'from-emerald-500 to-green-500',
      ui: 'from-violet-500 to-purple-500',
      mobile: 'from-blue-500 to-indigo-500',
      design: 'from-pink-500 to-rose-500',
      automation: 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A comprehensive overview of my technical skills and proficiency levels
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={hoveredCategory === category.title ? {
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1), transparent)",
                      "radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.1), transparent)",
                      "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1), transparent)",
                      "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.1), transparent)",
                      "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1), transparent)"
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="flex items-center space-x-3 mb-6 relative z-10">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 10px 20px rgba(139, 92, 246, 0.3)"
                    }}
                    animate={hoveredCategory === category.title ? {
                      rotate: [0, 5, -5, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <motion.div
                    className="ml-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp size={16} className="text-purple-400" />
                  </motion.div>
                </div>

                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <motion.span 
                          className="text-gray-300 font-medium"
                          whileHover={{ color: "#ffffff", x: 5 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          className="text-gray-400 text-sm"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.2,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-8 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <Award className="text-purple-400" />
            <span>Tools & Technologies</span>
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredTool(tool.name)}
                onMouseLeave={() => setHoveredTool(null)}
                className="relative group"
              >
                <div className={`px-6 py-3 bg-gradient-to-r ${getToolColor(tool.category)} rounded-lg text-white font-medium cursor-default relative overflow-hidden`}>
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={hoveredTool === tool.name ? {
                      x: ["-100%", "100%"]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10">{tool.name}</span>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {tool.category.replace('-', ' ')}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Additional Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Globe,
              title: 'Web Performance',
              description: 'Optimizing applications for speed, SEO, and accessibility',
              metric: '98% Lighthouse Score'
            },
            {
              icon: Zap,
              title: 'Modern Frameworks',
              description: 'Staying current with latest technologies and best practices',
              metric: '15+ Frameworks'
            },
            {
              icon: Code,
              title: 'Clean Architecture',
              description: 'Writing maintainable, scalable, and testable code',
              metric: '99% Code Quality'
            },
          ].map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05), transparent)",
                      "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent)",
                      "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05), transparent)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 10,
                    boxShadow: "0 10px 20px rgba(139, 92, 246, 0.4)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 30px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(139, 92, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                
                <h4 className="text-xl font-semibold text-white mb-2 relative z-10">{highlight.title}</h4>
                <p className="text-gray-400 mb-4 relative z-10">{highlight.description}</p>
                
                <motion.div
                  className="text-purple-400 font-semibold text-sm relative z-10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {highlight.metric}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;