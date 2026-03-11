import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Flashform Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function FlashformPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-zinc-500">
        Last updated: 2026-03-01
      </p>

      <div className="mt-8 space-y-10 text-zinc-400 leading-relaxed">
        <p>
          This Privacy Policy explains how FlashForm (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you use the Flash Form Chrome extension (&quot;Extension&quot;).
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. Summary</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>The Extension processes form content on the page you choose and the documents you upload to help fill forms.</li>
            <li>Data is processed only when you initiate actions (e.g., &quot;Fill form&quot;, &quot;Explain form fields&quot;).</li>
            <li>We do not sell personal data, and we do not use it for advertising.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Information We Collect</h2>
          <p>We collect and process the following categories of data only when you use the Extension&apos;s features:</p>

          <h3 className="font-medium text-zinc-300">A. User‑provided content</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Documents you upload (e.g., PDF, TXT, CSV, JSON).</li>
            <li>Structured data you create or edit in the document editor.</li>
            <li>Custom prompts you enter.</li>
          </ul>

          <h3 className="font-medium text-zinc-300">B. On‑page form data</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Form field labels, placeholders, and nearby text on the page you choose.</li>
            <li>Form field identifiers (e.g., name/id) to map values.</li>
          </ul>

          <h3 className="font-medium text-zinc-300">C. Settings and preferences</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>API provider selection and model settings.</li>
            <li>Your API key (stored locally in your browser).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Generate structured data from your documents.</li>
            <li>Fill or explain form fields on the active page.</li>
            <li>Save your documents and settings for future use.</li>
          </ul>
          <p>We do not use your data for advertising, analytics, or profiling.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">4. AI Processing and Third‑Party Services</h2>
          <p>When you enable AI features, relevant content may be sent to your selected AI provider (e.g., OpenAI or another OpenAI‑compatible endpoint) to generate outputs. This may include:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Extracted text from your documents,</li>
            <li>Form field metadata (labels, placeholders, options),</li>
            <li>Page context (title/headings) for better understanding.</li>
          </ul>
          <p>We do not control how third‑party AI providers process data. Their policies apply.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">5. Data Storage</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your documents, settings, and structured data are stored locally in your browser using Chrome&apos;s local storage.</li>
            <li>We do not store this data on our servers unless you configure a third‑party AI service that processes your data externally.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">6. Data Sharing</h2>
          <p>We share data only:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>With the AI provider you configure, to fulfill your request.</li>
            <li>When required by law.</li>
          </ul>
          <p>We do not sell or rent personal data.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">7. Data Retention</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Local data remains on your device until you delete it (e.g., remove documents or uninstall the Extension).</li>
            <li>AI provider data retention depends on that provider&apos;s policies.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">8. Security</h2>
          <p>We use reasonable measures to protect data within the Extension. However, no method of transmission or storage is 100% secure.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">9. Your Choices</h2>
          <p>You can:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Delete saved documents at any time.</li>
            <li>Remove the Extension to delete all local data.</li>
            <li>Disable AI features by removing your API key.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">10. Children&apos;s Privacy</h2>
          <p>The Extension is not directed to children under 13 and does not knowingly collect data from children.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">11. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The &quot;Effective date&quot; will be updated accordingly.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">12. Contact Us</h2>
          <p>If you have questions or requests, contact:</p>
          <p>
            Email:{" "}
            <a href="mailto:support@flashform.com" className="text-blue-400 underline hover:text-blue-300">
              support@flashform.com
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
