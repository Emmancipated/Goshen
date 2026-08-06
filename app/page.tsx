import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  ChevronDownIcon,
  ChildIcon,
  CompassIcon,
  EyeIcon,
  HealthIcon,
  HeartIcon,
  HouseIcon,
  PhoneIcon,
  RestoreIcon,
  ShieldIcon,
  SparklesIcon,
  UsersIcon,
  WhatsAppIcon,
} from "@/components/icons";

const QUICK_HELP = [
  {
    href: "/get-help",
    title: "I need help for myself",
    body: "Find safe steps, confidential helplines and how to reach a shelter near you.",
    cta: "See your options",
  },
  {
    href: "/get-help#worried",
    title: "I'm worried about someone",
    body: "Learn how to support a friend, sister, mother or colleague safely.",
    cta: "Learn more",
  },
  {
    href: "/get-help#referral",
    title: "I want to make a referral",
    body: "Professionals and community members can refer a survivor for shelter and support.",
    cta: "Find out more",
  },
];

const SERVICES = [
  {
    Icon: HouseIcon,
    title: "Temporary Shelter",
    body: "A safe, confidential home for women and children escaping violence — accommodation, three meals daily, clothing and essentials.",
  },
  {
    Icon: HeartIcon,
    title: "Emotional Restoration",
    body: "Counselling and compassionate support to help survivors heal in mind, body and soul.",
  },
  {
    Icon: RestoreIcon,
    title: "Physical Restoration",
    body: "Time, care and a calm environment to recover physically and rebuild strength and confidence.",
  },
  {
    Icon: SparklesIcon,
    title: "Skills Acquisition",
    body: "Tailoring, culinary and other vocational training so survivors can become self-sufficient.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Employment Support",
    body: "Help securing suitable jobs — including placements at schools, companies and government agencies.",
  },
  {
    Icon: CompassIcon,
    title: "Reintegration",
    body: "Steady support to re-enter society and live peaceful, independent lives away from violence.",
  },
  {
    Icon: ChildIcon,
    title: "Education for Children",
    body: "Enrolling children in new schools quickly to protect their education and emotional wellbeing.",
  },
  {
    Icon: HealthIcon,
    title: "Healthcare Support",
    body: "Access to healthcare so women and children can recover and stay well throughout their stay.",
  },
];

const WARNING_SIGNS = [
  "Preventing you from seeing friends, family or colleagues",
  "Controlling your money, phone or movement",
  "Constant threats, shouting, insults and humiliation",
  "Pushing, slapping, hitting or using force against you",
  "Pressuring or forcing you into sex",
  "Checking your phone, emails or location without consent",
  "Making you feel worthless or that 'it's your fault'",
  "Threatening to hurt you, your children or themselves",
];

const NEWS = [
  {
    category: "Shelter",
    image: "/images/community.jpg",
    title: "A 30-bed refuge, supporting up to 70 residents",
    excerpt:
      "Goshen Shelters provides safe accommodation and protection for women and children escaping domestic violence and sexual abuse.",
  },
  {
    category: "Restoration",
    image: "/images/about.jpg",
    title: "Families rebuilt, one step at a time",
    excerpt:
      "Ten women were reconciled with their husbands, and two women were safely reunited with their parents.",
  },
  {
    category: "Justice",
    image: "/images/impact.jpg",
    title: "Accountability and the pursuit of justice",
    excerpt:
      "With support from DVRS, some perpetrators were arrested and charged — ten were arraigned and imprisoned.",
  },
];

const STATS = [
  { value: 174, label: "women admitted to the shelter" },
  { value: 265, label: "children supported" },
  { value: 30, label: "bed shelter, supporting up to 70 residents" },
  { value: 10, label: "women reconciled with their husbands" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-night-900 text-cream-50">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="animate-float-slow absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
          style={{ animationDelay: "2.5s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.12),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-night-600 bg-night-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            <ShieldIcon className="h-4 w-4 text-gold-400" />
            A refuge for women &amp; children
          </p>
          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Love shouldn&rsquo;t hurt.
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-xl text-lg leading-8 text-white/70"
            style={{ animationDelay: "200ms" }}
          >
            We are Goshen Shelters — supporting women and children affected by domestic violence to live free from
            control, fear and harm. You deserve safety, healing and a new beginning.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
            <Link
              href="/get-help"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-night-900 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-400"
            >
              I need help for myself
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/get-help#worried"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-night-500 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-night-700"
            >
              I&rsquo;m worried about someone
            </Link>
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 rounded-2xl border border-gold-500/40 bg-gold-500/10 p-5 sm:flex-row sm:items-center sm:justify-between"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-night-900">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-gold-300">
                  A delayed exit can lead to an untimely death.
                </p>
                <a href="tel:+2348027775001" className="font-display text-2xl font-semibold text-white hover:text-gold-300">
                  0802 777 5001
                </a>
              </div>
            </div>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400 px-5 py-2.5 text-sm font-bold text-gold-400 transition-colors hover:bg-gold-500 hover:text-night-900"
            >
              Exit site
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "250ms" }}>
          <div className="relative overflow-hidden rounded-3xl border border-night-700 shadow-2xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hero.jpg"
                alt="Women joining their hands together in unity and hope"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg leading-8 text-white/95">
                  &ldquo;A world where every woman and child lives in safety, dignity and hope.&rdquo;
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/60">
                  God&rsquo;s Home for Women Foundation — our vision
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-night-700 bg-night-800/50 p-4 transition-colors hover:border-gold-500/50">
              <UsersIcon className="h-6 w-6 text-gold-400" />
              <p className="mt-3 font-display text-2xl font-semibold text-cream-50">174 women</p>
              <p className="mt-1 text-xs leading-5 text-white/60">admitted to the shelter</p>
            </div>
            <div className="rounded-2xl border border-night-700 bg-night-800/50 p-4 transition-colors hover:border-gold-500/50">
              <PhoneIcon className="h-6 w-6 text-gold-400" />
              <p className="mt-3 font-display text-2xl font-semibold text-cream-50">0802 777 5001</p>
              <p className="mt-1 text-xs leading-5 text-white/60">Confidential, 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#welcome"
        aria-label="Scroll to explore"
        className="animate-scroll-cue absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-gold-500/40 bg-night-800/60 p-2.5 text-gold-400 transition-colors hover:bg-gold-500 hover:text-night-900 md:block"
      >
        <ChevronDownIcon className="h-4 w-4" />
      </a>
    </section>
  );
}

function QuickHelp() {
  return (
    <section id="welcome" className="scroll-mt-24 bg-cream-50">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-3">
        {QUICK_HELP.map(({ href, title, body, cta }, i) => (
          <Reveal key={title} delay={i * 80}>
            <Link
              href={href}
              className="group flex h-full flex-col rounded-2xl border border-night-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-xl font-semibold text-gold-700">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-night-600">{body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-700 group-hover:text-gold-600">
                {cta}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Domestic violence services we provide"
          description="Whatever you are facing, we will meet you where you are — with kindness, confidentiality and practical help."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 4) * 70}>
              <div
                className="group h-full rounded-2xl border border-night-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-all group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-night-900">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-night-600">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center" delay={120}>
          <p className="text-center">
            <span className="text-night-600">Not sure what you need?</span>{" "}
            <Link href="/contact" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600">
              Send us a message or call us
            </Link>{" "}
            — we will listen without judgement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SpeakInPerson() {
  return (
    <section className="bg-night-900 text-cream-50">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Prefer to speak to someone?</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Talk to us confidentially — by phone, WhatsApp or in person
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Our trained team can help you plan for your safety, answer questions about the law and connect you with
            legal, housing and family support — all in one place.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+2348027775001"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-night-900 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-400"
          >
            <PhoneIcon className="h-4 w-4" />
            0802 777 5001
          </a>
          <a
            href="https://wa.me/2348027775001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-night-500 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-night-700"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function AboutImpact() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Who we are</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            We are God&rsquo;s Home for Women Foundation
          </h2>
          <p className="mt-5 text-base leading-7 text-night-600">
            We are a registered Nigerian NGO, established in July 2015 by God&rsquo;s Chosen Women Fellowship to
            provide refuge and support for women and children affected by domestic violence. We operate Goshen
            Shelters — a 30-bed home in Lagos, supporting up to 70 residents through shared accommodation.
          </p>
          <p className="mt-4 text-base leading-7 text-night-600">
            Our name comes from Goshen — the place of refuge where a family was kept safe and given room to thrive. We
            offer a safe bed, a listening ear, restoration and practical support, helping women and children move from
            fear to freedom, one step at a time.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-night-900 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-400"
            >
              Read our story
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/about#impact"
              className="inline-flex items-center gap-2 rounded-full border border-night-300 px-6 py-3 text-sm font-semibold text-night-600 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-white"
            >
              See our impact
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 90} className="rounded-2xl border border-night-100 bg-white p-6 text-center shadow-sm transition-colors hover:border-gold-300">
              <p className="font-display text-3xl font-semibold text-gold-700">
                <StatCounter value={value} />
              </p>
              <p className="mt-2 text-sm leading-5 text-night-600">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WarningSigns() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Trust your gut"
          title="Is this domestic violence?"
          description="Abuse is never your fault. If any of these feel familiar, you are not alone and you deserve help."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {WARNING_SIGNS.map((sign, i) => (
            <Reveal key={sign} delay={(i % 2) * 60} className="flex items-start gap-3 rounded-xl border border-night-100 bg-cream-50 p-4 transition-colors hover:border-gold-300">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-night-900">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm leading-6 text-night-900">{sign}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-cream-100 p-7 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-night-900">
              <EyeIcon className="h-5 w-5" />
            </span>
            <p className="max-w-md text-sm leading-6 text-night-900">
              <span className="font-semibold">Not sure?</span> It can be confusing and frightening. A confidential call
              with us can help you make sense of what&rsquo;s happening.
            </p>
          </div>
          <Link
            href="/get-help"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-night-900 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-400"
          >
            Talk to someone
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="What your support makes possible" title="Impact in action" align="left" />
          <Link href="/about#impact" className="text-sm font-bold text-gold-700 underline underline-offset-4 hover:text-gold-600">
            See our impact
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {NEWS.map(({ category, image, title, excerpt }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-night-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-900/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-600">{category}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-7 text-gold-700 group-hover:text-gold-700">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-night-600">{excerpt}</p>
                  <Link href="/about#impact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-700">
                    Read more
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCta() {
  return (
    <section className="bg-cream-100">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Partner with us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Every donation changes lives</h2>
          <p className="mt-3 text-base leading-7 text-night-600">
            Join us as a donor, partner or advocate. Your support funds shelter, meals, healthcare, education and the
            skills that help survivors rebuild their lives.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-night-900 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-400"
          >
            Donate now
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-night-300 px-7 py-3 text-sm font-semibold text-night-600 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-white"
          >
            Partner with us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function DonateCta() {
  return (
    <section className="bg-night-900 text-cream-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-400">
            <HeartIcon className="h-4 w-4" />
            Donate
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Your kindness makes it possible
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Beds in a safe home, helpline calls, counselling and help navigating the courts — none of it is free. Every
            naira you give goes somewhere it is needed.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-night-700 bg-night-800/60 p-6 transition-colors hover:border-gold-500/40">
            <p className="text-sm font-semibold text-cream-50">What your gift provides</p>
            <ul className="mt-4 space-y-3">
              {[
                ["₦5,000", "a warm meal and essentials for a mother and child for a week"],
                ["₦25,000", "a safe night's shelter for a family fleeing danger"],
                ["₦100,000", "two weeks of trauma counselling for a survivor"],
              ].map(([amount, benefit]) => (
                <li key={amount} className="flex items-center gap-3 rounded-xl bg-night-900/60 px-4 py-3 transition-colors hover:bg-night-900">
                  <span className="shrink-0 font-display text-base font-semibold text-gold-400">{amount}</span>
                  <span className="text-sm leading-5 text-white/70">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/donate"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-night-900 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-400"
            >
              Make a donation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <QuickHelp />
      <Services />
      <SpeakInPerson />
      <AboutImpact />
      <WarningSigns />
      <News />
      <PartnerCta />
      <DonateCta />
    </>
  );
}
