import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invoice Tips for Freelancers: Get Paid Faster",
  description:
    "Practical invoice tips for freelancers — set payment terms, avoid common mistakes, and get paid on time. Includes free invoice template.",
  openGraph: {
    title: "Invoice Tips for Freelancers: Get Paid Faster",
    description:
      "Practical invoice tips for freelancers — get paid on time, every time.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=Freelance%20Invoice%20Tips&description=Get%20Paid%20Faster%20as%20a%20Freelancer&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function FreelanceInvoiceTipsPage() {
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
            Freelancing
          </span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Invoice Tips for Freelancers: Get Paid Faster
          </h1>
          <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
            <span>January 10, 2025</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[var(--text)] [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--text)] [&_strong]:text-[var(--text)]">
          <p className="text-lg">
            Late payments are the #1 financial frustration for freelancers. A
            2023 survey found that <strong>71% of freelancers</strong> have
            struggled with late payments at some point. But with the right
            invoicing practices, you can significantly reduce payment delays.
          </p>

          <h2>1. Set Payment Terms Before Starting Work</h2>
          <p>
            Don&apos;t wait until the invoice to discuss payment. Before starting
            any project, agree on:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Your rate (hourly or project-based)</li>
            <li>Payment schedule (upfront deposit, milestones, or on completion)</li>
            <li>Payment deadline (Net 15, Net 30, etc.)</li>
            <li>Accepted payment methods</li>
            <li>Late payment policy (if any)</li>
          </ul>
          <p>
            Put all this in a simple contract or statement of work. It sets
            expectations and protects both parties.
          </p>

          <h2>2. Invoice Immediately — Don&apos;t Delay</h2>
          <p>
            The moment a project is complete or a milestone is reached, send the
            invoice. Every day you wait is a day added to your payment timeline.
            If you finish work on Friday, don&apos;t wait until Monday — send it
            Friday.
          </p>
          <p>
            <strong>Pro tip:</strong> Use a tool like{" "}
            <Link href="/" className="text-[var(--accent)] hover:underline">
              InvoiceForge
            </Link>{" "}
            to create invoices in minutes so there&apos;s no friction in sending
            them quickly.
          </p>

          <h2>3. Be Detailed in Your Line Items</h2>
          <p>
            Vague line items lead to questions, and questions lead to delays.
            Instead of generic descriptions, be specific:
          </p>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
            <div className="mb-3">
              <span className="text-xs font-medium text-red-400">❌ Too vague:</span>
              <p className="text-sm">&quot;Design work — $2,000&quot;</p>
            </div>
            <div>
              <span className="text-xs font-medium text-[var(--accent)]">✓ Better:</span>
              <ul className="mt-1 space-y-1 text-sm">
                <li>&quot;Homepage redesign — wireframes & mockups — $800&quot;</li>
                <li>&quot;Mobile responsive implementation — $700&quot;</li>
                <li>&quot;2 rounds of revisions — $500&quot;</li>
              </ul>
            </div>
          </div>

          <h2>4. Use Shorter Payment Terms for New Clients</h2>
          <p>
            Net 30 is standard, but for new clients or larger projects, consider:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Due on Receipt</strong> — Best for small projects or new
              client relationships
            </li>
            <li>
              <strong>Net 15</strong> — Good balance of urgency and flexibility
            </li>
            <li>
              <strong>50% upfront, 50% on delivery</strong> — Ideal for larger
              projects; protects you from non-payment
            </li>
          </ul>

          <h2>5. Make It Easy to Pay You</h2>
          <p>
            The more friction in the payment process, the longer it takes. Offer
            multiple payment options:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Bank transfer / ACH</li>
            <li>PayPal or Venmo</li>
            <li>Credit card (via Stripe, Square, etc.)</li>
            <li>Wire transfer for international clients</li>
          </ul>
          <p>
            Include your payment details directly on the invoice — account
            numbers, PayPal email, or a payment link.
          </p>

          <h2>6. Follow Up Professionally</h2>
          <p>
            If payment is late, follow up promptly but professionally:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>3 days before due date:</strong> Send a friendly reminder
              (&quot;Just a heads up — Invoice #123 is due on Friday&quot;)
            </li>
            <li>
              <strong>Day of due date:</strong> Send a brief note if not yet
              received
            </li>
            <li>
              <strong>7 days overdue:</strong> Follow up firmly but politely
            </li>
            <li>
              <strong>30+ days overdue:</strong> Escalate — mention late fees or
              next steps
            </li>
          </ul>

          <h2>7. Keep Records of Everything</h2>
          <p>
            Maintain a simple spreadsheet or system tracking:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Invoice numbers and dates</li>
            <li>Client and project details</li>
            <li>Amount invoiced</li>
            <li>Payment status (pending, paid, overdue)</li>
            <li>Date payment received</li>
          </ul>
          <p>
            This is invaluable for taxes, tracking your income, and identifying
            slow-paying clients.
          </p>

          <h2>Start Creating Better Invoices</h2>
          <p>
            Good invoicing isn&apos;t just about getting paid — it&apos;s about
            running a professional business. With clear line items, proper
            payment terms, and prompt follow-ups, you&apos;ll reduce late
            payments and spend more time on the work you love.
          </p>
          <p>
            <Link href="/freelance-invoice" className="text-[var(--accent)] hover:underline">
              Try our freelance invoice generator
            </Link>{" "}
            — it&apos;s free, takes 5 minutes, and produces invoices your clients
            will take seriously.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 text-center">
          <h3 className="mb-2 text-lg font-bold text-[var(--text)]">
            Ready to Invoice Like a Pro?
          </h3>
          <p className="mb-4 text-sm text-[var(--text-secondary)]">
            Create your first professional invoice in under 5 minutes.
          </p>
          <Link
            href="/freelance-invoice"
            className="inline-block rounded-lg bg-[var(--accent)] px-6 py-2.5 font-medium text-black transition hover:bg-[var(--accent-hover)]"
          >
            Create Freelance Invoice →
          </Link>
        </div>
      </article>
    </div>
  );
}
