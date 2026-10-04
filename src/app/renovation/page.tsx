import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Home & Commercial Renovation Services in Lahore | RHA Builders",
  description: "RHA Builders offers comprehensive renovation and remodeling services for residential and commercial properties in Lahore, Pakistan.",
};

export default function RenovationPage() {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="container-site">
        <SectionHeader
          title="Renovation Services"
          subtitle="Transforming Spaces in Lahore"
          centered
        />
        <div className="max-w-4xl mx-auto mt-12 text-slate-700 leading-relaxed space-y-6">
          <p>
            Beyond new constructions, RHA Builders is an expert in renovation and property transformation in Lahore. Whether you need to update an aging home or modernize a commercial facility, our team has the expertise to execute your vision flawlessly.
          </p>
          <p>
            We manage every aspect of the renovation process, from initial design consultation to the final finishes. We source high-quality materials from trusted suppliers across Pakistan to ensure your renovated space is both beautiful and durable.
          </p>
          <h3 className="text-2xl font-bold text-[#1a2b4a] mt-8 mb-4">Our Renovation Offerings</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full Home Remodeling</li>
            <li>Commercial Space Upgrades</li>
            <li>Interior and Exterior Enhancements</li>
            <li>Structural Reinforcement</li>
          </ul>
        </div>
      </div>
      <CTABand />
    </div>
  );
}
