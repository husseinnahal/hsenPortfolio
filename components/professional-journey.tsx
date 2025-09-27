export function ProfessionalJourney() {
  const experiences = [
    {
      period: "2022-2025",
      title: "Education",
      subtitle: "Bachelors in Computer Science",
      company: "At Islamic University Of Lebanon",
      description:
        "Focused on software engineering fundamentals, data structures, algorithms, and web development technologies.",
      type: "education",
    },
    {
      period: "2024-Present",
      title: "Devmode",
      subtitle: "Freelance",
      company: "Full-Stack DEVELOPER",
      description:
        "Built responsive and user-friendly web applications using the MERN stack with Next.js. Collaborated with a team of developers to create dynamic web applications.",
      type: "work",
    },
    {
      period: "2025",
      title: "BrainKets",
      subtitle: "Hybrid - Internship",
      company: "FRONT-END DEVELOPER",
      description:
      "Developed and implemented an interactive event calendar using Next.js. Designed and built a dashboard for event management, improving usability and efficiency.Used Git/GitHub for version control and teamwork",
      type: "work",
    },
  ]

  return (
    <section className="py-16 px-4" data-animate="journey">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold mb-12 text-center" style={{borderBottom:"2px solid #897505" ,width:"fit-content",margin:"0 auto",marginBottom:"40px"}}>My Professional Journey</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    exp.type === "education" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {exp.period}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-2">{exp.subtitle}</p>
              <p className="text-yellow-500 font-semibold mb-4">{exp.company}</p>
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </div>
          ))}

       </div>

      </div>
    </section>
  )
}
