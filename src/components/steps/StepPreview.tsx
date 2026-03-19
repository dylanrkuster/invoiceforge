"use client";

import { useRef, useState } from "react";
import {
  InvoiceData,
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  formatCurrency,
} from "@/types/invoice";
import { InvoicePreview } from "../InvoicePreview";

interface Props {
  data: InvoiceData;
  onReset: () => void;
}

export function StepPreview({ data, onReset }: Props) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const subtotal = calculateSubtotal(data.lineItems);
  const tax = calculateTax(subtotal, data.details.taxRate);
  const total = calculateTotal(subtotal, tax);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyHTML = async () => {
    if (!previewRef.current) return;
    try {
      await navigator.clipboard.writeText(previewRef.current.innerHTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = previewRef.current.innerHTML;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">Invoice Preview</h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Review your invoice below. Use &quot;Save as PDF&quot; to download via your browser&apos;s print dialog.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopyHTML}
            className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--text-secondary)]"
          >
            {copied ? "✓ Copied!" : "Copy HTML"}
          </button>
          <button
            onClick={handlePrint}
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition hover:bg-[var(--accent-hover)]"
          >
            📄 Save as PDF
          </button>
        </div>
      </div>

      {/* Summary badges */}
      <div className="no-print mb-6 flex flex-wrap gap-3">
        <div className="rounded-lg bg-[var(--bg-tertiary)] px-3 py-1.5 text-xs">
          <span className="text-[var(--text-secondary)]">Invoice:</span>{" "}
          <span className="font-medium">{data.details.invoiceNumber}</span>
        </div>
        <div className="rounded-lg bg-[var(--bg-tertiary)] px-3 py-1.5 text-xs">
          <span className="text-[var(--text-secondary)]">Client:</span>{" "}
          <span className="font-medium">{data.client.name || "—"}</span>
        </div>
        <div className="rounded-lg bg-[var(--bg-tertiary)] px-3 py-1.5 text-xs">
          <span className="text-[var(--text-secondary)]">Total:</span>{" "}
          <span className="font-bold text-[var(--accent)]">
            {formatCurrency(total, data.details.currency)}
          </span>
        </div>
      </div>

      {/* Invoice Preview */}
      <div
        ref={previewRef}
        className="invoice-preview mx-auto max-w-[800px] overflow-hidden rounded-lg border border-[var(--border)]"
      >
        <InvoicePreview data={data} />
      </div>

      <div className="no-print mt-6 rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-4">
        <h3 className="mb-2 text-sm font-medium">💡 Tips</h3>
        <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
          <li>• Click &quot;Save as PDF&quot; and choose &quot;Save as PDF&quot; as your printer to download</li>
          <li>• The invoice prints with a clean white background — perfect for clients</li>
          <li>• Your data is saved locally — refresh the page and your draft is still here</li>
          <li>• Click &quot;New Invoice&quot; below to start fresh</li>
        </ul>
      </div>
    </div>
  );
}
