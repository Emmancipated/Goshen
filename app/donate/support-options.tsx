"use client";

import { useState } from "react";
import { Modal } from "@/components/modal";
import { ContactOptions } from "@/components/contact-options";
import { DonateModal } from "@/app/donate/donate-modal";
import {
  ArrowRightIcon,
  BankIcon,
  BriefcaseIcon,
  GiftIcon,
  HandshakeIcon,
  HeartIcon,
  MegaphoneIcon,
  UsersIcon,
} from "@/components/icons";

type SupportKey = "volunteer" | "items" | "corporate" | "fundraise";

const SUPPORT_MODALS: Record<SupportKey, { title: string; intro: string; items: string[] }> = {
  volunteer: {
    title: "Volunteer",
    intro:
      "Give your time and skills to walk beside women and children on their journey to safety. Volunteer opportunities include:",
    items: [
      "Counselling and emotional support",
      "Empowerment programmes",
      "Children's educational support",
      "Skills development (tailoring, culinary, IT)",
      "Professional volunteering (legal, medical, admin, drivers)",
    ],
  },
  items: {
    title: "Donate Items",
    intro: "Practical items keep our shelter running and our residents comfortable. We welcome:",
    items: [
      "Food items (non-perishables, provisions)",
      "Toiletries and sanitary products",
      "Clothing for women and children",
      "Baby supplies (diapers, formula, milk)",
      "Educational materials (books, stationery)",
      "Household essentials (bedding, towels, cleaning supplies)",
    ],
  },
  corporate: {
    title: "Corporate Partnership",
    intro: "Partner with us to create lasting change for women and children. Potential partnership opportunities include:",
    items: [
      "Corporate Social Responsibility (CSR) initiatives",
      "Skills acquisition programmes",
      "Employment opportunities for survivors",
      "Healthcare support",
      "Educational support",
      "Sponsorship of shelter beds or programmes",
    ],
  },
  fundraise: {
    title: "Fundraise for Goshen",
    intro: "Turn your energy into safety for women and children. Start a fundraiser — as an:",
    items: [
      "Individual — birthdays, anniversaries, milestones",
      "Church — collections, community drives",
      "School — dress-down days, charity events",
      "Community group — jumble sales, fun runs",
      "Corporate organisation — matching gifts, events",
    ],
  },
};

const CARD_STYLES =
  "group flex h-full flex-col rounded-2xl border border-night-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg";

export function SupportOptions() {
  const [active, setActive] = useState<SupportKey | null>(null);
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Ways You Can Support</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Five ways to make a difference
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-night-600">
          Give money, time, items, influence or a voice. Whatever you choose, it changes a life.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <button
          type="button"
          onClick={() => setDonateOpen(true)}
          className={`${CARD_STYLES} relative overflow-hidden bg-night-950 text-cream-50 lg:col-span-2`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.16),transparent_60%)]"
          />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-white transition-transform group-hover:scale-110">
              <HeartIcon className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-semibold text-cream-50">Make a Donation</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                Your gift directly funds shelter, three meals daily, clothing, healthcare, education and skills support
                for the women and children we serve. Secure card payment or direct bank transfer — we never see your
                card details.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all group-hover:bg-gold-600">
              Donate Now
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </button>

        <button type="button" onClick={() => setActive("volunteer")} className={`${CARD_STYLES} text-left`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-all group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white">
            <UsersIcon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">Volunteer</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-night-600">
            Give your time and skills — as a counsellor, mentor, teacher, driver or behind the scenes.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
            Volunteer
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        <button type="button" onClick={() => setActive("items")} className={`${CARD_STYLES} text-left`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-all group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white">
            <GiftIcon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">Donate Items</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-night-600">
            Food, toiletries, clothing, baby supplies, school materials and household essentials are always needed.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
            Donate Items
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        <button type="button" onClick={() => setActive("corporate")} className={`${CARD_STYLES} text-left`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-all group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white">
            <HandshakeIcon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">Corporate Partnership</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-night-600">
            CSR initiatives, skills programmes, employment and sponsorship opportunities for your organisation.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
            Partner With Us
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        <button type="button" onClick={() => setActive("fundraise")} className={`${CARD_STYLES} text-left`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-all group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white">
            <MegaphoneIcon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">Fundraise for Goshen</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-night-600">
            Run, bake, host a dinner or celebrate a milestone — as an individual, church, school or community group.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-600">
            Start a Fundraiser
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>

      {SUPPORT_MODALS[active ?? "volunteer"] &&
        ["volunteer", "items", "corporate", "fundraise"].map((key) => {
          const modal = SUPPORT_MODALS[key as SupportKey];
          return (
            <Modal
              key={key}
              open={active === key}
              onClose={() => setActive(null)}
              labelledBy={`support-${key}-title`}
            >
              <div className="p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-white">
                  <BriefcaseIcon className="h-6 w-6" />
                </span>
                <h2 id={`support-${key}-title`} className="mt-4 font-display text-2xl font-semibold text-gold-700">
                  {modal.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-night-600">{modal.intro}</p>
                <ul className="mt-5 space-y-2.5">
                  {modal.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-night-100 bg-cream-50 px-4 py-3 text-sm leading-6 text-night-900"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {active === "items" && (
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-gold-50 p-3 text-xs leading-5 text-night-600">
                    <BankIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    For delivery or collection arrangements, please contact us — our residential address is shared
                    confidentially.
                  </p>
                )}
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gold-600">Reach us</p>
                <ContactOptions compact className="mt-3" />
              </div>
            </Modal>
          );
        })}

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
}
