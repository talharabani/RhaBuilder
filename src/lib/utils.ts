import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    ongoing: "Ongoing",
    completed: "Completed",
    planned: "Planned",
  };
  return labels[status] ?? status;
}

export function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    residential: "Residential",
    commercial: "Commercial",
    "mixed-use": "Mixed Use",
  };
  return labels[type] ?? type;
}
