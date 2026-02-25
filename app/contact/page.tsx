import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Aiyard - Business inquiries, product support, and technical questions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
        Contact <span className="gradient-text">Us</span>
      </h1>
      <p className="mt-4 text-zinc-400">
        For business inquiries, product support, custom development, or technical questions, please reach out using the details below. We will respond as soon as possible.
      </p>

      <div className="mt-10 space-y-8">
        <section className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white">
            Email
          </h2>
          <p className="mt-2 text-zinc-400">
            Send your message to:{" "}
            <a
              href="mailto:support@aiyard.com"
              className="font-medium text-white underline underline-offset-2 hover:no-underline"
            >
              support@aiyard.com
            </a>
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            (Replace with your actual contact email for store listings.)
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white">
            Common Inquiries
          </h2>
          <ul className="mt-3 space-y-2 text-zinc-400">
            <li>• Custom app development and outsourcing</li>
            <li>• Feature requests and feedback for existing products</li>
            <li>• Privacy policy, terms of service, and data-related questions</li>
            <li>• Media and press inquiries</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
