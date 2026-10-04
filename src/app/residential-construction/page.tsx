import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Residential Construction Company in Lahore | RHA Builders",
  description: "RHA Builders provides top-tier residential construction services in Lahore, Pakistan. Build your dream home with the leading construction experts.",
};

export default function ResidentialConstructionPage() {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="container-site">
        <SectionHeader
          title="Residential Construction"
          subtitle="Building Dream Homes in Lahore"
          centered
        />
        <div className="max-w-4xl mx-auto mt-12 text-slate-700 leading-relaxed space-y-6">
          <p>
            At RHA Builders, we understand that building a home is a deeply personal journey. As a premier residential construction company in Lahore, Pakistan, we are committed to turning your vision into a structural reality.
          </p>
          <p>
            Whether it's a turnkey home, a custom villa, or a multi-unit residential project, our team led by Faryad Hussain guarantees precision, high-quality materials, and adherence to local building standards. Our presence near Hasalmi Market gives us an unmatched understanding of the Lahore property landscape.
          </p>
          <h3 className="text-2xl font-bold text-[#1a2b4a] mt-8 mb-4">Our Residential Services</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Turnkey House Construction</li>
            <li>Custom Villa Design and Build</li>
            <li>Residential Layout and Planning</li>
            <li>Structural Engineering for Homes</li>
          </ul>
        </div>
      </div>
      <CTABand />
    </div>
  );
}
