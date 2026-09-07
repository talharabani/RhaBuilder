import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/sections/ServiceDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailView slug={slug} />;
}

