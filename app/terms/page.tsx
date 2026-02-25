import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Aiyard Terms of Service - Terms and conditions for using our website and applications.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-zinc-500">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>

      <div className="mt-8 space-y-8 text-zinc-400">
        <section>
          <h2 className="text-lg font-semibold text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the website, applications, and related services (“Services”) provided by Aiyard, you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            2. Description of Services
          </h2>
          <p>
            Aiyard provides software development, mobile applications, web applications, and related technical services. We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with reasonable notice when possible.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            3. Acceptable Use
          </h2>
          <p>You agree, when using the Services, to:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use the Services for any illegal, infringing, or harmful purpose</li>
            <li>Not attempt to reverse engineer, decompile, interfere with, or disrupt the security or operation of the Services</li>
            <li>Not use another party’s account, data, or intellectual property without authorization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            4. Intellectual Property
          </h2>
          <p>
            The website, applications, designs, content, trademarks, and other intellectual property are owned by Aiyard or the respective rights holders. You may not copy, modify, distribute, or use them for commercial purposes without our prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            5. Disclaimer
          </h2>
          <p>
            The Services are provided “as is.” To the extent permitted by law, we make no express or implied warranties regarding availability, accuracy, or completeness, and we are not liable for any direct or indirect damages arising from the use or inability to use the Services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            6. Changes to Terms
          </h2>
          <p>
            We may revise these Terms of Service at any time. Revised terms will be posted on this page with an updated date. Your continued use of the Services constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">
            7. Contact Us
          </h2>
          <p>
            For any questions about these Terms of Service, please contact us via our
            <a href="/contact" className="text-white underline underline-offset-2 hover:no-underline"> Contact</a>
            {" "}page or the email address we publish.
          </p>
        </section>
      </div>
    </article>
  );
}
