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

      <div className="mt-8 space-y-8 text-zinc-400">
        <section>
          This Privacy Policy explains how FlashForm (“we”, “us”, or “our”) collects, uses, and shares information when you use the [Flash Form] Chrome extension (“Extension”).
          1. Summary
          - The Extension processes form content on the page you choose and the documents you upload to help fill forms.
          - Data is processed only when you initiate actions (e.g., “Fill form”, “Explain form fields”).
          - We do not sell personal data, and we do not use it for advertising.
          2. Information We Collect
          We collect and process the following categories of data only when you use the Extension’s features:
          A. User‑provided content
          - Documents you upload (e.g., PDF, TXT, CSV, JSON).
          - Structured data you create or edit in the document editor.
          - Custom prompts you enter.
          B. On‑page form data
          - Form field labels, placeholders, and nearby text on the page you choose.
          - Form field identifiers (e.g., name/id) to map values.
          C. Settings and preferences
          - API provider selection and model settings.
          - Your API key (stored locally in your browser).
          3. How We Use Your Information
          We use your data to:
          - Generate structured data from your documents.
          - Fill or explain form fields on the active page.
          - Save your documents and settings for future use.
          We do not use your data for advertising, analytics, or profiling.
          4. AI Processing and Third‑Party Services
          When you enable AI features, relevant content may be sent to your selected AI provider (e.g., OpenAI or another OpenAI‑compatible endpoint) to generate outputs.
          This may include:
          - Extracted text from your documents,
          - Form field metadata (labels, placeholders, options),
          - Page context (title/headings) for better understanding.
          We do not control how third‑party AI providers process data. Their policies apply.
          5. Data Storage
          - Your documents, settings, and structured data are stored locally in your browser using Chrome’s local storage.
          - We do not store this data on our servers unless you configure a third‑party AI service that processes your data externally.
          6. Data Sharing
          We share data only:
          - With the AI provider you configure, to fulfill your request.
          - When required by law.
          We do not sell or rent personal data.
          7. Data Retention
          - Local data remains on your device until you delete it (e.g., remove documents or uninstall the Extension).
          - AI provider data retention depends on that provider’s policies.
          8. Security
          We use reasonable measures to protect data within the Extension. However, no method of transmission or storage is 100% secure.
          9. Your Choices
          You can:
          - Delete saved documents at any time.
          - Remove the Extension to delete all local data.
          - Disable AI features by removing your API key.
          10. Children’s Privacy
          The Extension is not directed to children under 13 and does not knowingly collect data from children.
          11. Changes to This Policy
          We may update this policy from time to time. The “Effective date” will be updated accordingly.
          12. Contact Us
          If you have questions or requests, contact:
          - Email: support@flashform.com

        </section>

      </div>
    </article>
  );
}
