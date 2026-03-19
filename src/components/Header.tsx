"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="2"
              width="22"
              height="24"
              rx="3"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="8"
              y1="9"
              x2="20"
              y2="9"
              stroke="#22c55e"
              strokeWidth="1.5"
            />
            <line
              x1="8"
              y1="13"
              x2="20"
              y2="13"
              stroke="#22c55e"
              strokeWidth="1.5"
            />
            <line
              x1="8"
              y1="17"
              x2="16"
              y2="17"
              stroke="#22c55e"
              strokeWidth="1.5"
            />
            <text
              x="16"
              y="23"
              fontSize="8"
              fontWeight="bold"
              fill="#22c55e"
            >
              $
            </text>
          </svg>
          <span>
            Invoice<span className="text-[var(--accent)]">Forge</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
          >
            Generator
          </Link>
          <Link
            href="/invoice-template"
            className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
          >
            Templates
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition hover:bg-[var(--accent-hover)]"
          >
            Create Invoice
          </Link>
        </div>

        <button
          className="text-[var(--text-secondary)] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm text-[var(--text-secondary)]"
              onClick={() => setMenuOpen(false)}
            >
              Generator
            </Link>
            <Link
              href="/invoice-template"
              className="text-sm text-[var(--text-secondary)]"
              onClick={() => setMenuOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-[var(--text-secondary)]"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm text-[var(--text-secondary)]"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/"
              className="mt-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-center text-sm font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              Create Invoice
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
