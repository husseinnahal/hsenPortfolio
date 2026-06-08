"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Project } from "@/lib/projects-data"
import {
  ArrowLeft,
  CheckCircle,
  Code2,
  ExternalLink,
  Github,
  Zap
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

/**
 * @typedef {Object} ProjectDetailProps
 * @property {Project} project
 */

/**
 * @param {ProjectDetailProps} props
 */
export function ProjectDetail({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState(0)


  return (
    <div className=" pb-16">
      
      {/* Hero Section */}
      <div className="relative min-h-[60vh] py-22 flex items-center justify-center bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)] ">

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Project Info */}
            <div className="flex-1 ">

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </Link>


              <h1 className="text-lg sm:text-xl lg:text-3xl font-bold mb-6 text-balance bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </h1>

              <p className="text-xs sm:text-sm text-gray-300 mb-8 text-pretty max-w-2xl">{project.longDescription}</p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {project.liveUrl !== "#" && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{cursor:"pointer"}}
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          style={{cursor:"pointer"}}
                          className="btn-shimmer border-0 font-semibold"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                              View Live Site
                        </Button>
                      </Link>
                )}

                {project.githubUrl !== "#" && (
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <Button size="lg" 
                         style={{cursor:"pointer"}}
                         variant="outline" className="border-gray-600  text-white bg-transparent">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Project Preview */}
            <div className="flex-1 max-w-3xl">
              <div className="relative">
                {/* Laptop Frame */}
                <div className="bg-gray-800 rounded-t-xl  shadow-2xl">
                  <div className="bg-gray-700 rounded-t-lg p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-gray-600 rounded px-3 py-1 text-xs text-gray-300">
                      {project.liveUrl !== "#" ? project.liveUrl : "localhost:3000"}
                    </div>
                  </div>
                  <div className="bg-white rounded-b-lg overflow-hidden" style={{aspectRatio:"4/3"}}>
                    <Image
                      src={project.image || "/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      className="w-full h-full object-inherit"
                      // layout="fill"
                      width={600}
                      height={400}

                    />
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-0 bg-slate-800 border border-slate-700 rounded-lg p-2 sm:p-4 shadow-xl">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{project.title.split(" - ")[0]}</div>
                      <div className="text-gray-400 text-xs">{project.tags[0]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-4 pt-16 pb-7 text-white">

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:grid-cols-3 mb-8 bg-slate-800 border border-slate-700 ">
            <TabsTrigger style={{cursor:"pointer"}} value="overview" className="data-[state=active]:bg-[var(--accent-500)] data-[state=active]:text-[var(--bg-primary)] text-gray-300">
              Overview
            </TabsTrigger>
            <TabsTrigger style={{cursor:"pointer"}} value="gallery" className="data-[state=active]:bg-[var(--accent-500)] data-[state=active]:text-[var(--bg-primary)] text-gray-300">
              Gallery
            </TabsTrigger>
            <TabsTrigger style={{cursor:"pointer"}} value="tech" className="data-[state=active]:bg-[var(--accent-500)] data-[state=active]:text-[var(--bg-primary)] text-gray-300">
              Tech Stack
            </TabsTrigger>

          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Features */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Zap className="w-5 h-5 text-[var(--accent-400)]" />
                   Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          <TabsContent value="gallery" className="space-y-8 ">
            {/* Image Gallery */}
            <div className="space-y-6 w-full sm:w-3/4 mx-auto" >
              {/* Main Image */}
              <div className="relative  bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src={project.images[selectedImage] || "/placeholder.svg?height=600&width=800"}
                  alt={`${project.title} screenshot ${selectedImage + 1}`}
                  className="w-full h-full object-inherit"
                  style={{maxHeight:"550px"}}
                  width={200}
                  height={100}
                />
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-2  [@media(min-width:400px)_and_(max-width:770px)]:grid-cols-3  md:grid-cols-4 gap-4">
                {project.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-video bg-slate-800 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-[var(--accent-400)]" : "border-slate-700 hover:border-slate-600"
                    }`}
                    style={{cursor:"pointer"}}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=200&width=300"}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-8">
            {/* Tech Stack */}
            <div className="grid max-[520px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.techStack.frontend.map((tech: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.techStack.backend.map((tech: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.techStack.database.map((tech: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.techStack.tools.map((tech: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-[var(--accent-400)] rounded-full"></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>


        </Tabs>


      </div>
    </div>
  )
}
