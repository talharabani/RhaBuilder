import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { SITE_CONTACT } from "@/lib/constants";

const footerLinks = {
  company: [
    { href: "/about", label: "About RHA Builder" },
    { href: "/team", label: "Our Team" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog & News" },
  ],
  projects: [
    { href: "/projects?type=residential", label: "Residential Projects" },
    { href: "/projects?type=commercial", label: "Commercial Projects" },
    { href: "/projects?status=ongoing", label: "Ongoing Projects" },
    { href: "/projects?status=completed", label: "Completed Projects" },
  ],
  services: [
    { href: "/services/real-estate-development", label: "Real Estate Development" },
    { href: "/services/residential-construction", label: "Residential Construction" },
    { href: "/services/commercial-development", label: "Commercial Development" },
    { href: "/services/construction-management", label: "Construction Management" },
    { href: "/services/turnkey-solutions", label: "Turnkey Solutions" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-blue-100"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="container-site pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="RHA Builders homepage">
              <Logo variant="blue" height={44} />
            </Link>
            <p
              className="mt-4 text-xs leading-relaxed max-w-xs text-slate-600"
            >
              RHA Builder is a real estate development and construction company
              focused on creating well-planned residential and commercial
              environments with quality, functionality and lasting value.
            </p>

            {/* Contact info */}
            <ul className="mt-6 space-y-3" aria-label="Contact information">
              <li>
                <a
                  href={SITE_CONTACT.phoneTel}
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-primary transition-colors group"
                >
                  <PhoneIcon
                    className="w-4 h-4 shrink-0 text-brand-secondary group-hover:text-brand-primary transition-colors"
                    aria-hidden="true"
                  />
                  <span className="font-sans">
                    {SITE_CONTACT.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-primary transition-colors group"
                >
                  <WhatsAppIcon
                    className="w-4 h-4 shrink-0 text-brand-secondary group-hover:text-[#25D366] transition-colors fill-current"
                    aria-hidden="true"
                  />
                  <span className="font-sans">
                    WhatsApp ({SITE_CONTACT.phoneDisplay})
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONTACT.emailMailto}
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-primary transition-colors group"
                >
                  <EnvelopeIcon
                    className="w-4 h-4 shrink-0 text-brand-secondary group-hover:text-brand-primary transition-colors"
                    aria-hidden="true"
                  />
                  <span className="font-sans">
                    {SITE_CONTACT.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONTACT.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-600 hover:text-brand-primary transition-colors group"
                  title="Click to open directions in Google Maps"
                >
                  <MapPinIcon
                    className="w-4 h-4 shrink-0 mt-0.5 text-brand-secondary group-hover:text-brand-primary transition-colors"
                    aria-hidden="true"
                  />
                  <address className="not-italic leading-relaxed font-sans group-hover:underline">
                    {SITE_CONTACT.address}
                  </address>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="pt-2 lg:pt-6">
            <h3
              className="text-sm font-bold tracking-wider uppercase font-sans mb-4 text-brand-primary"
            >
              Company
            </h3>
            <ul role="list" className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-brand-accent hover:translate-x-1 transition-all duration-300 inline-block font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="pt-2 lg:pt-6">
            <h3
              className="text-sm font-bold tracking-wider uppercase font-sans mb-4 text-brand-primary"
            >
              Projects
            </h3>
            <ul role="list" className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-brand-accent hover:translate-x-1 transition-all duration-300 inline-block font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="pt-2 lg:pt-6">
            <h3
              className="text-sm font-bold tracking-wider uppercase font-sans mb-4 text-brand-primary"
            >
              Services
            </h3>
            <ul role="list" className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-brand-accent hover:translate-x-1 transition-all duration-300 inline-block font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-blue-200"
      >
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-slate-500 font-sans"
          >
            &copy; {new Date().getFullYear()} RHA Builder. All rights reserved.
          </p>
          <ul
            role="list"
            className="flex items-center gap-6"
            aria-label="Legal links"
          >
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-medium text-slate-500 hover:text-brand-primary transition-colors duration-200 font-sans"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
