"use client";

import {
  InvoiceData,
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  formatCurrency,
} from "@/types/invoice";

interface Props {
  data: InvoiceData;
}

export function InvoicePreview({ data }: Props) {
  const subtotal = calculateSubtotal(data.lineItems);
  const tax = calculateTax(subtotal, data.details.taxRate);
  const total = calculateTotal(subtotal, tax);
  const curr = data.details.currency;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      style={{
        background: "white",
        color: "#1a1a1a",
        padding: "48px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: "14px",
        lineHeight: "1.5",
        minHeight: "900px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <div>
          {data.business.logoUrl && (
            <img
              src={data.business.logoUrl}
              alt="Logo"
              style={{ maxHeight: "60px", maxWidth: "200px", marginBottom: "12px", objectFit: "contain" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          )}
          <div style={{ fontSize: "20px", fontWeight: "700", color: "#111" }}>
            {data.business.name || "Your Business Name"}
          </div>
          {data.business.address && (
            <div style={{ color: "#666", marginTop: "4px", whiteSpace: "pre-line" }}>
              {data.business.address}
            </div>
          )}
          {data.business.email && (
            <div style={{ color: "#666", marginTop: "2px" }}>{data.business.email}</div>
          )}
          {data.business.phone && (
            <div style={{ color: "#666", marginTop: "2px" }}>{data.business.phone}</div>
          )}
        </div>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              display: "inline-block",
              background: "#22c55e",
              color: "white",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "18px",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            INVOICE
          </div>
          <div style={{ marginTop: "12px", color: "#666" }}>
            <div>
              <span style={{ fontWeight: "600", color: "#333" }}>Invoice #:</span>{" "}
              {data.details.invoiceNumber}
            </div>
            <div>
              <span style={{ fontWeight: "600", color: "#333" }}>Date:</span>{" "}
              {formatDate(data.details.date)}
            </div>
            <div>
              <span style={{ fontWeight: "600", color: "#333" }}>Due Date:</span>{" "}
              {formatDate(data.details.dueDate)}
            </div>
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div
        style={{
          background: "#f8f9fa",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "32px",
        }}
      >
        <div style={{ fontSize: "11px", fontWeight: "600", color: "#999", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
          Bill To
        </div>
        <div style={{ fontSize: "16px", fontWeight: "700", color: "#111" }}>
          {data.client.name || "Client Name"}
        </div>
        {data.client.address && (
          <div style={{ color: "#666", marginTop: "4px", whiteSpace: "pre-line" }}>
            {data.client.address}
          </div>
        )}
        {data.client.email && (
          <div style={{ color: "#666", marginTop: "2px" }}>{data.client.email}</div>
        )}
      </div>

      {/* Line Items Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "24px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "12px 16px",
                borderBottom: "2px solid #22c55e",
                fontSize: "11px",
                fontWeight: "600",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Description
            </th>
            <th
              style={{
                textAlign: "center",
                padding: "12px 16px",
                borderBottom: "2px solid #22c55e",
                fontSize: "11px",
                fontWeight: "600",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "1px",
                width: "80px",
              }}
            >
              Qty
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "12px 16px",
                borderBottom: "2px solid #22c55e",
                fontSize: "11px",
                fontWeight: "600",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "1px",
                width: "120px",
              }}
            >
              Price
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "12px 16px",
                borderBottom: "2px solid #22c55e",
                fontSize: "11px",
                fontWeight: "600",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "1px",
                width: "120px",
              }}
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.lineItems.map((item, idx) => (
            <tr key={item.id}>
              <td
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid #eee",
                  color: "#333",
                  background: idx % 2 === 1 ? "#fafafa" : "transparent",
                }}
              >
                {item.description || "—"}
              </td>
              <td
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid #eee",
                  textAlign: "center",
                  color: "#666",
                  background: idx % 2 === 1 ? "#fafafa" : "transparent",
                }}
              >
                {item.quantity}
              </td>
              <td
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid #eee",
                  textAlign: "right",
                  color: "#666",
                  background: idx % 2 === 1 ? "#fafafa" : "transparent",
                }}
              >
                {formatCurrency(item.unitPrice, curr)}
              </td>
              <td
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid #eee",
                  textAlign: "right",
                  fontWeight: "600",
                  color: "#333",
                  background: idx % 2 === 1 ? "#fafafa" : "transparent",
                }}
              >
                {formatCurrency(item.quantity * item.unitPrice, curr)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: "280px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              color: "#666",
            }}
          >
            <span>Subtotal</span>
            <span style={{ fontWeight: "600", color: "#333" }}>
              {formatCurrency(subtotal, curr)}
            </span>
          </div>
          {data.details.taxRate > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                color: "#666",
              }}
            >
              <span>Tax ({data.details.taxRate}%)</span>
              <span style={{ fontWeight: "600", color: "#333" }}>
                {formatCurrency(tax, curr)}
              </span>
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderTop: "2px solid #22c55e",
              marginTop: "8px",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            <span>Total</span>
            <span style={{ color: "#22c55e" }}>
              {formatCurrency(total, curr)}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Terms & Notes */}
      <div style={{ marginTop: "40px", borderTop: "1px solid #eee", paddingTop: "24px" }}>
        {data.details.paymentTerms && (
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "#999", textTransform: "uppercase", letterSpacing: "1px" }}>
              Payment Terms
            </span>
            <div style={{ color: "#333", marginTop: "4px" }}>{data.details.paymentTerms}</div>
          </div>
        )}
        {data.details.notes && (
          <div>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "#999", textTransform: "uppercase", letterSpacing: "1px" }}>
              Notes
            </span>
            <div style={{ color: "#666", marginTop: "4px", whiteSpace: "pre-line" }}>
              {data.details.notes}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "48px",
          textAlign: "center",
          fontSize: "11px",
          color: "#bbb",
        }}
      >
        Generated with InvoiceForge — invoiceforge.vercel.app
      </div>
    </div>
  );
}
