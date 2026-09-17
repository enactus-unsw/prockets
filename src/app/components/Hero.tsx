"use client";

import React, { useEffect } from "react";
import { colors, accent, alpha } from "./theme";

export { colors, accent, alpha };

export function HeroSection() {
  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    // Mouse gradient
    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = `0 0 20px ${alpha(accent.DEFAULT, 0.35)}`;
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document
          .querySelectorAll<HTMLElement>(".floating-element")
          .forEach((el, index) => {
            setTimeout(() => {
              el.style.animationPlayState = "running";
            }, index * 200);
          });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen font-primary overflow-hidden relative w-full"
      style={{
        background: `linear-gradient(to bottom right, ${colors[900]}, #000, ${colors[800]})`,
        color: colors[100],
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={alpha(colors[200], 0.08)}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          className="grid-line"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          className="grid-line"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="20%"
          y1="0"
          x2="20%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "1.5s" }}
        />
        <line
          x1="80%"
          y1="0"
          x2="80%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2s" }}
        />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        <circle
          cx="20%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3s" }}
        />
        <circle
          cx="80%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3.2s" }}
        />
        <circle
          cx="20%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3.4s" }}
        />
        <circle
          cx="80%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: "3.6s" }}
        />
        <circle
          cx="50%"
          cy="50%"
          r="1.5"
          className="detail-dot"
          style={{ animationDelay: "4s" }}
        />
      </svg>

      {/* Corner elements */}
      <div
        className="corner-element top-8 left-8"
        style={{ animationDelay: "4s" }}
      >
        <div
          className="absolute top-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element top-8 right-8"
        style={{ animationDelay: "4.2s" }}
      >
        <div
          className="absolute top-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element bottom-8 left-8"
        style={{ animationDelay: "4.4s" }}
      >
        <div
          className="absolute bottom-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element bottom-8 right-8"
        style={{ animationDelay: "4.6s" }}
      >
        <div
          className="absolute bottom-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>

      {/* Floating elements */}
      <div
        className="floating-element"
        style={{ top: "25%", left: "15%", animationDelay: "5s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "40%", left: "10%", animationDelay: "6s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}
      ></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-8 py-12 md:px-16 md:py-20">
        {/* Top tagline */}
        <div className="text-center">
          <h2
            className="text-xs md:text-sm font-mono font-light uppercase tracking-[0.2em] opacity-80"
            style={{ color: colors[200] }}
          ></h2>
          {/**
           * navbar here possibly?
           *
           */}
        </div>

        {/* Main headline */}
        <div className="text-center max-w-5xl mx-auto">
          <h1
            className="font-serif text-3xl md:text-4xl lg:text-6xl font-extralight leading-tight tracking-tight text-decoration"
            style={{ color: colors[50] }}
          >
            <div className="mb-4 md:mb-6">
              <span className="word" data-delay="1600">
                <em className="font-display">Affordable.</em>
              </span>
              <span className="word" data-delay="1750">
                <em className="font-display">Mobile.</em>
              </span>
              <span className="word" data-delay="1900">
                <em className="font-display">Stable.</em>
              </span>
              <br />
              <span className="word" data-delay="2050">
                Prosthetics
              </span>
              <span className="word" data-delay="2200">
                designed
              </span>
              <span className="word" data-delay="2350">
                to
              </span>
              <span className="word" data-delay="2500">
                move
              </span>
              <span className="word" data-delay="2650">
                with
              </span>
              <span className="word" data-delay="2800">
                you.
              </span>
            </div>
            <div
              className="font-sans text-xl md:text-2xl lg:text-2xl font-medium leading-relaxed"
              style={{ color: colors[300] }}
            >
              <span className="word" data-delay="2950">
                Prockets
              </span>
              <span className="word" data-delay="2950">
                creates
              </span>
              <span className="word" data-delay="3080">
                modular
              </span>
              <span className="word" data-delay="3210">
                transtibial
              </span>
              <span className="word" data-delay="3340">
                prosthetic
              </span>
              <span className="word" data-delay="3470">
                systems
              </span>
              <span className="word" data-delay="3600">
                designed
              </span>
              <span className="word" data-delay="3730">
                for
              </span>
              <span className="word" data-delay="3860">
                affordable
              </span>
              <span className="word" data-delay="3990">
                access,
              </span>
              <span className="word" data-delay="4120">
                local
              </span>
              <span className="word" data-delay="4250">
                clinical
              </span>
              <span className="word" data-delay="4380">
                assembly,
              </span>
              <span className="word" data-delay="4510">
                and
              </span>
              <span className="word" data-delay="4640">
                modular
              </span>
              <span className="word" data-delay="4770">
                component
              </span>
              <span className="word" data-delay="4900">
                replacement
              </span>
            </div>
          </h1>
          <div
            className="absolute -left-8 top-1/2 w-4 h-px opacity-20"
            style={{
              background: colors[200],
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.5s",
            }}
          ></div>
          <div
            className="absolute -right-8 top-1/2 w-4 h-px opacity-20"
            style={{
              background: colors[200],
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.7s",
            }}
          ></div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <div
            className="mb-4 w-16 h-px opacity-60"
            style={{
              background: `linear-gradient(to right, transparent, ${accent.DEFAULT}, transparent)`,
            }}
          ></div>
          <h2
            className="text-xs md:text-sm font-mono font-light uppercase tracking-[0.2em] opacity-80"
            style={{ color: colors[200] }}
          >
            <span className="word" data-delay="4400">
              Early
            </span>
            <span className="word" data-delay="4550">
              Stage
            </span>
            <span className="word" data-delay="4700">
              Runner-Up,
            </span>
            <span className="word" data-delay="4850">
              Enactus
            </span>
            <span className="word" data-delay="5000">
              Australia
            </span>
            <span className="word" data-delay="5150">
              National
            </span>
            <span className="word" data-delay="5300">
              Championships
            </span>
            <span className="word" data-delay="5450">
              2026
            </span>
          </h2>
          <div
            className="mt-6 flex justify-center space-x-4 opacity-0"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "4.5s",
            }}
          >
            <div
              className="w-1 h-1 rounded-full opacity-40"
              style={{ background: accent.DEFAULT }}
            ></div>
            <div
              className="w-1 h-1 rounded-full opacity-80"
              style={{ background: accent.DEFAULT }}
            ></div>
            <div
              className="w-1 h-1 rounded-full opacity-40"
              style={{ background: accent.DEFAULT }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
