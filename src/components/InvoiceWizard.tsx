"use client";

import { useState, useCallback, useEffect } from "react";
import {
  InvoiceData,
  getDefaultInvoiceData,
} from "@/types/invoice";
import { StepBusinessInfo } from "./steps/StepBusinessInfo";
import { StepClientInfo } from "./steps/StepClientInfo";
import { StepInvoiceDetails } from "./steps/StepInvoiceDetails";
import { StepLineItems } from "./steps/StepLineItems";
import { StepPreview } from "./steps/StepPreview";

const STEPS = [
  { label: "Your Info", icon: "🏢" },
  { label: "Client", icon: "👤" },
  { label: "Details", icon: "📋" },
  { label: "Items", icon: "📦" },
  { label: "Preview", icon: "👁️" },
];

const STORAGE_KEY = "invoiceforge_draft";

export function InvoiceWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<InvoiceData>(getDefaultInvoiceData());
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData(parsed);
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch {
        // ignore
      }
    }
  }, [data, loaded]);

  const updateData = useCallback(
    (updates: Partial<InvoiceData>) => {
      setData((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  const next = () => setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0));
  const goTo = (step: number) => setCurrentStep(step);

  const resetInvoice = () => {
    setData(getDefaultInvoiceData());
    setCurrentStep(0);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (!loaded) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--accent)] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Step Indicator */}
      <div className="mb-8 flex items-center justify-between">
        {STEPS.map((step, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex flex-1 flex-col items-center gap-1"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm transition-all ${
                i === currentStep
                  ? "bg-[var(--accent)] text-black font-bold"
                  : i < currentStep
                    ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                    : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
              }`}
            >
              {i < currentStep ? "✓" : step.icon}
            </div>
            <span
              className={`hidden text-xs sm:block ${
                i === currentStep
                  ? "text-[var(--accent)] font-medium"
                  : "text-[var(--text-secondary)]"
              }`}
            >
              {step.label}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={`absolute h-0.5 w-full ${
                  i < currentStep ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                }`}
                style={{ display: "none" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-8 h-1 w-full rounded-full bg-[var(--bg-tertiary)]">
        <div
          className="h-1 rounded-full bg-[var(--accent)] transition-all duration-300"
          style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 md:p-8">
        {currentStep === 0 && (
          <StepBusinessInfo data={data} updateData={updateData} />
        )}
        {currentStep === 1 && (
          <StepClientInfo data={data} updateData={updateData} />
        )}
        {currentStep === 2 && (
          <StepInvoiceDetails data={data} updateData={updateData} />
        )}
        {currentStep === 3 && (
          <StepLineItems data={data} updateData={updateData} />
        )}
        {currentStep === 4 && (
          <StepPreview data={data} onReset={resetInvoice} />
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-6">
          <button
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--text-secondary)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            ← Back
          </button>

          <span className="text-sm text-[var(--text-secondary)]">
            Step {currentStep + 1} of {STEPS.length}
          </span>

          {currentStep < STEPS.length - 1 ? (
            <button
              onClick={next}
              className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition hover:bg-[var(--accent-hover)]"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={resetInvoice}
              className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--text-secondary)]"
            >
              New Invoice
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
