import type { Metadata } from "next";
import Link from "next/link";
import { InvoiceWizard } from "@/components/InvoiceWizard";

export const metadata: Metadata = {
  title: "Free Invoice Generator — Create Invoices Online",
  description:
    "Generate professional invoices for free. No signup, no watermarks. Create, preview, and download PDF invoices in minutes with InvoiceForge.",
  openGraph: {
    title: "Free Invoice Generator — Create Invoices Online",
    description:
      "Generate professional invoices for free. No signup, no watermarks.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=Free%20Invoice%20Generator&description=Create%20Professional%20Invoices%20Online&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function InvoiceGeneratorPage() {
  return (
    <div>
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Free Invoice Generator
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Create professional invoices in minutes — completely free, with no
            signup required. Fill in your details, add line items, and download
            as PDF.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              ✓ No Watermarks
            </span>
            <span className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              ✓ Unlimited Invoices
            </span>
            <span className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              ✓ 10+ Currencies
            </span>
            <span className="rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              ✓ Auto-Calculate Totals
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <InvoiceWizard />
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-2xl font-bold">
            Why Use InvoiceForge as Your Invoice Generator?
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)]">
            <p>
              Most invoice generators either require you to create an account, add
              watermarks to free invoices, or charge monthly fees. InvoiceForge is
              different:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-[var(--text)]">Truly free</strong> — No
                hidden fees, no trial period, no watermarks on your invoices.
              </li>
              <li>
                <strong className="text-[var(--text)]">No signup required</strong>{" "}
                — Start creating invoices immediately. No email, no password, no
                verification.
              </li>
              <li>
                <strong className="text-[var(--text)]">Privacy-first</strong> —
                Everything runs in your browser. Your invoice data is never sent
                to any server.
              </li>
              <li>
                <strong className="text-[var(--text)]">Professional output</strong>{" "}
                — Clean, well-formatted invoices that look great when sent to
                clients.
              </li>
              <li>
                <strong className="text-[var(--text)]">Multi-currency</strong> —
                Support for 10+ currencies including USD, EUR, GBP, CAD, AUD,
                JPY, and more.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <Link
              href="/blog/how-to-create-invoice"
              className="text-[var(--accent)] hover:underline"
            >
              Read our guide: How to Create a Professional Invoice →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
