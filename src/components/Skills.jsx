const Skills = () => {
  const skills = ['React', 'Python', 'Scikit-learn', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Clean cyan heading - NO GLOW */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-cyan-400">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="glassmorphism p-6 text-center hover:scale-105 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 group">
              <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;