import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Eye, Star, Calendar } from 'lucide-react';
import { Project } from '../types';

interface PortfolioProps {
  onProjectSelect: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectSelect }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Digital Technology and Social Isolation',
      description: 'ML Study of Wellbeing Patterns - Research Paper',
      longDescription: 'Conducted ML-based analysis of wellbeing trends across age groups to assess technology\'s impact on mitigating social isolation. Analyzed wellbeing challenges faced by various age groups and identified how technology can effectively address these issues. Discovered patterns that highlight how different age groups can support each other in improving mental and physical wellbeing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Machine Learning', 'NLP', 'BERT', 'TF-IDF'],
      githubUrl: '#',
      category: 'design',
    },
    {
      id: '2',
      title: 'MCP Server',
      description: 'Personal Project - LLM-driven automation server',
      longDescription: 'LLM-driven MCP server that automates system tasks through a secure communication protocol. Designed an intelligent server using LLMs to automate context-aware system tasks over secure protocols. Enabled secure remote system interaction and automated workflow execution.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'FastMCP', 'LLM', 'Automation'],
      githubUrl: '#',
      category: 'web',
    },
    {
      id: '3',
      title: 'Farm Fresh Mobile App & Website',
      description: '360Serve - Online grocery shopping platform',
      longDescription: 'Comprehensive solution for online grocery shopping with real-time inventory tracking and secure payment integration. Developed an intuitive mobile app featuring real-time inventory tracking and seamless order management. Optimized UI/UX for seamless mobile shopping on Android with scalable real-time inventory updates.',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'CodeIgniter', 'Docker', 'AWS'],
      githubUrl: '#',
      category: 'mobile',
    },
    {
      id: '4',
      title: 'Excel Analysis Tool',
      description: 'Freelance - Data processing application',
      longDescription: 'Dynamic Python application for automated Excel data processing and transformation. Engineered a sophisticated script for transforming, substituting, and consolidating complex datasets. Implemented custom placeholder substitution, dynamic column mapping, and automated Excel styling to streamline data workflows.',
      image: 'https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Python', 'PyQT6', 'Pandas', 'OpenPyXL'],
      githubUrl: '#',
      category: 'other',
    },
    {
      id: '5',
      title: '360Serve Portfolio Website',
      description: 'Professional portfolio for 360Serve',
      longDescription: 'Professional portfolio website showcasing technical skills and project achievements. Designed and developed a responsive website to highlight professional accomplishments. Established a custom domain as a comprehensive digital representation of skills and projects.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'JavaScript', 'Responsive Design'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
    },
    {
      id: '6',
      title: 'Care and Connect - Elderly Care App',
      description: 'Community platform for elderly individuals',
      longDescription: 'A platform enabling elderly individuals to form interest-based communities, connect locally, and foster inter-generational bonding. Designed and developed an intuitive mobile interface optimized for accessibility and ease-of-use. Added features like forums, local groups, and real-time alerts to drive engagement in elderly care platform.',
      image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'SpringBoot', 'Hibernate', 'MongoDB'],
      githubUrl: '#',
      category: 'mobile',
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'design', label: 'Research', count: projects.filter(p => p.category === 'design').length },
    { id: 'other', label: 'Other', count: projects.filter(p => p.category === 'other').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
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
              My Portfolio
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A collection of projects that showcase my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-1.5 mb-6 sm:gap-3 sm:mb-10"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 relative overflow-hidden ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500/50'
              }`}
            >
              {/* Animated background for active filter */}
              {activeFilter === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex items-center space-x-2">
                <Filter size={14} className="hidden sm:block" />
                <span className="text-xs sm:text-sm">{category.label}</span>
                <motion.span 
                  className={`text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full ${
                    activeFilter === category.id 
                      ? 'bg-white/20' 
                      : 'bg-purple-500/20 text-purple-400'
                  }`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {category.count}
                </motion.span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                className="group cursor-pointer perspective-1000"
                onClick={() => onProjectSelect(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 relative">
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={hoveredProject === project.id ? {
                      background: [
                        "linear-gradient(0deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(180deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(270deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(360deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Overlay with enhanced animations */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Enhanced action buttons */}
                    <motion.div 
                      className="absolute bottom-4 right-4 flex space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, staggerChildren: 0.1 }}
                    >
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gray-700 border border-gray-600 hover:border-purple-500 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-purple-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-purple-500 border border-purple-500 hover:border-purple-400 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-blue-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-white border border-blue-500 hover:border-blue-400 transition-all duration-300"
                      >
                        <Eye size={16} />
                      </motion.div>
                    </motion.div>

                    {/* Project category badge */}
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs rounded-full border border-purple-500/50 capitalize">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 relative">
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 mb-4 line-clamp-2"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "rgba(139, 92, 246, 0.2)",
                            borderColor: "rgba(139, 92, 246, 0.5)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <motion.span 
                          className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                          whileHover={{ scale: 1.05 }}
                        >
                          +{project.technologies.length - 3} more
                        </motion.span>
                      )}
                    </div>

                    {/* Project stats */}
                    <motion.div 
                      className="flex items-center justify-between text-xs text-gray-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-500" />
                        <span>4.8</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>2024</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={12} />
                        <span>{Math.floor(Math.random() * 1000) + 100}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;