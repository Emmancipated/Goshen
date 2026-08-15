"use client";

import {
  Church,
  GraduationCap,
  Users,
  Building2,
  Phone,
  MessageCircle,
  Heart,
} from "lucide-react";

type FundraisingStepProps = {
  onContinue: (fundraisingType?: string) => void;
};

const fundraisingIdeas = [
  {
    icon: <Church className="h-5 w-5" />,
    title: "Church",
    value: "Church",
    description:
      "Collections, special offerings, harvests, charity Sundays, or community drives.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "School",
    value: "School",
    description:
      "Charity events, awareness campaigns, student initiatives, or fundraising projects.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Community Group",
    value: "Community Group",
    description:
      "Neighborhood events, social clubs, associations, or local community initiatives.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Organization",
    value: "Organization",
    description:
      "Corporate fundraising, employee-led campaigns, CSR activities, or workplace giving.",
  },
];

export function FundraisingStep({ onContinue }: FundraisingStepProps) {
  return (
    <div className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-4">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Turn your energy into support for women and children.{" "}
        </p>
        <p className="leading-8 text-[#5E5752]">
          You can organize a fundraising activity through your church, school,
          community group, workplace, or organization. Every fundraiser helps
          provide safety, shelter, healing, and practical support for women and
          children rebuilding their lives.
        </p>
      </div>
      {/* Fundraising ideas */}
      <div className="space-y-5">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Choose a fundraising idea
        </h3>

        <div className="space-y-4">
          {fundraisingIdeas.map((idea) => (
            <button
              key={idea.title}
              type="button"
              onClick={() => onContinue(idea.value)}
              className="w-full rounded-3xl border border-[#E8DED5] bg-white p-5 text-left transition-all duration-200 hover:border-[#43206F] hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#43206F]">
                  {idea.icon}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#2F1B69]">{idea.title}</h4>

                  <p className="leading-7 text-[#5E5752]">{idea.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Impact panel */}
      <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <Heart className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Every effort, big or small, helps change lives
            </h4>

            <p className="leading-7 text-[#5E5752]">
              Whether you're planning a small community fundraiser or a large
              organizational campaign, we'll provide guidance, resources, and
              support to help make your fundraiser successful.
            </p>
          </div>
        </div>
      </div>
      {/* Primary CTA */}
      <button
        onClick={() => onContinue()}
        className="w-full rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] active:scale-[0.99]"
      >
        Make a fundraising enquiry
      </button>
      {/* Contact divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#E8DED5]" />
        <span className="text-sm text-[#7A746F]">or get in touch with us</span>
        <div className="h-px flex-1 bg-[#E8DED5]" />
      </div>
      {/* Contact buttons */}
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href="tel:+2348027775001"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#43206F] px-5 py-4 text-sm font-bold text-[#43206F] transition hover:bg-[#43206F] hover:text-white"
        >
          <Phone className="h-5 w-5" />
          Call us
        </a>

        <a
          href="https://wa.me/2348027775001"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#1FA855] px-5 py-4 text-sm font-bold text-[#1FA855] transition hover:bg-[#1FA855] hover:text-white"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
