"use client";

import {
  InvoiceData,
  LineItem,
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  formatCurrency,
} from "@/types/invoice";

interface Props {
  data: InvoiceData;
  updateData: (updates: Partial<InvoiceData>) => void;
}

export function StepLineItems({ data, updateData }: Props) {
  const addItem = () => {
    updateData({
      lineItems: [
        ...data.lineItems,
        {
          id: crypto.randomUUID(),
          description: "",
          quantity: 1,
          unitPrice: 0,
        },
      ],
    });
  };

  const removeItem = (id: string) => {
    if (data.lineItems.length === 1) return;
    updateData({
      lineItems: data.lineItems.filter((item) => item.id !== id),
    });
  };

  const updateItem = (
    id: string,
    field: keyof LineItem,
    value: string | number
  ) => {
    updateData({
      lineItems: data.lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const subtotal = calculateSubtotal(data.lineItems);
  const tax = calculateTax(subtotal, data.details.taxRate);
  const total = calculateTotal(subtotal, tax);
  const curr = data.details.currency;

  return (
    <div>
      <h2 className="mb-1 text-xl font-bold">Line Items</h2>
      <p className="mb-6 text-sm text-[var(--text-secondary)]">
        Add the items or services you&apos;re billing for.
      </p>

      {/* Desktop table header */}
      <div className="mb-2 hidden grid-cols-[1fr_80px_120px_120px_40px] gap-2 text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] md:grid">
        <span>Description</span>
        <span>Qty</span>
        <span>Unit Price</span>
        <span>Amount</span>
        <span></span>
      </div>

      <div className="space-y-3">
        {data.lineItems.map((item, idx) => (
          <div
            key={item.id}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-3 md:grid md:grid-cols-[1fr_80px_120px_120px_40px] md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0"
          >
            {/* Mobile label */}
            <div className="mb-2 text-xs text-[var(--text-secondary)] md:hidden">
              Item {idx + 1}
            </div>

            <input
              type="text"
              value={item.description}
              onChange={(e) => updateItem(item.id, "description", e.target.value)}
              placeholder="Service or product description"
              className="mb-2 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:outline-none md:mb-0 md:border-[var(--border)]"
            />

            <div className="mb-2 flex gap-2 md:contents">
              <div className="flex-1 md:flex-none">
                <label className="mb-1 block text-xs text-[var(--text-secondary)] md:hidden">
                  Qty
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(
                      item.id,
                      "quantity",
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-2 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div className="flex-1 md:flex-none">
                <label className="mb-1 block text-xs text-[var(--text-secondary)] md:hidden">
                  Unit Price
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice}
                  onChange={(e) =>
                    updateItem(
                      item.id,
                      "unitPrice",
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-2 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div className="flex-1 md:flex-none">
                <label className="mb-1 block text-xs text-[var(--text-secondary)] md:hidden">
                  Amount
                </label>
                <div className="rounded-lg border border-transparent bg-transparent px-3 py-2 text-sm font-medium text-[var(--text)]">
                  {formatCurrency(item.quantity * item.unitPrice, curr)}
                </div>
              </div>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              disabled={data.lineItems.length === 1}
              className="text-[var(--text-secondary)] transition hover:text-red-400 disabled:opacity-30"
              title="Remove item"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        Add Line Item
      </button>

      {/* Totals */}
      <div className="mt-6 border-t border-[var(--border)] pt-4">
        <div className="ml-auto max-w-xs space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[var(--text-secondary)]">Subtotal</span>
            <span>{formatCurrency(subtotal, curr)}</span>
          </div>
          {data.details.taxRate > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-[var(--text-secondary)]">
                Tax ({data.details.taxRate}%)
              </span>
              <span>{formatCurrency(tax, curr)}</span>
            </div>
          )}
          <div className="flex justify-between border-t border-[var(--border)] pt-2 text-lg font-bold">
            <span>Total</span>
            <span className="text-[var(--accent)]">
              {formatCurrency(total, curr)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
