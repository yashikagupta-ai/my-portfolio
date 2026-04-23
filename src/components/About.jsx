const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Clean cyan heading - NO GLOW */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-cyan-400">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {/* White text for readability */}
          <p className="text-white/80 text-lg leading-relaxed text-center mb-8">
            I’m an Computer Science student with a strong interest in Artificial Intelligence, Generative AI, and modern web development. I enjoy building intelligent systems and interactive applications that solve real-world problems while maintaining clean and user-friendly design.

            Currently, I’m focused on deepening my understanding of machine learning and deep learning, while also exploring the rapidly evolving field of Generative AI. I like turning ideas into practical projects, whether it’s developing models, experimenting with new technologies, or creating full-stack applications.

            I’m constantly learning, improving my problem-solving skills, and working towards building impactful solutions that combine creativity with technology.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
            ].map((stat, index) => (
              <div key={index} className="glassmorphism p-4 text-center hover:scale-105 transition-all duration-300 hover:border-cyan-400/40">
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;