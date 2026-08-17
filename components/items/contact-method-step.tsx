"use client";

import {
  ArrowRight,
  MessageCircle,
  Phone,
  Clock,
  ShieldCheck,
} from "lucide-react";

type ContactMethodStepProps = {
  onWhatsApp: () => void;
  onCall: () => void;
};

export function ContactMethodStep({
  onWhatsApp,
  onCall,
}: ContactMethodStepProps) {
  return (
    <div className="space-y-8">
      {/* Intro */}{" "}
      <div className="space-y-4">
        {" "}
        <p className="text-[1.05rem] leading-8 text-[#5E5752]">
          Thank you for considering a practical donation.{" "}
        </p>
        {/* <p className="leading-8 text-[#5E5752]">
          Our team will let you know what items are currently most needed and
          help arrange a convenient time for delivery or collection.
        </p> */}
      </div>
      {/* WhatsApp card */}
      <button
        onClick={onWhatsApp}
        className="group w-full rounded-[28px] border border-[#D8F0E2] bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white">
              <MessageCircle className="h-7 w-7" />
            </div> */}

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
                  Chat on WhatsApp
                </h3>

                {/* <span className="rounded-full bg-[#E8F8EE] px-2.5 py-1 text-xs font-semibold text-[#1F8F4C]">
                  Fastest option
                </span> */}
              </div>

              <p className="leading-7 text-[#5E5752]">
                Message us directly and we'll help you arrange your donation,
                answer questions, and coordinate delivery or collection.
              </p>

              {/* <div className="flex items-center gap-2 pt-1 text-sm text-[#1F8F4C]">
                <Clock className="h-4 w-4" />
                <span>Quick responses during the day</span>
              </div> */}
            </div>
          </div>

          <ArrowRight className="mt-1 h-5 w-5 text-[#25D366] transition-transform group-hover:translate-x-1" />
        </div>
      </button>
      {/* Phone card */}
      <button
        onClick={onCall}
        className="group w-full rounded-[28px] border border-[#E5DDD3] bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#43206F] hover:shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#43206F] text-white">
              <Phone className="h-7 w-7" />
            </div> */}

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-[#2F1B69]">
                Call us
              </h3>

              <p className="leading-7 text-[#5E5752]">
                Speak directly with a member of our team to discuss your
                donation, ask questions, and arrange the best way to help.
              </p>

              {/* <div className="flex items-center gap-2 pt-1 text-sm text-[#43206F]">
                <Clock className="h-4 w-4" />
                <span>Available during support hours</span>
              </div> */}
            </div>
          </div>

          <ArrowRight className="mt-1 h-5 w-5 text-[#43206F] transition-transform group-hover:translate-x-1" />
        </div>
      </button>
      {/* Reassurance panel */}
      <div className="rounded-3xl border border-[#E5DDD3] bg-white p-6">
        <div className="flex items-start gap-4">
          {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F3EC]">
            <ShieldCheck className="h-5 w-5 text-[#2E7D32]" />
          </div> */}

          <div className="space-y-2">
            <h4 className="font-semibold text-[#2F1B69]">
              Your enquiry is handled with care
            </h4>

            <p className="leading-7 text-[#5E5752]">
              Our team will guide you through the donation process and provide
              confidential delivery or collection arrangements that protect the
              safety and privacy of the women and children we support.
            </p>
          </div>
        </div>
      </div>
      {/* Contact note */}
      {/* <div className="rounded-2xl border border-[#F0D6D6] bg-[#FFF7F7] p-5 text-center">
        <p className="text-sm leading-6 text-[#5E5752]">
          If you're donating a large quantity of items, furniture, appliances,
          or specialised supplies, please contact us first so we can prepare and
          coordinate the most helpful arrangement.
        </p>
      </div> */}
    </div>
  );
}
