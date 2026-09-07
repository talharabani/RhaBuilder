import type { Metadata } from "next";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Terms & Conditions | RHA Builder",
  description: "Terms and Conditions for RHA Builder website.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="section-pad">
      <div className="container-narrow">
        <h1 className="font-display font-semibold text-3xl mb-4" style={{ color: "var(--color-text-primary)" }}>
          Terms & Conditions
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
            <strong>Legal Review Required.</strong> This is a placeholder terms
            and conditions template only. It must be reviewed and approved by
            qualified legal counsel before publication. Do not publish this page
            as a legally binding document in its current form.
          </span>
        </div>

        <div className="prose-rha space-y-8">
          <section>
            <h2>1. Use of This Website</h2>
            <p>
              This website is operated by RHA Builder. By accessing or using
              this website, you agree to these terms and conditions. If you do
              not agree, please do not use this website.
            </p>
            <p>[Further content to be provided by legal counsel.]</p>
          </section>

          <section>
            <h2>2. Information on This Website</h2>
            <p>
              The information on this website is provided for general
              informational purposes only. Nothing on this website constitutes
              financial, legal, investment or professional advice. You should
              seek independent advice before making any decision based on
              information found on this website.
            </p>
            <p>
              Project details, specifications, availability, pricing and
              timelines are subject to change. RHA Builder does not guarantee
              the accuracy, completeness or currency of information on this
              website.
            </p>
          </section>

          <section>
            <h2>3. Investment Disclaimer</h2>
            <p>
              Any references to investment opportunities on this website are
              for informational purposes only. Past performance is not
              indicative of future results. RHA Builder makes no representations
              or warranties regarding investment returns, rental yields or any
              other financial outcomes. You should seek qualified independent
              financial and legal advice before making any investment decision.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>[IP ownership and usage terms to be confirmed by legal counsel.]</p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>[Limitation of liability clauses to be drafted by legal counsel.]</p>
          </section>

          <section>
            <h2>6. Links to Third-Party Websites</h2>
            <p>[Third-party link disclaimer to be confirmed by legal counsel.]</p>
          </section>

          <section>
            <h2>7. Governing Law</h2>
            <p>[Governing law and jurisdiction to be specified by legal counsel based on RHA Builder&apos;s operating territory.]</p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>
              For enquiries regarding these terms, please contact us at:{" "}
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
