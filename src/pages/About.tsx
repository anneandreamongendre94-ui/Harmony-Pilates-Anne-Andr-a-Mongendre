import { motion } from "motion/react";

export default function About() {
  const instructors = [
    {
      name: "Elena Vance",
      role: "Founder & Lead Instructor",
      specialty: "CERTIFIED REFORMER SPECIALIST",
      experience: "10+ Years Experience",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOqCNZZV7pq3woOoxTaqxQPoocT76TriuG2MeMRgpNmANDqFO6d5jwy8TgulezQyjr_xKOq_-F3nmExiBj6zpUQVKE5lKbgMZZz33NJAxH5h2pDfSveC8uh8pMjjBDS54PohcVrrqGTSiReJv0Gr9iHf8JS8v0II-2kQ4HFtoFPNeCKwS0Sz1Jt3xH4I-x7OPoxc8meew4tYT0cDwJ1O689tNx0SjNBjfmCvH4rSBb5lPhTDxOJL6W0pvj15do21SmXt81g6Cx5eQ",
    },
    {
      name: "Marcus Thorne",
      role: "Senior Practitioner",
      specialty: "ANATOMY EXPERT",
      experience: "Pre & Post-Natal Focus",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYwBEPEE3s97q4ig2UY5V3QxPLIZjy0FW6WK5s9RXaRbVhVFrq7Lwu6Pz22Ize-8ugVlUoSPA51FFfBALUoJmXczJpzpMw4iEgyjnuxTjtn0M_KYA8rVN2bdRFJfIQuZPvl7haBq6vbM17yseu9S6hvM5I-RbUGhQHmm0r8CU3UpiUqUH7HWnXcKgBr1MUaGVeeUXlDH36pdJi5RuA-caR4O_ip72Ve77_d1s2KZZkofCoeBvidhwbL55zhwXZXWEGFDARcjNSLSc",
    },
    {
      name: "Maya Lin",
      role: "Movement Coach",
      specialty: "FLOW & MAT PILATES",
      experience: "Athletic Performance",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBja0PjtAAvZBc1_nQ9ZRw0-EfUBHBd7oiysKAgM4mcexGFaczee2I62hcMJCxRaBfw4c8DRp17ezs6v9kGNhgXEwfl_Px0JZuibhUDeoikbKQqWkRM2NHeIBBNgwamlFO38GwGAEH9-7rp-d8sMZ6fgZ5b0Y64gw7r9ElCm6IUjtC7DG-Iti4Fd5e05o4fbitaGFlGeRPWZe0x2wlBxMlVRazfMXMZzbm5abTFpP44h6SCp6kV4fyDj6vzStACecCxq_iMMbqUzno",
    },
  ];

  return (
    <div className="flex flex-col py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-24 overflow-hidden">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-widest uppercase">ESTABLISHED 2014</span>
          <h1 className="font-serif text-5xl md:text-6xl text-on-surface mb-6">
            Find Your Center, <br />
            <span className="italic text-primary">Restore Your Spirit.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            At Harmony Pilates, we believe movement is the highest form of self-care. Our studio is a sanctuary designed for focused practice and profound physical transformation.
          </p>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative"
        >
          <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzFoZVm1rargjs5Np5R9GMPZNiYzJP1NPBH7aN27AKU8Ck-7yXfCtoiHRqpr1Sk5oR5rSPjZ-mse90FZbjhPJF7pX87_BTOUvcZ3SFrZO4rFbgRZkIh1jb0QglDF9wwP98XFfJm7WDGOrpqZcp61jUpLtfF1qN6_BanOk_Ug3ToBS3-gvatm7W2ct2qMV5F0iv3PLuV7LNpn-VeQHTf-OrYvbsd6cnp4uDuAUg1ZGgyGuCqNB1DhYLmj4xtd1Gj8OVV26ER2uKM6s"
            alt="Studio Atmosphere"
            className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </section>

      {/* Instructors Section */}
      <section className="mt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl text-on-surface">Meet Your Guides</h2>
            <p className="text-lg text-on-surface-variant mt-4">
              Led by certified professionals who specialize in anatomical precision and compassionate teaching.
            </p>
          </div>
          <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all">
            View All Staff
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-bold text-primary tracking-widest">{instructor.specialty}</p>
                  <p className="text-on-surface-variant text-sm mt-1">{instructor.experience}</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-on-surface">{instructor.name}</h3>
              <p className="text-on-surface-variant italic font-sans">{instructor.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
