import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `New message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly at perezidekonboye@gmail.com');
      console.error('Email sending error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to build something amazing together? Get in touch!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                Whether you're looking to collaborate on a project, discuss new opportunities, 
                or just want to talk tech, I'd love to hear from you. Let's create something 
                impactful together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Email</p>
                  <p className="text-gray-800 dark:text-slate-100 font-semibold">perezidekonboye@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Phone</p>
                  <p className="text-gray-800 dark:text-slate-100 font-semibold">+234 (903) 822-8894</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Location</p>
                  <p className="text-gray-800 dark:text-slate-100 font-semibold">Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-700 dark:text-slate-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-gray-200 dark:border-slate-700 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-800 dark:text-slate-100 placeholder-gray-600 dark:placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-800 dark:text-slate-100 placeholder-gray-600 dark:placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-800 dark:text-slate-100 placeholder-gray-600 dark:placeholder-slate-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Status Messages */}
                {error && (
                  <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {isSent && (
                  <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;