"use client";

import {
  Building2,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  HeartPulse,
  Shield,
} from "lucide-react";

type PartnerStepProps = {
  onContinue: () => void;
};

const partnershipAreas = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Corporate Social Responsibility",
    description: "Corporate Social Responsibility (CSR) initiatives",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Skills & Empowerment",
    description: "Skills acquisition programmes",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Employment Support",
    description: "Employment opportunities for survivors",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Healthcare Support",
    description: "Healthcare support",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Educational Support",
    description: "Educational support",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Sustainable Support",
    description: "Sustainable support for Goshen's services",
  },
];

export function PartnerStep({ onContinue }: PartnerStepProps) {
  return (
    <div className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-4">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Learn how your organisation can support Goshen through partnership.
        </p>
      </div>
      {/* Partnership opportunities */}
      <div className="space-y-5">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Ways your organization can support Goshen
        </h3>

        <div className="space-y-4">
          {partnershipAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-3xl border border-[#E8DED5] bg-white p-2 transition-all duration-200 hover:border-[#43206F] hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#43206F]">
                  {area.icon}
                </div> */}

                <div className="space-y-2">
                  {/* <h4 className="font-semibold text-[#2F1B69]">{area.title}</h4> */}

                  <p className="leading-7 text-[#5E5752]">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Partnership panel */}
      {/* <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <HeartHandshake className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Interested in partnering with Goshen?
            </h4>

            <p className="leading-7 text-[#5E5752]">
              We'd love to learn about your organization and explore how we can
              work together to create meaningful, sustainable impact.
            </p>
          </div>
        </div>
      </div> */}
      {/* CTA */}
      <button
        onClick={onContinue}
        className="w-full rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] active:scale-[0.99]"
      >
        Make a partnership enquiry
      </button>
    </div>
  );
}
