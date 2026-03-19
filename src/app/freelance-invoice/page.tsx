import type { Metadata } from "next";
import Link from "next/link";
import { InvoiceWizard } from "@/components/InvoiceWizard";

export const metadata: Metadata = {
  title: "Freelance Invoice Generator — Invoice Tool for Freelancers",
  description:
    "Create professional freelance invoices in minutes. Free invoice generator designed for freelancers, contractors, and independent professionals.",
  openGraph: {
    title: "Freelance Invoice Generator — Invoice Tool for Freelancers",
    description:
      "Create professional freelance invoices in minutes. Free, no signup.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=Freelance%20Invoice%20Generator&description=Built%20for%20Freelancers%20and%20Contractors&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function FreelanceInvoicePage() {
  return (
    <div>
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[var(--accent-light)] px-4 py-1 text-sm font-medium text-[var(--accent)]">
            Built for Freelancers
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Freelance Invoice Generator
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--text-secondary)]">
            Stop chasing payments with unprofessional invoices. Create polished,
            detailed invoices that get you paid faster — for free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--text-secondary)]">
            <span>✓ Hourly & project billing</span>
            <span>✓ Multi-currency</span>
            <span>✓ Tax calculations</span>
            <span>✓ Payment terms</span>
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
          <h2 className="mb-8 text-2xl font-bold text-center">
            Why Freelancers Love InvoiceForge
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Bill by Hour or Project",
                desc: "Add line items for hourly work (e.g., '10 hours × $150/hr') or fixed project fees. Mix both in one invoice.",
              },
              {
                title: "Look Professional",
                desc: "Clean, well-designed invoices show clients you mean business. Include your logo and full contact details.",
              },
              {
                title: "International Clients",
                desc: "Bill in USD, EUR, GBP, or 7 other currencies. Perfect for freelancers with global clients.",
              },
              {
                title: "Get Paid Faster",
                desc: "Clear payment terms, due dates, and itemized breakdowns reduce confusion and speed up payments.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-tertiary)] p-6"
              >
                <h3 className="mb-2 font-bold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog/freelance-invoice-tips"
              className="text-[var(--accent)] hover:underline"
            >
              Read: Invoice Tips for Freelancers →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
