import type { Metadata } from "next";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Privacy Policy | RHA Builders",
  description: "Privacy Policy for RHA Builders website.",
  alternates: { canonical: "https://rhabuilder.com/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section-pad">
      <div className="container-narrow">
        <h1 className="font-display font-semibold text-3xl mb-4" style={{ color: "var(--color-text-primary)" }}>
          Privacy Policy
        </h1>
        <p className="text-xs mb-8" style={{ color: "var(--color-text-muted)" }}>
          Last updated: [DATE — to be confirmed]
        </p>

        {/* Legal notice banner */}
        <div
          className="p-4 mb-8 rounded-[var(--radius-card)] border text-xs flex items-start gap-2"
          style={{
            borderColor: "var(--color-warning)",
            backgroundColor: "rgba(217, 119, 6, 0.05)",
            color: "var(--color-text-secondary)",
          }}
          role="note"
          aria-label="Legal review notice"
        >
          <ExclamationTriangleIcon className="w-4 h-4 shrink-0 text-[var(--color-warning)] mt-0.5" aria-hidden="true" />
          <span>
            <strong>Legal Review Required.</strong> This is a placeholder privacy
            policy template only. It must be reviewed and approved by qualified
            legal counsel before publication.
          </span>
        </div>

        <div className="prose-rha space-y-8">
          <section>
            <h2>1. Introduction</h2>
            <p>
              RHA Builders (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting
              your personal data. This privacy policy explains how we collect,
              use, store and protect information you provide to us through our
              website and related communications.
            </p>
            <p>[Further content to be provided by legal counsel.]</p>
          </section>

          <section>
            <h2>2. Data We Collect</h2>
            <p>
              We may collect the following categories of personal data:
            </p>
            <ul>
              <li>Name and contact details (phone, email, address)</li>
              <li>Enquiry information submitted through our website forms</li>
              <li>Technical data (IP address, browser type, device) collected through analytics tools</li>
              <li>Communication records where you contact us directly</li>
            </ul>
            <p>[Data categories to be reviewed and confirmed by legal counsel.]</p>
          </section>

          <section>
            <h2>3. How We Use Your Data</h2>
            <p>[Purpose and legal basis for processing to be confirmed with legal counsel and data protection authority requirements.]</p>
          </section>

          <section>
            <h2>4. Data Retention</h2>
            <p>[Retention periods to be confirmed by legal counsel.]</p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>[Rights under applicable data protection law to be described by legal counsel.]</p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>[Cookie policy content to be confirmed, including analytics and consent requirements for relevant jurisdictions.]</p>
          </section>

          <section>
            <h2>7. Contact</h2>
            <p>
              For privacy-related enquiries, please contact us at:{" "}
              <a href="mailto:rhabuilder.pk@gmail.com" style={{ color: "var(--color-brand-secondary)" }}>
                rhabuilder.pk@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
