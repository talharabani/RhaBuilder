import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Commercial Construction Company in Lahore | RHA Builders",
  description: "Expert commercial construction and plaza development in Lahore, Pakistan. RHA Builders specializes in commercial real estate projects.",
};

export default function CommercialConstructionPage() {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="container-site">
        <SectionHeader
          title="Commercial Construction"
          subtitle="Top Commercial Real Estate Developers in Lahore"
          centered
        />
        <div className="max-w-4xl mx-auto mt-12 text-slate-700 leading-relaxed space-y-6">
          <p>
            RHA Builders has been a leading force in commercial construction in Lahore since 2006. We specialize in building multi-story commercial plazas and delivering prime retail and office spaces.
          </p>
          <p>
            Our flagship projects like Ansa Tower highlight our dedication to structural integrity and architectural brilliance in Pakistan. By incorporating modern design and ensuring strict compliance with safety regulations, our commercial properties offer lasting value for investors and businesses alike.
          </p>
          <h3 className="text-2xl font-bold text-[#1a2b4a] mt-8 mb-4">Our Commercial Services</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Multi-Story Plaza Construction</li>
            <li>Retail and Office Space Development</li>
            <li>Commercial Architectural Planning</li>
            <li>Project Management and Execution</li>
          </ul>
        </div>
      </div>
      <CTABand />
    </div>
  );
}
