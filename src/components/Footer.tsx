import Link from "next/link";

export function Footer() {
  return (
    <footer className="no-print border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold">
              Invoice<span className="text-[var(--accent)]">Forge</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Create professional invoices in minutes. Free, no signup required.
              All processing happens in your browser.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  Invoice Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/invoice-template"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  Invoice Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/freelance-invoice"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  Freelance Invoices
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-create-invoice"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  How to Create an Invoice
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/freelance-invoice-tips"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  Freelance Invoice Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Our Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://jsonbolt.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  JSONBolt — JSON Formatter
                </a>
              </li>
              <li>
                <a
                  href="https://snapog-teal.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  SnapOG — OG Image Generator
                </a>
              </li>
              <li>
                <a
                  href="https://policyforge-blond.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  PolicyForge — Policy Generator
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-8 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} InvoiceForge. All rights reserved. Your
            data never leaves your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
