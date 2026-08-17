"use client";

import {
  Bed,
  Flame,
  CookingPot,
  UtensilsCrossed,
  CircleDollarSign,
  Phone,
  MessageCircle,
  Heart,
} from "lucide-react";

type SurvivorKitStepProps = {
  onContinue: () => void;
};

const kitItems = [
  {
    icon: <Bed className="h-5 w-5" />,
    title: "Mattress and pillow",
    description: "Mattress and pillow",
  },
  {
    icon: <Flame className="h-5 w-5" />,
    title: "Two-burner gas cooker",
    description: "Two-burner gas cooker",
  },
  {
    icon: <CookingPot className="h-5 w-5" />,
    title: "Cooking pots and utensils",
    description: "Two cooking pots",
  },
  {
    icon: <UtensilsCrossed className="h-5 w-5" />,
    title: "Plates, bowls, spoons, and cups",
    description: "Cooking utensils",
  },
  {
    icon: <CircleDollarSign className="h-5 w-5" />,
    title: "Bucket and household essentials",
    description: "Plastic bucket and small bowl",
  },
  {
    icon: <CircleDollarSign className="h-5 w-5" />,
    title: "Two plates and spoons",
    description: "Two plates and spoons",
  },
];

export function SurvivorKitStep({ onContinue }: SurvivorKitStepProps) {
  return (
    <div className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-4">
        {" "}
        <p className="leading-8 text-[#5E5752]">
          When a woman leaves Goshen to begin an independent life, she receives
          a basic Survivor's Kit to help establish her new home.
        </p>
      </div>
      {/* Kit contents */}
      <div className="space-y-5">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          The kit includes:
        </h3>

        <div className="space-y-4">
          {kitItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#E8DED5] bg-white p-2"
            >
              <div className="flex items-start gap-4">
                {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#43206F]">
                  {item.icon}
                </div> */}

                <div className="space-y-2">
                  {/* <h4 className="font-semibold text-[#2F1B69]">{item.title}</h4> */}

                  <p className="leading-7 text-[#5E5752]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Impact panel */}
      {/* <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <Heart className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              A kit is more than household items
            </h4>

            <p className="leading-7 text-[#5E5752]">
              These basic items can make a significant difference to a woman who
              is starting again with her children after escaping violence. Your
              support helps provide stability, dignity, and the practical
              foundation for a safe new beginning.
            </p>
          </div>
        </div>
      </div> */}
      {/* Primary CTA */}
      <button
        onClick={onContinue}
        className="w-full rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] active:scale-[0.99]"
      >
        Donate a Survivor's Kit
      </button>
      {/* Contact divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#E8DED5]" />
        <span className="text-sm text-[#7A746F]">or speak with us</span>
        <div className="h-px flex-1 bg-[#E8DED5]" />
      </div>
      {/* Contact buttons */}
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href="tel:+2348027775001"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#43206F] px-5 py-4 text-sm font-bold text-[#43206F] transition hover:bg-[#43206F] hover:text-white"
        >
          {/* <Phone className="h-5 w-5" /> */}
          Call us
        </a>

        <a
          href="https://wa.me/2348027775001"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#1FA855] px-5 py-4 text-sm font-bold text-[#1FA855] transition hover:bg-[#1FA855] hover:text-white"
        >
          {/* <MessageCircle className="h-5 w-5" /> */}
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
