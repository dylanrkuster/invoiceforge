import { InvoiceWizard } from "@/components/InvoiceWizard";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              100% Free
            </span>
            <span className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              No Signup
            </span>
            <span className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              Client-Side
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Create Professional Invoices
            <br />
            <span className="text-[var(--accent)]">in Minutes</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--text-secondary)]">
            The fastest way to create, preview, and download invoices. No
            account needed. Your data never leaves your browser.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Unlimited invoices
            </span>
            <span className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              PDF download
            </span>
            <span className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              10+ currencies
            </span>
          </div>
        </div>
      </section>

      {/* Invoice Wizard */}
      <section className="bg-[var(--bg)] py-12" id="generator">
        <div className="mx-auto max-w-6xl px-4">
          <InvoiceWizard />
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Fill in Details",
                desc: "Enter your business info, client details, and line items in our step-by-step wizard.",
                icon: "📝",
              },
              {
                step: "2",
                title: "Preview Invoice",
                desc: "See a professional, print-ready invoice preview instantly. Make changes anytime.",
                icon: "👁️",
              },
              {
                step: "3",
                title: "Download PDF",
                desc: "Save as PDF using your browser's print function. Clean, professional output every time.",
                icon: "📄",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-tertiary)] p-6 text-center"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                  Step {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[var(--border)] bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Everything You Need
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Multi-Currency", desc: "Support for USD, EUR, GBP, CAD, AUD, JPY, INR, and more.", icon: "💱" },
              { title: "Auto-Calculations", desc: "Subtotals, tax, and totals calculated automatically as you type.", icon: "🧮" },
              { title: "Print-Ready PDF", desc: "Professional white-background invoice optimized for printing.", icon: "🖨️" },
              { title: "Auto-Save Draft", desc: "Your invoice is saved locally. Come back anytime to finish.", icon: "💾" },
              { title: "Custom Logo", desc: "Add your business logo via URL for a branded invoice.", icon: "🎨" },
              { title: "Privacy First", desc: "Everything runs in your browser. No data sent to any server.", icon: "🔒" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5"
              >
                <div className="mb-3 text-2xl">{feature.icon}</div>
                <h3 className="mb-1 font-bold">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Create Your Invoice?
          </h2>
          <p className="mb-8 text-[var(--text-secondary)]">
            Stop wasting time with Google Docs or expensive software. InvoiceForge is free, fast, and professional.
          </p>
          <a
            href="#generator"
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 text-lg font-medium text-black transition hover:bg-[var(--accent-hover)]"
          >
            Create Invoice Now — It&apos;s Free
          </a>
        </div>
      </section>
    </div>
  );
}
