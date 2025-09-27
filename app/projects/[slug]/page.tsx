import { notFound } from "next/navigation"
import { getProjectById } from "@/lib/projects-data"
import { ProjectDetail } from "@/components/project-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <ProjectDetail project={project} />
      <Footer />
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
