"use client";

import { InvoiceData } from "@/types/invoice";

interface Props {
  data: InvoiceData;
  updateData: (updates: Partial<InvoiceData>) => void;
}

export function StepBusinessInfo({ data, updateData }: Props) {
  const update = (field: keyof InvoiceData["business"], value: string) => {
    updateData({
      business: { ...data.business, [field]: value },
    });
  };

  return (
    <div>
      <h2 className="mb-1 text-xl font-bold">Your Business Information</h2>
      <p className="mb-6 text-sm text-[var(--text-secondary)]">
        This information will appear on the top of your invoice.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Business / Your Name <span className="text-[var(--accent)]">*</span>
          </label>
          <input
            type="text"
            value={data.business.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Acme Corp or John Doe"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Address
          </label>
          <textarea
            value={data.business.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="123 Main St, Suite 100&#10;New York, NY 10001"
            rows={2}
            className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Email
          </label>
          <input
            type="email"
            value={data.business.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="billing@example.com"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Phone
          </label>
          <input
            type="tel"
            value={data.business.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Logo URL <span className="text-[var(--text-secondary)] text-xs">(optional)</span>
          </label>
          <input
            type="url"
            value={data.business.logoUrl}
            onChange={(e) => update("logoUrl", e.target.value)}
            placeholder="https://example.com/logo.png"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            Paste a direct link to your logo image. It will appear on the invoice.
          </p>
        </div>
      </div>
    </div>
  );
}
