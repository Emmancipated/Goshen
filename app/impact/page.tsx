// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { PageHeader } from "@/components/page-header";
// import { Reveal } from "@/components/reveal";
// import { SectionHeading } from "@/components/section-heading";
// import { StatCounter } from "@/components/stat-counter";
// import { DonateButton } from "@/components/donate-button";
// import {
//   ArrowRightIcon,
//   BriefcaseIcon,
//   ChildIcon,
//   CompassIcon,
//   EyeIcon,
//   HeartIcon,
//   HouseIcon,
//   ScaleIcon,
//   UsersIcon,
// } from "@/components/icons";

// export const metadata: Metadata = {
//   title: "Impact",
//   description:
//     "Since 2015, God's Home for Women Foundation has supported hundreds of women and children to move from violence towards safety, recovery, independence and reintegration.",
// };

// const IMPACT_STATS = [
//   { value: 174, label: "women admitted to the shelter" },
//   { value: 265, label: "children supported" },
//   { value: 23, label: "teenage girls supported" },
//   { value: 22, label: "rape cases supported" },
//   { value: 15, label: "child sexual abuse cases" },
//   { value: 7, label: "babies born during shelter stay" },
// ];

// const STORIES = [
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

// export default function ImpactPage() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Our impact"
//         title="Real lives changed since 2015"
//         description="Behind every figure is a woman or child whose life changed. These are the numbers and the stories of our work so far."
//       />

//       <section className="relative overflow-hidden bg-night-950 text-cream-50">
//         <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.12),transparent_60%)]" />
//         </div>
//         <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
//           <SectionHeading
//             eyebrow="Our impact so far"
//             title="Changing lives. Building hope."
//             description="Since its establishment, God's Home for Women Foundation has supported women and children to move from violence towards safety, recovery, independence and reintegration."
//             light
//           />
//           <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
//             {IMPACT_STATS.map(({ value, label }, i) => (
//               <Reveal key={label} delay={(i % 3) * 70}>
//                 <div className="h-full rounded-2xl border border-night-700 bg-night-900 p-6 text-center transition-colors hover:border-gold-500/50">
//                   <p className="font-display text-4xl font-semibold text-gold-400">
//                     <StatCounter value={value} />
//                   </p>
//                   <p className="mt-2 text-sm leading-5 text-white/70">{label}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//           <Reveal delay={120}>
//             <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-white/60">
//               These journeys include supporting rape survivors, cases of child sexual abuse, child-trafficking and child
//               marriage — each woman and child met with care and confidentiality.
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-white">
//         <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
//           <SectionHeading
//             eyebrow="Stories of change"
//             title="From violence to safety, recovery and reintegration"
//             description="Behind every figure is a woman or child whose life changed."
//           />
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {STORIES.map(({ Icon, title, body }, i) => (
//               <Reveal key={title} delay={(i % 4) * 70}>
//                 <div className="group h-full rounded-2xl border border-night-100 bg-cream-50 p-7 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-md">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white transition-transform group-hover:scale-110">
//                     <Icon className="h-6 w-6" />
//                   </span>
//                   <h3 className="mt-5 font-display text-lg font-semibold text-gold-700">{title}</h3>
//                   <p className="mt-2 text-sm leading-6 text-night-600">{body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-cream-100">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
//           <Reveal>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Why we do this</p>
//             <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
//               To remove women from places of violence — and restore them
//             </h2>
//             <p className="mt-5 text-base leading-7 text-night-600">
//               Our aim is to provide temporary shelter while restoring survivors emotionally and physically — healing
//               them in mind, body and soul before they are reintegrated into society.
//             </p>
//             <p className="mt-4 text-base leading-7 text-night-600">
//               The shelter currently operates from rented premises in Lagos. Around 90% of its funding is provided by
//               members of God&rsquo;s Chosen Women Fellowship. A permanent home and sustainable funding remain our
//               greatest needs.
//             </p>
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <DonateButton
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600 active:scale-[0.98]"
//                 icon="arrow"
//               >
//                 Help us do more
//               </DonateButton>
//               <Link
//                 href="/services"
//                 className="inline-flex items-center justify-center rounded-full border border-night-300 px-7 py-3.5 text-sm font-semibold text-night-600 transition-all hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
//               >
//                 See our services
//               </Link>
//             </div>
//           </Reveal>
//           <Reveal delay={100}>
//             <div className="relative overflow-hidden rounded-3xl border border-night-100 shadow-lg">
//               <div className="relative aspect-[4/3]">
//                 <Image
//                   src="/images/impact.jpg"
//                   alt="Survivors of domestic violence at a Goshen Shelters gathering"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
//                 <p className="absolute bottom-0 left-0 p-6 font-display text-xl font-semibold leading-8 text-cream-50">
//                   Every woman who arrives is met with hope, not judgement.
//                 </p>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }

// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { Reveal } from "@/components/reveal";
// import { StatCounter } from "@/components/stat-counter";
// import { DonateButton } from "@/components/donate-button";

// export const metadata: Metadata = {
//   title: "Our Impact",
//   description:
//     "Discover how Goshen Shelters has helped women and children move from violence towards safety, healing, independence and a new beginning.",
// };

// const IMPACT_STATS = [
//   {
//     value: 174,
//     label: "Women supported",
//   },
//   {
//     value: 265,
//     label: "Children supported",
//   },
//   {
//     value: 23,
//     label: "Teenagers supported",
//   },
//   {
//     value: 22,
//     label: "Rape cases supported",
//   },
//   {
//     value: 15,
//     label: "Child sexual abuse cases",
//   },
//   {
//     value: 7,
//     label: "Babies born at Goshen",
//     note: "including one set of twins",
//   },
// ];

// const OUTCOMES = [
//   {
//     image: "/images/impact-sewing.jpg",
//     title: "Lives rebuilt. Futures restored.",
//     body: "Women have returned to or completed tertiary education, secured meaningful employment, developed income-generating skills, established businesses and, in some cases, secured accommodation and relocated.",
//   },
//   {
//     image: "/images/impact-education.jpg",
//     title: "Protecting children's futures.",
//     body: "Approximately 80% of cases involved children leaving their neighbourhood schools because of safety and proximity requirements. Goshen works to restore educational continuity and stability by helping children transition into suitable schools.",
//   },
//   {
//     image: "/images/impact-justice.jpg",
//     title: "Safety and justice.",
//     body: "Goshen works with DSVRT, the State Police, legal professionals and other partners when survivors need protection, intervention and access to justice. Some perpetrators have been arrested and charged to court, while a number of child abusers have been arraigned and imprisoned with DSVRT assistance.",
//   },
// ];

// export default function ImpactPage() {
//   return (
//     <main className="overflow-hidden bg-[#F7F3EC] text-[#2F2925]">
//       {/* =========================================================
//           HERO
//       ========================================================== */}
//       <section className="relative bg-[#F7F3EC]">
//         <div className="mx-auto grid max-w-7xl lg:min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">
//           {/* Image */}
//           <div className="relative order-1 min-h-[430px] overflow-hidden lg:order-2 lg:min-h-[620px]">
//             <Image
//               src="/images/impact.jpg"
//               alt="A woman and child sharing a moment of connection"
//               fill
//               priority
//               sizes="(max-width: 1023px) 100vw, 50vw"
//               className="object-cover object-center"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#2F1B69]/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#F7F3EC]/15 lg:to-transparent" />
//           </div>

//           {/* Editorial hero copy */}
//           <div className="order-2 flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:order-1 lg:px-12 lg:py-24 xl:px-16">
//             <Reveal>
//               <div className="max-w-xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B64A16]">
//                   Our Impact
//                 </p>

//                 <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-[#2F1B69] sm:text-6xl lg:text-7xl">
//                   Our
//                   <br />
//                   <span className="text-[#B64A16]">Impact</span>
//                 </h1>

//                 <div className="mt-7 h-px w-20 bg-[#C9A227]" />

//                 <p className="mt-7 max-w-md font-display text-3xl leading-[1.15] text-[#2F1B69] sm:text-4xl">
//                   Creating safety.
//                   <br />
//                   Restoring lives.
//                   <br />
//                   Building futures.
//                 </p>

//                 <p className="mt-7 max-w-lg text-base leading-7 text-[#5E5752] sm:text-lg">
//                   For more than a decade, Goshen Shelters has provided women and
//                   children affected by domestic and sexual violence with safety,
//                   support and a pathway toward a better future.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PEOPLE BEHIND THE IMPACT
//       ========================================================== */}
//       <section className="border-y border-[#E6DDD4] bg-[#FBF8F2]">
//         <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
//           <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
//             <Reveal>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
//                 The people behind our impact
//               </p>

//               <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
//                 Behind every figure is a woman or child whose life changed.
//               </h2>

//               <p className="mt-6 max-w-xl text-base leading-7 text-[#5E5752]">
//                 Since Goshen began its work, women and children have come
//                 through the shelter seeking safety and support. Among those
//                 supported are survivors of rape, child sexual abuse and child
//                 trafficking.
//               </p>

//               <p className="mt-4 max-w-xl text-base leading-7 text-[#5E5752]">
//                 The figures tell part of the story. What matters most is what
//                 happened after people arrived: receiving care, regaining
//                 stability, continuing education, developing skills and moving
//                 towards independent lives.
//               </p>

//               <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-[#6F6862]">
//                 Goshen has also supported two cases involving child trafficking.
//                 Each woman and child is met with care, confidentiality and
//                 dignity.
//               </p>
//             </Reveal>

//             {/* Editorial figures — deliberately NOT cards */}
//             <Reveal delay={100}>
//               <div className="grid grid-cols-2 border-t border-[#D9CFC5] sm:grid-cols-3">
//                 {IMPACT_STATS.map((stat, index) => (
//                   <div
//                     key={stat.label}
//                     className={`min-h-[145px] border-b border-[#D9CFC5] py-7 pr-5 sm:min-h-[165px] sm:py-8 ${
//                       index % 2 !== 0 ? "pl-5 sm:border-l sm:pl-6" : "pl-0"
//                     } ${index >= 2 ? "sm:border-l sm:pl-6" : ""}`}
//                   >
//                     <p className="font-display text-4xl font-semibold leading-none text-[#2F1B69] sm:text-5xl">
//                       <StatCounter value={stat.value} />
//                     </p>

//                     <p className="mt-3 max-w-[150px] text-sm font-medium leading-5 text-[#5E5752]">
//                       {stat.label}
//                     </p>

//                     {stat.note && (
//                       <p className="mt-1 text-xs italic leading-4 text-[#827A73]">
//                         {stat.note}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

// {/* =========================================================
//     MORE THAN A SHELTER
// ========================================================== */}
// <section className="bg-[#F7F3EC]">
//   <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
//     <div className="relative min-h-[420px] lg:min-h-[560px]">
//       <Image
//         src="/images/impact-sewing.jpg"
//         alt="A woman developing practical skills"
//         fill
//         sizes="(max-width: 1023px) 100vw, 50vw"
//         className="object-cover"
//       />
//     </div>

//     <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
//       <Reveal delay={100}>
//         <div className="max-w-xl">
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
//             More than a shelter
//           </p>

//           <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
//             Safety is only the beginning.
//           </h2>

//           <p className="mt-6 text-base leading-7 text-[#5E5752]">
//             Goshen provides holistic support that addresses the needs of
//             the whole person — mind, body and spirit. Our care includes
//             emotional counselling, spiritual guidance, healthcare and
//             medical support, food and daily provisions.
//           </p>

//           <p className="mt-5 text-base leading-7 text-[#5E5752]">
//             Women may also receive financial assistance, skills
//             acquisition and employment support, while children receive
//             educational support to help minimise disruption to their
//             lives.
//           </p>

//           <p className="mt-5 text-base leading-7 text-[#5E5752]">
//             The goal is not simply to provide a place of safety, but to
//             help survivors heal, regain stability and rebuild independent
//             lives.
//           </p>

//           <div className="mt-8 h-px w-20 bg-[#C9A227]" />

//           <p className="mt-5 font-display text-xl leading-7 text-[#2F1B69]">
//             A safe place today can become the foundation for a stronger
//             tomorrow.
//           </p>
//         </div>
//       </Reveal>
//     </div>
//   </div>
// </section>

// {/* =========================================================
//     DIFFERENT JOURNEYS
// ========================================================== */}
// <section className="bg-[#EEE6F5]">
//   <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
//     <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
//       <Reveal>
//         <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
//           Different journeys. Different outcomes.
//         </p>

//         <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
//           Every survivor&apos;s path is different.
//         </h2>

//         <p className="mt-6 text-base leading-7 text-[#5E5752]">
//           Every woman&apos;s story is unique. Through counselling and
//           intervention, Goshen supports survivors as they consider what
//           comes next for themselves and their families.
//         </p>

//         <p className="mt-5 text-base leading-7 text-[#5E5752]">
//           For some, that means rebuilding independently. For others, it
//           may involve reconciliation, relocation or another path towards
//           safety and stability.
//         </p>

//         <p className="mt-5 text-sm leading-6 text-[#706862]">
//           These approximate outcomes reflect the different paths taken
//           following counselling and intervention.
//         </p>
//       </Reveal>

//       <Reveal delay={120}>
//         <div className="grid gap-0 border-y border-[#D4C7DF] sm:grid-cols-3 sm:border-y-0">
//           <div className="border-b border-[#D4C7DF] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
//             <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
//               90%
//             </p>
//             <p className="mt-3 text-sm leading-6 text-[#5E5752]">
//               chose not to reconcile with their partners
//             </p>
//           </div>

//           <div className="border-b border-[#D4C7DF] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
//             <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
//               5%
//             </p>
//             <p className="mt-3 text-sm leading-6 text-[#5E5752]">
//               remained separated while undergoing counselling
//             </p>
//           </div>

//           <div className="py-7 sm:px-6 sm:py-4">
//             <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
//               5%
//             </p>
//             <p className="mt-3 text-sm leading-6 text-[#5E5752]">
//               reconciled following counselling and intervention
//             </p>
//           </div>
//         </div>
//       </Reveal>
//     </div>

//     <Reveal delay={180}>
//       <div className="mt-14 border-t border-[#D4C7DF] pt-8 sm:mt-16">
//         <p className="max-w-3xl font-display text-2xl leading-9 text-[#2F1B69] sm:text-3xl">
//           To date, <span className="text-[#B64A16]">26 women</span> have
//           been reconciled with their husbands following counselling and
//           intervention.
//         </p>

//         <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6B625D]">
//           Reconciliation is never presented as the only measure of
//           success. The priority is safety, healing and a sustainable
//           future for each survivor.
//         </p>
//       </div>
//     </Reveal>
//   </div>
// </section>

// {/* =========================================================
//     OUTCOMES
// ========================================================== */}
// <section className="bg-white">
//   <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
//     <Reveal>
//       <div className="max-w-2xl">
//         <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
//           Documented outcomes
//         </p>

//         <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
//           Support that continues beyond the shelter.
//         </h2>

//         <p className="mt-5 text-base leading-7 text-[#5E5752]">
//           The impact of Goshen&apos;s work can be seen in the steps
//           survivors take after receiving support — education, employment,
//           skills, financial independence, business development,
//           accommodation and relocation.
//         </p>
//       </div>
//     </Reveal>

//     <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-5 lg:mt-14">
//       {OUTCOMES.map((outcome, index) => (
//         <Reveal key={outcome.title} delay={index * 90}>
//           <article className="group overflow-hidden border border-[#E5DDD5] bg-[#F7F3EC]">
//             <div className="relative aspect-[4/3] overflow-hidden">
//               <Image
//                 src={outcome.image}
//                 alt=""
//                 fill
//                 sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 30vw"
//                 className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//               />
//             </div>

//             <div className="p-6 sm:p-7">
//               <h3 className="font-display text-2xl font-semibold leading-tight text-[#2F1B69]">
//                 {outcome.title}
//               </h3>

//               <div className="mt-4 h-px w-12 bg-[#C9A227]" />

//               <p className="mt-4 text-sm leading-6 text-[#5E5752]">
//                 {outcome.body}
//               </p>
//             </div>
//           </article>
//         </Reveal>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* =========================================================
//           MORE THAN EDUCATION / EXAMPLE OUTCOME
//       ========================================================== */}
//       <section className="bg-[#2F1B69] text-[#F7F3EC]">
//         <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
//           <div className="relative min-h-[420px] lg:min-h-[520px]">
//             <Image
//               src="/images/impact-education.jpg"
//               alt="A child continuing their education"
//               fill
//               sizes="(max-width: 1023px) 100vw, 50vw"
//               className="object-cover"
//             />
//           </div>

//           <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
//             <Reveal delay={100}>
//               <div className="max-w-xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9B94C]">
//                   Education and independence
//                 </p>

//                 <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
//                   A future can continue after violence.
//                 </h2>

//                 <p className="mt-6 text-base leading-7 text-white/75">
//                   Some women have returned to or completed tertiary education
//                   that was interrupted by domestic violence. Others have
//                   developed practical skills, secured meaningful employment or
//                   established businesses.
//                 </p>

//                 <p className="mt-5 text-base leading-7 text-white/75">
//                   Goshen has also supported children to continue their education
//                   after leaving unsafe environments.
//                 </p>

//                 <p className="mt-5 text-base leading-7 text-white/75">
//                   One documented example is a survivor who obtained a
//                   Master&apos;s degree at the London School of Economics while
//                   her children were integrated into secondary schools in the
//                   United Kingdom.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CHILDREN / SAFETY / JUSTICE
//       ========================================================== */}
//       <section className="bg-[#FBF8F2]">
//         <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
//           <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
//             <Reveal>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
//                 Children, safety and justice
//               </p>

//               <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
//                 Protecting the future while addressing what happened.
//               </h2>

//               <p className="mt-6 text-base leading-7 text-[#5E5752]">
//                 Approximately 80% of cases involved children leaving their
//                 neighbourhood schools because of safety and proximity
//                 requirements.
//               </p>

//               <p className="mt-5 text-base leading-7 text-[#5E5752]">
//                 Goshen works to restore educational continuity and stability,
//                 helping children transition into suitable schools as quickly as
//                 possible.
//               </p>
//             </Reveal>

//             <Reveal delay={100}>
//               <div className="space-y-8">
//                 <div className="border-t border-[#D9CFC5] pt-6">
//                   <p className="font-display text-2xl font-semibold text-[#2F1B69]">
//                     Education should not have to stop because a child needs to
//                     be safe.
//                   </p>

//                   <p className="mt-3 text-sm leading-6 text-[#5E5752]">
//                     Goshen helps children regain stability while their mothers
//                     and families navigate the difficult transition away from
//                     violence.
//                   </p>
//                 </div>

//                 <div className="border-t border-[#D9CFC5] pt-6">
//                   <p className="font-display text-2xl font-semibold text-[#2F1B69]">
//                     Safety sometimes requires more than shelter.
//                   </p>

//                   <p className="mt-3 text-sm leading-6 text-[#5E5752]">
//                     Goshen collaborates with DSVRT, the State Police, legal
//                     professionals and other partners when survivors require
//                     protection, intervention and access to justice.
//                   </p>
//                 </div>

//                 <div className="border-t border-[#D9CFC5] pt-6">
//                   <p className="font-display text-2xl font-semibold text-[#2F1B69]">
//                     Accountability matters.
//                   </p>

//                   <p className="mt-3 text-sm leading-6 text-[#5E5752]">
//                     According to Goshen&apos;s documented outcomes, some
//                     perpetrators have been arrested and charged to court, while
//                     a number of child abusers have been arraigned and imprisoned
//                     with DSVRT assistance.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SURVIVOR'S KIT
//       ========================================================== */}
//       <section className="bg-[#EEE6F5]">
//         <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
//           <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
//             <Reveal>
//               <div className="max-w-xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
//                   The next chapter
//                 </p>

//                 <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
//                   A safe place can lead to an independent life.
//                 </h2>

//                 <p className="mt-6 text-base leading-7 text-[#5E5752]">
//                   For women preparing to leave Goshen and begin an independent
//                   life, the transition can be just as important as the time
//                   spent in shelter.
//                 </p>

//                 <p className="mt-5 text-base leading-7 text-[#5E5752]">
//                   The Survivor&apos;s Kit is part of that transition, helping
//                   provide practical support as a woman prepares to establish her
//                   new home.
//                 </p>

//                 <Link
//                   href="/support#survivors-kit"
//                   className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#43206F] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#351956] focus:outline-none focus:ring-2 focus:ring-[#43206F] focus:ring-offset-2"
//                 >
//                   See the Survivor&apos;s Kit
//                 </Link>
//               </div>
//             </Reveal>
//           </div>

//           <div className="relative min-h-[390px] lg:min-h-[500px]">
//             <Image
//               src="/images/survivor-kit.jpg"
//               alt="Practical items prepared for a woman starting an independent home"
//               fill
//               sizes="(max-width: 1023px) 100vw, 50vw"
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CLOSING CTA
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#43206F] text-[#F7F3EC]">
//         <div className="absolute inset-0">
//           <Image
//             src="/images/impact.jpg"
//             alt=""
//             fill
//             sizes="100vw"
//             className="object-cover opacity-[0.12]"
//           />
//           <div className="absolute inset-0 bg-[#43206F]/90" />
//         </div>

//         <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:py-24">
//           <Reveal>
//             <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9B94C]">
//               The impact continues
//             </p>

//             <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
//               One woman. One child. One family at a time.
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
//               Awareness of domestic and sexual violence is growing, and
//               survivors are finding pathways towards safety, healing,
//               independence and a new beginning.
//             </p>

//             <p className="mx-auto mt-4 max-w-2xl font-display text-xl leading-8 text-[#F7F3EC]">
//               You can help create more of those new beginnings.
//             </p>

//             <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
//               <Link
//                 href="/support"
//                 className="inline-flex items-center justify-center rounded-xl bg-[#B64A16] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#9E3F12] focus:outline-none focus:ring-2 focus:ring-[#B64A16] focus:ring-offset-2 focus:ring-offset-[#43206F]"
//               >
//                 Support Goshen
//               </Link>

//               <DonateButton className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-[#43206F] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#43206F]">
//                 Donate
//               </DonateButton>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }

// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

// import { Reveal } from "@/components/reveal";
// import { StatCounter } from "@/components/stat-counter";
// import { DonateButton } from "@/components/donate-button";

// export const metadata: Metadata = {
//   title: "Our Impact",
//   description:
//     "Discover how Goshen Shelters has supported women and children affected by domestic and sexual violence through safety, healing, education, skills development, employment and reintegration.",
// };

// /**
//  * Keep this configurable so the dedicated Survivor's Kit page can be
//  * moved later without changing the structure of this page.
//  */
// const SURVIVORS_KIT_HREF = "/survivors-kit";

// const IMPACT_FIGURES = [
//   {
//     value: 174,
//     label: "Women supported",
//     description:
//       "Women have come through Goshen seeking safety, care and a pathway toward a new beginning.",
//   },
//   {
//     value: 265,
//     label: "Children supported",
//     description:
//       "Children have been supported alongside women affected by domestic and sexual violence.",
//   },
//   {
//     value: 23,
//     label: "Teenagers supported",
//     description:
//       "Teenagers have also received support through the shelter's work.",
//     note: "This figure may overlap with the children figure and is not presented as an additional total.",
//   },
//   {
//     value: 22,
//     label: "Rape cases",
//     description:
//       "Goshen has supported survivors of rape with care, confidentiality and practical support.",
//   },
//   {
//     value: 15,
//     label: "Child sexual abuse cases",
//     description:
//       "Children affected by sexual abuse have received support and protection.",
//   },
//   {
//     value: 7,
//     label: "Babies born at Goshen",
//     description:
//       "Seven babies have been born during shelter stays, including one set of twins.",
//   },
// ];

// const SUPPORT_AREAS = [
//   "Emotional counselling",
//   "Spiritual guidance",
//   "Healthcare and medical support",
//   "Food and daily provisions",
//   "Financial assistance",
//   "Skills acquisition",
//   "Employment support",
//   "Educational support for children",
// ];

// const OUTCOMES = [
//   {
//     title: "Education restored",
//     body: "Some women returned to or completed tertiary education after experiences of domestic violence had interrupted their studies.",
//   },
//   {
//     title: "Meaningful employment",
//     body: "Some survivors secured employment in schools, private companies and government agencies as they rebuilt their independence.",
//   },
//   {
//     title: "Skills and self-sufficiency",
//     body: "Women have participated in skills-development programmes, including tailoring and culinary training, to strengthen their ability to support themselves.",
//   },
//   {
//     title: "Financial independence",
//     body: "Support has helped some survivors move toward greater financial independence and establish more stable livelihoods.",
//   },
//   {
//     title: "Businesses and accommodation",
//     body: "Some survivors received support that helped them start businesses and secure independent accommodation as they transitioned from the shelter.",
//   },
//   {
//     title: "Peaceful reintegration",
//     body: "Women have been successfully reintegrated into society and are living peaceful lives away from violence.",
//   },
// ];

// const JOURNEY_OUTCOMES = [
//   {
//     value: "90%",
//     label: "chose not to reconcile",
//     body: "Most survivors chose not to return to their partners after considering their circumstances and receiving support.",
//   },
//   {
//     value: "5%",
//     label: "remained separated",
//     body: "Some remained separated while continuing counselling and working through their circumstances.",
//   },
//   {
//     value: "5%",
//     label: "reconciled",
//     body: "Some reconciled with their partners following counselling and intervention.",
//   },
// ];

// export default function ImpactPage() {
//   return (
//     <main className="overflow-hidden bg-[#F7F3EC]">
//       {/* =========================================================
//           HERO
//       ========================================================= */}
//       <section className="relative isolate overflow-hidden bg-[#F7F3EC]">
//         <div className="grid items-stretch lg:grid-cols-[55%_45%]">
//           {/* Image */}
//           <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[620px]">
//             <Image
//               src="/images/impact.jpg"
//               alt="A woman and child representing the women and children supported by Goshen Shelters"
//               fill
//               priority
//               sizes="(max-width: 1024px) 100vw, 55vw"
//               className="object-cover object-center"
//             />

//             {/* Desktop fade from image into text */}
//             <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,transparent_50%,rgba(247,243,236,0.18)_62%,rgba(247,243,236,0.48)_72%,rgba(247,243,236,0.82)_86%,#F7F3EC_100%)]" />

//             {/* Mobile fade from image into content */}
//             <div className="absolute inset-0 lg:hidden bg-[linear-gradient(to_bottom,transparent_55%,rgba(247,243,236,0.18)_68%,rgba(247,243,236,0.72)_88%,#F7F3EC_100%)]" />

//             {/* Subtle bottom fade */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_top,#F7F3EC_0%,rgba(247,243,236,0.08)_24%,transparent_52%)]" />
//           </div>

//           {/* Text */}
//           <div className="relative flex items-center px-6 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-10 lg:px-12 lg:py-20">
//             <Reveal>
//               <div className="max-w-xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B6914]">
//                   Our Impact
//                 </p>

//                 <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.94] tracking-tight text-[#2F1B69] sm:text-6xl lg:text-[4.4rem]">
//                   Creating safety.
//                   <br />
//                   Restoring lives.
//                   <br />
//                   Building futures.
//                 </h1>

//                 <p className="mt-7 max-w-lg text-base leading-7 text-[#4E4742] sm:text-lg sm:leading-8">
//                   For more than a decade, Goshen Shelters has supported women
//                   and children affected by domestic and sexual violence,
//                   providing safety, support and a pathway toward a better
//                   future.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           THE PEOPLE BEHIND OUR IMPACT
//       ========================================================= */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
//             <Reveal>
//               <div className="max-w-xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
//                   The people behind our impact
//                 </p>

//                 <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
//                   Every figure represents a life, not just a number.
//                 </h2>

//                 <div className="mt-6 space-y-4 text-base leading-7 text-[#5E5752]">
//                   <p>
//                     Since Goshen began its work, women and children have come
//                     through the shelter seeking safety and support.
//                   </p>

//                   <p>
//                     Their circumstances are different, and so are their
//                     journeys. Some have needed immediate protection. Others have
//                     needed counselling, healthcare, education, skills,
//                     employment support or help preparing for independent living.
//                   </p>

//                   <p>
//                     These figures provide a snapshot of the people Goshen has
//                     reached and the experiences represented within its work.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Editorial figures */}
//             <div className="border-t border-[#DED5CA]">
//               {IMPACT_FIGURES.map((figure, index) => (
//                 <Reveal key={figure.label} delay={index * 50}>
//                   <div className="grid gap-4 border-b border-[#DED5CA] py-7 sm:grid-cols-[150px_1fr] sm:items-center sm:gap-8">
//                     <p className="font-display text-3xl font-semibold leading-none text-[#43206F] sm:text-4xl">
//                       <StatCounter
//                         value={figure.value}
//                         delay={50}
//                         speed={0.4}
//                       />
//                     </p>

//                     <div>
//                       <h3 className="font-display text-xl font-semibold text-[#2F1B69]">
//                         {figure.label}
//                       </h3>

//                       <p className="mt-2 max-w-xl text-sm leading-6 text-[#655F5A]">
//                         {figure.description}
//                       </p>

//                       {figure.note && (
//                         <p className="mt-2 text-xs leading-5 text-[#817A74]">
//                           {figure.note}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>

//           <Reveal delay={180}>
//             <div className="mt-10 border-l-2 border-[#C9A227] pl-5 sm:ml-[calc(0.9/2*100%)] sm:max-w-3xl">
//               <p className="text-sm leading-6 text-[#655F5A]">
//                 The work has also included support for{" "}
//                 <strong className="font-semibold text-[#43206F]">
//                   2 child-trafficking cases
//                 </strong>
//                 . This is included as supporting context rather than as one of
//                 the six headline figures.
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* =========================================================
//           MORE THAN A SHELTER
//       ========================================================= */}
//       <section className="bg-[#F7F3EC]">
//         <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
//             <Reveal>
//               <div className="relative overflow-hidden rounded-[2rem]">
//                 <div className="relative aspect-[4/3]">
//                   <Image
//                     src="/images/impact.jpg"
//                     alt="A woman representing the journey from shelter and support toward independence"
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                     className="object-cover object-center"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#2F1B69]/55 via-transparent to-transparent" />
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal delay={100}>
//               <div>
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
//                   More than a shelter
//                 </p>

//                 <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
//                   Safety is only the beginning.
//                 </h2>

//                 <div className="mt-6 space-y-4 text-base leading-7 text-[#5E5752]">
//                   <p>
//                     Goshen provides more than accommodation. The work is centred
//                     on helping women and children heal, regain stability and
//                     prepare for the next chapter of their lives.
//                   </p>

//                   <p>
//                     Support can include emotional counselling, spiritual
//                     guidance, healthcare, food and daily provisions, financial
//                     assistance, skills acquisition, employment support and
//                     educational support for children.
//                   </p>

//                   <p>
//                     The goal is not simply to provide a place to stay. It is to
//                     help survivors rebuild their lives and move toward greater
//                     independence and peaceful reintegration.
//                   </p>
//                 </div>

//                 <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
//                   {SUPPORT_AREAS.map((item) => (
//                     <p
//                       key={item}
//                       className="border-b border-[#DED5CA] pb-3 text-sm font-medium text-[#43206F]"
//                     >
//                       {item}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

// {/* =========================================================
//     DIFFERENT JOURNEYS
// ========================================================= */}
// <section className="bg-white">
//   <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
//     <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
//       <Reveal>
//         <div>
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
//             Different journeys. Different outcomes.
//           </p>

//           <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
//             Every survivor's path is different.
//           </h2>

//           <p className="mt-6 max-w-xl text-base leading-7 text-[#5E5752]">
//             Survivors have different circumstances, relationships and
//             hopes for the future. Goshen supports them through counselling
//             and intervention while respecting the outcome that is safest
//             and most appropriate for each person.
//           </p>

//           <div className="mt-7 border-l-2 border-[#C9A227] pl-5">
//             <p className="text-sm leading-6 text-[#655F5A]">
//               The approximate outcome split documented in the Executive
//               Brief should be understood within this context. It is not
//               presented as a headline measure of Goshen's overall impact.
//             </p>
//           </div>
//         </div>
//       </Reveal>

//       <div className="border-t border-[#DED5CA]">
//         {JOURNEY_OUTCOMES.map((item, index) => (
//           <Reveal key={item.value} delay={index * 70}>
//             <div className="grid gap-5 border-b border-[#DED5CA] py-8 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-8">
//               <p className="font-display text-5xl font-semibold leading-none text-[#43206F] sm:text-6xl">
//                 {item.value}
//               </p>

//               <div>
//                 <h3 className="font-display text-xl font-semibold text-[#2F1B69]">
//                   {item.label}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-[#655F5A]">
//                   {item.body}
//                 </p>
//               </div>
//             </div>
//           </Reveal>
//         ))}

//         <Reveal delay={220}>
//           <div className="py-8">
//             <p className="font-display text-4xl font-semibold text-[#2F1B69] sm:text-5xl">
//               26 women
//             </p>

//             <p className="mt-3 max-w-xl text-sm leading-6 text-[#655F5A]">
//               have been reconciled with their husbands following
//               counselling and intervention.
//             </p>
//           </div>
//         </Reveal>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* =========================================================
//           DOCUMENTED OUTCOMES
//       ========================================================= */}
//       <section className="bg-[#EEE8F5]">
//         <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
//           <Reveal>
//             <div className="max-w-3xl">
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
//                 Documented outcomes
//               </p>

//               <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
//                 The difference continues after the shelter.
//               </h2>

//               <p className="mt-6 text-base leading-7 text-[#5E5752]">
//                 The purpose of support is to help survivors move toward safer,
//                 more stable and more independent lives. Documented outcomes
//                 include education, employment, skills development, financial
//                 independence, business development, accommodation and
//                 reintegration.
//               </p>
//             </div>
//           </Reveal>

//           <div className="mt-14 grid gap-x-12 gap-y-0 md:grid-cols-2">
//             {OUTCOMES.map((outcome, index) => (
//               <Reveal key={outcome.title} delay={(index % 2) * 70}>
//                 <article className="border-t border-[#CFC3DA] py-7">
//                   <h3 className="font-display text-2xl font-semibold text-[#2F1B69]">
//                     {outcome.title}
//                   </h3>

//                   <p className="mt-3 max-w-xl text-sm leading-6 text-[#655F5A]">
//                     {outcome.body}
//                   </p>
//                 </article>
//               </Reveal>
//             ))}
//           </div>

//           <Reveal delay={120}>
//             <div className="mt-10 border-t border-[#CFC3DA] pt-8">
//               <p className="max-w-3xl text-sm leading-6 text-[#655F5A]">
//                 The Executive Brief also documents an example of a survivor who
//                 obtained a Master's degree at the London School of Economics
//                 while her children were integrated into secondary schools in the
//                 United Kingdom.
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* =========================================================
//           CHILDREN, SAFETY AND JUSTICE
//       ========================================================= */}
//       <section className="bg-[#F7F3EC]">
//         <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
//             <Reveal>
//               <div>
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
//                   Protecting children's futures
//                 </p>

//                 <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
//                   Safety can affect every part of a child's life.
//                 </h2>

//                 <p className="mt-6 text-base leading-7 text-[#5E5752]">
//                   Approximately 80% of cases involved children leaving their
//                   neighbourhood schools because of safety and proximity
//                   requirements. Goshen works to restore educational continuity
//                   and stability while helping children adjust to new
//                   circumstances.
//                 </p>

//                 <p className="mt-5 text-base leading-7 text-[#5E5752]">
//                   Children are enrolled in new schools as quickly as possible
//                   where appropriate, helping to reduce disruption to their
//                   education and wellbeing.
//                 </p>
//               </div>
//             </Reveal>

//             <Reveal delay={100}>
//               <div className="border-y border-[#DED5CA]">
//                 <div className="py-8">
//                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
//                     Safety and justice
//                   </p>

//                   <h3 className="mt-3 font-display text-3xl font-semibold text-[#2F1B69]">
//                     Working with the wider protection system.
//                   </h3>

//                   <p className="mt-4 text-sm leading-6 text-[#655F5A]">
//                     Goshen's work includes documented collaboration with DSVRT,
//                     the State Police, legal professionals and other partners to
//                     support survivors and pursue protection and justice.
//                   </p>

//                   <p className="mt-4 text-sm leading-6 text-[#655F5A]">
//                     According to the Executive Brief, some perpetrators have
//                     been arrested and charged to court, while a number of child
//                     abusers have been arraigned and imprisoned with DSVRT
//                     assistance.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SURVIVOR'S KIT
//       ========================================================= */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
//           <Reveal>
//             <div className="grid gap-8 rounded-[2rem] bg-[#2F1B69] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
//               <div className="max-w-2xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E0C45A]">
//                   The journey continues
//                 </p>

//                 <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
//                   Preparing for independent living.
//                 </h2>

//                 <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
//                   As a woman prepares to leave Goshen and begin a more
//                   independent life, practical support can help make that
//                   transition more stable. Learn more about the Survivor's Kit
//                   and how it supports the next chapter.
//                 </p>
//               </div>

//               <Link
//                 href={SURVIVORS_KIT_HREF}
//                 className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white hover:text-[#2F1B69] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2F1B69]"
//               >
//                 See Survivor's Kit
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* =========================================================
//           CLOSING CTA
//       ========================================================= */}
//       <section className="bg-[#F7F3EC]">
//         <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
//           <Reveal>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
//               The impact continues
//             </p>

//             <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
//               One woman. One child. One family at a time.
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5E5752]">
//               Goshen continues to work toward safety, healing, independence and
//               reintegration for women and children affected by violence. Your
//               support helps make that work possible.
//             </p>

//             <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
//               <Link
//                 href="/support-goshen"
//                 className="inline-flex items-center justify-center rounded-full bg-[#43206F] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#351858] focus:outline-none focus:ring-2 focus:ring-[#43206F] focus:ring-offset-2 active:translate-y-0"
//               >
//                 Support Goshen
//               </Link>

//               <DonateButton className="inline-flex items-center justify-center rounded-full bg-[#B64A16] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#9E3F12] focus:outline-none focus:ring-2 focus:ring-[#B64A16] focus:ring-offset-2 active:translate-y-0">
//                 Donate
//               </DonateButton>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { StatCounter } from "@/components/stat-counter";
import { DonateButton } from "@/components/donate-button";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Discover how Goshen Shelters has supported women and children affected by domestic and sexual violence through safety, healing, education, skills development, employment and reintegration.",
};

/**
 * Keep this configurable so the dedicated Survivor's Kit page can be
 * moved later without changing the structure of this page.
 */
const SURVIVORS_KIT_HREF = "/survivors-kit";

const IMPACT_FIGURES = [
  {
    value: 174,
    label: "Women supported",
    description:
      "Women have come through Goshen seeking safety, care and a pathway toward a new beginning.",
  },
  {
    value: 265,
    label: "Children supported",
    description:
      "Children have been supported alongside women affected by domestic and sexual violence.",
  },
  {
    value: 23,
    label: "Teenagers supported",
    description:
      "Teenagers have also received support through the shelter's work.",
    note: "This figure may overlap with the children figure and is not presented as an additional total.",
  },
  {
    value: 22,
    label: "Rape cases",
    description:
      "Goshen has supported survivors of rape with care, confidentiality and practical support.",
  },
  {
    value: 15,
    label: "Child sexual abuse cases",
    description:
      "Children affected by sexual abuse have received support and protection.",
  },
  {
    value: 7,
    label: "Babies born at Goshen",
    description:
      "Seven babies have been born during shelter stays, including one set of twins.",
  },
];

const SUPPORT_AREAS = [
  "Emotional counselling",
  "Spiritual guidance",
  "Healthcare and medical support",
  "Food and daily provisions",
  "Financial assistance",
  "Skills acquisition",
  "Employment support",
  "Educational support for children",
];

const OUTCOMES = [
  {
    title: "Education restored",
    body: "Some women returned to or completed tertiary education after experiences of domestic violence had interrupted their studies.",
  },
  {
    title: "Meaningful employment",
    body: "Some survivors secured employment in schools, private companies and government agencies as they rebuilt their independence.",
  },
  {
    title: "Skills and self-sufficiency",
    body: "Women have participated in skills-development programmes, including tailoring and culinary training, to strengthen their ability to support themselves.",
  },
  {
    title: "Financial independence",
    body: "Support has helped some survivors move toward greater financial independence and establish more stable livelihoods.",
  },
  {
    title: "Businesses and accommodation",
    body: "Some survivors received support that helped them start businesses and secure independent accommodation as they transitioned from the shelter.",
  },
  {
    title: "Peaceful reintegration",
    body: "Women have been successfully reintegrated into society and are living peaceful lives away from violence.",
  },
];

const JOURNEY_OUTCOMES = [
  {
    value: "90%",
    label: "chose not to reconcile",
    body: "Most survivors chose not to return to their partners after considering their circumstances and receiving support.",
  },
  {
    value: "5%",
    label: "remained separated",
    body: "Some remained separated while continuing counselling and working through their circumstances.",
  },
  {
    value: "5%",
    label: "reconciled",
    body: "Some reconciled with their partners following counselling and intervention.",
  },
];

export default function ImpactPage() {
  return (
    <main className="overflow-hidden bg-[#F7F3EC]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#F7F3EC]">
        <div className="grid items-stretch lg:grid-cols-[55%_45%]">
          {/* Image */}
          <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[620px]">
            <Image
              src="/images/impacts.jpg"
              alt="A woman and child representing the women and children supported by Goshen Shelters"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            {/* Desktop fade from image into text */}
            <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,transparent_50%,rgba(247,243,236,0.18)_62%,rgba(247,243,236,0.48)_72%,rgba(247,243,236,0.82)_86%,#F7F3EC_100%)]" />

            {/* Mobile fade from image into content */}
            <div className="absolute inset-0 lg:hidden bg-[linear-gradient(to_bottom,transparent_55%,rgba(247,243,236,0.18)_68%,rgba(247,243,236,0.72)_88%,#F7F3EC_100%)]" />

            {/* Subtle bottom fade */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#F7F3EC_0%,rgba(247,243,236,0.08)_24%,transparent_52%)]" />
          </div>

          {/* Text */}
          <div className="relative flex items-center px-6 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-10 lg:px-12 lg:py-20">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B6914]">
                  Our Impact
                </p>

                <h1 className="mt-5 font-display text-4xl font-semibold leading-[0.94] tracking-tight text-[#2F1B69] sm:text-5xl lg:text-[3.4rem]">
                  Creating safety.
                  <br />
                  Restoring lives.
                  <br />
                  Building futures.
                </h1>

                <p className="mt-7 max-w-lg text-base leading-7 text-[#4E4742] sm:text-lg sm:leading-8">
                  For more than a decade, Goshen Shelters has supported women
                  and children affected by domestic and sexual violence,
                  providing safety, support and a pathway toward a better
                  future.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          PEOPLE BEHIND THE IMPACT
      ========================================================== */}
      <section className="border-y border-[#E6DDD4] bg-[#FBF8F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
                The people behind our impact
              </p>

              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
                Behind every figure is a woman or child whose life changed.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5E5752]">
                Since Goshen began its work, women and children have come
                through the shelter seeking safety and support. Among those
                supported are survivors of rape, child sexual abuse and child
                trafficking.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#5E5752]">
                The figures tell part of the story. What matters most is what
                happened after people arrived: receiving care, regaining
                stability, continuing education, developing skills and moving
                towards independent lives.
              </p>

              <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-[#6F6862]">
                Goshen has also supported two cases involving child trafficking.
                Each woman and child is met with care, confidentiality and
                dignity.
              </p>
            </Reveal>

            {/* Editorial figures — deliberately NOT cards */}
            <Reveal delay={100}>
              <div className="grid grid-cols-2 border-t border-[#D9CFC5] sm:grid-cols-3">
                {IMPACT_FIGURES.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`min-h-[145px] border-b border-[#D9CFC5] py-7 pr-5 sm:min-h-[165px] sm:py-8 ${
                      index % 2 !== 0 ? "pl-5 sm:border-l sm:pl-6" : "pl-0"
                    } ${index >= 2 ? "sm:border-l sm:pl-6" : ""}`}
                  >
                    <p className="font-display text-4xl font-semibold leading-none text-[#2F1B69] sm:text-5xl">
                      <StatCounter value={stat.value} />
                    </p>

                    <p className="mt-3 max-w-[150px] text-sm font-medium leading-5 text-[#5E5752]">
                      {stat.label}
                    </p>

                    {stat.note && (
                      <p className="mt-1 text-xs italic leading-4 text-[#827A73]">
                        {stat.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* =========================================================
          MORE THAN A SHELTER
      ========================================================= */}
      <section className="bg-[#F7F3EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/impact.jpg"
                    alt="A woman representing the journey from shelter and support toward independence"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F1B69]/55 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
                  Impact Story
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
                  Safety is only the beginning.
                </h2>

                <div className="mt-6 space-y-4 text-base leading-7 text-[#5E5752]">
                  <p>
                    Goshen provides more than accommodation. The work is centred
                    on helping women and children heal, regain stability and
                    prepare for the next chapter of their lives.
                  </p>

                  <p>
                    Support can include emotional counselling, spiritual
                    guidance, healthcare/medical support, food and daily
                    provisions, financial assistance, skills acquisition,
                    employment support and educational support for children.
                  </p>

                  <p>
                    The goal is not simply to provide a place to stay. It is to
                    help survivors rebuild their lives and move toward greater
                    independence and peaceful reintegration.
                  </p>
                </div>

                <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {SUPPORT_AREAS.map((item) => (
                    <p
                      key={item}
                      className="border-b border-[#DED5CA] pb-3 text-sm font-medium text-[#43206F]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIFFERENT JOURNEYS
      ========================================================== */}
      <section className="bg-[#EEE6F5]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
            <Reveal delay={120}>
              <div className="grid gap-0 border-y border-[#D4C7DF] sm:grid-cols-3 sm:border-y-0">
                <div className="border-b border-[#D4C7DF] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
                  <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
                    90%
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5E5752]">
                    chose not to reconcile with their partners
                  </p>
                </div>

                <div className="border-b border-[#D4C7DF] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
                  <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
                    5%
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5E5752]">
                    remained separated while undergoing counselling
                  </p>
                </div>

                <div className="py-7 sm:px-6 sm:py-4">
                  <p className="font-display text-5xl font-semibold text-[#2F1B69] sm:text-6xl">
                    5%
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5E5752]">
                    reconciled following counselling and intervention
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
                Different journeys. Different outcomes.
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
                Every survivor&apos;s path is different.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#5E5752]">
                Every woman&apos;s story is unique. Through counselling and
                intervention, Goshen supports survivors as they consider what
                comes next for themselves and their families.
              </p>

              <p className="mt-5 text-base leading-7 text-[#5E5752]">
                For some, that means rebuilding independently. For others, it
                may involve reconciliation, relocation or another path towards
                safety and stability.
              </p>

              <p className="mt-5 text-sm leading-6 text-[#706862]">
                These approximate outcomes reflect the different paths taken
                following counselling and intervention.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="mt-14 border-t border-[#D4C7DF] pt-8 sm:mt-16">
              <p className="max-w-3xl font-display text-2xl leading-9 text-[#2F1B69] sm:text-3xl">
                To date, <span className="text-[#B64A16]">26 women</span> have
                been reconciled with their husbands following counselling and
                intervention.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6B625D]">
                Reconciliation is never presented as the only measure of
                success. The priority is safety, healing and a sustainable
                future for each survivor.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          MORE THAN A SHELTER
      ========================================================== */}
      {/* <section className="bg-[#F7F3EC]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <Image
              src="/images/impact-sewing.jpg"
              alt="A woman developing practical skills"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
            <Reveal delay={100}>
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B64A16]">
                  More than a shelter
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2F1B69] sm:text-4xl">
                  Safety is only the beginning.
                </h2>

                <p className="mt-6 text-base leading-7 text-[#5E5752]">
                  Goshen provides holistic support that addresses the needs of
                  the whole person — mind, body and spirit. Our care includes
                  emotional counselling, spiritual guidance, healthcare and
                  medical support, food and daily provisions.
                </p>

                <p className="mt-5 text-base leading-7 text-[#5E5752]">
                  Women may also receive financial assistance, skills
                  acquisition and employment support, while children receive
                  educational support to help minimise disruption to their
                  lives.
                </p>

                <p className="mt-5 text-base leading-7 text-[#5E5752]">
                  The goal is not simply to provide a place of safety, but to
                  help survivors heal, regain stability and rebuild independent
                  lives.
                </p>

                <div className="mt-8 h-px w-20 bg-[#C9A227]" />

                <p className="mt-5 font-display text-xl leading-7 text-[#2F1B69]">
                  A safe place today can become the foundation for a stronger
                  tomorrow.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* =========================================================
          DOCUMENTED OUTCOMES
      ========================================================= */}
      <section className="bg-[#EEE8F5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
                Documented outcomes
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
                The difference continues after the shelter.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#5E5752]">
                The purpose of support is to help survivors move toward safer,
                more stable and more independent lives. Documented outcomes
                include education, employment, skills development, financial
                independence, business development, accommodation and
                reintegration.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {OUTCOMES.map((outcome, index) => (
              <Reveal key={outcome.title} delay={(index % 2) * 70}>
                <article className="border-t border-[#CFC3DA] py-7">
                  <h3 className="font-display text-2xl font-semibold text-[#2F1B69]">
                    {outcome.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#655F5A]">
                    {outcome.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 border-t border-[#CFC3DA] pt-8">
              <p className="max-w-3xl text-sm leading-6 text-[#655F5A]">
                The Executive Brief also documents an example of a survivor who
                obtained a Master's degree at the London School of Economics
                while her children were integrated into secondary schools in the
                United Kingdom.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CHILDREN, SAFETY AND JUSTICE
      ========================================================= */}
      <section className="bg-[#F7F3EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
                  Children, Safety and Justice
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
                  Safety can affect every part of a child's life.
                </h2>

                <p className="mt-6 text-base leading-7 text-[#5E5752]">
                  Approximately 80% of cases involved children leaving their
                  neighbourhood schools because of safety and proximity
                  requirements. Goshen works to restore educational continuity
                  and stability while helping children adjust to new
                  circumstances.
                </p>

                <p className="mt-5 text-base leading-7 text-[#5E5752]">
                  Children are enrolled in new schools as quickly as possible
                  where appropriate, helping to reduce disruption to their
                  education and wellbeing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-y border-[#DED5CA]">
                <div className="py-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
                    Safety and justice
                  </p>

                  <h3 className="mt-3 font-display text-3xl font-semibold text-[#2F1B69]">
                    Working with the wider protection system.
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#655F5A]">
                    Goshen's work includes documented collaboration with DSVRT,
                    the State Police, legal professionals and other partners to
                    support survivors and pursue protection and justice.
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#655F5A]">
                    According to the Executive Brief, some perpetrators have
                    been arrested and charged to court, while a number of child
                    abusers have been arraigned and imprisoned with DSVRT
                    assistance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          SURVIVOR'S KIT
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] bg-[#2F1B69] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E0C45A]">
                  The journey continues
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                  Preparing for independent living.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  As a woman prepares to leave Goshen and begin a more
                  independent life, practical support can help make that
                  transition more stable. Learn more about the Survivor's Kit
                  and how it supports the next chapter.
                </p>
              </div>

              <Link
                href={SURVIVORS_KIT_HREF}
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white hover:text-[#2F1B69] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2F1B69]"
              >
                See Survivor's Kit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="bg-[#F7F3EC]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B6914]">
              The impact continues
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#2F1B69] sm:text-5xl">
              One woman. One child. One family at a time.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5E5752]">
              Goshen continues to work toward safety, healing, independence and
              reintegration for women and children affected by violence. Your
              support helps make that work possible.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/support-goshen"
                className="inline-flex items-center justify-center rounded-full bg-[#43206F] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#351858] focus:outline-none focus:ring-2 focus:ring-[#43206F] focus:ring-offset-2 active:translate-y-0"
              >
                Support Goshen
              </Link>

              <DonateButton className="inline-flex items-center justify-center rounded-full bg-[#B64A16] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#9E3F12] focus:outline-none focus:ring-2 focus:ring-[#B64A16] focus:ring-offset-2 active:translate-y-0">
                Donate
              </DonateButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
