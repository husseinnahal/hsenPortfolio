export function Technologies() {
  const technologies = [
    { name: "Html", level: 100, color: "bg-orange-500" },
    { name: "CSS", level: 96, color: "bg-blue-500" },
    { name: "Tailwind", level: 87, color: "bg-cyan-500" },
    { name: "Javascript", level: 94, color: "bg-yellow-500" },
    { name: "React.js", level: 90, color: "bg-blue-400" },
    { name: "Next.js", level: 90, color: "bg-gray-400" },
    { name: "Bootstrap", level: 85, color: "bg-purple-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Express.js", level: 82, color: "bg-gray-600" },
    { name: "MongoDB", level: 81, color: "bg-green-600" },
    { name: "SQL", level: 78, color: "bg-blue-600" },
  ]

  return (
    <section className="py-16 px-4 bg-slate-800/50" data-animate="technologies">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold mb-12 text-center"  style={{borderBottom:"2px solid #897505" ,width:"fit-content",margin:"0 auto",marginBottom:"40px"}}>Technologies I Use</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto max-[380px]:grid-cols-1">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-slate-800 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{tech.name}</span>
                <span className="text-sm text-gray-400">{tech.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className={`h-2 rounded-full ${tech.color}`} style={{ width: "100%" }} data-animate="tech-bar" data-level={tech.level}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
