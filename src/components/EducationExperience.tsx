import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string[];
  icon: React.ReactNode;
  type: 'education' | 'experience';
}

const EducationExperience: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 'mca',
      title: 'Master of Computer Application (MCA)',
      subtitle: 'Mumbai University',
      period: '2023 - 2025',
      location: 'Mumbai, India',
      description: [
        'Specialized in Advanced Software Development and Machine Learning',
        'Relevant Coursework: Data Structures, Algorithms, Database Management, Web Technologies'
      ],
      icon: <GraduationCap className="text-purple-400" />,
      type: 'education'
    },
    {
      id: 'bsc',
      title: 'Bachelor of Science (B.Sc.)',
      subtitle: 'Mithibai College of Arts, Science and Commerce',
      period: '2020 - 2023',
      location: 'Mumbai, India',
      description: [
        'Graduated with First Class with Distinction ',
        'Certified in AI concepts and Machine Learning, including Decision Tree Regression, Neural Networks, NLP, and Computer Vision. Skilled in TensorFlow, and ML model development with real-world applications.'
      ],
      icon: <GraduationCap className="text-purple-400" />,
      type: 'education'
    },
    {
      id: 'homeville',
      title: 'Developer Intern',
      subtitle: 'HomeVille Group',
      period: 'Jan 2025 - June 2025',
      location: 'Mumbai, India',
      description: [
        'Led the CERSAI project for Singularity Creditworld using Java Spring Boot, ensuring scalability, security, and compliance.',
        'Developed a Python tool for automated Excel data transformation with dynamic mapping and rule-based substitutions.',
        'Implemented Playwright-based web scraping, optimizing workflows and enhancing software resilience.',
        'Strengthened CI/CD pipelines with SonarQube, improved RESTful API integration, and maintained staging environments.',
        'Integrated third-party fintech APIs for secure credit report visualization and risk analysis.'
      ],
      icon: <Briefcase className="text-blue-400" />,
      type: 'experience'
    },
    {
      id: '360serve',
      title: 'Software Developer',
      subtitle: '360Serve',
      period: 'Dec 2023 - Dec 2024',
      location: 'Mumbai, India',
      description: [
        'Full-stack development of enterprise applications using modern web technologies',
        'Built responsive websites using React and Django for 360Serve, enhancing client digital presence.',
        'Developed cross-platform apps like FF-Farm Fresh using Python and React Native and deployed apps on AWS EC2 with CI/CD pipelines, boosting project delivery efficiency',
        'Optimized Firebase and MySQL databases with RESTful APIs for high-availability systems.',
        'Developed AI chatbots using TensorFlow/PyTorch and enhanced customer analytics via SEO integration.'
      ],
      icon: <Briefcase className="text-blue-400" />,
      type: 'experience'
    }
  ];

  return (
    <section id="education-experience" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
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
              Education & Experience
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My academic background and professional journey in the tech industry.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-cyan-500/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const animationDirection = isLeft ? { x: -50 } : { x: 50 };
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, ...animationDirection }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute md:relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${
                    item.type === 'education' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                  } border-2 ${
                    item.type === 'education' ? 'border-purple-500' : 'border-blue-500'
                  }`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 p-6 mt-6 md:mt-0 rounded-xl backdrop-blur-sm bg-gray-800/30 border ${
                    item.type === 'education' 
                      ? 'border-purple-500/30 hover:border-purple-500/50' 
                      : 'border-blue-500/30 hover:border-blue-500/50'
                  } transition-all duration-300 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.period}</span>
                      <MapPin className="w-4 h-4 ml-3 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-purple-300 font-medium mb-3">{item.subtitle}</h4>
                    <ul className="space-y-2 text-gray-300">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-400 mr-2">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
