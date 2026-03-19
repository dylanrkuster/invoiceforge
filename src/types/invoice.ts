export interface BusinessInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
  logoUrl: string;
}

export interface ClientInfo {
  name: string;
  address: string;
  email: string;
}

export interface InvoiceDetails {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  currency: string;
  taxRate: number;
  notes: string;
  paymentTerms: string;
}

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface InvoiceData {
  business: BusinessInfo;
  client: ClientInfo;
  details: InvoiceDetails;
  lineItems: LineItem[];
}

export const CURRENCIES: Record<string, { symbol: string; name: string }> = {
  USD: { symbol: "$", name: "US Dollar" },
  EUR: { symbol: "€", name: "Euro" },
  GBP: { symbol: "£", name: "British Pound" },
  CAD: { symbol: "CA$", name: "Canadian Dollar" },
  AUD: { symbol: "A$", name: "Australian Dollar" },
  JPY: { symbol: "¥", name: "Japanese Yen" },
  INR: { symbol: "₹", name: "Indian Rupee" },
  BRL: { symbol: "R$", name: "Brazilian Real" },
  CHF: { symbol: "CHF", name: "Swiss Franc" },
  SEK: { symbol: "kr", name: "Swedish Krona" },
};

export function generateInvoiceNumber(): string {
  const prefix = "INV";
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `${prefix}-${year}${month}-${random}`;
}

export function getDefaultInvoiceData(): InvoiceData {
  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(dueDate.getDate() + 30);

  return {
    business: {
      name: "",
      address: "",
      email: "",
      phone: "",
      logoUrl: "",
    },
    client: {
      name: "",
      address: "",
      email: "",
    },
    details: {
      invoiceNumber: generateInvoiceNumber(),
      date: today.toISOString().split("T")[0],
      dueDate: dueDate.toISOString().split("T")[0],
      currency: "USD",
      taxRate: 0,
      notes: "",
      paymentTerms: "Net 30",
    },
    lineItems: [
      {
        id: crypto.randomUUID(),
        description: "",
        quantity: 1,
        unitPrice: 0,
      },
    ],
  };
}

export function calculateSubtotal(lineItems: LineItem[]): number {
  return lineItems.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
}

export function calculateTax(subtotal: number, taxRate: number): number {
  return subtotal * (taxRate / 100);
}

export function calculateTotal(subtotal: number, tax: number): number {
  return subtotal + tax;
}

export function formatCurrency(
  amount: number,
  currencyCode: string
): string {
  const currency = CURRENCIES[currencyCode];
  if (!currency) return `$${amount.toFixed(2)}`;

  if (currencyCode === "JPY") {
    return `${currency.symbol}${Math.round(amount).toLocaleString()}`;
  }
  return `${currency.symbol}${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
