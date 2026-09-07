import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE_CONTACT } from "@/lib/constants";
import { BookSiteVisitProvider } from "@/context/BookSiteVisitContext";
import { BookSiteVisitModal } from "@/components/ui/BookSiteVisitModal";
import { ScrollProgressBar } from "@/components/animation/ScrollProgressBar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhabuilder.com"),
  title: {
    default: "RHA Builders | Residential & Commercial Real Estate Development",
    template: "%s | RHA Builders",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  description:
    "Explore RHA Builder's residential and commercial developments, construction capabilities, project updates and opportunities. Speak with our team.",
  keywords: [
    "real estate development",
    "residential construction",
    "commercial development",
    "property developer",
    "construction company",
    "RHA Builder",
  ],
  authors: [{ name: "RHA Builder" }],
  creator: "RHA Builder",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rhabuilder.com",
    siteName: "RHA Builder",
    title: "RHA Builder | Residential & Commercial Real Estate Development",
    description:
      "Explore RHA Builder's residential and commercial developments, construction capabilities, project updates and opportunities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RHA Builder | Residential & Commercial Real Estate Development",
    description:
      "Explore RHA Builder's residential and commercial developments, construction capabilities and opportunities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${inter.variable} overflow-x-hidden max-w-full`}>
      <head>
        {/* Preconnect for Google Fonts (Figtree) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RHA Builder",
              url: "https://rhabuilder.com",
              logo: "https://rhabuilder.com/images/rha-logo.png",
              telephone: SITE_CONTACT.phoneRaw,
              email: SITE_CONTACT.email,
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
                streetAddress: SITE_CONTACT.address,
              },
              description:
                "RHA Builder is a real estate development and construction company focused on creating well-planned residential and commercial environments.",
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans overflow-x-hidden w-full max-w-full relative">
        <ScrollProgressBar />
        <BookSiteVisitProvider>
          {/* Skip to main content — accessibility requirement */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>

          <Footer />
          <WhatsAppButton />
          <BookSiteVisitModal />
        </BookSiteVisitProvider>
      </body>
    </html>
  );
}
