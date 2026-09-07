import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data/projects";
import { ProjectDetailView } from "@/components/sections/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailView slug={slug} />;
}

