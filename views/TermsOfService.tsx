import { FaWaveSquare } from "react-icons/fa";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <a href="/" className="flex items-center gap-3 w-fit">
          <FaWaveSquare
            className="text-primary"
            style={{ fontSize: "1.5rem" }}
          />
          <span className="font-display font-bold text-xl tracking-wider text-foreground">
            BINBOT
          </span>
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-bold text-foreground mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: March 2026
        </p>

        <div className="prose prose-sm max-w-none text-foreground space-y-8">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Binbot website (binbot.in) operated by
              BINBOT LTD ("Company", "we", "us", or "our"), you agree to be
              bound by these Terms of Service ("Terms"). If you do not agree to
              these Terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              2. Nature of the Website
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is a marketing and informational brochure for BINBOT
              LTD. The platform described herein is not yet publicly available.
              All information presented is for informational purposes only and
              does not constitute an offer to sell, a solicitation of an offer
              to buy, or a recommendation of any security, investment product,
              or financial instrument.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              3. No Financial Advice
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nothing on this website constitutes financial, investment, legal,
              or tax advice. You should consult with a qualified professional
              before making any investment decisions. Cryptocurrency and digital
              asset markets involve significant risk. Past performance figures
              shown on this website are illustrative and not indicative of
              future results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              4. Access Registration
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Submitting the access form does not guarantee access to the
              Binbot platform, create any contractual obligation, or constitute
              any form of investment or subscription agreement. BINBOT LTD
              reserves the right to grant or deny access at its sole
              discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website — including text, graphics, logos, and
              design — is the property of BINBOT LTD and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our express written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided "as is" without any warranties of any
              kind, express or implied. We do not warrant that the website will
              be uninterrupted, error-free, or free of viruses or other harmful
              components. To the maximum extent permitted by law, BINBOT LTD
              disclaims all warranties, express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by applicable law, BINBOT LTD
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, or goodwill, arising from your use of or
              inability to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              8. External Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to third-party websites. These
              links are provided for your convenience only. BINBOT LTD has no
              control over the content of those sites and accepts no
              responsibility for them or for any loss or damage that may arise
              from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              9. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of England and Wales. Any dispute arising out of or in
              connection with these Terms shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              10. Changes to These Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting to the website. Your
              continued use of the website following any changes constitutes
              your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              11. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mt-3 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">BINBOT LTD</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:legal@binbot.in"
                className="text-primary underline hover:no-underline"
              >
                legal@binbot.in
              </a>
            </address>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        &copy; 2019–{new Date().getFullYear()} BINBOT LTD. All rights reserved.
      </footer>
    </div>
  );
}
