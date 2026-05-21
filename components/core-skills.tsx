"use client"
import { Layers,Shield, Workflow, Gauge } from "lucide-react"

import { useEffect, useState } from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

export function CoreSkills() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 650)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  
const skills = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "End-to-end web application development from frontend to backend.",
  },
  {
    icon: Shield,
    title: "Secure Applications",
    description: "Building secure, reliable systems with proper auth and data protection.",
  },
  {
    icon: Workflow,
    title: "API Development",
    description: "Designing and integrating efficient REST APIs and backend systems.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Improving speed, responsiveness, and overall application performance.",
  },
];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center" style={{borderBottom:"2px solid #897505" ,width:"fit-content",margin:"0 auto",marginBottom:"40px"}}>Core Skills</h2>

        {isMobile ? (
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1.4}
              data-animate="skill-card"
            >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}  style={{height:"auto"}} 
              data-animate="skill-card"
               >
                <div className="bg-slate-800 p-6 rounded-lg text-center flex flex-col h-full" style={{height:"100%"}} data-animate="skill-card">
                  <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <skill.icon className="w-7 h-7 text-yellow-500" />
                  </div>
                <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{skill.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-colors" data-animate="skill-card">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <skill.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      )}

      </div>
    </section>
  )
}
