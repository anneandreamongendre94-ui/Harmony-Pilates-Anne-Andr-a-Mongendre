import { motion } from "motion/react";
import { CheckCircle2, User } from "lucide-react";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl text-primary mb-6"
        >
          Our Offerings
        </motion.h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-sans">
          Discover a range of sessions tailored to your body's unique rhythm. From high-energy reformer classes to restorative private sessions.
        </p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Reformer Pilates */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-7 group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container transition-all hover:shadow-xl"
        >
          <div className="relative h-[400px]">
            <img 
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Z6tNbm0Na6ae7-wJrotir4IEEJecVxhXmhQmdcHH6ClI0LI4NUwityQjwiXbH_XlIQLOw35tApuXlbcEM-ZI-E9X4TzP-IS2_YeKsk8tOteB4Exr7umfxwdWU8dpkSVE7opFlvlgUulvs5m15TorQCCQERHpmYb2OxGuJYXPiWQ0cBM8BnXXM2yHYMOqU2hjehhkCrJC0FkEMqAK5SEhSM94y-3OFYOX7fYQY8laDd96NruwgyR9WOOnTdwTwcDim4_92ny9Oaw" 
              alt="Reformer Pilates Studio" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="inline-block px-3 py-1 bg-primary-container text-white rounded-full text-xs font-bold mb-3">Most Popular</span>
              <h2 className="font-serif text-4xl text-white">Reformer Pilates</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Utilize the resistance of the Allegro 2 Reformer to develop core strength, long lean muscles, and exceptional posture. Our signature class blends athletic challenge with mindful movement.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl text-primary">$45 / session</span>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">Book Now</button>
            </div>
          </div>
        </motion.div>

        {/* Mat Pilates */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-5 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container transition-all hover:shadow-xl"
        >
          <div className="relative h-[250px]">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBUaXVGUCz3ReYA91IeohMpKoHwyY6ncrw-vsp8lqsRV5eEh00fmCq0URBZenSg2pNVuieJ__dTdo0YMAsyh0jeuK-SAtytBMmd6NacGADIVJmbKIgncsuaJBabBD2jI5jI9DfUYgGwf0PKl6hRYNJJg1-vayfTpg2FZZvHUdEt8zcVc_CCpFUi2um5vihD-dWbIIv-c6mc-qAWDYkGOlhFbsUO9fW3J91zTNcUsnE8SuqoWSnUEje4N5ELmYJHFKkJiLUg2If5v0" 
              alt="Mat Pilates" 
            />
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="font-serif text-3xl text-primary mb-4">Mat Pilates</h2>
            <p className="text-on-surface-variant mb-6">
              The foundation of the practice. Master your body's weight and gravity to build functional strength and flexibility.
            </p>
            <div className="mt-auto pt-6 border-t border-surface-container-high flex items-center justify-between">
              <span className="text-sm font-semibold text-on-surface-variant">50 mins</span>
              <button className="text-primary border border-primary px-6 py-2 rounded-lg font-bold hover:bg-primary/5 transition-all">Book Now</button>
            </div>
          </div>
        </motion.div>

        {/* Private Sessions */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-5 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container transition-all hover:shadow-xl"
        >
          <div className="p-8 flex-1 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
              <User className="text-primary w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl text-primary mb-4">Private Sessions</h2>
            <p className="text-on-surface-variant mb-6">
              One-on-one attention tailored to your specific goals, injuries, or athletic pursuits. The most effective way to progress your practice.
            </p>
            <div className="mt-auto pt-6 border-t border-surface-container-high flex items-center justify-between">
              <span className="font-serif text-3xl text-primary">$120</span>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">Book Now</button>
            </div>
          </div>
          <div className="h-[200px]">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6fbq_ua938yU2Pey3p-rcpWq2Je-XG-jM2R_gFyfBg1W_qjtGuF3FPCEjOvBqI6XqYI4xjQwBl8urSotPTpgREB_AbnlbDgmnloPMzm2cALVXeh1a6sz3AtOkUNrkmvnwHpr3FGUBjRPTX2gZZzcX7tcVgZCdqUZCgkqk9aC5yPfPniOGe2PWpPOPZ3BurwD4DJ_IXRUeby1wzIG7EXdFzgux2IGtMM6RSQgTcy3gHTispPkFBDk6QbsUhAAzh84-SzHdDQlsRr4" 
              alt="Private Session" 
            />
          </div>
        </motion.div>

        {/* Prenatal Classes */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container flex flex-col md:flex-row transition-all hover:shadow-xl"
        >
          <div className="md:w-1/2">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkf86xr8sycrfufZ9EmBlN5Lctj67aTc5OuspVa7XXFwRacsdRkOql63Rgzc94qM5ndIdSNmi3PE8MY2D3lV4CrjEcVgrloY2NEBKMfPU02IuTbmuYg6a87vzD-3-jnDRM4O224aupscj9LqmBjDd0eP-C1_2CrDypHspKpi-3-bDLeUHjsQbAnAgNOY-8jVqF59sUqJACdDIwFbte721gpEY4EFQILPh8QkI9qpqiSkQNnWE6rWHN0M4STR0E5NXi9syDwL6F2sw" 
              alt="Prenatal Pilates" 
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col">
            <h2 className="font-serif text-3xl text-primary mb-4">Prenatal Classes</h2>
            <p className="text-on-surface-variant mb-6">
              A safe, supportive environment for expectant mothers. Focus on pelvic floor health, gentle stretching, and maintaining strength.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="text-primary w-4 h-4" /> Safe for all trimesters
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="text-primary w-4 h-4" /> Expert instruction
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">Book Now</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Consultation Section */}
      <section className="mt-20 bg-surface-container-high rounded-xl p-12 text-center border border-primary/10">
        <h2 className="font-serif text-4xl text-primary mb-4">Not sure where to start?</h2>
        <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
          Join us for an introductory consultation to assess your movement patterns and recommend the perfect class for your needs.
        </p>
        <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          Schedule Consultation
        </button>
      </section>
    </div>
  );
}
