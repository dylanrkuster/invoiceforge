import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — InvoiceForge",
  description:
    "InvoiceForge is free for unlimited invoices. Upgrade for custom logos, saved templates, and client management.",
  openGraph: {
    title: "Pricing — InvoiceForge",
    description: "Free for unlimited invoices. One-time upgrades available.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=InvoiceForge%20Pricing&description=Free%20Forever%20•%20One-Time%20Upgrades&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to create and download invoices.",
    features: [
      "Unlimited invoices",
      "Print / save as PDF",
      "10+ currencies",
      "Auto-calculations",
      "Local draft saving",
      "Copy as HTML",
      "No watermarks",
    ],
    cta: "Start Free",
    href: "/",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "one-time",
    description: "For freelancers who want a polished brand experience.",
    features: [
      "Everything in Free",
      "Custom logo on invoices",
      "Save invoice templates",
      "All currencies",
      "Custom color themes",
      "Priority support",
      "Early access to features",
    ],
    cta: "Get Pro",
    href: "#",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "one-time",
    description: "For businesses managing multiple clients and invoices.",
    features: [
      "Everything in Pro",
      "Client management",
      "Recurring invoices",
      "Payment tracking",
      "Invoice history",
      "Export to CSV",
      "Team access (coming soon)",
    ],
    cta: "Get Business",
    href: "#",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div>
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Simple, Fair Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
            InvoiceForge is free for unlimited invoices. Pay once for premium
            features — no subscriptions, no recurring charges.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-6 ${
                  plan.highlighted
                    ? "border-[var(--accent)] bg-[var(--bg-secondary)] shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                    : "border-[var(--border)] bg-[var(--bg-secondary)]"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 text-center">
                    <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-black">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold">{plan.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {plan.description}
                </p>

                <Link
                  href={plan.href}
                  className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition ${
                    plan.highlighted
                      ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)]"
                      : "border border-[var(--border)] text-[var(--text)] hover:border-[var(--text-secondary)]"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-center">
            <h3 className="mb-2 text-xl font-bold">💡 One-Time Payment</h3>
            <p className="text-[var(--text-secondary)]">
              Unlike most invoice tools that charge $10-30/month, InvoiceForge
              Pro and Business are <strong className="text-[var(--text)]">one-time purchases</strong>.
              Pay once, use forever. No subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is InvoiceForge really free?",
                a: "Yes! The free tier gives you unlimited invoices with PDF download, multi-currency support, and auto-calculations. No watermarks, no trial period.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards and PayPal through our payment processor. One-time payment, no recurring charges.",
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. InvoiceForge runs entirely in your browser. Your invoice data is never sent to our servers. It's saved locally on your device.",
              },
              {
                q: "Can I get a refund?",
                a: "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.",
              },
              {
                q: "Do I need an account?",
                a: "No! The free version works without any signup. Paid features require an account to manage your license.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-5"
              >
                <h3 className="mb-2 font-bold">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
