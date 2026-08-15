"use client";

import {
  HeartHandshake,
  BookOpen,
  GraduationCap,
  Briefcase,
  Wrench,
  Users,
} from "lucide-react";

type GiveTimeStepProps = {
  onContinue: () => void;
};

const opportunities = [
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Counselling and emotional support",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Mentoring and encouragement",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Children's educational support",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Skills development and training",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Professional support (legal, medical, business, counselling)",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Practical support and volunteering",
  },
];

export function GiveTimeStep({ onContinue }: GiveTimeStepProps) {
  return (
    <div className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-4">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Your time and skills can help someone rebuild her life.{" "}
        </p>
        <p className="leading-8 text-[#5E5752]">
          Goshen welcomes people who want to contribute their time, skills, and
          experience to support women and children on their journey to safety,
          healing, and independence.
        </p>
      </div>
      {/* Opportunities */}
      <div className="space-y-5">
        <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
          Ways you may be able to support
        </h3>

        <div className="grid gap-3 sm:grid-cols-2">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-[#E8DED5] bg-white p-4 transition-all duration-200 hover:border-[#43206F] hover:shadow-sm"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#43206F]">
                {item.icon}
              </div>

              <p className="leading-7 text-[#4E4742]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Encouragement panel */}
      <div className="rounded-3xl border border-[#E5D7F3] bg-[#F8F4FD] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#43206F] text-white">
            <HeartHandshake className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Every skill can make a difference
            </h4>

            <p className="leading-7 text-[#5E5752]">
              Whether you can volunteer regularly, occasionally, or offer a
              specific professional skill, we'd love to hear from you and
              explore how you can help.
            </p>
          </div>
        </div>
      </div>
      {/* Closing text */}
      <div className="space-y-3">
        <p className="leading-7 text-[#5E5752]">
          Have a skill, profession, or experience you'd like to offer?
        </p>

        <p className="leading-7 text-[#5E5752]">We'd love to hear from you.</p>
      </div>
      {/* CTA */}
      <button
        onClick={onContinue}
        className="w-full rounded-2xl bg-[#43206F] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#341857] active:scale-[0.99]"
      >
        Volunteer with Goshen
      </button>
    </div>
  );
}
