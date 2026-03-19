import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Create a Professional Invoice: Complete Guide",
  description:
    "Learn everything about creating professional invoices — essential elements, formatting tips, common mistakes, and how to get paid faster.",
  openGraph: {
    title: "How to Create a Professional Invoice: Complete Guide",
    description:
      "Everything you need to know about creating professional invoices.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=How%20to%20Create%20a%20Professional%20Invoice&description=Complete%20Guide%20for%202025&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HowToCreateInvoicePage() {
  return (
    <div>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]"
          >
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-10">
          <span className="mb-3 inline-block rounded bg-[var(--accent-light)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
            Guide
          </span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            How to Create a Professional Invoice: Complete Guide
          </h1>
          <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
            <span>January 15, 2025</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[var(--text)] [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--text)] [&_strong]:text-[var(--text)]">
          <p className="text-lg">
            A well-crafted invoice is more than just a payment request — it&apos;s a
            reflection of your professionalism. Whether you&apos;re a freelancer
            sending your first invoice or a business looking to improve your
            billing process, this guide covers everything you need.
          </p>

          <h2>Essential Elements of Every Invoice</h2>
          <p>
            Every professional invoice should include these elements:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Your business information</strong> — Company name (or your
              name), address, email, phone number, and logo. This establishes
              credibility and makes it easy for clients to contact you.
            </li>
            <li>
              <strong>Client information</strong> — The name and address of the
              person or company you&apos;re billing. This prevents confusion when
              clients receive multiple invoices.
            </li>
            <li>
              <strong>Invoice number</strong> — A unique identifier for each
              invoice. Use a sequential numbering system (e.g., INV-001,
              INV-002) to keep things organized.
            </li>
            <li>
              <strong>Date and due date</strong> — When the invoice was issued
              and when payment is expected. Common terms are Net 15, Net 30, or
              Due on Receipt.
            </li>
            <li>
              <strong>Itemized line items</strong> — A detailed breakdown of
              what you&apos;re charging for, including description, quantity, unit
              price, and line total.
            </li>
            <li>
              <strong>Subtotal, tax, and total</strong> — Clear calculation of
              the amount due, including any applicable taxes.
            </li>
            <li>
              <strong>Payment terms and instructions</strong> — How the client
              can pay you (bank transfer, PayPal, check, etc.) and any late
              payment policies.
            </li>
          </ol>

          <h2>Formatting Tips for Professional Invoices</h2>
          <h3>Keep It Clean and Readable</h3>
          <p>
            Use plenty of white space, clear headings, and a consistent font.
            Avoid cluttered layouts or decorative elements that distract from the
            information. A clean invoice is easier to process and looks more
            professional.
          </p>

          <h3>Use a Consistent Layout</h3>
          <p>
            Place your business info in the top-left, the invoice badge in the
            top-right, client info below, and the line items table in the center.
            This is the standard layout that accountants and clients expect.
          </p>

          <h3>Include Your Branding</h3>
          <p>
            Add your logo and use consistent colors. This reinforces your brand
            identity and makes your invoices instantly recognizable.
          </p>

          <h2>Common Invoice Mistakes to Avoid</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Missing or vague descriptions</strong> — &quot;Consulting
              services&quot; is too vague. Instead, write &quot;Website redesign
              consultation — 5 hours at $150/hr.&quot;
            </li>
            <li>
              <strong>No due date</strong> — Without a clear due date, clients
              have no urgency to pay. Always specify when payment is expected.
            </li>
            <li>
              <strong>Wrong math</strong> — Calculation errors look
              unprofessional and cause payment delays. Use a tool with
              auto-calculations.
            </li>
            <li>
              <strong>Missing contact info</strong> — If a client has a question
              about the invoice, they need to reach you easily.
            </li>
            <li>
              <strong>No invoice number</strong> — This makes it hard to track
              payments and reference specific invoices in communication.
            </li>
          </ul>

          <h2>How to Get Paid Faster</h2>
          <p>
            Beyond creating a professional invoice, here are strategies to reduce
            payment delays:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Send invoices immediately</strong> — Don&apos;t wait. Send
              the invoice the day the work is complete or the milestone is
              reached.
            </li>
            <li>
              <strong>Offer multiple payment methods</strong> — The easier you
              make it to pay, the faster you&apos;ll get paid.
            </li>
            <li>
              <strong>Set clear expectations upfront</strong> — Discuss payment
              terms before starting work, not after.
            </li>
            <li>
              <strong>Follow up politely</strong> — Send a friendly reminder a
              few days before the due date, and again if payment is late.
            </li>
            <li>
              <strong>Consider shorter payment terms</strong> — Net 15 gets you
              paid faster than Net 30. For new clients, consider Due on Receipt.
            </li>
          </ul>

          <h2>Create Your Invoice Now</h2>
          <p>
            Ready to put these tips into practice?{" "}
            <Link href="/" className="text-[var(--accent)] hover:underline">
              InvoiceForge&apos;s free invoice generator
            </Link>{" "}
            includes all the essential elements, auto-calculates your totals, and
            produces clean, professional PDF invoices. No signup required.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 text-center">
          <h3 className="mb-2 text-lg font-bold text-[var(--text)]">
            Create Your First Invoice
          </h3>
          <p className="mb-4 text-sm text-[var(--text-secondary)]">
            Free, no signup, professional results.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-[var(--accent)] px-6 py-2.5 font-medium text-black transition hover:bg-[var(--accent-hover)]"
          >
            Open Invoice Generator →
          </Link>
        </div>
      </article>
    </div>
  );
}
