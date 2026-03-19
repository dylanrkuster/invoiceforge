"use client";

import { InvoiceData } from "@/types/invoice";

interface Props {
  data: InvoiceData;
  updateData: (updates: Partial<InvoiceData>) => void;
}

export function StepClientInfo({ data, updateData }: Props) {
  const update = (field: keyof InvoiceData["client"], value: string) => {
    updateData({
      client: { ...data.client, [field]: value },
    });
  };

  return (
    <div>
      <h2 className="mb-1 text-xl font-bold">Client Information</h2>
      <p className="mb-6 text-sm text-[var(--text-secondary)]">
        Who are you billing? This appears as the &quot;Bill To&quot; section.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Client Name <span className="text-[var(--accent)]">*</span>
          </label>
          <input
            type="text"
            value={data.client.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Client company or individual name"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Client Address
          </label>
          <textarea
            value={data.client.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="456 Client Ave&#10;San Francisco, CA 94102"
            rows={2}
            className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Client Email
          </label>
          <input
            type="email"
            value={data.client.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="client@example.com"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>
      </div>
    </div>
  );
}
