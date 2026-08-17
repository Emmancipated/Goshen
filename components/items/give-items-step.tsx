"use client";

import { Lock, Package, Shirt, Baby, BookOpen } from "lucide-react";

type GiveItemsStepProps = {
  onContinue: () => void;
};

const items = [
  {
    icon: <Package className="h-5 w-5" />,
    title: "Food and non-perishable provisions",
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: "Toiletries and sanitary products",
  },
  {
    icon: <Shirt className="h-5 w-5" />,
    title: "Clothing for women and children",
  },
  {
    icon: <Baby className="h-5 w-5" />,
    title: "Baby supplies, including diapers, formula and milk",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Educational materials, including books and stationery",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title:
      "Household essentials, including bedding, towels and cleaning supplies",
  },
];

export function GiveItemsStep({ onContinue }: GiveItemsStepProps) {
  return (
    <div className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-4">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Goshen welcomes practical items that help keep residents safe,
          comfortable and cared for.
        </p>
      </div>
      {/* Items list */}
      <div className="space-y-5">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Items we welcome
        </h3>

        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-[#E8DED5] bg-white p-2"
            >
              {/* <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#43206F]">
                {item.icon}
              </div> */}

              <p className="leading-7 text-[#4E4742]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Confidentiality panel */}
      {/* <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <Lock className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Delivery arrangements
            </h4>

            <p className="leading-7 text-[#5E5752]">
              For security reasons, Goshen's residential address is kept
              confidential. Delivery and collection arrangements are made
              privately with the shelter team.
            </p>
          </div>
        </div>
      </div> */}
      {/* CTA */}
      <button
        onClick={onContinue}
        className="w-full rounded-2xl bg-[#B64A16] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] active:scale-[0.99]"
      >
        Ask about donating items
      </button>
    </div>
  );
}
