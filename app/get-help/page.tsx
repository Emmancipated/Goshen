import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { DonateButton } from "@/components/donate-button";
import {
  AlertIcon,
  ArrowRightIcon,
  EyeIcon,
  LockIcon,
  PhoneIcon,
  ShieldIcon,
  WhatsAppIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "If you are experiencing domestic violence, find safe steps, confidential helplines and how to reach a Goshen Shelters refuge. We believe you. You are not alone.",
};

const HELPLINES = [
  {
    name: "Emergency — Police",
    number: "112",
    note: "Free from any network, 24/7",
    primary: true,
  },
  {
    name: "Goshen 24/7 Helpline",
    number: "0802 777 5001",
    note: "Confidential, trained listeners",
  },
  {
    name: "Lagos DSVRT",
    number: "0800 011 1333",
    note: "Domestic & sexual violence response",
  },
  {
    name: "NAPTIP",
    number: "0703 000 0203",
    note: "Anti-trafficking & GBV agency",
  },
];

const STEPS = [
  {
    title: "1 · Reach out",
    body: "Call, message or WhatsApp us — any hour. It is confidential and you are in control of what happens next.",
  },
  {
    title: "2 · Plan your safety",
    body: "Together we make a safety plan for you and your children, whatever you decide to do.",
  },
  {
    title: "3 · Get the help you need",
    body: "We connect you with shelter, counselling, police and legal support — as much or as little as you want.",
  },
];

const SIGNS = [
  "They isolate you from friends, family or your place of worship",
  "They control your money, phone or where you go",
  "They shout, insult or humiliate you regularly",
  "They threaten you, your children or themselves",
  "They have pushed, slapped or hurt you",
  "They pressure or force you into sex",
  "They make you feel it is always your fault",
];

export default function GetHelpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get help"
        title="We believe you. You are not alone."
        description="There are safe ways to get help — for yourself or for someone you care about. Start here, at your own pace."
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="rounded-2xl border-2 border-gold-500/50 bg-night-900 p-6 text-cream-50 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
                  <AlertIcon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-gold-400">
                    A delayed exit can lead to an untimely death.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    If you are in immediate danger, call{" "}
                    <a href="tel:112" className="font-bold text-gold-400 underline underline-offset-2">112</a> — it is
                    free from any network and connects you to the police. If you cannot speak, call 112 and{" "}
                    <span className="font-semibold">cough, tap or press any button</span> so the operator knows you need
                    help, then leave the line open. Or call Goshen on{" "}
                    <a href="tel:+2348027775001" className="font-bold text-gold-400 underline underline-offset-2">
                      0802 777 5001
                    </a>{" "}
                    — confidential, 24/7.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="tel:112"
                      className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gold-600"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Call 112 now
                    </a>
                    <a
                      href="tel:+2348027775001"
                      className="inline-flex items-center gap-2 rounded-full border border-gold-400 px-5 py-2.5 text-sm font-bold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      0802 777 5001
                    </a>
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-night-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-night-700"
                    >
                      Exit site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="relative mt-10 h-52 overflow-hidden rounded-2xl">
            <Image
              src="/images/help.jpg"
              alt="A hand reaching out in reassurance and support"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-night-950/70 via-night-950/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <p className="max-w-sm px-8 font-display text-xl font-semibold leading-8 text-cream-50">
                Wherever you are in this journey, there is a kind voice waiting on the other end of the line.
              </p>
            </div>
          </Reveal>

          <div id="helplines" className="mt-16 scroll-mt-24">
            <SectionHeading
              eyebrow="Helplines"
              title="Numbers you can call"
              description="All calls are free and confidential. Save the ones that matter to you."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HELPLINES.map(({ name, number, note, primary }, i) => (
                <Reveal key={name} delay={(i % 4) * 70}>
                  <a
                    href={`tel:${number.replace(/\s/g, "")}`}
                    className={`flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-md ${
                      primary
                        ? "border-night-900 bg-gold-500 text-white"
                        : "border-night-100 bg-white text-night-900"
                    }`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wider ${primary ? "text-night-700" : "text-gold-600"}`}>
                      {name}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold">{number}</p>
                    <p className={`mt-2 text-xs leading-5 ${primary ? "text-night-700/80" : "text-night-600/80"}`}>{note}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="steps" className="mt-16 scroll-mt-24">
            <SectionHeading
              eyebrow="How it works"
              title="Three simple steps to get help"
              description="However you reach out, you decide how far you want to take it. Nothing happens without your consent."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STEPS.map(({ title, body }, i) => (
                <Reveal key={title} delay={i * 90}>
                  <div className="group h-full rounded-2xl border border-night-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 font-display text-base font-semibold text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                      {title.split(" ")[0]}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-gold-700">{title.split(" · ")[1]}</h3>
                    <p className="mt-2 text-sm leading-6 text-night-600">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:+2348027775001"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
              >
                <PhoneIcon className="h-4 w-4" />
                0802 777 5001
              </a>
              <a
                href="https://wa.me/2348027775001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-night-300 px-7 py-3.5 text-sm font-semibold text-night-600 transition-colors hover:bg-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-night-300 px-7 py-3.5 text-sm font-semibold text-night-600 transition-colors hover:bg-white"
              >
                Request a call back
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="worried" className="scroll-mt-24 bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="For loved ones"
            title="I'm worried about someone"
            description="You may have noticed changes in a friend, sister, colleague or neighbour. You are not powerless — support can begin with you."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="group h-full rounded-2xl border border-night-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-gold-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-white transition-transform group-hover:scale-110">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  What you can do
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-night-600">
                  <li>· Let them know you believe them and it is not their fault</li>
                  <li>· Ask gently, in private, and listen without judging</li>
                  <li>· Offer to look up numbers and go with them if they want</li>
                  <li>· Respect their decisions — leaving takes time and planning</li>
                  <li>· Keep supporting them even if they stay for now</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="group h-full rounded-2xl border border-night-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-gold-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-night-900 text-gold-400 transition-transform group-hover:scale-110">
                    <AlertIcon className="h-4 w-4" />
                  </span>
                  What to avoid
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-night-600">
                  <li>· Don&rsquo;t confront the abuser — it can put her at greater risk</li>
                  <li>· Don&rsquo;t blame or question her choices</li>
                  <li>· Don&rsquo;t share details on social media or with others</li>
                  <li>· Don&rsquo;t promise secrecy if someone is in danger</li>
                  <li>· Don&rsquo;t try to handle it alone — call a helpline for advice</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-night-900 p-7 text-cream-50 sm:flex-row">
              <p className="max-w-xl text-sm leading-6 text-white/70">
                Not sure what to say? Call us and a trained advisor can talk you through it before you reach out to them.
              </p>
              <a
                href="tel:+2348027775001"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-600"
              >
                <PhoneIcon className="h-4 w-4" />
                0802 777 5001
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="signs" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Trust your gut"
            title="Is this domestic violence?"
            description="Abuse is about control. If you see more than one of these in a relationship, it may be abuse."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {SIGNS.map((sign, i) => (
              <Reveal key={sign} delay={(i % 2) * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-night-100 bg-cream-50 p-4 transition-colors hover:border-gold-300">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-6 text-night-900">{sign}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="referral" className="scroll-mt-24 bg-night-900 text-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">For professionals</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  I want to make a referral
                </h2>
                <p className="mt-4 text-base leading-7 text-white/70">
                  Health workers, teachers, police officers, faith leaders and social workers can refer women and children
                  in danger to our refuge. Our team will assess the situation and find the right support.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-night-700 bg-night-800/60 p-7">
                <p className="text-sm font-semibold text-cream-50">To make a referral:</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                  <li className="flex items-start gap-3">
                    <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    Call our referral line 0802 777 5001
                  </li>
                  <li className="flex items-start gap-3">
                    <LockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    Or use the{" "}
                    <Link href="/contact" className="font-semibold text-gold-400 underline underline-offset-2">
                      referral form
                    </Link>
                  </li>
                </ul>
                <p className="mt-5 rounded-xl bg-night-900/60 p-3 text-xs leading-5 text-white/60">
                  We only proceed with a survivor&rsquo;s consent unless a life is in danger.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="cover-your-tracks" className="scroll-mt-24 bg-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Stay safe online"
            title="Cover your tracks"
            description="If someone checks your phone, tablet or computer, here are ways to browse more safely."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: LockIcon,
                title: "Use a safer device",
                body: "If you can, use a computer at a library, workplace, a friend's house or a public cybercafé to visit sites like ours.",
              },
              {
                Icon: EyeIcon,
                title: "Browse privately",
                body: "Use incognito or private browsing, and remember that phones with tracking apps may still be monitored.",
              },
              {
                Icon: ShieldIcon,
                title: "Clear your history",
                body: "Delete this site from your browser history and search suggestions. Log out of shared accounts.",
              },
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-night-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-night-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-night-600/80">
            If it is safer, skip the internet and call us:{" "}
            <a href="tel:+2348027775001" className="font-bold text-gold-700 underline underline-offset-4">
              0802 777 5001
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6">
          <p className="flex items-center gap-2 text-sm text-night-600">
            <EyeIcon className="h-4 w-4 text-gold-600" />
            Remember — your safety comes first. You can press{" "}
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-night-900 underline underline-offset-4"
            >
              Exit site
            </a>{" "}
            at any time.
          </p>
          <DonateButton
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gold-600"
            icon="arrow"
          >
            Help others find safety
          </DonateButton>
        </Reveal>
      </section>
    </>
  );
}
