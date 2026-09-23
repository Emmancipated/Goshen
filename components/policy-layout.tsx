"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Reveal } from "@/components/reveal";

const policyTabs = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Accessibility", href: "/accessibility" },
];

export function PolicyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#4E4742]">
      {/* Dark patterned hero header replicating reference image */}
      <section className="relative overflow-hidden bg-[#1D1B26] py-16 text-white sm:py-20 lg:py-24">
        <div
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1D1B26]/50 to-[#1D1B26]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {
                policyTabs[
                  pathname === "/privacy-policy"
                    ? 0
                    : pathname === "/terms-and-conditions"
                      ? 1
                      : 2
                ].name
              }
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main Container */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Navigation Tabs */}
        <div className="sticky top-4 z-30 mb-8 rounded-2xl bg-[#EFE7E3]/90 p-1.5 shadow-md backdrop-blur-md border border-white/50">
          <nav
            className="grid grid-cols-3 gap-1 sm:gap-2 text-center"
            aria-label="Policy Navigation"
          >
            {policyTabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  title={tab.name}
                  className={`min-w-0 truncate rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200 sm:text-base ${
                    isActive
                      ? "bg-[#2F1B69] text-white shadow-md"
                      : "text-[#5E5752] hover:bg-white/50 hover:text-[#2F1B69]"
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Page Content Panel */}
        <div className="rounded-3xl border border-white/60 bg-white/80 p-6 sm:p-10 shadow-lg backdrop-blur-md">
          {children}
        </div>
      </div>
    </main>
  );
}
