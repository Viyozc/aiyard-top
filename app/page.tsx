import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-white/10 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Build with{" "}
            <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 sm:text-xl">
            Independent developer offering software services and app development. We focus on building simple, reliable products and custom solutions.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Contact Us
            </Link>
            <Link
              href="/#products"
              className="btn-ghost inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
            Aiyard is run by an independent developer focused on solving real needs through software and apps. We build mobile apps (iOS / Android), web applications, and tools with an emphasis on user experience and long-term maintenance. For partnerships or custom development, please reach out via the contact details below.
          </p>
        </div>
      </section>

      {/* Products - Explore cards style */}
      <section
        id="products"
        className="relative border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Products & <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-2 text-zinc-400">
            We develop and maintain the following products. Find more on app stores or on this website.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg font-bold text-white">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-white">
                Flash Form
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Chrome extension to fill out forms faster with AI-powered suggestions.
              </p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg font-bold text-white">
                🤖
              </div>
              <h3 className="text-lg font-semibold text-white">
                AI Fans
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Find the best fans for your favorite artists.
              </p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg font-bold text-white">
                📱
              </div>
              <h3 className="text-lg font-semibold text-white">
                More Apps
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Additional products in development. Stay tuned.
              </p>
              <span className="mt-3 inline-block text-xs font-medium uppercase tracking-wider text-zinc-500">
                1 Active
              </span>
            </li>
            <li className="card-glow-green rounded-xl border bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/[0.07]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-lg font-bold text-emerald-400">
                ◉
              </div>
              <h3 className="text-lg font-semibold text-white">
                In Queue
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                New projects and updates coming soon.
              </p>
              <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Coming Soon
              </span>
            </li>
          </ul>
          <p className="mt-8 text-sm text-zinc-500">
            For custom development needs, please{" "}
            <Link href="/contact" className="text-white underline underline-offset-2 hover:no-underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Contact CTA - Deploy / CTA block */}
      <section className="relative border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-14 text-center backdrop-blur-sm sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Deploy Your <span className="gradient-text">Project</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-zinc-400">
              For custom software, technical collaboration, or product inquiries, please reach out via email or our contact page.
            </p>
            <Link
              href="/contact"
              className="btn-gradient mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
