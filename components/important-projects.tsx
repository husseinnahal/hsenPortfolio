import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ImportantProjects() {
  const projects = [
    {
      id: "walletly",
      title: "Walletly",
      description:
        "AI-Powered Financial Management Platform for Personal Finance and Budgeting.",
      image: "/images/walletly/walletly1.png",
    },
    {
      id: "baladi",
      title: "Baladi",
      description:
        "SaaS-based municipality management platform with multi-tenant architecture.",
      image: "/images/baladi/baladi.jpeg",
    },
    {
      id: "others",
      title: "More Projects",
      description:
        "Additional projects covering dashboards, APIs, business websites, and UI systems.",
      image: "/images/others.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-slate-900/40"
      data-animate="projects"
    >
      <div className="container mx-auto max-w-7xl">
        <h2
          className="text-3xl font-bold text-center mb-14"
          style={{
            borderBottom: "2px solid #897505",
            width: "fit-content",
            margin: "0 auto 60px",
          }}
        >
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.id}`}
              data-animate="project-card"
              className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-inherit hover:scale-110 transition-transform duration-300"
                    layout="fill"
                  />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                {/* arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* bottom glow */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}