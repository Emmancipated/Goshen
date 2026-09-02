import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { HelpButton } from "@/components/help-button";
// import { AboutValues } from "@/components/about-values";
import { FounderVideo } from "@/components/about/founder-video";
import { AboutValues } from "@/components/about/about-values";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "God's Home for Women Foundation operates Goshen Shelters — a safe, confidential refuge offering hope, healing and restoration for women and children.",
  openGraph: {
    title: "About Us",
    description:
      "God's Home for Women Foundation operates Goshen Shelters — a safe, confidential refuge offering hope, healing and restoration for women and children.",
    images: [
      {
        url: "/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "About Goshen Shelters — a safe, confidential refuge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "God's Home for Women Foundation operates Goshen Shelters — a safe, confidential refuge offering hope, healing and restoration for women and children.",
    images: ["/images/about.jpg"],
  },
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
                God&apos;s Home for Women Foundation was established in July
                2015 by God&apos;s Chosen Women Fellowship through the
                founder&apos;s vision of providing refuge and support for women
                and children affected by domestic violence.
              </p>
              <p>
                Through Goshen Shelters, we provide a safe and confidential
                environment where women and children facing violence can find
                refuge, support and a pathway towards rebuilding their lives.
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
              src="/images/03_Tablet_Portrait_1200x700.jpg"
              // src="/images/00_MASTER_APPROVED_GROUP_PHOTO_1536x1024.jpg"
              alt="group of women and children"
              fill
              priority
              // sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center lg:hidden"
            />
            <Image
              src="/images/00_MASTER_1718x916.jpg"
              // src="/images/00_MASTER_APPROVED_GROUP_PHOTO_1536x1024.jpg"
              alt="group of women and children"
              fill
              priority
              // sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center hidden lg:block"
            />

            {/* Desktop curve  */}
            <div className="absolute inset-y-0 left-0 hidden w-[30%] xl:block">
              <div className="absolute inset-0 bg-night-50 [clip-path:ellipse(75%_80%_at_0%_50%)]" />
            </div>

            {/* Mobile curve */}
            {/* <div className="absolute inset-x-0 top-0 h-[30%] lg:hidden">
              <div className="absolute inset-0 bg-night-50 [clip-path:ellipse(85%_100%_at_50%_0%)]" />
            </div> */}
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
                  Safety, dignity and hope for all.
                </h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-night-600">
                  <p>
                    Violence can disrupt every part of a woman&apos;s life — her
                    sense of safety, her confidence, her relationships, her
                    education, her work and her hopes for the future.
                  </p>
                  <p>
                    Goshen exists to provide a place of refuge away from
                    violence, where women and children can begin to heal and
                    regain a sense of safety and stability.
                  </p>
                  <p>But safety is only the beginning.</p>
                  <p>
                    We support survivors as they begin the process of emotional
                    and physical restoration, regain confidence, develop skills
                    and work towards rebuilding their lives.
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
                      Since our establishment in 2015, Goshen has been committed
                      to providing more than temporary shelter.
                    </p>
                    <p>
                      We create an environment where women and children can be
                      safe, supported and given the opportunity to begin again.
                    </p>
                    <p>
                      For every woman, the journey is different. Some need time
                      and support to heal. Some need help returning to education
                      or developing practical skills. Others need support as
                      they work towards employment, independence and
                      reintegration into society.
                    </p>
                    <p>
                      Our role is to walk alongside survivors as they move
                      towards a safer and more stable future.
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

              {/* <Reveal delay={140}>
                <FounderVideo
                  founderName={FOUNDER_NAME}
                  videoSrc={FOUNDER_VIDEO_SRC}
                  posterSrc="/images/about.jpg"
                />
              </Reveal> */}
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
                    At the heart of Goshen is a belief in the worth, dignity and
                    potential of every woman and child.
                  </p>
                  <p>
                    Our work is inspired by God&apos;s love and compassion. We
                    believe that survivors deserve not only protection from
                    violence, but also the opportunity to heal, regain
                    confidence and build a future with dignity, courage and
                    hope.
                  </p>
                  <p>
                    {" "}
                    This is what{" "}
                    <span className="font-bold text-gold-600">
                      Hope, Healing and Restoration
                    </span>{" "}
                    means to us.
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
                    At Goshen, we understand that leaving violence is only the
                    first step.
                  </p>
                  <p>
                    We provide a supportive environment in which survivors can
                    begin to recover emotionally and physically, while receiving
                    practical support that can help them rebuild their lives.
                  </p>
                  <p>
                    Our approach is centred on helping women move from safety
                    towards healing, rebuilding and a new beginning.
                  </p>
                  <p>
                    The specific support each woman receives depends on her
                    circumstances and needs.
                  </p>
                </div>
                <Link
                  href="/our-work"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-night-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold-500 uppercase"
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
                  src="/images/safety-group.jpg"
                  // src="/images/00_MASTER_APPROVED_GROUP_PHOTO_1536x1024.jpg"
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
              <p>There is still much work to do.</p>
              <p>
                God&apos;s Home for Women Foundation is committed to reaching
                more women, increasing awareness of domestic violence,
                strengthening the support available to survivors and continuing
                to transform lives and communities.
              </p>
              <p>
                We also aspire to secure a permanent site and develop more
                sustainable funding so that Goshen can continue providing refuge
                and support for women and children who need it.
              </p>
              <p>
                We believe that with God&apos;s help and the support of a
                compassionate community, more lives can move from violence
                towards safety, healing and hope.
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
