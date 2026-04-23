import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiUser, FiBriefcase } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = {
    name: "Yashika Gupta",
    email: "se23ucse190@mahindrauniversity.edu.in",
    phone: "+91 93018 40462",
    college: "Mahindra University",
    location: "Hyderbad, India",
    github: "https://github.com/yashikagupta-ai",
    linkedin: "https://www.linkedin.com/in/yashika-gupta-274540333/",
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-cyan-400">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Contact Information */}
          <div className="glassmorphism p-8 hover:border-cyan-400/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <p className="text-white/60 mb-8">
              Feel free to reach out to me for collaborations, opportunities, or just a chat!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiUser className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Name</p>
                  <p className="text-white font-semibold">{contactInfo.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiMail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiPhone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Phone</p>
                  <p className="text-white font-semibold">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiBriefcase className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">College</p>
                  <p className="text-white font-semibold">{contactInfo.college}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiMapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Location</p>
                  <p className="text-white font-semibold">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-cyan-400/20">
              <p className="text-white/60 mb-4">Connect with me:</p>
              <div className="flex gap-4">
                <a 
                  href={contactInfo.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href={contactInfo.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;