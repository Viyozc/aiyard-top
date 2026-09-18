type ProductLink = {
  name: string;
  url: string;
  blurb: string;
};

/** Product family — outbound links rendered by <ProductFamily />. */
const PRODUCT_GROUPS: { label: string; items: ProductLink[] }[] = [
  {
    label: "AI Tools & Web Apps",
    items: [
      {
        name: "LLM Price",
        url: "https://llmpricing.net",
        blurb: "Real-time LLM API pricing comparison.",
      },
      {
        name: "ImageLabs",
        url: "https://imagelabs.fun",
        blurb: "AI image generation and editing studio.",
      },
      {
        name: "Ai Graffiti",
        url: "https://aigraffiti.xyz",
        blurb: "Turn photos into graffiti-style art.",
      },
      {
        name: "PlateFit",
        url: "https://platefit.app",
        blurb: "AI meal planning built around your goals.",
      },
      {
        name: "Craftok",
        url: "https://craftok.fun",
        blurb: "Bilingual map poster generator.",
      },
      {
        name: "StyleGPT",
        url: "https://stylegpt.app",
        blurb: "AI styling and outfit assistant.",
      },
      {
        name: "RevLook",
        url: "https://revlook.app",
        blurb: "Preview a new look before you commit.",
      },
      {
        name: "MonitorTester",
        url: "https://monitortester.com",
        blurb: "Screen test and display diagnostics.",
      },
      {
        name: "AI Face Detector",
        url: "https://aifacedetector.me",
        blurb: "Face shape analysis and matching.",
      },
      {
        name: "PPT Canvas",
        url: "https://www.pptcanvas.com",
        blurb: "Open-source AI presentation generator.",
      },
    ],
  },
  {
    label: "Readiness Audits",
    items: [
      {
        name: "AIYES Hub",
        url: "https://hub.aiyes.space",
        blurb: "One place to browse every audit.",
      },
      {
        name: "Stayly",
        url: "https://stayly.aiyes.space",
        blurb: "Airbnb listing quality audit.",
      },
      {
        name: "BookListing AI",
        url: "https://booklisting.aiyes.space",
        blurb: "KDP book listing and metadata check.",
      },
      {
        name: "Mockly",
        url: "https://mockly.aiyes.space",
        blurb: "Product mockup and listing-image audit.",
      },
      {
        name: "Newsletterly",
        url: "https://newsletterly.aiyes.space",
        blurb: "Newsletter growth-readiness audit.",
      },
      {
        name: "Launchly",
        url: "https://launchly.aiyes.space",
        blurb: "Course sales-page conversion audit.",
      },
      {
        name: "Profilo",
        url: "https://profilo.aiyes.space",
        blurb: "Freelancer profile audit.",
      },
      {
        name: "Listora",
        url: "https://listora.aiyes.space",
        blurb: "Etsy listing audit for makers.",
      },
      {
        name: "Auditools",
        url: "https://auditools.aiyes.space",
        blurb: "Command center for the audit suite.",
      },
      {
        name: "BotDesk",
        url: "https://botdesk.aiyes.space",
        blurb: "Support desk automation tools.",
      },
    ],
  },
  {
    label: "Guides & Resources",
    items: [
      {
        name: "How to Fish",
        url: "https://howtofish.club",
        blurb: "Guides, videos and tips for fishing games.",
      },
      {
        name: "How to Fish Wiki",
        url: "https://how-to-fish.wiki",
        blurb: "Wiki-style reference for the same game.",
      },
    ],
  },
];

/**
 * Footer module listing every product we build and maintain.
 * Rendered at the bottom of the legal / contact pages for outbound links.
 */
export default function ProductFamily() {
  return (
    <section
      aria-labelledby="product-family"
      className="mt-16 border-t border-white/10 pt-10"
    >
      <h2
        id="product-family"
        className="text-lg font-semibold text-white sm:text-xl"
      >
        Our <span className="gradient-text">Products</span>
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-500">
        Aiyard is built by a small independent team. These are the other
        products we design, ship, and maintain — thank you to everyone who
        supports them.
      </p>

      <div className="mt-8 space-y-8">
        {PRODUCT_GROUPS.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {group.label}
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener"
                    className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-all hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                      {item.name}
                      <span
                        aria-hidden="true"
                        className="text-zinc-600 transition-colors group-hover:text-zinc-400"
                      >
                        ↗
                      </span>
                    </span>
                    <span className="mt-1 text-xs text-zinc-500">
                      {item.blurb}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
