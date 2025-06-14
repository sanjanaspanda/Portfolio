import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="bg-gray-800/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-t-2xl" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-300 text-lg">{project.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>View Live</span>
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>View Code</span>
              </motion.a>
            )}
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Modern UI/UX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Performance Optimized</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Cross-browser Compatible</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-700/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Tag size={20} />
                  <span>Technologies Used</span>
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-gray-600/50 text-gray-300 text-sm rounded-lg border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} />
                    <span className="text-sm">Completed: 2024</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Tag size={16} />
                    <span className="text-sm capitalize">Category: {project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;