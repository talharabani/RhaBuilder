"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  ChevronDownIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  SparklesIcon,
  ArrowRightIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { SITE_CONTACT } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects", hasMegaMenu: true, megaMenuType: "projects" as const },
  { href: "/services", label: "Services", hasMegaMenu: true, megaMenuType: "services" as const },
  { href: "/team", label: "Team", hasMegaMenu: true, megaMenuType: "team" as const },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"projects" | "services" | "team" | null>(null);
  const [hoveredServiceMegaMenu, setHoveredServiceMegaMenu] = useState({
    title: "Commercial Plaza Construction & Shop Sales",
    description: "End-to-end commercial plaza development in Shahalmi Lahore with shop sales on 25% advance booking & 3-year quarterly installment plans.",
    image: "/images/services/commercial-development.jpg",
    slug: "commercial-plaza-construction",
    badge: "Core Specialty",
  });
  const [hoveredProjectMegaMenu, setHoveredProjectMegaMenu] = useState({
    title: "Ansa Tower — Shahalmi, Lahore",
    description: "9-Story flagship commercial plaza opposite Mochi Gate. 25% Advance booking & 3-year quarterly payment plan. Handover in 2 months.",
    image: "/images/projects/ansa-tower-cover.jpg",
    slug: "ansa-tower",
    badge: "Flagship Plaza",
  });
  const [hoveredTeamMegaMenu, setHoveredTeamMegaMenu] = useState({
    name: "Faryad Hussain",
    role: "CEO & Founder",
    description: "Founded RHA Builders in 2006. 20+ years of development & construction leadership across Lahore & Islamabad.",
    image: "/images/team/faryad-hussain.jpg",
    slug: "faryad-hussain",
    badge: "CEO & Founder",
  });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const handleMouseEnterNav = (menu: "projects" | "services" | "team") => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeaveNav = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  // Trap focus inside mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const el = menuRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", trap);
    document.addEventListener("keydown", close);
    first?.focus();
    return () => {
      document.removeEventListener("keydown", trap);
      document.removeEventListener("keydown", close);
    };
  }, [mobileOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200"
            : "bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent"
        )}
        role="banner"
      >
        <div className="container-site relative">
          <div className="flex items-center justify-between h-18 sm:h-20 py-3 sm:py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a2b4a] rounded"
              aria-label="RHA Builders — Return to homepage"
            >
              <Logo scrolled={scrolled} height={38} />
            </Link>

            {/* Desktop Nav */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-1.5"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasMegaMenu) {
                  const isMenuOpen = activeMegaMenu === link.megaMenuType;
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => handleMouseEnterNav(link.megaMenuType!)}
                      onMouseLeave={handleMouseLeaveNav}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        style={{
                          color: isActive
                            ? scrolled
                              ? "var(--color-brand-primary)"
                              : "#ffffff"
                            : scrolled
                            ? "var(--color-text-secondary)"
                            : "rgba(255, 255, 255, 0.85)",
                        }}
                        className={cn(
                          "px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg relative inline-flex items-center gap-1 group",
                          isActive
                            ? "font-bold"
                            : "hover:text-white"
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronDownIcon
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            isMenuOpen ? "rotate-180 text-[#0052cc]" : ""
                          )}
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    style={{
                      color: isActive
                        ? scrolled
                          ? "var(--color-brand-primary)"
                          : "#ffffff"
                        : scrolled
                        ? "var(--color-text-secondary)"
                        : "rgba(255, 255, 255, 0.85)",
                    }}
                    className={cn(
                      "px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg relative",
                      "after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:transition-all after:duration-200",
                      isActive
                        ? "after:bg-[#1a2b4a] after:opacity-100 font-bold"
                        : "hover:text-white after:opacity-0 hover:after:opacity-100 after:bg-[#1a2b4a]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                style={{
                  backgroundColor: scrolled ? "#1a2b4a" : "transparent",
                  color: "#ffffff",
                  borderColor: scrolled ? "#1a2b4a" : "rgba(255,255,255,0.4)",
                }}
                className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border-2 transition-all duration-200 hover:bg-[#1a2b4a] hover:border-[#1a2b4a] shadow-sm"
              >
                Discuss a Project
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              ref={triggerRef}
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "lg:hidden p-2.5 rounded-xl border transition-all duration-200 active:scale-95",
                scrolled
                  ? "text-[#1a2b4a] bg-slate-100 border-slate-200"
                  : "text-white bg-white/10 border-white/20 backdrop-blur-md"
              )}
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ─── DESKTOP PROJECTS MEGA MENU DROPDOWN (WHITE THEME) ────────────── */}
        <AnimatePresence>
          {activeMegaMenu === "projects" && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnterNav("projects")}
              onMouseLeave={handleMouseLeaveNav}
              className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b border-slate-200 shadow-2xl shadow-slate-900/15 text-slate-800 z-40 overflow-hidden"
            >
              <div className="container-site py-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Subcategory 1: Commercial Plazas & Shops */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <BuildingStorefrontIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Commercial Plazas & Shops
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/projects/ansa-tower"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredProjectMegaMenu({
                              title: "Ansa Tower — Shahalmi, Lahore",
                              description: "9-Story flagship commercial plaza opposite Mochi Gate. 25% Advance booking & 3-year quarterly payment plan. Handover in 2 months.",
                              image: "/images/projects/ansa-tower-cover.jpg",
                              slug: "ansa-tower",
                              badge: "Flagship Plaza",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="flex items-center justify-between text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            <span>Ansa Tower — Shahalmi</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                              Ongoing
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Opposite Mochi Gate, Shahalmi Lahore (25% Advance & 3-Yr Plan)
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/commercial-plaza-construction"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredProjectMegaMenu({
                              title: "Shahalmi Commercial Shops",
                              description: "Prime retail shop sales in high-footfall commercial market areas with 25% booking and 3-year quarterly payment plans.",
                              image: "/images/services/commercial-development.jpg",
                              slug: "commercial-plaza-construction",
                              badge: "Shops For Sale",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Shahalmi Commercial Shops
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Prime retail shop sales with 3-year quarterly payment schedule
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects?type=commercial"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredProjectMegaMenu({
                              title: "Commercial Plazas (Islamabad)",
                              description: "F-10 Markaz & G-11 Markaz multi-story commercial plaza developments and retail hubs.",
                              image: "/images/projects/capital-plaza-hero.jpg",
                              slug: "rha-capital-plaza-islamabad",
                              badge: "Capital Region",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Commercial Plazas (Islamabad)
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            F-10 Markaz & G-11 Markaz commercial developments
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Subcategory 2: Residential Family Houses */}
                  <div className="col-span-4 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <HomeIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Residential Houses & Villas
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href="/projects/residential-houses-pakistani-town-phase-1"
                        onClick={() => setActiveMegaMenu(null)}
                        onMouseEnter={() =>
                          setHoveredProjectMegaMenu({
                            title: "Pakistani Town P1 & P2",
                            description: "Completed 5 Marla & 10 Marla turnkey residential family houses in Pakistani Town, Islamabad.",
                            image: "/images/projects/residential-houses-hero.jpg",
                            slug: "residential-houses-pakistani-town-phase-1",
                            badge: "Completed",
                          })
                        }
                        className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                      >
                        <div className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                          Pakistani Town P1 & P2
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">
                          Completed 5M & 10M Houses (Islamabad)
                        </p>
                      </Link>
                      <Link
                        href="/projects/residential-houses-police-foundation-society"
                        onClick={() => setActiveMegaMenu(null)}
                        onMouseEnter={() =>
                          setHoveredProjectMegaMenu({
                            title: "Police Foundation Society",
                            description: "Turnkey 5M & 10M family residences built with premium masonry and luxury finishes.",
                            image: "/images/services/residential-construction.jpg",
                            slug: "residential-houses-police-foundation-society",
                            badge: "Turnkey Houses",
                          })
                        }
                        className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                      >
                        <div className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                          Police Foundation
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">
                          Turnkey 5M & 10M Residences
                        </p>
                      </Link>
                      <Link
                        href="/projects/residential-houses-bahria-town-phase-7"
                        onClick={() => setActiveMegaMenu(null)}
                        onMouseEnter={() =>
                          setHoveredProjectMegaMenu({
                            title: "Bahria Town Phase 7",
                            description: "Luxury family villas (5M, 10M, 1 Kanal) constructed according to client specifications.",
                            image: "/images/projects/residential-houses-hero.jpg",
                            slug: "residential-houses-bahria-town-phase-7",
                            badge: "Luxury Villas",
                          })
                        }
                        className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                      >
                        <div className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                          Bahria Town Phase 7
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">
                          Luxury Villas (5M, 10M, 1 Kanal)
                        </p>
                      </Link>
                      <Link
                        href="/projects/residential-houses-federation-society"
                        onClick={() => setActiveMegaMenu(null)}
                        onMouseEnter={() =>
                          setHoveredProjectMegaMenu({
                            title: "Federation Society",
                            description: "Custom completed family houses delivered with full handover & warranties.",
                            image: "/images/services/residential-construction.jpg",
                            slug: "residential-houses-federation-society",
                            badge: "Residences",
                          })
                        }
                        className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                      >
                        <div className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                          Federation Society
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">
                          Custom Completed Houses
                        </p>
                      </Link>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <Link
                        href="/services/residential-house-construction"
                        onClick={() => setActiveMegaMenu(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052cc] hover:underline"
                      >
                        <span>Need custom house building on your plot? View Services</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Subcategory 3: Browse By Filter */}
                  <div className="col-span-2 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <SparklesIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Browse By Status
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/projects?status=ongoing"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredProjectMegaMenu({
                              title: "Ongoing Developments",
                              description: "Active commercial plaza construction projects and custom residential developments.",
                              image: "/images/projects/ansa-tower-cover.jpg",
                              slug: "ansa-tower",
                              badge: "Ongoing Build",
                            })
                          }
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs font-bold text-[#1a2b4a] hover:text-[#0052cc] border border-transparent hover:border-slate-200 transition-all"
                        >
                          <span>Ongoing / In Progress</span>
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects?status=completed"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredProjectMegaMenu({
                              title: "Completed Portfolio",
                              description: "Delivered commercial plazas and ready-to-move residential family houses.",
                              image: "/images/projects/residential-houses-hero.jpg",
                              slug: "residential-houses-pakistani-town-phase-1",
                              badge: "Completed",
                            })
                          }
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs font-bold text-[#1a2b4a] hover:text-[#0052cc] border border-transparent hover:border-slate-200 transition-all"
                        >
                          <span>Completed Projects</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/projects"
                          onClick={() => setActiveMegaMenu(null)}
                          className="block w-full py-2.5 px-3 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-[#0052cc] text-white hover:bg-blue-700 transition-all shadow-md"
                        >
                          All Projects Directory →
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Featured Dynamic Project Spotlight Card */}
                  <div className="col-span-3 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between h-full shadow-sm">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={hoveredProjectMegaMenu.slug}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-900 border border-slate-200">
                            <Image
                              src={hoveredProjectMegaMenu.image}
                              alt={hoveredProjectMegaMenu.title}
                              fill
                              className="object-cover"
                              sizes="240px"
                            />
                            <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0052cc] text-white shadow">
                              {hoveredProjectMegaMenu.badge}
                            </span>
                          </div>
                          <h4 className="font-sans font-bold text-sm text-[#1a2b4a] mb-1 line-clamp-1">
                            {hoveredProjectMegaMenu.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 font-sans leading-relaxed line-clamp-3">
                            {hoveredProjectMegaMenu.description}
                          </p>
                        </div>
                        <Link
                          href={`/projects/${hoveredProjectMegaMenu.slug}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="mt-4 flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-white bg-[#1a2b4a] hover:bg-[#0052cc] rounded-xl transition-all shadow-sm"
                        >
                          <span>Explore Project</span>
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── DESKTOP SERVICES MEGA MENU DROPDOWN (WHITE THEME) ────────────── */}
        <AnimatePresence>
          {activeMegaMenu === "services" && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnterNav("services")}
              onMouseLeave={handleMouseLeaveNav}
              className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b border-slate-200 shadow-2xl shadow-slate-900/15 text-slate-800 z-40 overflow-hidden"
            >
              <div className="container-site py-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Subcategory 1: Commercial Development Services */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <BuildingStorefrontIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Commercial Development
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/services/commercial-plaza-construction"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredServiceMegaMenu({
                              title: "Commercial Plaza Construction & Shop Sales",
                              description: "Shahalmi Lahore Plazas, 25% Advance booking & 3-year quarterly payment plans.",
                              image: "/images/services/commercial-development.jpg",
                              slug: "commercial-plaza-construction",
                              badge: "Core Specialty",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="flex items-center justify-between text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            <span>Commercial Plaza & Shop Sales</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                              Core
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Shahalmi Lahore Plazas, 25% Advance booking & 3-year quarterly plans
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/commercial-development"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredServiceMegaMenu({
                              title: "Commercial Real Estate Development",
                              description: "Grade-A office spaces, retail centers, and tech-enabled mixed-use commercial hubs.",
                              image: "/images/services/real-estate-development.jpg",
                              slug: "commercial-development",
                              badge: "Commercial",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Commercial Real Estate Development
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Grade-A office space, retail centers, and mixed-use commercial hubs
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Subcategory 2: Residential & Turnkey Services */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <HomeIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Residential & Turnkey
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/services/residential-house-construction"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredServiceMegaMenu({
                              title: "Residential House Construction",
                              description: "Custom building on client housing plots and sale of completed ready-to-move family houses.",
                              image: "/images/services/residential-construction.jpg",
                              slug: "residential-house-construction",
                              badge: "Residential",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Residential House Construction
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Custom building on client plots and sale of completed family houses
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/turnkey-solutions"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredServiceMegaMenu({
                              title: "Turnkey Solutions",
                              description: "Integrated design, structural build, luxury interior fit-outs, and single-source key handover.",
                              image: "/images/services/turnkey-solutions.jpg",
                              slug: "turnkey-solutions",
                              badge: "Turnkey",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Turnkey Solutions
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Integrated design, build, luxury fit-outs, and single-source handover
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Subcategory 3: Management & Advisory */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <ClipboardDocumentCheckIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Management & Advisory
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/services/construction-management"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredServiceMegaMenu({
                              title: "Construction Management",
                              description: "Independent client-side trade management, budget control, and quality auditing.",
                              image: "/images/services/construction-management.jpg",
                              slug: "construction-management",
                              badge: "Management",
                            })
                          }
                          className="group block p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Construction Management
                          </div>
                          <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Client-side trade management & quality control
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/design-planning-coordination"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredServiceMegaMenu({
                              title: "Design & Planning Coordination",
                              description: "3D BIM clash detection, architectural coordination, and statutory planning consents.",
                              image: "/images/services/design-planning-coordination.jpg",
                              slug: "design-planning-coordination",
                              badge: "Design",
                            })
                          }
                          className="group block p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Design & Planning Coordination
                          </div>
                          <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">
                            3D BIM coordination & planning consents
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/consultation"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredServiceMegaMenu({
                              title: "Strategic Consultation",
                              description: "Project vision brief, site feasibility analysis, regulatory guidance, and cost planning.",
                              image: "/images/services/consultation.png",
                              slug: "consultation",
                              badge: "Advisory",
                            })
                          }
                          className="group block p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Strategic Consultation
                          </div>
                          <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Feasibility brief & cost planning guidance
                          </p>
                        </Link>
                      </li>
                      <li className="pt-1">
                        <Link
                          href="/services"
                          onClick={() => setActiveMegaMenu(null)}
                          className="block w-full py-2 px-3 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-[#0052cc] text-white hover:bg-blue-700 transition-all shadow-md"
                        >
                          All Services Directory →
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Featured Dynamic Service Spotlight Card */}
                  <div className="col-span-3 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between h-full shadow-sm">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={hoveredServiceMegaMenu.slug}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-900 border border-slate-200">
                            <Image
                              src={hoveredServiceMegaMenu.image}
                              alt={hoveredServiceMegaMenu.title}
                              fill
                              className="object-cover"
                              sizes="240px"
                            />
                            <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0052cc] text-white shadow">
                              {hoveredServiceMegaMenu.badge}
                            </span>
                          </div>
                          <h4 className="font-sans font-bold text-sm text-[#1a2b4a] mb-1 line-clamp-1">
                            {hoveredServiceMegaMenu.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 font-sans leading-relaxed line-clamp-3">
                            {hoveredServiceMegaMenu.description}
                          </p>
                        </div>
                        <Link
                          href={`/services/${hoveredServiceMegaMenu.slug}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="mt-4 flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-white bg-[#1a2b4a] hover:bg-[#0052cc] rounded-xl transition-all shadow-sm"
                        >
                          <span>Explore {hoveredServiceMegaMenu.badge}</span>
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── DESKTOP TEAM MEGA MENU DROPDOWN (WHITE THEME) ────────────────── */}
        <AnimatePresence>
          {activeMegaMenu === "team" && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnterNav("team")}
              onMouseLeave={handleMouseLeaveNav}
              className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b border-slate-200 shadow-2xl shadow-slate-900/15 text-slate-800 z-40 overflow-hidden"
            >
              <div className="container-site py-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Subcategory 1: Executive Leadership */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <UserGroupIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Executive Leadership
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/team/faryad-hussain"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Faryad Hussain",
                              role: "CEO & Founder",
                              description: "Founded RHA Builders in 2006. 20+ years leading commercial plazas and residential developments across Lahore & Islamabad.",
                              image: "/images/team/faryad-hussain.jpg",
                              slug: "faryad-hussain",
                              badge: "CEO & Founder",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="flex items-center justify-between text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            <span>Faryad Hussain</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                              CEO & Founder
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Founded RHA Builders in 2006. 20+ years development & construction leadership
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/team/muhammad-fayaz"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Muhammad Fayaz",
                              role: "Chief Operating Officer",
                              description: "Oversees operational management, site logistics, contractor coordination, and project scheduling.",
                              image: "/images/team/muhammad-fayaz.jpg",
                              slug: "muhammad-fayaz",
                              badge: "COO",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Muhammad Fayaz — COO
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Operations management, site logistics, and project scheduling
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/team/rameez-faryad"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Rameez Faryad",
                              role: "Deputy COO",
                              description: "Leads operational support, commercial advisory, shop sales, and buyer installment contracts.",
                              image: "/images/team/rameez-faryad.jpg",
                              slug: "rameez-faryad",
                              badge: "Deputy COO",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Rameez Faryad — Deputy COO
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Client advisory, shop sales, and installment contract management
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Subcategory 2: Operations & Site Engineering */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <BriefcaseIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Operations & Engineering
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/team/muhammad-arash"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Muhammad Arash",
                              role: "Site Engineer",
                              description: "On-site structural engineering inspections, technical compliance, and quality sign-offs on major plaza builds.",
                              image: "/images/team/muhammad-arash.jpg",
                              slug: "muhammad-arash",
                              badge: "Site Engineer",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Muhammad Arash — Site Engineer
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            On-site structural engineering inspections & technical QA
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/team/asad-ali"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Asad Ali",
                              role: "Accounts & Admin Officer",
                              description: "Corporate ledger accounting, client installment payment processing, and administrative operations.",
                              image: "/images/team/asad-ali.jpg",
                              slug: "asad-ali",
                              badge: "Accounts & Admin",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Asad Ali — Accounts & Admin
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Financial management & client installment ledger accounting
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/team/asghar-ali"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Asghar Ali & Malik Shafique",
                              role: "Front Desk & Sales Executives",
                              description: "Client reception, commercial shop booking advisory, site visit bookings, and sales consultation.",
                              image: "/images/team/asghar-ali.jpg",
                              slug: "asghar-ali",
                              badge: "Sales Advisory",
                            })
                          }
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#0052cc] transition-colors">
                            Asghar Ali & Malik Shafique
                          </div>
                          <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                            Front Desk & Sales Executives for buyer consultation
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Subcategory 3: Explore Departments */}
                  <div className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <UserIcon className="w-5 h-5 text-[#0052cc]" />
                      <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-[#0052cc]">
                        Explore Departments
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/team"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Executive Management",
                              role: "Leadership Team",
                              description: "Faryad Hussain (CEO), Muhammad Fayaz (COO), and Rameez Faryad (Deputy COO).",
                              image: "/images/team/faryad-hussain.jpg",
                              slug: "faryad-hussain",
                              badge: "Leadership",
                            })
                          }
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-bold text-[#1a2b4a] hover:text-[#0052cc] border border-transparent hover:border-slate-200 transition-all"
                        >
                          <span>Executive Management</span>
                          <span className="text-[10px] text-slate-400 font-normal">3 Members</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/team"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Front Desk & Sales Advisory",
                              role: "Client Relations Team",
                              description: "Asghar Ali and Malik Shafique providing buyer advisory and sales support.",
                              image: "/images/team/asghar-ali.jpg",
                              slug: "asghar-ali",
                              badge: "Client Relations",
                            })
                          }
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-bold text-[#1a2b4a] hover:text-[#0052cc] border border-transparent hover:border-slate-200 transition-all"
                        >
                          <span>Front Desk & Sales Advisory</span>
                          <span className="text-[10px] text-slate-400 font-normal">2 Members</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/team"
                          onClick={() => setActiveMegaMenu(null)}
                          onMouseEnter={() =>
                            setHoveredTeamMegaMenu({
                              name: "Site Engineering & Accounts",
                              role: "Operations & Technical Staff",
                              description: "Muhammad Arash (Site Engineer) and Asad Ali (Accounts & Admin Officer).",
                              image: "/images/team/muhammad-arash.jpg",
                              slug: "muhammad-arash",
                              badge: "Operations",
                            })
                          }
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-bold text-[#1a2b4a] hover:text-[#0052cc] border border-transparent hover:border-slate-200 transition-all"
                        >
                          <span>Site Engineering & Accounts</span>
                          <span className="text-[10px] text-slate-400 font-normal">3 Members</span>
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/team"
                          onClick={() => setActiveMegaMenu(null)}
                          className="block w-full py-2.5 px-3 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-[#0052cc] text-white hover:bg-blue-700 transition-all shadow-md"
                        >
                          Meet Entire Team Directory →
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Featured Dynamic Leadership Spotlight Card */}
                  <div className="col-span-3 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between h-full shadow-sm">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={hoveredTeamMegaMenu.slug}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="relative h-44 w-full rounded-xl overflow-hidden mb-3 bg-slate-100 border border-slate-200">
                            <Image
                              src={hoveredTeamMegaMenu.image}
                              alt={`${hoveredTeamMegaMenu.name} — ${hoveredTeamMegaMenu.role}`}
                              fill
                              quality={95}
                              className="object-cover object-[center_15%]"
                              sizes="280px"
                              priority
                            />
                            <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0052cc] text-white shadow-md z-10">
                              {hoveredTeamMegaMenu.badge}
                            </span>
                          </div>
                          <h4 className="font-sans font-bold text-sm text-[#1a2b4a] mb-1 line-clamp-1">
                            {hoveredTeamMegaMenu.name}
                          </h4>
                          <p className="text-[11px] text-slate-600 font-sans leading-relaxed line-clamp-3">
                            {hoveredTeamMegaMenu.description}
                          </p>
                        </div>
                        <Link
                          href={`/team/${hoveredTeamMegaMenu.slug}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-white bg-[#1a2b4a] hover:bg-[#0052cc] rounded-xl transition-all shadow-sm"
                        >
                          <span>Read Profile</span>
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md lg:hidden transition-opacity duration-300"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Luxury Mobile Navigation Drawer */}
      <div
        ref={menuRef}
        id="mobile-nav"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[340px] bg-gradient-to-b from-[#1a2b4a] via-[#111c30] to-[#0a1220] text-white flex flex-col lg:hidden transition-all duration-300 ease-out shadow-2xl border-l border-white/10",
          mobileOpen
            ? "translate-x-0 pointer-events-auto opacity-100 visible"
            : "translate-x-full pointer-events-none opacity-0 invisible hidden"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Logo variant="white" height={36} />
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="Close navigation menu"
            className="p-2 text-slate-300 hover:text-white rounded-xl bg-white/10 transition-colors"
          >
            <XMarkIcon className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-6">
          <ul role="list" className="space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasMegaMenu) {
                const isProjects = link.megaMenuType === "projects";
                const isServices = link.megaMenuType === "services";
                const isTeam = link.megaMenuType === "team";

                const isOpen = isProjects
                  ? mobileProjectsOpen
                  : isServices
                  ? mobileServicesOpen
                  : mobileTeamOpen;

                const toggleOpen = isProjects
                  ? () => setMobileProjectsOpen((prev) => !prev)
                  : isServices
                  ? () => setMobileServicesOpen((prev) => !prev)
                  : () => setMobileTeamOpen((prev) => !prev);

                return (
                  <li key={link.href} className="space-y-1">
                    <div className="flex items-center justify-between px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-200 text-slate-200 hover:bg-white/10">
                      <Link href={link.href} onClick={() => setMobileOpen(false)}>
                        <span>{link.label}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={toggleOpen}
                        className="p-1 rounded-md hover:bg-white/20 text-slate-300"
                        aria-label={`Toggle ${link.label} subcategories`}
                      >
                        <ChevronDownIcon
                          className={cn(
                            "w-5 h-5 transition-transform duration-200",
                            isOpen ? "rotate-180 text-[#0052cc]" : ""
                          )}
                        />
                      </button>
                    </div>

                    {/* Mobile Accordion Subcategories for Projects */}
                    {isProjects && isOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-3 border-l-2 border-[#0052cc]/50 my-1 bg-white/5 rounded-r-xl">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1">
                            Commercial Plazas
                          </p>
                          <Link
                            href="/projects/ansa-tower"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Ansa Tower — Shahalmi, Lahore
                          </Link>
                          <Link
                            href="/services/commercial-plaza-construction"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Shahalmi Commercial Shops (3-Yr Plan)
                          </Link>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1">
                            Residential Houses
                          </p>
                          <Link
                            href="/projects/residential-houses-pakistani-town-phase-1"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Pakistani Town P1 & P2 (Islamabad)
                          </Link>
                          <Link
                            href="/projects/residential-houses-police-foundation-society"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Police Foundation Society
                          </Link>
                          <Link
                            href="/projects/residential-houses-bahria-town-phase-7"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Bahria Town Phase 7 Luxury Villas
                          </Link>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1">
                            Browse All
                          </p>
                          <Link
                            href="/projects?status=ongoing"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-amber-300 font-semibold"
                          >
                            • Ongoing Projects
                          </Link>
                          <Link
                            href="/projects?status=completed"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-emerald-300 font-semibold"
                          >
                            • Completed Projects
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Mobile Accordion Subcategories for Services */}
                    {isServices && isOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-3 border-l-2 border-[#0052cc]/50 my-1 bg-white/5 rounded-r-xl">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1">
                            Commercial
                          </p>
                          <Link
                            href="/services/commercial-plaza-construction"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Commercial Plaza & Shop Sales
                          </Link>
                          <Link
                            href="/services/commercial-development"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Commercial Development
                          </Link>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1">
                            Residential & Turnkey
                          </p>
                          <Link
                            href="/services/residential-house-construction"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Residential House Construction
                          </Link>
                          <Link
                            href="/services/turnkey-solutions"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Turnkey Solutions
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Mobile Accordion Subcategories for Team */}
                    {isTeam && isOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-3 border-l-2 border-[#0052cc]/50 my-1 bg-white/5 rounded-r-xl">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1">
                            Executive Leadership
                          </p>
                          <Link
                            href="/team/faryad-hussain"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Faryad Hussain (CEO & Founder)
                          </Link>
                          <Link
                            href="/team/muhammad-fayaz"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Muhammad Fayaz (COO)
                          </Link>
                          <Link
                            href="/team/rameez-faryad"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Rameez Faryad (Deputy COO)
                          </Link>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1">
                            Operations & Engineering
                          </p>
                          <Link
                            href="/team/muhammad-arash"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Muhammad Arash (Site Engineer)
                          </Link>
                          <Link
                            href="/team/asad-ali"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Asad Ali (Accounts & Admin)
                          </Link>
                          <Link
                            href="/team/asghar-ali"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs text-white font-medium hover:text-[#0052cc]"
                          >
                            • Asghar Ali & Malik Shafique (Sales)
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-white text-[#1a2b4a] shadow-lg"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#1a2b4a]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Contact Info */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-950/40 text-center">
          <p className="text-xs text-slate-400 font-sans">
            {SITE_CONTACT.companyName} — Commercial Plazas & Residential Excellence
          </p>
        </div>
      </div>
    </>
  );
}
