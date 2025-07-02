import React, { useRef, useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { useNotificationSystem } from '../hooks/useNotificationSystem';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { showSuccess } = useNotificationSystem();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add ripple effect
    const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLElement;
    if (button) {
      button.classList.add('ripple-active');
      setTimeout(() => button.classList.remove('ripple-active'), 600);
    }
    
    // Show success notification
    showSuccess('Message sent successfully');
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const getQuadrantGlow = () => {
    if (!isHovering || !containerRef.current) return {};
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    let glowStyle = {};
    
    // Determine quadrant and create larger, more visible glow
    if (mousePosition.x < centerX && mousePosition.y < centerY) {
      // Top-left quadrant
      glowStyle = {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)`,
      };
    } else if (mousePosition.x >= centerX && mousePosition.y < centerY) {
      // Top-right quadrant
      glowStyle = {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)`,
      };
    } else if (mousePosition.x < centerX && mousePosition.y >= centerY) {
      // Bottom-left quadrant
      glowStyle = {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)`,
      };
    } else {
      // Bottom-right quadrant
      glowStyle = {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)`,
      };
    }
    
    return glowStyle;
  };

  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
          Get In Touch
        </h2>
        <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
        <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed">
          Ready to discuss data science opportunities or collaborate on exciting projects? 
          Let's connect and turn data into insights together.
        </p>
      </div>

      <div className="flex justify-center">
        {/* Enhanced Contact Form with Quadrant-Sensitive Cursor Glow */}
        <div className="relative max-w-2xl w-full">
          <div
            ref={containerRef}
            className="relative p-8 rounded-xl overflow-hidden glassmorphic-container"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            {/* Enhanced Quadrant-Sensitive Cursor Glow Effect */}
            {isHovering && (
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out"
                style={getQuadrantGlow()}
              />
            )}

            <h3 className="text-3xl font-bold text-white mb-8 relative z-10 glow-text-subtle text-center">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 bg-black bg-opacity-60 border-2 border-blue-400 border-opacity-30 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-200 glow-input ${
                      focusedField === 'name' ? 'glow-input-focused' : ''
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 bg-black bg-opacity-60 border-2 border-blue-400 border-opacity-30 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-200 glow-input ${
                      focusedField === 'email' ? 'glow-input-focused' : ''
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-5 py-4 bg-black bg-opacity-60 border-2 border-blue-400 border-opacity-30 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-200 glow-input ${
                    focusedField === 'subject' ? 'glow-input-focused' : ''
                  }`}
                  placeholder="Project Collaboration / Job Opportunity / General Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-5 py-4 bg-black bg-opacity-60 border-2 border-blue-400 border-opacity-30 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-200 resize-none glow-input ${
                    focusedField === 'message' ? 'glow-input-focused' : ''
                  }`}
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-blue-400 text-black font-bold text-lg rounded-lg hover:bg-blue-500 transition-all duration-200 flex items-center justify-center space-x-3 glow-button-solid ripple-effect glow-button-hover"
              >
                <Send className="w-6 h-6" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;