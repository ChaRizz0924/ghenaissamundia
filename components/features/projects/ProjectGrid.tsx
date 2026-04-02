"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import ProjectSearch from "./ProjectSearch"

export default function ProjectGrid() {
  const [search, setSearch] = useState("")

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="max-w-5xl w-full mx-auto px-10 py-10">
      
      {/* Search */}
      <ProjectSearch onSearch={setSearch} />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filtered.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

    </section>
  )
}