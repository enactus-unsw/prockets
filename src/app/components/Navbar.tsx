"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { colors } from "./Hero";

const links = [
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/mission", label: "Mission" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: colors[900],
        borderColor: `${colors[200]}1a`,
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-mono text-sm uppercase tracking-[0.2em]"
          style={{ color: colors[50] }}
        >
          Prockets
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
              style={{ color: colors[200] }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          style={{ color: colors[200] }}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-xs uppercase tracking-[0.2em] opacity-70 hover:opacity-100"
              style={{ color: colors[200] }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
