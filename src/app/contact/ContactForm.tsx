"use client";

import { useState, type FormEvent } from "react";
import { colors, accent, alpha } from "../components/Hero";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "w-full rounded-lg px-4 py-3 text-sm font-light outline-none transition-colors focus:ring-1";

function fieldStyle() {
  return {
    background: alpha(colors[900], 0.6),
    border: `1px solid ${alpha(colors[200], 0.15)}`,
    color: colors[100],
  };
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          help: data.get("help"),
          affiliation: data.get("affiliation"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg px-6 py-8 text-center"
        style={{ border: `1px solid ${alpha(accent.DEFAULT, 0.3)}` }}
      >
        <p className="text-lg font-light" style={{ color: colors[50] }}>
          Thanks for reaching out.
        </p>
        <p className="mt-2 text-sm " style={{ color: colors[300] }}>
          We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-xs uppercase tracking-wide"
          style={{ color: colors[200] }}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={fieldClassName}
          style={fieldStyle()}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-xs uppercase tracking-wide"
          style={{ color: colors[200] }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClassName}
          style={fieldStyle()}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block font-mono text-xs uppercase tracking-wide"
          style={{ color: colors[200] }}
        >
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={fieldClassName}
          style={fieldStyle()}
        />
      </div>

      <div>
        <label
          htmlFor="help"
          className="mb-2 block font-mono text-xs uppercase tracking-wide"
          style={{ color: colors[200] }}
        >
          How can you help?
        </label>
        <textarea
          id="help"
          name="help"
          required
          rows={4}
          className={`${fieldClassName} resize-none`}
          style={fieldStyle()}
        />
      </div>

      <div>
        <label
          htmlFor="affiliation"
          className="mb-2 block font-mono text-xs uppercase tracking-wide"
          style={{ color: colors[200] }}
        >
          What is your professional affiliation?
        </label>
        <input
          id="affiliation"
          name="affiliation"
          type="text"
          className={fieldClassName}
          style={fieldStyle()}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-light" style={{ color: "#e08a5f" }}>
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full px-6 py-3 text-sm font-medium transition-colors disabled:opacity-60"
        style={{ background: accent.DEFAULT, color: accent.ink }}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
