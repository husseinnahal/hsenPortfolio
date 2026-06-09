import { AnimatedStarsBackground } from "@/components/animated-stars-background"
import { Footer } from "@/components/footer"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectById } from "@/lib/projects-data"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="relative min-h-screen text-[var(--text-primary)]">
      <AnimatedStarsBackground />
      <div className="relative z-[1]">
        <ProjectDetail project={project} />
        <Footer />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const projects = [
    { slug: "walletly" },
    { slug: "elegance-edge" },
    { slug: "fooDev" },
    { slug: "AL-Mashtal" },
    { slug: "we-care-lebanon" },
    { slug: "others" },
  ]

  return projects
}
