"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type BookingFormData = {
  name: string;
  email: string;
  eventDetails: string;
  audience: string;
  timeline: string;
  goals: string;
};

export function BookingRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      ``,
      `Event Details:`,
      data.eventDetails,
      ``,
      `Audience:`,
      data.audience,
      ``,
      `Timeline:`,
      data.timeline,
      ``,
      `Goals:`,
      data.goals,
    ].join("\n");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Booking Request — Relly Habibi")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const fieldClass = (hasError: boolean) =>
    cn(
      "mt-1.5 w-full rounded-xl border bg-charcoal-elevated px-4 py-3 text-sm text-surface-foreground outline-none transition-[border-color,box-shadow]",
      hasError
        ? "border-red-400 focus:border-red-400"
        : "border-border focus:border-accent focus:ring-2 focus:ring-accent/20",
    );

  return (
    <section id="booking" aria-labelledby="booking-heading">
      <h2
        id="booking-heading"
        className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl"
      >
        Booking request
      </h2>
      <p className="mt-3 max-w-xl text-surface-muted">
        Fill out the form below and your email client will open with your request
        ready to send.
      </p>

      {submitted ? (
        <p className="mt-8 rounded-xl border border-accent-warm/40 bg-accent-warm/10 px-5 py-4 text-sm text-surface-foreground">
          Your email client should have opened with your booking request. If it
          didn&apos;t, email{" "}
          <a href={`mailto:${profile.email}`} className="font-medium text-accent underline">
            {profile.email}
          </a>{" "}
          directly.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-surface-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className={fieldClass(!!errors.name)}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name ? (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-surface-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={fieldClass(!!errors.email)}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email ? (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="eventDetails" className="text-sm font-medium text-surface-foreground">
              Event details
            </label>
            <textarea
              id="eventDetails"
              rows={4}
              className={fieldClass(!!errors.eventDetails)}
              {...register("eventDetails", { required: "Event details are required" })}
            />
            {errors.eventDetails ? (
              <p className="mt-1 text-xs text-red-500">{errors.eventDetails.message}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="audience" className="text-sm font-medium text-surface-foreground">
              Audience
            </label>
            <textarea
              id="audience"
              rows={3}
              className={fieldClass(!!errors.audience)}
              {...register("audience", { required: "Audience is required" })}
            />
            {errors.audience ? (
              <p className="mt-1 text-xs text-red-500">{errors.audience.message}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="timeline" className="text-sm font-medium text-surface-foreground">
              Timeline
            </label>
            <input
              id="timeline"
              type="text"
              placeholder="e.g. March 2026, 2-day conference"
              className={fieldClass(!!errors.timeline)}
              {...register("timeline", { required: "Timeline is required" })}
            />
            {errors.timeline ? (
              <p className="mt-1 text-xs text-red-500">{errors.timeline.message}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="goals" className="text-sm font-medium text-surface-foreground">
              Goals
            </label>
            <textarea
              id="goals"
              rows={4}
              className={fieldClass(!!errors.goals)}
              {...register("goals", { required: "Goals are required" })}
            />
            {errors.goals ? (
              <p className="mt-1 text-xs text-red-500">{errors.goals.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center rounded-full bg-accent px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            Submit booking request
          </button>
        </form>
      )}
    </section>
  );
}
