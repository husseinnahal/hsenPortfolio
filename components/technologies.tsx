"use client"
import { Layers } from "lucide-react"

export function Technologies() {
  const mernStack = [
    { 
      name: "React.js", role: "Frontend", icon: "/images/tech/react.png", color: "text-blue-400",
      hoverBorder: "hover:border-blue-400/50", hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(96,165,250,0.2)]", glow: "group-hover:bg-blue-400/20"
    },
    { 
      name: "Node.js", role: "Runtime", icon: "/images/tech/nodejs.png", color: "text-lime-500",
      hoverBorder: "hover:border-lime-500/50", hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(132,204,22,0.2)]", glow: "group-hover:bg-lime-500/20"
    },
    { 
      name: "Express.js", role: "Backend", icon: " /images/tech/Express.png", color: "text-gray-300",
      hoverBorder: "hover:border-gray-300/50", hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(209,213,219,0.2)]", glow: "group-hover:bg-gray-300/20"
    },
    { 
      name: "MongoDB", role: "Database", icon: "/images/tech/mongodb.png", color: "text-emerald-500",
      hoverBorder: "hover:border-emerald-500/50", hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]", glow: "group-hover:bg-emerald-500/20"
    },
    { 
      name: "Next.js", role: "Framework", icon: "/images/tech/next.png", color: "text-red-400",
      hoverBorder: "hover:border-red-400/50", hoverShadow: "hover:shadow-[0_10px_40px_-10px_rgba(248,113,113,0.2)]", glow: "group-hover:bg-red-400/20"
    },
  ];

  const otherTech = [
    { name: "JavaScript", icon: "/images/tech/js.png" },
    { name: "TypeScript", icon: "/images/tech/ts.png" },
    { name: "Tailwind", icon: "/images/tech/tailwind.png" },
    { name: "HTML5", icon: "/images/tech/html.png" },
    { name: "CSS3", icon: "/images/tech/css.png" },
    { name: "Git & GitHub", icon: "/images/tech/github.png" },
    { name: "SQL", icon: "/images/tech/database.png" },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/40 relative overflow-hidden" data-animate="technologies">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block" data-animate="tech-title">
            Technologies & Tools
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Specialized in the MERN stack with expertise in modern web technologies to build scalable, high-performance applications.
          </p>
        </div>

        {/* MERN Stack Highlight */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center justify-center gap-2">
            <Layers className="text-yellow-500 w-6 h-6" />
            Core Stack (MERN)
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {mernStack.map((tech, index) => (
              <div 
                key={index}
                data-animate="tech-card"
                className={`w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)] xl:w-[calc(20%-1.5rem)] bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 ${tech.hoverBorder} rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 ${tech.hoverShadow} group`}
              >
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                   <div className={`absolute inset-0 bg-slate-700/50 rounded-full blur-xl ${tech.glow} transition-all duration-300`}></div>
                   <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain relative z-10" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{tech.name}</h4>
                <span className={`text-sm font-medium ${tech.color}`}>{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Technologies */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Other Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2  sm:gap-4">
            {otherTech.map((tech, index) => (
              <div 
                key={index}
                data-animate="tech-badge"
                className="flex items-center gap-2 sm:gap-3 bg-slate-800/30 border border-slate-700/50 hover:border-slate-500 hover:bg-slate-700/40 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-300"
              >
                 <img src={tech.icon} alt={tech.name} className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                 <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}