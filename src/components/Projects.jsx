import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Privacy Policy Grade (GEN AI Project)',
      description: 'An AI-powered web application that analyzes and grades privacy policies using NLP techniques and LLM-assisted evaluation. The platform assesses readability, legal complexity, dark patterns, and transparency while providing automated insights and policy comparisons.',
      tech: ['Python', 'Flask', 'Gemini API', 'BeautifulSoup', 'Selenium', 'SQLAlchemy', 'SQLite', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/yashikagupta-ai/privacy-policy-grader-main.git'
    },
    {
      title: 'MeshNet (Distributed Systems)',
      description: 'An offline-first emergency communication platform that enables devices to share alerts, safe routes, and aid information without internet or cellular networks using QR-based relay and peer-to-peer communication.',
      tech: ['React', 'Vite', 'Tailwind CSS','Capacitor','Workbox','Google Nearby Connections API', 'QR Code Technologies', 'Local Storage'],
      github: 'https://github.com/yashikagupta-ai/MeshNet-main.git'
    },
    {
      title: 'Point based Loaning and Lending (Software Engineering and Full Stack)',
      description: 'Developed a full-stack web application that allows users to lend and borrow items through a points-based economy, featuring authentication, trust scoring, real-time chat, and item management.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/yashikagupta-ai/SE_Point_based_Loaning_and_leanding.git'
    },
    {
      title: 'digital-stress-contagion ( Agent-Based Modeling and Data Science)',
      description: 'Developed an agent-based simulation to study how digital stress spreads through social networks, analyzing the impact of user behavior, peer influence, and intervention strategies on overall network well-being.',
      tech: ['Pytorch', 'Scikit-learn', 'NetworkX','K-Means Clustering','Agent-Based Modeling', 'Data Analysis'],
      github: 'https://github.com/yashikagupta-ai/digital-stress-contagion.git'
      
    },
    {
      title: 'Predicting Human Annotator Disagreement (Deep Neural Network',
      description: 'Developed a deep learning model to predict human disagreement in image classification tasks by learning full label distributions instead of single-class predictions, enabling better uncertainty estimation and model interpretability.',
      tech: ['Pytorch', 'Python', 'ResNet-18','Grad-Cam','Deep Learning', 'Computer Vison'],
      github: 'https://github.com/yashikagupta-ai/Predicting-Human-Annotator-Disagreement.git'
    },
    
    { 
      title: 'Hybrid Predictive Maintenance (Machine Learning) ', 
      description: 'The project implements a hybrid predictive maintenance system using the NASA CMAPSS turbofan engine dataset. The goal is to analyze engine sensor data to detect degradation stages, estimate remaining operational life, and generate maintenance risk alerts', 
      tech: ['Python', 'Pandas', 'Matplotlib'], 
      github: 'https://github.com/yashikagupta-ai/ML-project-1-hybrid-.git'
    },
    {
      title: 'Credit Card Fraud Detection (Machine Learning)', 
      description: 'A ML model to detect fraudulent transaction using classification algorithms and data preprocessing techniques', 
      tech: ['Python', 'Scikit-learn'], 
      github: 'https://github.com/yashikagupta-ai/Fraud-Detection.git'
    
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
