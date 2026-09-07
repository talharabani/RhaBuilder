import type { Metadata } from "next";
import { teamMembers } from "@/lib/data/team";
import { TeamClient } from "@/app/team/TeamClient";

export const metadata: Metadata = {
  title: "Our Team | RHA Builder Leadership & Professionals",
  description:
    "Meet the RHA Builder leadership team — experienced professionals across real estate development, construction, commercial sales and accounts.",
  alternates: { canonical: "https://rhabuilder.com/team" },
};

export default function TeamPage() {
  return <TeamClient teamMembers={teamMembers} />;
}

