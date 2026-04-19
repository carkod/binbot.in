import { FaWaveSquare } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <a href="/" className="flex items-center gap-3 w-fit">
          <FaWaveSquare className="text-primary" style={{ fontSize: "1.5rem" }} />
          <span className="font-display font-bold text-xl tracking-wider text-foreground">BINBOT</span>
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

        <div className="prose prose-sm max-w-none text-foreground space-y-8">

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              BINBOT LTD ("Binbot", "we", "us", or "our") is the data controller responsible for your personal data collected through this website (binbot.fund). We are committed to protecting your privacy and handling your data in a transparent, lawful manner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">2. Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Contact information</strong>: Full name, email address, organisation name (if provided).</li>
              <li><strong className="text-foreground">Enquiry data</strong>: The content of messages you send us via our contact form.</li>
              <li><strong className="text-foreground">Usage data</strong>: IP address, browser type, device type, pages visited, and time spent on pages — collected via Google Analytics.</li>
              <li><strong className="text-foreground">Communication preferences</strong>: Whether you have opted in to receive Binbot launch updates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To respond to your early access requests and enquiries.</li>
              <li>To send you launch notifications and product updates, if you have subscribed.</li>
              <li>To improve our website and understand user behaviour (via Google Analytics).</li>
              <li>To comply with our legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">4. Google Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google Analytics to analyse website traffic and usage patterns. Google Analytics collects anonymised data about how visitors interact with our site using cookies and similar technologies. This data is transmitted to and stored by Google on servers in the United States.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Google may transfer this information to third parties where required by law or where third parties process the information on Google's behalf. You can opt out of Google Analytics tracking by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the following types of cookies on our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li><strong className="text-foreground">Strictly necessary cookies</strong>: Required for basic site functionality.</li>
              <li><strong className="text-foreground">Analytics cookies</strong>: Used by Google Analytics to collect anonymous usage statistics.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              You may disable cookies through your browser settings, but this may affect your experience of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">6. Legal Basis for Processing</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Consent</strong>: For sending launch updates (you may withdraw consent at any time).</li>
              <li><strong className="text-foreground">Legitimate interests</strong>: For responding to enquiries and improving our services.</li>
              <li><strong className="text-foreground">Legal obligation</strong>: Where processing is required to comply with applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your contact and enquiry data for up to 24 months after your last interaction with us, or until you request deletion. Analytics data collected via Google Analytics is retained for 26 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data ("right to be forgotten").</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Withdraw consent at any time (where processing is consent-based).</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, contact us at: <a href="mailto:privacy@binbot.fund" className="text-primary underline hover:no-underline">privacy@binbot.fund</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">9. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share data with the following trusted third parties solely to operate our website and services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li><strong className="text-foreground">Google LLC</strong> — Analytics and infrastructure services.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do not sell, rent, or trade your personal data to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. The date at the top of this page will always reflect the most recent revision. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <address className="not-italic mt-3 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">BINBOT LTD</strong><br />
              Email: <a href="mailto:privacy@binbot.fund" className="text-primary underline hover:no-underline">privacy@binbot.fund</a>
            </address>
          </section>

        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        &copy; 2022–{new Date().getFullYear()} BINBOT LTD. All rights reserved.
      </footer>
    </div>
  );
}
