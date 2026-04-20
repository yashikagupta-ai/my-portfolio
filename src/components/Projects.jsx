import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    { 
      title: 'Credit Card Fraud Detection', 
      description: 'A ML model to detect fraudulent transaction using classification algorithms and data preprocessing techniques', 
      tech: ['Python', 'Scikit-learn'], 
      github: 'https://github.com/yashikagupta-ai/Fraud-Detection.git'
    },
    { 
      title: 'Hybrid Predictive Maintenance', 
      description: 'The project implements a hybrid predictive maintenance system using the NASA CMAPSS turbofan engine dataset. The goal is to analyze engine sensor data to detect degradation stages, estimate remaining operational life, and generate maintenance risk alerts', 
      tech: ['Python', 'Pandas', 'Matplotlib'], 
      github: 'https://github.com/yashikagupta-ai/ML-project-1-hybrid-.git'
    },
    { 
      title: 'Point-Based Item Loaning and Lending System', 
      description: 'Developing the backend for a point-based peer-to-peer lending platform with risk scoring, transaction management, and gamification features', 
      tech: ['JavaScript', 'FastAPI', 'JWT Tokens'], 
      github: 'https://github.com/yashikagupta-ai/SE_Point_based_Loaning_and_leanding.git'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-cyan-400">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glassmorphism p-6 hover:-translate-y-2 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* GitHub Link - ADD THIS SECTION */}
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-105 mt-2"
              >
                <FiGithub size={18} />
                <span className="text-sm">View Code on GitHub</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;