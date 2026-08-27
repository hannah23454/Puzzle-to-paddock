import React from "react";
import Link from "next/link";
import { Users, Heart, Stethoscope } from "lucide-react";
import { Header } from "../navigation/Header";

const audiencePaths = [
  {
    href: "/families",
    label: "Families",
    sublabel: "Find care for your child",
    icon: Users,
    bg: "bg-[#064232]",
  },
  {
    href: "/nannies",
    label: "Nannies & Au Pairs",
    sublabel: "Find a placement",
    icon: Heart,
    bg: "bg-[#115e59]",
  },
  {
    href: "/ndis",
    label: "NDIS & Allied Health",
    sublabel: "Support & referrals",
    icon: Stethoscope,
    bg: "bg-[#f5babb]",
  },
];

export const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes slideIn {
          from { width: 0; }
          to { width: 8rem; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }

        /* Mobile & Tablet Height Optimization */
        @media (max-width: 1024px) {
          .hero-section {
            min-height: 80vh;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
          }
        }
      `}</style>

      <section
        className="hero-section relative w-full min-h-[90vh] lg:min-h-screen bg-[url('/images/mobhero.webp')] md:bg-[url('/images/pexels-6219955.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundColor: "#1f2937",
        }}
      >
        {/* Darkening overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/35" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Header - embedded in hero, width-aligned with hero content */}
        <div className="relative z-20">
          <Header />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[40vh] sm:min-h-[50vh] lg:min-h-[70vh]">
              
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">

                {/* Title Section */}
                <div className="relative">
                  <div className="absolute -left-3 sm:-left-6 -top-3 sm:-top-6 w-12 h-12 sm:w-16 sm:h-16 hidden sm:block">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl sm:rounded-3xl rotate-12 animate-pulse animate-float" />
                    <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl sm:rounded-2xl -rotate-12 animate-pulse animate-float" style={{ animationDelay: "0.3s" }} />
                  </div>
                  
                  <div className="relative z-20">
                    <div className="inline-block w-full">
                      <span className="inline-block bg-white/85 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm sm:text-base lg:text-sm font-semibold text-[#064232] tracking-widest uppercase mb-3 sm:mb-4 animate-fade-in-up">
                        Trusted Care, Australia-Wide
                      </span>
                      <h1
                        className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight font-['Poppins'] mb-4 sm:mb-6 text-white"
                      >
                        <span className="animate-fade-in-up block" style={{ animationDelay: "0.2s" }}>
                          Care, Matched
                        </span>
                        <span className="animate-fade-in-up block" style={{ animationDelay: "0.4s" }}>
                          to Your Family
                        </span>
                      </h1>
                      <div className="mt-4 sm:mt-6 w-32 sm:w-40 h-2 sm:h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-[#568F87] rounded-full animate-slide-in mx-auto lg:mx-0" style={{ animationDelay: "0.8s" }} />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: "1s" }}>
                  <div className="relative p-5 sm:p-6 lg:p-6 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                    <p className="relative z-10 font-normal text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-['Poppins']">
                      Puzzle to Paddock connects Australian families with <span className="font-bold text-[#064232]">nannies and au pairs</span>, and with <span className="font-bold text-[#f5babb]">NDIS-registered allied health professionals</span> — tell us who you are to get started.
                    </p>
                  </div>
                </div>

                {/* Audience picker */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
                  {audiencePaths.map(({ href, label, sublabel, icon: Icon, bg }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`group relative flex flex-col items-center text-center gap-2 p-4 sm:p-5 rounded-2xl ${bg} shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      <span className="font-semibold text-white text-sm sm:text-base font-['Poppins']">{label}</span>
                      <span className="text-white/95 text-xs sm:text-sm font-['Poppins']">{sublabel}</span>
                    </Link>
                  ))}
                </div>

                {/* Secondary CTA */}
                <div className="animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                  <a
                    href="https://calendly.com/clo-puzzletopaddock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold font-['Poppins'] underline underline-offset-4 decoration-white/70 hover:decoration-white transition-colors bg-[#064232]/55 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    Not sure? Book a 15-min call instead
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
