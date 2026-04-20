import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend, FiUser, FiBriefcase } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Clean cyan heading - NO GLOW */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-cyan-400">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Information */}
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
                  <p className="text-white font-semibold">Yashika Gupta</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiMail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <a href="mailto:se23ucse190@mahindrauniversity.edu.in" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                    se23ucse190@mahindrauniversity.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiPhone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 9301840462</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiBriefcase className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">College</p>
                  <p className="text-white font-semibold">Mahindra University</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                  <FiMapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Location</p>
                  <p className="text-white font-semibold">Hyderbad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links with hover glow */}
            <div className="mt-8 pt-8 border-t border-cyan-400/20">
              <p className="text-white/60 mb-4">Connect with me:</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/yashikagupta-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 hover:border hover:border-cyan-400/40 transition-all duration-300 icon-glow"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/yashika-gupta-274540333/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 hover:border hover:border-cyan-400/40 transition-all duration-300 icon-glow"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="mailto:alex.chen@example.com" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 hover:border hover:border-cyan-400/40 transition-all duration-300 icon-glow"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="glassmorphism p-8 hover:border-cyan-400/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/60 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-400/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/60 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-400/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/60 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-400/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-cyan-500/20 border border-cyan-400 rounded-lg text-cyan-400 font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300 btn-glow"
              >
                <FiSend size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;