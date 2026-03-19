"use client";

import { InvoiceData, CURRENCIES } from "@/types/invoice";

interface Props {
  data: InvoiceData;
  updateData: (updates: Partial<InvoiceData>) => void;
}

export function StepInvoiceDetails({ data, updateData }: Props) {
  const update = (field: keyof InvoiceData["details"], value: string | number) => {
    updateData({
      details: { ...data.details, [field]: value },
    });
  };

  return (
    <div>
      <h2 className="mb-1 text-xl font-bold">Invoice Details</h2>
      <p className="mb-6 text-sm text-[var(--text-secondary)]">
        Set the invoice number, dates, currency, and tax rate.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Invoice Number
          </label>
          <input
            type="text"
            value={data.details.invoiceNumber}
            onChange={(e) => update("invoiceNumber", e.target.value)}
            placeholder="INV-001"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Currency
          </label>
          <select
            value={data.details.currency}
            onChange={(e) => update("currency", e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          >
            {Object.entries(CURRENCIES).map(([code, { name, symbol }]) => (
              <option key={code} value={code}>
                {symbol} — {name} ({code})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Invoice Date
          </label>
          <input
            type="date"
            value={data.details.date}
            onChange={(e) => update("date", e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Due Date
          </label>
          <input
            type="date"
            value={data.details.dueDate}
            onChange={(e) => update("dueDate", e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Tax Rate (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={data.details.taxRate}
            onChange={(e) => update("taxRate", parseFloat(e.target.value) || 0)}
            placeholder="0"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Payment Terms
          </label>
          <select
            value={data.details.paymentTerms}
            onChange={(e) => update("paymentTerms", e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          >
            <option value="Due on Receipt">Due on Receipt</option>
            <option value="Net 15">Net 15</option>
            <option value="Net 30">Net 30</option>
            <option value="Net 45">Net 45</option>
            <option value="Net 60">Net 60</option>
            <option value="Net 90">Net 90</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-[var(--text-secondary)]">
            Notes <span className="text-[var(--text-secondary)] text-xs">(optional, appears on invoice)</span>
          </label>
          <textarea
            value={data.details.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Thank you for your business! Payment can be made via bank transfer or PayPal."
            rows={3}
            className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>
      </div>
    </div>
  );
}
