import Image from "next/image"
import Link from "next/link"


export function ImportantProjects() {
  const projects = [
    {
      id:"walletly",
      title: "Walletly - Finance Management System",
      image: "/images/walletly.jpeg",
      tags: ["Next.js", "Node.js","Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id:"we-care-lebanon",
      title: "We Care Lebanon - Management Website",
      image: "/images/wecare.png",
      tags: ["Node.js","Express.js", "EJS","MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id:"elegance-edge",
      title: "EleganceEdge - Ecommerce Store",
      image: "/images/elegance.png",
      tags: ["Next.js", "Node.js","Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id:"fooDev",
      title: "FooDev - Restaurant Ordering Website",
      image: "/images/foodev.jpg",
      tags: ["React.js", "Node.js","Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id:"AL-Mashtal",
      title: "Al Mashtal - Ecommerce Platform",
      image: "/images/lmashtal.jpeg",
      tags: ["PHP", "MYSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id:"others",
      title: "Other Projects",
      image: "/images/others.png",
      tags: [],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-slate-800/50" data-animate="projects">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center" style={{borderBottom:"2px solid #897505" ,width:"fit-content",margin:"0 auto",marginBottom:"40px"}}>Important Projects</h2>
        <div className="grid  max-[520px]:grid-cols-1  max-[520px]:gap-6 grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
          {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`}
              data-animate="project-card"
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
              <div className="aspect-video p-4  relative overflow-hidden" style={{width:"100%",height:"300px"}}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-inherit hover:scale-110 transition-transform duration-300"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>



              <div className="px-6 py-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 mb-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  <h3 className="text-xl font-semibold mb-1 text-balance">{project.title}</h3>
                </div>
                {/* <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink size={16} />
                    Live
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Github size={16} />
                    Code
                  </Button>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
