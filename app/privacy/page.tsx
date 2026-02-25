import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Aiyard Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-zinc-500">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>

      <div className="mt-8 space-y-8 text-zinc-400">
        <section>
          <h2 className="text-lg font-semibold text-white">
            1. Introduction
          </h2>
          <p>
            Aiyard (“we”) respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and applications. Please read this policy carefully before using our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            2. Information We Collect
          </h2>
          <p>Types of information we may collect include, but are not limited to:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Information you provide (e.g., name, email in contact forms)</li>
            <li>Device information (e.g., device type, OS version, for compatibility and troubleshooting)</li>
            <li>Usage data (e.g., in-app actions, visit times, to improve product experience)</li>
            <li>Log and diagnostic data (e.g., crash reports, for stability improvements)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            3. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and feedback</li>
            <li>Send service-related notices (e.g., policy updates)</li>
            <li>Ensure security and prevent fraud and abuse</li>
            <li>Comply with legal obligations and lawful requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            4. Sharing and Disclosure
          </h2>
          <p>
            We do not sell your personal information to third parties. We may share information when: you have consented; required by law or to respond to lawful requests; necessary with service providers (e.g., cloud, analytics) who are bound by confidentiality and data protection obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            5. Data Security and Retention
          </h2>
          <p>
            We take reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, or alteration. We retain data only as long as needed for the purposes described in this policy or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            6. Your Rights
          </h2>
          <p>
            Under applicable law, you may have the right to access, correct, delete, or restrict processing of your personal information. To exercise these rights or if you have questions about this policy, please contact us via our
            <a href="/contact" className="text-white underline underline-offset-2 hover:no-underline"> Contact</a>
            {" "}page or the email address we publish.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            7. Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new “Last updated” date. Your continued use of our services constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us via our
            <a href="/contact" className="text-white underline underline-offset-2 hover:no-underline"> Contact</a>
            {" "}page or the email address we publish.
          </p>
        </section>
      </div>
    </article>
  );
}
