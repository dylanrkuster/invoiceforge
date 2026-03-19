import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — InvoiceForge",
  description:
    "Tips, guides, and best practices for creating professional invoices, freelancing, and managing your business finances.",
  openGraph: {
    title: "Blog — InvoiceForge",
    description: "Invoice tips, guides, and best practices.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=InvoiceForge%20Blog&description=Tips%20and%20Guides%20for%20Better%20Invoicing&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const posts = [
  {
    slug: "how-to-create-invoice",
    title: "How to Create a Professional Invoice: Complete Guide",
    excerpt:
      "Learn everything you need to know about creating professional invoices — from essential elements to common mistakes to avoid.",
    date: "2025-01-15",
    readTime: "8 min read",
    tag: "Guide",
  },
  {
    slug: "freelance-invoice-tips",
    title: "Invoice Tips for Freelancers: Get Paid Faster",
    excerpt:
      "Practical tips for freelancers to create better invoices, set clear payment terms, and reduce late payments.",
    date: "2025-01-10",
    readTime: "6 min read",
    tag: "Freelancing",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Tips, guides, and best practices for professional invoicing.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 transition hover:border-[var(--accent)]/30"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded bg-[var(--accent-light)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    · {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mb-2 text-xl font-bold transition group-hover:text-[var(--accent)]">
                    {post.title}
                  </h2>
                </Link>
                <p className="mb-4 text-sm text-[var(--text-secondary)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
