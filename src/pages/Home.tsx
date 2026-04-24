import { motion } from "motion/react";
import { ArrowRight, Leaf, ShieldCheck, Dumbbell, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1NlPpUb4Apwjwwp0ZCKtdpE2gIRS7hfSEgM90-CzWXshQ6kwGUzOGjO_d6lEUh0hONTLkasMUpI66p_3B9wMMlyntuMXAyw4S9otAOKazNm2C0l5TpGqlpilBKdwYekzsoXTjLLRLQ-VjNzq2oHN60UfhCHy0qiER-u3-4-a2QR8BfcS1xbspL84iu7958Etmdj35Snt9_gwVQyNOYb8ThzN2sDjI0K6T-IuXkNv2q_HQpRudKE2bC854tHVtYyDK4zzkdMAkK4"
            alt="Harmony Pilates Studio"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-surface/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-xl border border-white/20"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-on-surface mb-6">Harmony Pilates</h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed font-sans">
              A sanctuary for restorative movement. Discover the balance of strength and flexibility in our sun-drenched studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300">
                View Schedule
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-[0.2em] uppercase">Our Philosophy</span>
          <h2 className="font-serif text-4xl text-on-surface mt-2">The Pillars of Restoration</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Mindful Movement */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-xl flex flex-col justify-between hover:shadow-md transition-all"
          >
            <div>
              <Leaf className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-serif text-2xl text-on-surface mb-4">Mindful Movement</h3>
              <p className="text-on-surface-variant max-w-md">
                Every breath is intentional. We focus on the precision of form to cultivate a deeper connection between your body and mind.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg h-48">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4BVhuPNGi9qh14x1zSrn53eCCUZDzhFa9yJKUM1OzmCcafdr0N2g27L7M914b_XpGrGf5f17gJ_iYp43A2ZWYxLfNxJ5kDm9SlzpQsuyPK9Aq_DuARnGCLwGk2lek46HJkvBsqwFjUTKDWqjVhYA5XvsA0dwYSKhJIY0lOeRBSE1j7p4aDplNAhq1cqPZvpX-6CYfMjS-7F_2A8-GFTDc2EYXpTyHGs_ajsDyyrctvA0Ji3MxYfBnz7jlbsUFp6FKd0Kt43-tDQ"
                alt="Mindful movement details"
              />
            </div>
          </motion.div>

          {/* Expert Instruction */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-surface-container-highest p-8 md:p-12 rounded-xl flex flex-col hover:shadow-md transition-all"
          >
            <ShieldCheck className="text-primary w-10 h-10 mb-6" />
            <h3 className="font-serif text-2xl text-on-surface mb-4">Expert Instruction</h3>
            <p className="text-on-surface-variant mb-8">
              Our certified practitioners bring decades of collective wisdom to every private and group session.
            </p>
            <div className="mt-auto pt-6 flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-surface overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                    alt="Instructor"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-surface bg-primary-container flex items-center justify-center text-on-primary-container text-sm font-bold">
                +4
              </div>
            </div>
          </motion.div>

          {/* Modern Equipment */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-12 bg-surface-container-high p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center gap-12 hover:shadow-md transition-all"
          >
            <div className="md:w-1/2">
              <Dumbbell className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-serif text-2xl text-on-surface mb-4">Modern Equipment</h3>
              <p className="text-on-surface-variant">
                We utilize state-of-the-art reformers and cadillacs designed for maximum ergonomic support and fluid movement resistance.
              </p>
              <button className="mt-6 text-primary font-bold flex items-center gap-2 group">
                Explore the Studio <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo9m4krF0xzDNMmIhpgVF8TnPZFX8xZxMCiE9oHlUS4BGpcy2-E2ocw5-fVP9lw9fE8Mkl-5A4IliVOYviAkmp8MqwGTM66gM3A7RBXUFbWtEWGbqP2s-MUIrBFIUDEPOapM_s7mP1mriwEb28B3y64oPBTmm7jFMQpZHcw37ir16qLx-Ry75jjVd1BskXhAFSfXStc7vVspew0rHMJwNiVny2ofZj5DXq0XckhlK1Bj5jtjws_uC48-CKZQ8YNXX07vZ76haN-4Q"
                  alt="Modern equipment"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4qZrY8JDqFualz08HUE6ZDg54PRw99nq_HurLVr-dgom917k3NBVHRudwN3SzZyNojyChywREkgIMsQG8VTW8na3mi9w5nH2yUB_0vpYHcRVgY-OLDwggSvKHt8tYX84EsBmeI9u2hlACnyvhRpWwsRBDPjlej4rHdXAAVM2vXLuLIvoLqy4TRLua5qUJBuXDS5j-9h3Ugq_z7aFouzajtj7GdADV220-teAYMRKBM5zefwsRsoyfABDThy0vkmybvMqlyufQESk"
                  alt="Studio props"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-surface-container-lowest py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="text-primary-container w-16 h-16 mx-auto mb-8 opacity-40" />
          <p className="font-serif text-2xl italic text-on-surface mb-10 leading-relaxed">
            "Coming to Harmony has completely reshaped my perspective on fitness. It’s no longer about pushing to exhaustion, but about restoring my body through graceful, controlled movement. I leave every class feeling taller, stronger, and profoundly calm."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-primary-fixed">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ6Lu8_uZLV58ezj3-TPrO1nYzJpHOCoSyTtlP6VYWQB6wE-fO9MLTCqowZTNWXGf8fMgvDiXIpj5YHzRYNRZilU2HCsmzhHRTvG-e5XTaJIVWsWiJ14Tw4LU36UmbBREZy5t1W15jbPKjVVF795RxPB3SRg91SKzm2NI8aZBt4kpJrP_kgfNqsjBRx3viWu_XX-a1h1VkIQ30YHAYvyMwrdO8cKtgfGAYoQ44H5d4Xdn5ucbGM4TVR6W87I713oUVZpOpJpFp7o0"
                alt="Elena Robertson"
              />
            </div>
            <span className="font-bold text-on-surface">Elena Robertson</span>
            <span className="text-stone-400 text-sm">Member since 2022</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-primary p-12 md:p-20 rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative z-10 md:w-2/3 text-center md:text-left">
            <h2 className="font-serif text-4xl text-on-primary mb-4">Ready to find your balance?</h2>
            <p className="text-primary-fixed text-lg">Join us for an introductory private session and experience the Harmony difference.</p>
          </div>
          <div className="relative z-10">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-stone-100 transition-colors">
              Book Intro Session
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-32 -mb-32"></div>
        </div>
      </section>
    </div>
  );
}
