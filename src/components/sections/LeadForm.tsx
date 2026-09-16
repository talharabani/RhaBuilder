"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z.string().optional(),
  interest: z.string().min(1, "Please select an option"),
  projectOfInterest: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please confirm you have read our Privacy Policy",
  }),
  honeypot: z.string().max(0), // Anti-spam honeypot
});

type FormData = z.infer<typeof schema>;

const INTEREST_OPTIONS = [
  { value: "", label: "I am interested in..." },
  { value: "buying-home", label: "Buying a Home" },
  { value: "investment", label: "Investment Information" },
  { value: "commercial", label: "Commercial Property" },
  { value: "construction", label: "Construction Services" },
  { value: "other", label: "Other" },
];

interface LeadFormProps {
  preselectedProject?: string;
  variant?: "default" | "dark" | "minimal";
  title?: string;
  description?: string;
}

export function LeadForm({
  preselectedProject,
  variant = "default",
  title = "Get in Touch",
  description = "Tell us about your requirements and a member of our team will be in touch.",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      interest: "",
      projectOfInterest: preselectedProject ?? "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const payload = {
        ...data,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "05e57c24-0886-4218-b429-131747563657",
        subject: `New Website Lead: ${data.fullName} - ${data.interest}`,
        from_name: "RHA Builders Contact Form",
        replyto: data.email, // This allows you to just hit 'Reply' in Gmail to email the customer back!
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });
      
      const result = await res.json();
      if (!result.success) throw new Error("Submission failed");
      
      setSubmitted(true);
      // Analytics event would fire here in production
    } catch {
      setServerError(
        "Something went wrong sending your enquiry. Please try again or contact us directly."
      );
    }
  };

  const isDark = variant === "dark";

  const labelClass = cn(
    "block text-sm font-medium mb-1.5",
    isDark ? "text-[var(--color-text-on-dark)]" : "text-[var(--color-text-secondary)]"
  );
  const inputClass = (hasError?: boolean) =>
    cn(
      "w-full px-1 py-3 text-[15px] bg-transparent text-[#1a2b4a] placeholder:text-slate-400 focus:outline-none transition-colors",
      hasError ? "form-field-error" : "form-field-normal"
    );
  const errorClass = "flex items-center gap-1 mt-1.5 text-xs text-[var(--color-error)]";

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-[var(--radius-card)] p-10 text-center",
          isDark ? "bg-[var(--color-brand-primary)]" : "bg-[var(--color-surface-secondary)]"
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircleIcon
          className="w-14 h-14 mx-auto mb-4"
          style={{ color: "var(--color-success)" }}
          aria-hidden="true"
        />
        <h3
          className={cn(
            "font-display font-semibold text-2xl mb-2",
            isDark ? "text-white" : "text-[var(--color-text-primary)]"
          )}
        >
          Thank You
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed",
            isDark ? "text-[var(--color-text-on-dark-muted)]" : "text-[var(--color-text-muted)]"
          )}
        >
          Your enquiry has been received. A member of the RHA Builder team will
          be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
      {(title || description) && (
        <div className="mb-7">
          {title && (
            <h2
              className={cn(
                "font-display font-semibold text-2xl mb-2",
                isDark ? "text-white" : "text-[var(--color-text-primary)]"
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-[var(--color-text-on-dark-muted)]" : "text-[var(--color-text-muted)]"
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .form-field-normal {
          border: none !important;
          border-bottom: 1px solid #cbd5e1 !important;
          border-radius: 0 !important;
        }
        .form-field-normal:focus {
          border-bottom: 1px solid #0052cc !important;
        }
        .form-field-error {
          border: none !important;
          border-bottom: 1px solid #ef4444 !important;
          border-radius: 0 !important;
        }
      `}} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Contact enquiry form"
      >
        {/* Honeypot — hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website (do not fill)</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className={labelClass}>
              Full Name <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={inputClass(!!errors.fullName)}
              placeholder="Your full name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p id="fullName-error" className={errorClass} role="alert">
                <ExclamationCircleIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClass(!!errors.phone)}
              placeholder="Your phone number"
              {...register("phone")}
            />
            {errors.phone && (
              <p id="phone-error" className={errorClass} role="alert">
                <ExclamationCircleIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClass(!!errors.email)}
              placeholder="Your email address"
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className={errorClass} role="alert">
                <ExclamationCircleIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Interest */}
          <div>
            <label htmlFor="interest" className={labelClass}>
              I am Interested In <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <select
              id="interest"
              aria-required="true"
              aria-invalid={!!errors.interest}
              aria-describedby={errors.interest ? "interest-error" : undefined}
              className={cn(inputClass(!!errors.interest), "cursor-pointer")}
              {...register("interest")}
            >
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.interest && (
              <p id="interest-error" className={errorClass} role="alert">
                <ExclamationCircleIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {errors.interest.message}
              </p>
            )}
          </div>

          {/* WhatsApp (optional) */}
          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              WhatsApp{" "}
              <span className="text-xs font-normal text-[var(--color-text-muted)]">
                (optional)
              </span>
            </label>
            <input
              id="whatsapp"
              type="tel"
              autoComplete="tel"
              className={inputClass()}
              placeholder="WhatsApp number"
              {...register("whatsapp")}
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Message{" "}
              <span className="text-xs font-normal text-[var(--color-text-muted)]">
                (optional)
              </span>
            </label>
            <textarea
              id="message"
              rows={4}
              className={cn(inputClass(), "resize-none")}
              placeholder="Tell us more about your requirements..."
              {...register("message")}
            />
          </div>

          {/* Privacy consent */}
          <div className="sm:col-span-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center mt-0.5">
                <input
                  type="checkbox"
                  id="consent"
                  aria-required="true"
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  className="w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-accent)] cursor-pointer"
                  {...register("consent")}
                />
              </div>
              <span
                className={cn(
                  "text-sm leading-snug",
                  isDark ? "text-[var(--color-text-on-dark-muted)]" : "text-[var(--color-text-muted)]"
                )}
              >
                I have read and agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-[var(--color-brand-accent)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                . <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
              </span>
            </label>
            {errors.consent && (
              <p id="consent-error" className={cn(errorClass, "ml-7")} role="alert">
                <ExclamationCircleIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {errors.consent.message}
              </p>
            )}
          </div>
        </div>

        {/* Server error */}
        {serverError && (
          <div
            className="mt-4 p-4 rounded-[var(--radius-button)] bg-red-50 border border-[var(--color-error)]/30 flex items-start gap-2 text-sm text-[var(--color-error)]"
            role="alert"
            aria-live="assertive"
          >
            <ExclamationCircleIcon className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            {serverError}
          </div>
        )}

        {/* Submit */}
        <div className="mt-6">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto font-bold shadow-md hover:shadow-lg transition-all"
            style={{ borderRadius: '9999px', backgroundColor: '#0052cc', color: 'white', border: 'none' }}
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </Button>
          <p
            className={cn(
              "mt-3 text-xs",
              isDark ? "text-[var(--color-text-on-dark-muted)]" : "text-[var(--color-text-muted)]"
            )}
          >
            <span aria-hidden="true" className="text-[var(--color-error)]">*</span>{" "}
            Required fields. We will only use your information to respond to your enquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
