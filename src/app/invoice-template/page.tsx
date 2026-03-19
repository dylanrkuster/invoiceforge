import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Invoice Templates — Professional Invoice Designs",
  description:
    "Use our free invoice template to create professional invoices. Clean design, auto-calculations, multi-currency support. No signup needed.",
  openGraph: {
    title: "Free Invoice Templates — Professional Invoice Designs",
    description:
      "Use our free invoice template to create professional invoices. Clean design, auto-calculations.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=Invoice%20Templates&description=Professional%20Free%20Invoice%20Designs&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function InvoiceTemplatePage() {
  return (
    <div>
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Free Invoice Templates
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--text-secondary)]">
            Professional invoice designs ready to use. Just fill in your details
            and download as PDF. No design skills needed.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 text-lg font-medium text-black transition hover:bg-[var(--accent-hover)]"
          >
            Use Template — Free
          </Link>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Template Features
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Clean & Professional",
                desc: "White background with green accents. Designed to look great in emails and print.",
                icon: "✨",
              },
              {
                title: "Fully Customizable",
                desc: "Add your business name, logo, address, and contact details. Every invoice is uniquely yours.",
                icon: "🎨",
              },
              {
                title: "Print-Optimized",
                desc: "Special print CSS ensures your invoice looks perfect when saved as PDF or printed.",
                icon: "🖨️",
              },
              {
                title: "Line Item Table",
                desc: "Professional table with description, quantity, price, and amount columns. Auto-calculates totals.",
                icon: "📊",
              },
              {
                title: "Tax Support",
                desc: "Set your tax rate and the template automatically calculates and displays tax amounts.",
                icon: "💰",
              },
              {
                title: "Payment Terms",
                desc: "Include payment terms and notes to ensure clear communication with your clients.",
                icon: "📋",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6"
              >
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-2xl font-bold">
            What&apos;s Included in Our Invoice Template
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)]">
            <p>
              Our invoice template includes everything you need to create
              professional invoices:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-4">
                <h3 className="mb-2 font-bold text-[var(--text)]">Header Section</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Your business name & logo</li>
                  <li>• Full address & contact info</li>
                  <li>• Professional &quot;INVOICE&quot; badge</li>
                  <li>• Invoice number & dates</li>
                </ul>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-4">
                <h3 className="mb-2 font-bold text-[var(--text)]">Billing Details</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Client name & address</li>
                  <li>• Itemized line items table</li>
                  <li>• Subtotal, tax & total</li>
                  <li>• Payment terms & notes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-medium text-black transition hover:bg-[var(--accent-hover)]"
            >
              Start Using This Template →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
