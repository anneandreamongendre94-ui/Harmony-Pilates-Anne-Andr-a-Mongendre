import { motion } from "motion/react";
import { MapPin, Phone, Clock, Mail, Send, Leaf } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex-grow">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">Connect With Us</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Find your rhythm and restore your balance. We're here to guide your journey towards physical and mental well-being.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Details & Map */}
        <div className="md:col-span-5 flex flex-col gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-low p-8 rounded-xl shadow-sm border border-outline-variant/30"
          >
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-on-surface mb-1">Studio Address</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    128 Serenity Lane, Wellness District<br />
                    Sage Valley, CA 90210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-on-surface mb-1">Phone Number</h3>
                  <p className="text-on-surface-variant">(555) 234-8910</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-on-surface mb-1">Studio Hours</h3>
                  <p className="text-on-surface-variant">
                    Mon - Fri: 6:00 AM - 8:00 PM<br />
                    Sat - Sun: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-outline-variant/30"
          >
            <img 
              className="w-full h-full object-cover grayscale-[0.3] contrast-[0.9]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB55R8Pm0DkG2lB9zmpYrlJBqGLaKxZP1sXtXCTCMNBuOkZmXAy3ak5-H-P8p-Jj_MuLSYnc9h9VkW0BguY9ph596JRhjfxrcjorwrWVjhRzcn9npGEJJ82gF-hfsnU_p3b9WpBczVFBFHxIeHQ412nWsiEYShEu2hhTRXIn8e8ke_ipgtfvDMpV3BywJQucqzYptiwkyW7lApNezl-yu1yRkjAiXZsAvIOVtD9zX-eqe9Dr-u9N6xUi8kssCGMW75LQBl6fFKFUe4" 
              alt="Studio Map" 
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Right Column: Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7"
        >
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-surface-container-high shadow-xl">
            <h2 className="font-serif text-3xl text-primary mb-8">Book a Session</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" 
                    placeholder="Your name" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" 
                    placeholder="hello@example.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Class Type</label>
                <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none appearance-none">
                  <option>Reformer Pilates</option>
                  <option>Mat Pilates</option>
                  <option>Private Session</option>
                  <option>Restorative Flow</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Your Message</label>
                <textarea 
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none resize-none" 
                  placeholder="Tell us about your goals or any injuries..." 
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-serif text-xl font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <Send size={20} /> Send Inquiry
              </button>
              <p className="text-center text-sm text-on-surface-variant opacity-60">We typically respond within 24 hours.</p>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Bento Break */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 relative h-64 rounded-xl overflow-hidden group">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL2wBi79Hn9r3yvpF-GVF5XmVwz-ggnAVTMdMKVcRI4n9_VCPmZnvdTsh2_1tXRpXb1jtrB81SGwQm15yT5_2tP0M8jd8_5bn-vSVyXqWv78PKFodohwWiNzU6q3hRULpc2WRUOShagsFm4YwjHZDWwLbeZdIY9SE7EwnwYxGlU5fmcwWYaSF4olHPOJTRAtkn0laeuk_y8YpmnmfhPSqC14VPfIXG6hCTv2VNWXIPtvjoKe602WyvM1JAwwNA1_pxZYzlwfNyehk" 
            alt="Studio Sanctuary" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className="text-white font-serif text-2xl">Our Sanctuary</span>
          </div>
        </div>
        <div className="bg-surface-container-highest/50 p-8 rounded-xl flex flex-col justify-center border border-primary/5">
          <Leaf className="text-primary w-10 h-10 mb-4" />
          <h4 className="font-serif text-2xl text-primary mb-2">Organic Practice</h4>
          <p className="text-on-surface-variant text-sm">Sustainable props and eco-friendly studio practices for a mindful environment.</p>
        </div>
      </div>
    </div>
  );
}
