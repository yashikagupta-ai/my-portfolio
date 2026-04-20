import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiReact, SiPython, SiTensorflow, SiJavascript, SiTailwindcss, SiGit, SiMongodb, SiDocker } from 'react-icons/si';

const Hero = () => {
  const floatingIcons = [
    { Icon: SiReact, color: '#00f5d4', top: '10%', right: '15%', delay: 0 },
    { Icon: SiPython, color: '#00f5d4', top: '30%', right: '5%', delay: 1 },
    { Icon: SiTensorflow, color: '#00f5d4', bottom: '25%', right: '12%', delay: 2 },
    { Icon: SiJavascript, color: '#00f5d4', top: '60%', right: '20%', delay: 1.5 },
    { Icon: SiTailwindcss, color: '#00f5d4', bottom: '15%', left: '10%', delay: 0.5 },
    { Icon: SiGit, color: '#00f5d4', top: '45%', left: '5%', delay: 2.5 },
    { Icon: SiMongodb, color: '#00f5d4', bottom: '40%', left: '15%', delay: 1.8 },
    { Icon: SiDocker, color: '#00f5d4', top: '75%', left: '20%', delay: 0.8 },
  ];

  // UPDATE THESE WITH YOUR INFORMATION
  const personalInfo = {
    name: "Yashika Gupta",  // Change to your name
    title: "AI/ML Engineer | Web Developer | GenAI Enthusiast",  // Change your title
    github: "https://github.com/YASHI102",  // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/yashi-singh"  // Replace with your LinkedIn URL
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Flowing Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 - Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl bg-blob-1"></div>
        
        {/* Blob 2 - Bottom Right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-400/8 rounded-full blur-3xl bg-blob-2"></div>
        
        {/* Blob 3 - Center Right */}
        <div className="absolute top-1/2 right-[-5%] transform -translate-y-1/2 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl bg-blob-3"></div>
        
        {/* Blob 4 - Center Left */}
        <div className="absolute top-1/3 left-[-5%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl bg-blob-1" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Your Name - Update this */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-cyan-400">
              {personalInfo.name}
            </h1>
            {/* Your Title - Update this */}
            <h2 className="text-2xl sm:text-3xl text-cyan-300">
              {personalInfo.title}
            </h2>
            {/* White text for readability */}
            <p className="text-white/80 text-lg leading-relaxed">
              I’m an engineering student passionate about AI, Generative Models, and building modern web applications. I enjoy turning complex ideas into practical solutions and continuously exploring how intelligent systems can shape the future.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-cyan-500/20 border border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300 btn-glow"
              >
                View Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
            
            {/* Social Icons with your links */}
            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/yashikagupta-ai"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-110 icon-glow"
              >
                <FiGithub size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yashika-gupta-274540333/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-110 icon-glow"
              >
                <FiLinkedin size={28} />
              </a>
            </div>
          </div>

          {/* Right Avatar with Glowing Ring */}
          <div className="relative flex justify-center">
            {/* Floating Icons Around Avatar */}
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className="absolute z-20"
                style={{
                  top: item.top,
                  right: item.right,
                  bottom: item.bottom,
                  left: item.left,
                  animation: `float ${6 + index}s ease-in-out infinite`,
                  animationDelay: `${item.delay}s`
                }}
              >
                <div className="bg-black/60 backdrop-blur-sm rounded-full p-2 border border-cyan-400/30">
                  <item.Icon size={22} style={{ color: item.color }} />
                </div>
              </div>
            ))}
            
            {/* Main Avatar Container */}
            <div className="relative">
              {/* Outer pulsing ring */}
              <div className="absolute inset-[-8px] rounded-full border border-cyan-400/40 pulse-ring"></div>
              
              {/* Inner ring */}
              <div className="absolute inset-[-4px] rounded-full border border-cyan-400/60"></div>
              
              {/* Soft glow behind avatar */}
              <div className="absolute inset-[-20px] rounded-full bg-cyan-500/10 blur-2xl"></div>
              
              {/* Avatar Image - Your Custom Image (Centered) */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-2 border-cyan-400 shadow-xl float-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-10"></div>
                <img
                  src="/avatar.png"
                  alt="Profile Avatar"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 45%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;