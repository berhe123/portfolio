import { Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug } from '@/content/projects'
import { ProjectCaseStudyView } from '@/pages/project/ui/ProjectCaseStudyView'
import { useEffect } from 'react'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!project) return
    document.title = `${project.name} — Case Study · Berhe Arbsie`
    return () => {
      document.title = 'Berhe Arbsie — Full Stack Developer'
    }
  }, [project])

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  return (
    <main id="main">
      <ProjectCaseStudyView project={project} />
    </main>
  )
}
