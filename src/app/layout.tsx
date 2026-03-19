import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "InvoiceForge — Free Invoice Generator",
    template: "%s | InvoiceForge",
  },
  description:
    "Create professional invoices in minutes. Free, no signup required. Generate, preview, and download invoices as PDF — all client-side.",
  keywords: [
    "invoice generator",
    "free invoice",
    "invoice template",
    "freelance invoice",
    "invoice maker",
    "create invoice online",
    "PDF invoice",
  ],
  openGraph: {
    title: "InvoiceForge — Free Invoice Generator",
    description:
      "Create professional invoices in minutes. Free, no signup required.",
    url: "https://invoiceforge.vercel.app",
    siteName: "InvoiceForge",
    type: "website",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=InvoiceForge&description=Free%20Professional%20Invoice%20Generator&theme=dark&template=product&accent=%2322c55e",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceForge — Free Invoice Generator",
    description:
      "Create professional invoices in minutes. Free, no signup required.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "InvoiceForge",
              description:
                "Create professional invoices in minutes. Free, no signup required.",
              url: "https://invoiceforge.vercel.app",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Free invoice generation",
                "PDF download via print",
                "No signup required",
                "Client-side processing",
                "Professional templates",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
