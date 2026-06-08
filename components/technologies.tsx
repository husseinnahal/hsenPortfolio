"use client"
import { Layers } from "lucide-react"
import Image from "next/image"

export function Technologies() {
  const mernStack = [
    {
      name: "React.js",
      role: "Frontend",
      icon: "/images/tech/react.png",
      color: "text-blue-400",
      hoverBorder: "hover:border-blue-400/50",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(96,165,250,0.2)]",
      glow: "group-hover:bg-blue-400/20",
    },
    {
      name: "Node.js",
      role: "Runtime",
      icon: "/images/tech/nodejs.png",
      color: "text-lime-500",
      hoverBorder: "hover:border-lime-500/50",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(132,204,22,0.2)]",
      glow: "group-hover:bg-lime-500/20",
    },
    {
      name: "Express.js",
      role: "Backend",
      icon: "/images/tech/Express.png",
      color: "text-blue-600",
      hoverBorder: "hover:border-gray-300/50",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(209,213,219,0.2)]",
      glow: "group-hover:bg-gray-300/20",
    },
    {
      name: "MongoDB",
      role: "Database",
      icon: "/images/tech/mongodb.png",
      color: "text-emerald-500",
      hoverBorder: "hover:border-emerald-500/50",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]",
      glow: "group-hover:bg-emerald-500/20",
    },
    {
      name: "Next.js",
      role: "Framework",
      icon: "/images/tech/next.png",
      color: "text-red-400",
      hoverBorder: "hover:border-red-400/50",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(248,113,113,0.2)]",
      glow: "group-hover:bg-red-400/20",
    },
  ]

  const otherTech = [
    { name: "JavaScript", icon: "/images/tech/js.png" },
    { name: "TypeScript", icon: "/images/tech/ts.png" },
    { name: "Tailwind", icon: "/images/tech/tailwind.png" },
    { name: "HTML5", icon: "/images/tech/html.png" },
    { name: "CSS3", icon: "/images/tech/css.png" },
    { name: "Git & GitHub", icon: "/images/tech/github.png" },
    { name: "SQL", icon: "/images/tech/database.png" },
  ]

  return (
    <section
      className="py-24 px-4 bg-[var(--bg-secondary)]/40  relative overflow-hidden"
      data-animate="technologies"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-400)]/5 rounded-full blur-[30px] pointer-events-none"
        data-parallax="tech-orb"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
            data-animate="tech-title"
            data-section-title
          >
            Technologies & <span className="text-accent-gradient">Tools</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto mb-4" />
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            Specialized in the MERN stack with expertise in modern web technologies to build
            scalable, high-performance applications.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center justify-center gap-2">
            <Layers className="text-[var(--accent-400)] w-6 h-6" />
            Core Stack (MERN)
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {mernStack.map((tech, index) => (
              <div
                key={index}
                data-animate="tech-card"
                className={`w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]   xl:w-[calc(20%-1.5rem)] glass border border-[var(--border-default)] ${tech.hoverBorder} rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 ${tech.hoverShadow} group card-hover`}
              style={{ background: "var(--bg-card)" }}
              >
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center ">
                  <div
                    className={`absolute inset-0 bg-[var(--bg-elevated)] rounded-full blur-lg ${tech.glow} transition-all duration-300`}
                  />
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} className="w-12 h-12 object-contain relative z-10" />
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">{tech.name}</h4>
                <span className={`text-sm font-medium ${tech.color}`}>{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden w-full mask-edges">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
              display: flex;
              width: max-content;
            }
            .mask-edges {
              mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            }
          `}} />
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Other Skills & Tools</h3>
          <div className="animate-marquee hover:[animation-play-state:paused] pb-4">
            {/* Duplicate array for seamless looping */}
            {[...otherTech, ...otherTech, ...otherTech, ...otherTech].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 glass border border-[var(--border-default)] hover:border-[var(--border-accent)] rounded-full px-4 py-2 sm:px-6 sm:py-3 mx-2 sm:mx-3 transition-all duration-300 hover:-translate-y-0.5 cursor-default group bg-[var(--bg-card))] hover:bg-[var(--accent-900)]"
                style={{background:"var(--bg-card)"}}
              >
                <Image src={tech.icon} alt={tech.name} width={24} height={24} className="w-4 h-4 sm:w-6 sm:h-6 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[var(--text-secondary)] font-medium text-sm whitespace-nowrap group-hover:text-[var(--accent-700)] transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
