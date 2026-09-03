// import type { Metadata } from "next";
// import { PageHeader } from "@/components/page-header";
// import { Reveal } from "@/components/reveal";
// import { SectionHeading } from "@/components/section-heading";
// import { ContactForm } from "@/app/contact/contact-form";
// import { HelpButton } from "@/components/help-button";
// import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

// export const metadata: Metadata = {
//   title: "Contact",
//   description:
//     "Contact Goshen Shelters for confidential support, referrals, volunteering or partnership enquiries.",
// };

// const CONTACT_CARDS = [
//   {
//     Icon: PhoneIcon,
//     title: "Helpline (24/7)",
//     lines: ["0802 777 5001", "In an emergency: 112"],
//     href: "tel:+2348027775001",
//   },
//   {
//     Icon: WhatsAppIcon,
//     title: "WhatsApp",
//     lines: ["0802 777 5001"],
//     href: "https://wa.me/2348027775001",
//     external: true,
//   },
//   {
//     Icon: MailIcon,
//     title: "Email",
//     lines: ["goshenshelters2026@gmail.com"],
//     href: "mailto:goshenshelters2026@gmail.com",
//   },
//   {
//     Icon: MapPinIcon,
//     title: "Head office",
//     lines: ["45C Sobo Arobiodu Close", "GRA Ikeja, Lagos — 102105"],
//     href: "/about",
//   },
// ];

// export default function ContactPage() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Contact us"
//         title="We're here for you"
//         description="Whether you need help, want to refer someone, or would love to support our work — reach out. Everything is confidential."
//       />

//       <section className="bg-cream-50">
//         <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {CONTACT_CARDS.map(({ Icon, title, lines, href, external }, i) => (
//               <Reveal key={title} delay={(i % 4) * 70}>
//                 <a
//                   href={href}
//                   {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//                   className="group block h-full rounded-2xl border border-night-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
//                 >
//                   <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-white">
//                     <Icon className="h-5 w-5" />
//                   </span>
//                   <h3 className="mt-4 font-display text-lg font-semibold text-gold-700">{title}</h3>
//                   {lines.map((line) => (
//                     <p key={line} className="mt-1 text-sm leading-6 text-night-600">
//                       {line}
//                     </p>
//                   ))}
//                 </a>
//               </Reveal>
//             ))}
//           </div>

//           <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//             <Reveal>
//               <div>
//                 <SectionHeading
//                   eyebrow="Send a message"
//                   title="We usually reply within 24 hours"
//                   description="Please share only what you are comfortable with. For urgent help, always call us instead."
//                   align="left"
//                 />
//                 <div className="mt-6 flex items-start gap-3 rounded-2xl bg-cream-100 p-5 transition-colors hover:border hover:border-gold-300">
//                   <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
//                   <p className="text-sm leading-6 text-night-900">
//                     Our team is available <span className="font-semibold">24 hours, 7 days a week</span> — including
//                     nights, weekends and public holidays. You are never alone.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>
//             <Reveal delay={100}>
//               <ContactForm />
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white">
//         <Reveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
//           <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-gold-500/40 bg-night-950 p-8 text-cream-50 sm:flex-row sm:items-center sm:p-10">
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">24/7 support</p>
//               <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
//                 Need to talk to someone now?
//               </h2>
//               <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
//                 A trained member of our team is available at any hour — nights, weekends and holidays. Everything you
//                 share is confidential.
//               </p>
//             </div>
//             <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
//               <HelpButton
//                 title="Get Help Now"
//                 intro="A trained member of our team is available 24/7. Choose how you would like to reach us — everything is confidential."
//                 className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
//               >
//                 Get Help Now
//               </HelpButton>
//               <a
//                 href="tel:+2348027775001"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400 px-7 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
//               >
//                 <PhoneIcon className="h-4 w-4" />
//                 0802 777 5001
//               </a>
//             </div>
//           </div>
//         </Reveal>
//       </section>
//     </>
//   );
// }

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { HelpButton } from "@/components/help-button";
import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Goshen Shelters for confidential support, referrals, volunteering or partnership enquiries.",
  openGraph: {
    title: "Contact Us",
    description:
      "Contact Goshen Shelters for confidential support, referrals, volunteering or partnership enquiries.",
    images: [
      {
        url: "/images/help.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Goshen Shelters — we are here for you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Contact Goshen Shelters for confidential support, referrals, volunteering or partnership enquiries.",
    images: ["/images/help.jpg"],
  },
};

const CONTACT_CHANNELS = [
  {
    label: "Helpline (24/7)",
    lines: ["0802 777 5001", "In an emergency: 112"],
    href: "tel:+2348027775001",
    cta: "Call now",
    external: false,
  },
  {
    label: "WhatsApp",
    lines: ["0802 777 5001"],
    href: "https://wa.me/2348027775001",
    cta: "Message on WhatsApp",
    external: true,
  },
  {
    label: "Email",
    lines: ["goshenshelters2026@gmail.com"],
    href: "mailto:goshenshelters2026@gmail.com",
    cta: "Send email",
    external: false,
  },
  {
    label: "Head office",
    lines: ["45C Sobo Arobiodu Close", "GRA Ikeja, Lagos — 102105"],
    href: null,
    cta: null,
    external: false,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-cream-50">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-cream-50">
        <div className="grid items-stretch lg:grid-cols-[55%_45%]">
          <div className="relative min-h-95 sm:min-h-120 lg:min-h-155">
            <Image
              // src="/images/about.jpg"
              src="/images/00_MASTER_Original_1536x1024.jpg"
              alt="A welcoming moment at Goshen Shelters"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,transparent_50%,rgba(231,222,217,0.18)_62%,rgba(231,222,217,0.48)_72%,rgba(231,222,217,0.82)_86%,#e7ded9_100%)]" />
            <div className="absolute inset-0 lg:hidden bg-[linear-gradient(to_bottom,transparent_55%,rgba(231,222,217,0.18)_68%,rgba(231,222,217,0.72)_88%,#e7ded9_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#e7ded9_0%,rgba(231,222,217,0.08)_24%,transparent_52%)]" />
          </div>

          <div className="relative flex items-center px-6 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-10 lg:px-12 lg:py-20">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">
                  Contact us
                </p>

                <h1 className="mt-5 font-display text-4xl font-semibold leading-[0.94] tracking-tight text-night-950 sm:text-5xl lg:text-[3.4rem]">
                  We&apos;re here
                  <br />
                  for you.
                </h1>

                <div className="mt-7 h-px w-20 bg-gold-400" />

                <p className="mt-7 max-w-lg text-base leading-7 text-night-600 sm:text-lg sm:leading-8">
                  Whether you need help, want to refer someone, or would love to
                  support our work — reach out. Everything is confidential.
                </p>

                <p className="mt-5 max-w-lg text-sm leading-6 text-night-500">
                  If you are in immediate danger, call{" "}
                  <a
                    href="tel:112"
                    className="font-semibold text-gold-700 underline underline-offset-2"
                  >
                    112
                  </a>{" "}
                  or our helpline on{" "}
                  <a
                    href="tel:+2348027775001"
                    className="font-semibold text-gold-700 underline underline-offset-2"
                  >
                    0802 777 5001
                  </a>
                  .
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#send-message"
                    className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  >
                    Message us
                  </a>
                  <a
                    href="#how-to-reach-us-mobile"
                    className="inline-flex items-center justify-center rounded-full border border-gold-400 px-7 py-3.5 text-sm font-semibold text-gold-700 transition-colors hover:bg-gold-500 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500 lg:hidden uppercase"
                  >
                    Contact us
                  </a>
                  <a
                    href="#how-to-reach-us"
                    className="lg:inline-flex items-center justify-center rounded-full border border-gold-400 px-7 py-3.5 text-sm font-semibold text-gold-700 transition-colors hover:bg-gold-500 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500 hidden uppercase"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT CHANNELS */}
      <section
        className="border-y border-cream-200 bg-white"
        id="how-to-reach-us"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                How to reach us
              </p>

              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-night-950 sm:text-4xl">
                Speak with us in the way that feels safest for you.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-night-600">
                Our team is available around the clock. You can call, message,
                email or visit our head office during working hours.
              </p>

              <div
                className="mt-8 border-l-2 border-gold-400 pl-5"
                id="how-to-reach-us-mobile"
              >
                <p className="text-sm leading-6 text-night-600">
                  Our team is available{" "}
                  <span className="font-semibold text-night-900">
                    24 hours a day, 7 days a week
                  </span>{" "}
                  — including nights, weekends and public holidays. You are
                  never alone.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-cream-200">
              {CONTACT_CHANNELS.map((channel, index) => (
                <Reveal key={channel.label} delay={index * 60}>
                  <article className="grid gap-4 border-b border-cream-200 py-7 sm:grid-cols-[180px_1fr] sm:items-start sm:gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-night-950">
                        {channel.label}
                      </h3>
                    </div>

                    <div>
                      {channel.lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm leading-6 text-night-600"
                        >
                          {line}
                        </p>
                      ))}

                      {channel.href && channel.cta ? (
                        <Link
                          href={channel.href}
                          {...(channel.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="mt-3 inline-flex text-sm font-semibold text-gold-700 underline underline-offset-4 transition-colors hover:text-gold-600"
                        >
                          {channel.cta}
                        </Link>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="send-message" className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                Send a message
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-night-950 sm:text-4xl">
                We usually reply within 24 hours.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-night-600">
                Please share only what you are comfortable with. For urgent
                help, always call us instead of using this form.
              </p>

              {/* <div className="mt-8 space-y-4 border-t border-cream-200 pt-8">
                <p className="font-display text-xl leading-8 text-night-900">
                  If it is not safe to use this form right now, call us
                  directly.
                </p>
                <p className="text-sm leading-6 text-night-600">
                  You can also press the site&apos;s{" "}
                  <span className="font-semibold text-night-900">Exit</span>{" "}
                  button and contact us later when it is safer.
                </p>
              </div> */}
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* URGENT HELP */}
      <section className="bg-night-950 text-cream-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                  24/7 support
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Need to talk to someone now?
                </h2>

                <p className="mt-5 text-base leading-7 text-cream-50/75">
                  A trained member of our team is available at any hour —
                  nights, weekends and holidays. Everything you share is
                  confidential.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <HelpButton
                  title="Get Help Now"
                  intro="A trained member of our team is available 24/7. Choose how you would like to reach us — everything is confidential."
                  className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                >
                  Get help now
                </HelpButton>

                <a
                  href="tel:+2348027775001"
                  className="inline-flex items-center justify-center rounded-full border border-gold-400 px-7 py-3.5 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                >
                  0802 777 5001
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-10 sm:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
              Confidential support
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-night-950 sm:text-4xl">
              You do not have to face this alone.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-night-600">
              Goshen Shelters exists to provide women and children with safety,
              dignity and hope. However you choose to reach us, you will be met
              with care — not judgement.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
