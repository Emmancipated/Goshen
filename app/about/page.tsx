// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { PageHeader } from "@/components/page-header";
// import { Reveal } from "@/components/reveal";
// import { SectionHeading } from "@/components/section-heading";
// import { StatCounter } from "@/components/stat-counter";
// import { HelpButton } from "@/components/help-button";
// import { DonateButton } from "@/components/donate-button";
// import {
//   ArrowRightIcon,
//   BriefcaseIcon,
//   ChildIcon,
//   CompassIcon,
//   EyeIcon,
//   HealthIcon,
//   HeartIcon,
//   HouseIcon,
//   RestoreIcon,
//   ScaleIcon,
//   ShieldIcon,
//   SparklesIcon,
//   UsersIcon,
// } from "@/components/icons";

// export const metadata: Metadata = {
//   title: "About Us",
//   description:
//     "God's Home for Women Foundation is a registered Nigerian NGO operating Goshen Shelters — a safe place and a new beginning for women and children escaping domestic violence and sexual abuse.",
// };

// const VALUES = [
//   {
//     Icon: HeartIcon,
//     title: "Compassion",
//     body: "We respond to every woman and child with empathy, kindness, patience and understanding.",
//   },
//   {
//     Icon: ShieldIcon,
//     title: "Safety",
//     body: "We are committed to a secure, confidential and supportive environment for women and children seeking refuge.",
//   },
//   {
//     Icon: UsersIcon,
//     title: "Dignity",
//     body: "We recognise the worth of every woman and child and treat each person with respect and honour.",
//   },
//   {
//     Icon: SparklesIcon,
//     title: "Faith",
//     body: "Our work is inspired by God's love, compassion and desire for healing, restoration and hope.",
//   },
//   {
//     Icon: ScaleIcon,
//     title: "Integrity",
//     body: "We act honestly, responsibly and transparently, accountable to survivors, supporters and partners.",
//   },
//   {
//     Icon: CompassIcon,
//     title: "Empowerment",
//     body: "We support women to regain confidence, develop skills and rebuild their lives.",
//   },
//   {
//     Icon: RestoreIcon,
//     title: "Restoration",
//     body: "We are committed to emotional, physical and spiritual healing toward a safer, more stable future.",
//   },
// ];

// const SERVICES = [
//   {
//     Icon: HouseIcon,
//     title: "Temporary Shelter",
//     body: "Safe accommodation with three meals daily, clothing and essentials for women and children.",
//   },
//   {
//     Icon: HeartIcon,
//     title: "Emotional Restoration",
//     body: "Counselling and compassionate support to help survivors heal in mind, body and soul.",
//   },
//   {
//     Icon: RestoreIcon,
//     title: "Physical Restoration",
//     body: "Care and a calm environment to recover physically and rebuild strength and confidence.",
//   },
//   {
//     Icon: SparklesIcon,
//     title: "Skills Acquisition Support",
//     body: "Tailoring, culinary and other vocational training for self-sufficiency.",
//   },
//   {
//     Icon: BriefcaseIcon,
//     title: "Employment Support",
//     body: "Help securing suitable employment, including at schools, companies and government agencies.",
//   },
//   {
//     Icon: CompassIcon,
//     title: "Reintegration",
//     body: "Support to re-enter society and live peaceful, independent lives away from violence.",
//   },
//   {
//     Icon: ChildIcon,
//     title: "Education Support for Children",
//     body: "Enrolling children in new schools quickly to protect their education and emotional wellbeing.",
//   },
//   {
//     Icon: HealthIcon,
//     title: "Healthcare Support",
//     body: "Access to healthcare so women and children can recover and stay well throughout their stay.",
//   },
// ];

// const IMPACT_STATS = [
//   { value: 174, label: "women admitted to the shelter" },
//   { value: 265, label: "children supported" },
//   { value: 30, label: "bed shelter, up to 70 residents" },
//   { value: 10, label: "women reconciled with their husbands" },
//   { value: 2, label: "women reunited with their parents" },
//   { value: 7, label: "babies born at the shelter" },
//   { value: 23, label: "teenage girls supported" },
//   { value: 10, label: "perpetrators arraigned & imprisoned" },
// ];

// const IMPACT_STORIES = [
//   {
//     Icon: HouseIcon,
//     title: "Safe Shelter and Protection",
//     body: "Goshen Shelters has provided temporary accommodation and protection for women and children escaping domestic violence and sexual abuse.",
//   },
//   {
//     Icon: HeartIcon,
//     title: "Family Restoration",
//     body: "Ten women were reconciled with their husbands, while two women were safely reunited with their parents.",
//   },
//   {
//     Icon: ChildIcon,
//     title: "Education",
//     body: "Some women completed tertiary education that had been interrupted by domestic violence. Children were enrolled in new schools as quickly as possible to reduce disruption to their education and psychological wellbeing.",
//   },
//   {
//     Icon: BriefcaseIcon,
//     title: "Employment and Economic Independence",
//     body: "Some survivors secured paid employment at private schools, private companies and government agencies. Women also attended skills-development programmes in tailoring and culinary professions.",
//   },
//   {
//     Icon: CompassIcon,
//     title: "Reintegration",
//     body: "Women have been successfully reintegrated into society and are now living peaceful lives away from violence.",
//   },
//   {
//     Icon: UsersIcon,
//     title: "Government and Institutional Support",
//     body: "With support from DVRS (Domestic Violence Rapid Response System) and the Lagos State Government, some survivors received funding to start businesses and secure their first accommodation.",
//   },
//   {
//     Icon: ScaleIcon,
//     title: "Justice and Accountability",
//     body: "Some perpetrators were arrested and charged to court. Ten were arraigned and imprisoned with the support of DVRS.",
//   },
//   {
//     Icon: EyeIcon,
//     title: "Awareness and Outreach",
//     body: "The foundation has increased awareness of domestic violence through social media and word of mouth. Survivors also refer others facing similar experiences.",
//   },
// ];

// const CHALLENGES = [
//   {
//     title: "Funding",
//     body: "Funding remains our greatest challenge. Around 90% of the shelter's funding is provided by members of God's Chosen Women Fellowship, covering accommodation, three meals daily, clothing, toiletries, healthcare, skills support, education for children and housing support on reintegration.",
//   },
//   {
//     title: "Rented Premises",
//     body: "The shelter currently operates from rented premises, adding to its ongoing financial responsibilities.",
//   },
//   {
//     title: "Education",
//     body: "Finding suitable government schools close to the shelter can be difficult, especially when children need to be enrolled quickly to minimise disruption.",
//   },
//   {
//     title: "Employment",
//     body: "Securing suitable employment for survivors can take time, especially for women with babies or young children who cannot return to work immediately.",
//   },
//   {
//     title: "Family Reintegration",
//     body: "Reintegration can be difficult where abusive partners are unwilling to attend counselling or take responsibility for changing their behaviour.",
//   },
//   {
//     title: "Legal Challenges",
//     body: "Many couples are not legally married, which can make legal intervention and the pursuit of justice more difficult.",
//   },
//   {
//     title: "Out-of-State Cases",
//     body: "Women from other states do not enjoy Lagos State services such as access to legal and police protection.",
//   },
//   {
//     title: "Family Support",
//     body: "In some cases, parents and family members are reluctant to support women who want to leave violent marriages, making it harder for survivors to access safety.",
//   },
// ];

// const LOOKING_AHEAD = [
//   "Securing a permanent site through funding",
//   "Securing better and more sustainable funding",
//   "Increasing awareness of our services",
//   "Reaching more women",
//   "Continuing to transform lives",
//   "Impacting communities",
//   "Educating society about the importance of a peaceful family unit",
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="About us"
//         title="A place of refuge, hope and new beginnings"
//         description="God's Home for Women Foundation operates Goshen Shelters so that women and children can live free from control, violence and fear."
//       />

//       <section className="bg-cream-50">
//         <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
//           <Reveal>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
//               Our story
//             </p>
//             <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
//               Why we are called Goshen
//             </h2>
//             <div className="mt-6 space-y-4 text-base leading-7 text-night-600">
//               <p>
//                 God&rsquo;s Home for Women Foundation is a registered
//                 Non-Governmental Organisation (NGO), established in July 2015 by
//                 God&rsquo;s Chosen Women Fellowship through the founder&rsquo;s
//                 vision of providing refuge and support for women and children
//                 affected by domestic violence.
//               </p>
//               <p>
//                 The foundation operates Goshen Shelters — a safe and
//                 confidential environment where women and children facing
//                 domestic violence and sexual abuse can find refuge. In the
//                 scriptures, Goshen was the place where a family was given
//                 refuge: a land kept safe from the storms around it, where people
//                 were protected, provided for and given room to flourish.
//               </p>
//               <p>
//                 Beyond accommodation, the shelter supports survivors through
//                 emotional and physical restoration, skills acquisition,
//                 education and healthcare — helping them rebuild their lives and
//                 reintegrate into society within three to six months, and up to a
//                 year in usual circumstances.
//               </p>
//             </div>
//           </Reveal>
//           <Reveal delay={120}>
//             <div className="relative overflow-hidden rounded-3xl border border-night-100 shadow-sm">
//               <div className="relative aspect-4/3">
//                 <Image
//                   src="/images/about.jpg"
//                   alt="Women and volunteers joining hands in support and unity"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 45vw"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-night-950/50 to-transparent" />
//               </div>
//             </div>
//             <div className="mt-6 rounded-3xl border border-night-100 bg-night-900 p-8 text-cream-50">
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
//                 Our aim
//               </p>
//               <p className="mt-4 font-display text-xl leading-9 text-cream-50/90">
//                 To remove women from places of violence and provide temporary
//                 shelter while restoring them emotionally and physically —
//                 healing survivors in mind, body and soul before they are
//                 reintegrated into society.
//               </p>
//               <p className="mt-6 text-sm leading-6 text-white/60">
//                 God&rsquo;s Home for Women Foundation &middot; CAC/IT/No/77215
//                 &middot; Established July 2015
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       <section id="mission" className="scroll-mt-24 bg-cream-100">
//         <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
//           <SectionHeading
//             eyebrow="What drives us"
//             title="Our mission, vision and values"
//           />
//           <div className="mt-12 grid gap-6 md:grid-cols-2">
//             <Reveal>
//               <div className="rounded-2xl border border-night-100 bg-white p-8 transition-all hover:border-gold-300 hover:shadow-md">
//                 <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
//                   Our mission
//                 </p>
//                 <p className="mt-3 font-display text-xl font-semibold leading-8 text-gold-700">
//                   Inspired by God&rsquo;s love and compassion, we provide a
//                   safe, confidential haven for women and children escaping
//                   domestic violence. We offer hope, healing, practical support
//                   and advocacy, empowering every survivor to rebuild her life
//                   with dignity, courage and faith in a future free from abuse.
//                 </p>
//               </div>
//             </Reveal>
//             <Reveal delay={100}>
//               <div className="rounded-2xl border border-night-100 bg-white p-8 transition-all hover:border-gold-300 hover:shadow-md">
//                 <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
//                   Our vision
//                 </p>
//                 <p className="mt-3 font-display text-xl font-semibold leading-8 text-gold-700">
//                   A world where every woman and child lives in safety, dignity,
//                   and hope — free from violence and empowered to thrive through
//                   God&rsquo;s love and the support of a compassionate community.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//           <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {VALUES.map(({ Icon, title, body }, i) => (
//               <Reveal key={title} delay={(i % 4) * 70}>
//                 <div className="group h-full rounded-2xl border border-night-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
//                   <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-white">
//                     <Icon className="h-5 w-5" />
//                   </span>
//                   <h3 className="mt-4 font-display text-base font-semibold text-gold-700">
//                     {title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-night-600">
//                     {body}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-cream-50">
//         <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
//           <SectionHeading
//             eyebrow="What we do"
//             title="The services we provide"
//             description="Every woman who comes to Goshen is met where she is — with kindness, confidentiality and practical help."
//           />
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {SERVICES.map(({ Icon, title, body }, i) => (
//               <Reveal key={title} delay={(i % 4) * 70}>
//                 <div className="group h-full rounded-2xl border border-night-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-white">
//                     <Icon className="h-6 w-6" />
//                   </span>
//                   <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">
//                     {title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-night-600">
//                     {body}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//           <Reveal delay={120}>
//             <p className="mt-10 text-center">
//               <Link
//                 href="/services"
//                 className="inline-flex items-center gap-2 rounded-full border border-night-300 px-7 py-3 text-sm font-semibold text-night-600 transition-all hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
//               >
//                 View all our services
//                 <ArrowRightIcon className="h-4 w-4" />
//               </Link>
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       <section
//         id="impact"
//         className="relative scroll-mt-24 overflow-hidden bg-night-900 text-cream-50"
//       >
//         <div className="absolute inset-0">
//           <Image
//             src="/images/impact.jpg"
//             alt=""
//             fill
//             sizes="100vw"
//             className="object-cover opacity-15"
//           />
//           <div className="absolute inset-0 bg-linear-to-b from-night-950/80 via-night-900/85 to-night-950/90" />
//         </div>
//         <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
//           <SectionHeading
//             eyebrow="Our impact"
//             title="Since 2015, real lives changed"
//             description="Since its establishment, God's Home for Women Foundation has supported women and children to move from violence towards safety, recovery, independence and reintegration."
//             light
//           />
//           <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
//             {IMPACT_STATS.map(({ value, label }, i) => (
//               <Reveal key={label} delay={(i % 4) * 70}>
//                 <div className="h-full rounded-2xl border border-night-700 bg-night-800/60 p-6 text-center backdrop-blur-sm transition-colors hover:border-gold-500/50">
//                   <p className="font-display text-3xl font-semibold text-gold-400">
//                     <StatCounter value={value} />
//                   </p>
//                   <p className="mt-2 text-sm leading-5 text-white/70">
//                     {label}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//           <Reveal delay={150}>
//             <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-white/60">
//               These journeys include supporting 22 rape survivors, 15 cases of
//               child sexual abuse, 2 cases of child-trafficking and 2 cases of
//               child marriage — each woman and child met with care and
//               confidentiality.
//             </p>
//           </Reveal>
//           <Reveal delay={220}>
//             <p className="mt-10 text-center">
//               <Link
//                 href="/impact"
//                 className="inline-flex items-center gap-2 rounded-full border border-gold-400 px-7 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
//               >
//                 Explore our impact
//                 <ArrowRightIcon className="h-4 w-4" />
//               </Link>
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
//           <SectionHeading
//             eyebrow="Stories of change"
//             title="From violence to safety, recovery and reintegration"
//             description="Behind every figure is a woman or child whose life changed."
//           />
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {IMPACT_STORIES.map(({ Icon, title, body }, i) => (
//               <Reveal key={title} delay={(i % 4) * 70}>
//                 <div className="group h-full rounded-2xl border border-night-100 bg-cream-50 p-7 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
//                     <Icon className="h-6 w-6" />
//                   </span>
//                   <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">
//                     {title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-night-600">
//                     {body}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-cream-100">
//         <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
//           <SectionHeading
//             eyebrow="Honest about the road ahead"
//             title="Our challenges"
//             description="We face real challenges every day. Sharing them openly is part of our integrity and our call for support."
//           />
//           <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {CHALLENGES.map(({ title, body }, i) => (
//               <Reveal key={title} delay={(i % 4) * 70}>
//                 <div className="group h-full rounded-2xl border border-night-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
//                   <h3 className="font-display text-base font-semibold text-gold-700">
//                     {title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-night-600">
//                     {body}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//           <Reveal delay={120}>
//             <div className="mt-16 rounded-3xl bg-night-900 p-8 text-cream-50 sm:p-10">
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
//                 Looking ahead
//               </p>
//               <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
//                 A permanent home, sustainable support
//               </h2>
//               <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
//                 The foundation aims to continue impacting lives by:
//               </p>
//               <ul className="mt-6 grid gap-3 sm:grid-cols-2">
//                 {LOOKING_AHEAD.map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-start gap-3 rounded-xl bg-night-800/60 px-4 py-3 text-sm leading-6 text-white/80 transition-colors hover:bg-night-800"
//                   >
//                     <span
//                       className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-400"
//                       aria-hidden="true"
//                     />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <DonateButton
//                 className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] hover:bg-gold-600"
//                 icon="arrow"
//               >
//                 Help make this vision possible
//               </DonateButton>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-white">
//         <Reveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
//           <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-gold-500/40 bg-night-950 p-8 text-cream-50 sm:flex-row sm:items-center sm:p-10">
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
//                 We are here for you
//               </p>
//               <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
//                 A safe place. A new beginning.
//               </h2>
//               <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
//                 Whether you need help, want to make a referral, or would love to
//                 support our work — reach out. Everything is confidential.
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
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400 px-7 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
//               >
//                 Contact us
//                 <ArrowRightIcon className="h-4 w-4" />
//               </Link>
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
// import { AboutValues } from "@/components/about-values";
import { FounderVideo } from "@/components/about/founder-video";
import { AboutValues } from "@/components/about/about-values";

export const metadata: Metadata = {
  title: "About Us | Goshen Shelters",
  description:
    "God’s Home for Women Foundation operates Goshen Shelters — a safe, confidential refuge offering hope, healing and restoration for women and children.",
};

const FOUNDER_NAME = "Ajibola Hassan-Odukale";
const FOUNDER_VIDEO_SRC = "/videos/founder-message.mp4";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-night-50">
        <div className="grid items-stretch lg:grid-cols-[40%_60%]">
          {/* Left content */}

          <Reveal delay={120} className=" px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
              About us
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#2F1B69] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Hope. Healing. Restoration.
            </h1>
            <p className="mt-5 font-display text-xl leading-9 text-night-800 sm:text-2xl">
              Creating a safe place for women and children to begin again.
            </p>
            <div className="mt-6 space-y-4 text-base leading-7 text-night-600">
              <p>
                God&apos;s Home for Women Foundation is a registered Nigerian
                NGO established in July 2015. Through Goshen Shelters, we
                provide a safe and confidential environment where women and
                children affected by domestic violence and sexual abuse can find
                refuge, practical support and a pathway towards a new beginning.
              </p>
              <p>
                Inspired by the biblical picture of Goshen as a place of refuge
                and provision, our work is rooted in compassion, dignity and
                faith — helping survivors move from fear towards safety, healing
                and restoration.
              </p>
            </div>
            <Link
              href="/our-work"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-night-900 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-night-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Explore our work
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          {/* Right image */}
          <Reveal
            delay={120}
            className="relative min-h-70 sm:min-h-90 lg:min-h-130"
          >
            <Image
              src="/images/hope.jpg"
              alt="A woman and child"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Desktop curve  */}
            <div className="absolute inset-y-0 left-0 hidden w-[30%] lg:block">
              <div className="absolute inset-0 bg-night-50 [clip-path:ellipse(75%_80%_at_0%_50%)]" />
            </div>

            {/* Mobile curve */}
            <div className="absolute inset-x-0 top-0 h-[30%] lg:hidden">
              <div className="absolute inset-0 bg-night-50 [clip-path:ellipse(85%_100%_at_50%_0%)]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-4xl bg-cream-50 p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                  Why Goshen exists
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#2F1B69]">
                  Every woman and child deserves to live in safety, dignity and
                  hope.
                </h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-night-600">
                  <p>
                    Domestic violence and sexual abuse leave women and children
                    living in fear, uncertainty and emotional pain. Many
                    survivors need more than advice — they need a safe place,
                    confidential support and practical help to begin again.
                  </p>
                  <p>
                    Goshen Shelters exists to remove women and children from
                    places of violence and provide temporary refuge while
                    supporting emotional and physical restoration.
                  </p>
                  <p className="font-display text-lg font-semibold text-gold-700">
                    There is a future beyond violence.
                  </p>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={80}>
                <article className="rounded-4xl bg-night-50 p-8 sm:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                    Our story
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#2F1B69]">
                    From refuge to restoration
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-7 text-night-600">
                    <p>
                      God&apos;s Home for Women Foundation was established in
                      July 2015 through the vision of God&apos;s Chosen Women
                      Fellowship to provide refuge and support for women and
                      children affected by domestic violence.
                    </p>
                    <p>
                      What began as a response to urgent need has grown into
                      Goshen Shelters — a confidential haven where survivors
                      receive shelter, care and practical support on their
                      journey towards healing and reintegration.
                    </p>
                  </div>
                  <Link
                    href="/our-work"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-night-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  >
                    Learn about our work
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </Reveal>

              <Reveal delay={140}>
                <FounderVideo
                  founderName={FOUNDER_NAME}
                  videoSrc={FOUNDER_VIDEO_SRC}
                  posterSrc="/images/about.jpg"
                />
              </Reveal>
            </div>

            <Reveal delay={100}>
              <article className="h-full rounded-4xl bg-cream-100 p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                  What we believe
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#2F1B69]">
                  A life affected by violence can be rebuilt
                </h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-night-600">
                  <p>
                    We believe every woman and child carries God-given worth and
                    dignity. Violence may wound deeply, but it does not define a
                    person&apos;s future.
                  </p>
                  <p>
                    Hope, healing and restoration describe the journey we walk
                    with survivors: from safety, through recovery, towards
                    confidence, independence and a new beginning.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={160}>
              <article className="h-full rounded-4xl bg-gold-50 p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                  Our approach
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#2F1B69]">
                  Safety is the beginning. Restoration is the journey.
                </h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-night-600">
                  <p>
                    Every woman who comes to Goshen is met with kindness,
                    confidentiality and practical support. Safety comes first —
                    then emotional and physical restoration, skills development,
                    education and healthcare as needed.
                  </p>
                  <p>
                    Our aim is to help survivors rebuild their lives with
                    dignity and move towards peaceful reintegration within three
                    to six months, and up to a year where longer support is
                    required.
                  </p>
                </div>
                <Link
                  href="/our-work"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-night-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                >
                  Explore our work
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <AboutValues />

      {/* Looking ahead */}
      <section className="bg-cream-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl border border-night-100 shadow-sm">
              <div className="relative aspect-4/5">
                <Image
                  src="/images/impact.jpg"
                  alt="A woman looking towards the light with hope"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
              Looking ahead
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#2F1B69] sm:text-4xl">
              Continuing to create pathways to a better future
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-night-600">
              <p>
                The foundation aims to continue reaching more women, increasing
                awareness of our services, strengthening support for survivors
                and developing more sustainable funding for the work.
              </p>
              <p>
                A key priority is securing a permanent site for Goshen Shelters
                so that women and children can continue to find refuge without
                the uncertainty of rented premises.
              </p>
              <p>
                We remain committed to educating society about the importance of
                peaceful family life and supporting communities to recognise
                that there is hope beyond violence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-night-900 text-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            There is hope beyond violence. You can be part of the change.
          </h2>
        </div>
      </section>

      {/* Closing CTAs */}
      <section className="bg-night-950 text-cream-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
          <Reveal>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-night-700 bg-night-900/70 p-7">
              <h3 className="font-display text-xl font-semibold text-gold-400">
                Explore our work
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-cream-50/75">
                Learn about the support we provide to women and children.
              </p>
              <Link
                href="/our-work"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-gold-400 px-5 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
              >
                Explore our work
              </Link>
            </article>
          </Reveal>

          <Reveal delay={70}>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-night-700 bg-night-900/70 p-7">
              <h3 className="font-display text-xl font-semibold text-gold-400">
                See our impact
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-cream-50/75">
                See the difference we are making together.
              </p>
              <Link
                href="/impact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-gold-400 px-5 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
              >
                See our impact
              </Link>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-night-700 bg-night-900/70 p-7">
              <h3 className="font-display text-xl font-semibold text-gold-400">
                Support Goshen
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-cream-50/75">
                Discover ways to give, partner, volunteer or fundraise.
              </p>
              <Link
                href="/support"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-gold-400 px-5 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-white"
              >
                Support Goshen
              </Link>
            </article>
          </Reveal>

          <Reveal delay={210}>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-night-700 bg-night-900/70 p-7">
              <h3 className="font-display text-xl font-semibold text-gold-400">
                Get help
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-cream-50/75">
                If you need help, we are here for you.
              </p>
              <HelpButton
                title="Get Help Now"
                intro="A trained member of our team is available 24/7. Choose how you would like to reach us — everything is confidential."
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-gold-600"
              >
                Get help now
              </HelpButton>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
