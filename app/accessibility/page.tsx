import React from "react";
import { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Accessibility Statement | Goshen Shelters",
  description:
    "Goshen Shelters accessibility policy and standards for ensuring web usability for everyone.",
};

export default function AccessibilityPage() {
  return (
    <PolicyLayout>
      {/* <Reveal> */}
      <article className="prose max-w-none space-y-6 text-[#4E4742]">
        <div className="border-b border-[#EFE7E3] pb-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2F1B69]">
            Accessibility Statement
          </h2>
          <p className="mt-1 text-sm font-medium text-[#B64A16]">
            Effective Date: September 2026
          </p>
        </div>

        <p className="leading-relaxed">
          God&apos;s Home for Women Foundation (Goshen Shelters) is committed to
          making Goshenshelters.org accessible and usable by as many people as
          possible, including people with disabilities.
          <br />
          <br />
          We aim to provide a website that is clear, easy to navigate and usable
          across different devices and assistive technologies. We continue to
          review and improve the accessibility and usability of our website as
          it develops.
        </p>

        <section className="md:ml-6">
          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              1. Our Accessibility Approach
            </h3>
            <p className="leading-relaxed">
              We aim to follow recognised web accessibility practices when
              designing, developing and updating Goshenshelters.org.
              <br />
              <br />
              Our approach includes consideration of accessibility in areas such
              as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clear and consistent navigation</li>
              <li>Readable text and appropriate presentation of content</li>
              <li>Sufficient colour contrast where reasonably practicable</li>
              <li>Descriptive headings and links</li>
              <li>Accessible forms and clear instructions</li>
              <li>Alternative text for meaningful images where appropriate</li>
              <li>
                Keyboard-friendly navigation and interaction where reasonably
                practicable; and
              </li>
              <li>
                Responsive design so that content can be accessed across
                different screen sizes and devices.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              2. Ongoing Improvement
            </h3>
            <p className="leading-relaxed">
              Accessibility is an ongoing process. As we update the website, add
              new content or introduce new features, we will seek to identify
              and address accessibility barriers where reasonably practicable.
              <br />
              <br />
              We do not currently claim that every part of the website meets
              every accessibility standard or that the website is fully
              compliant with a particular accessibility certification or
              standard. We will continue to work towards improving
              accessibility.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              3. Third-Party Services
            </h3>
            <p className="leading-relaxed">
              Some features of the Goshen Shelters website may be provided
              through third-party services, including payment services such as
              Paystack, WhatsApp and other external platforms.
              <br />
              <br />
              These services operate independently and may have their own
              accessibility features, limitations and policies. Goshen Shelters
              cannot guarantee the accessibility of third-party websites or
              services that are outside our direct control.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              4. Accessibility Feedback
            </h3>
            <p className="leading-relaxed">
              We welcome feedback from visitors who experience difficulty
              accessing or using any part of Goshenshelters.org.
              <br />
              <br />
              If you encounter an accessibility barrier, please let us know.
              Where possible, please tell us:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The page or feature you were trying to use</li>
              <li>What difficulty you experienced; and</li>
              <li>
                The device, browser or assistive technology you were using, if
                relevant
              </li>
            </ul>
            <p className="leading-relaxed">
              Your feedback will help us identify areas where improvements may
              be needed.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              5. Contact Us
            </h3>
            <p className="leading-relaxed">
              Accessibility feedback, questions or requests can be sent to:
              <br />
            </p>
            <div className="mt-2 rounded-xl bg-[#F7F3EC] p-4 text-sm leading-6">
              <strong>
                God&apos;s Home for Women Foundation (Goshen Shelters)
              </strong>
              <br />
              45C Sobo Arobiodu Close,
              <br /> GRA Ikeja, Lagos, Nigeria
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:info@goshenshelters.org">
                info@goshenshelters.org
              </a>
              <br />
              <strong>Helpline:</strong>{" "}
              <a href="tel:07018549218"> 0701 854 9218</a>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              6. Alternative Ways to Contact Goshen
            </h3>
            <p className="leading-relaxed">
              If you are unable to access information or complete an action on
              the website because of an accessibility barrier, please contact us
              using the details above. A member of Goshen Shelters may be able
              to provide information or assistance through another appropriate
              communication channel.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              7. Alternative Ways to Contact Goshen
            </h3>
            <p className="leading-relaxed">
              We may update this Accessibility Statement as the website
              develops, accessibility practices evolve or improvements are made.
              <br />
              <br />
              The Effective Date at the beginning of this statement indicates
              when the current version came into effect.
            </p>
          </section>
        </section>
      </article>
      {/* </Reveal> */}
    </PolicyLayout>
  );
}
