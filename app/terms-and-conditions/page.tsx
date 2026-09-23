import React from "react";
import { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Goshen Shelters",
  description:
    "Read the Terms & Conditions governing your use of the Goshen Shelters website and services.",
};

export default function TermsPage() {
  return (
    <PolicyLayout>
      {/* <Reveal> */}
      <article className="prose max-w-none space-y-6 text-[#4E4742]">
        <div className="border-b border-[#EFE7E3] pb-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2F1B69]">
            Terms &amp; Conditions
          </h2>
          <p className="mt-1 text-sm font-medium text-[#B64A16]">
            Effective Date: September 2026
          </p>
        </div>

        <p className="leading-relaxed">
          Welcome to Goshenshelters.org, the official website of God&apos;s Home
          for Women Foundation (Goshen Shelters). These Terms & Conditions
          govern your use of the Goshen Shelters website and the services and
          features made available through it, including donations, support
          enquiries, volunteering, partnerships and other forms of engagement
          with Goshen Shelters.
        </p>
        <p className="leading-relaxed">
          By using this website, you agree to these Terms & Conditions. If you
          do not agree with these terms, please do not use the website.
        </p>

        <section className="md:ml-6">
          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              1. About Goshen Shelters
            </h3>
            <p className="leading-relaxed">
              God&apos;s Home for Women Foundation (Goshen Shelters) is a
              registered Nigerian non-governmental organisation committed to
              supporting women and children affected by violence, vulnerability
              and difficult circumstances.
              <br />
              <strong>CAC No.:</strong> CAC/IT/No/77215
              <br />
              The information provided on this website is intended to explain
              our work, programmes, activities and ways in which members of the
              public can support or engage with Goshen Shelters.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              2. Use of the Website
            </h3>
            <p className="leading-relaxed">
              You may use this website for lawful purposes and in accordance
              with these Terms & Conditions.
              <br />
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the website for any unlawful or fraudulent purpose</li>
              <li>
                Attempt to gain unauthorised access to the website or its
                systems
              </li>
              <li>Interfere with the security or operation of the website</li>
              <li>
                Introduce malicious software, viruses or other harmful material
              </li>
              <li>
                Use information obtained from the website to harm or exploit
                another person; or
              </li>
              <li>
                Submit information that you know to be false or misleading
              </li>
            </ul>
            <p className="leading-relaxed">
              Goshen Shelters reserves the right to restrict or suspend access
              to the website where reasonably necessary to protect the website,
              its users or the organisation.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              3. Website Information
            </h3>
            <p className="leading-relaxed">
              We make reasonable efforts to ensure that information published on
              the website is accurate and up to date. However, information may
              change from time to time, including information about our
              programmes, activities, events, fundraising initiatives and other
              services.
            </p>
            <p className="leading-relaxed">
              The information on this website should therefore not be treated as
              a guarantee that any particular programme, service, activity or
              opportunity will always be available.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              4. Donations
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters welcomes voluntary donations from individuals,
              organisations and other supporters. You may make donations through
              the payment methods made available on the website. When making a
              donation, you are responsible for ensuring that the information
              you provide is accurate.
              <br />
            </p>
            <p className="leading-relaxed">
              <strong>Donations are generally non-refundable.</strong>
              <br />
            </p>
            <p className="leading-relaxed">
              Once a donation has been successfully processed, Goshen Shelters
              does not ordinarily provide refunds.
              <br />
            </p>
            <p className="leading-relaxed">
              However, Goshen Shelters may consider a refund in exceptional
              circumstances, such as:
              <br />
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A duplicate payment</li>
              <li>An obvious technical or payment error</li>
              <li>An unauthorised transaction; or</li>
              <li>
                Another circumstance that Goshen Shelters considers appropriate,
                subject to verification and applicable law.
              </li>
            </ul>
            <p className="leading-relaxed">
              A request for a refund does not automatically guarantee that a
              refund will be issued.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              5. Monthly Giving
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters may provide an option for supporters to make
              monthly donations. Monthly giving is voluntary and does not, by
              itself, create a subscription, membership or other obligation to
              continue donating.
            </p>
            <p className="leading-relaxed">
              Where a donor chooses to give monthly, the donor remains
              responsible for deciding whether and when to make each monthly
              contribution.
            </p>
            <p className="leading-relaxed">
              Goshen Shelters may use the email address provided by a donor to
              acknowledge or thank the donor for their contribution and to send
              reminders relating to the donor&apos;s chosen monthly giving.
            </p>
            <p className="leading-relaxed">
              These communications are related to the donor&apos;s chosen
              support of Goshen Shelters and are not general marketing
              communications.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              6. Online Payments and Bank Transfers
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters provides several ways for supporters to make
              donations, including card payments and direct bank transfers.
            </p>

            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              Card Payments
            </h3>
            <p className="leading-relaxed">
              Card donations are processed through Paystack. Goshen Shelters
              does not store full card details, PINs, passwords or other payment
              credentials on its website. Funds received through card payments
              are settled to Goshen Shelters&apos; designated bank account.
            </p>

            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              Bank Transfers
            </h3>
            <p className="leading-relaxed">
              Supporters may also make donations directly to the bank account
              details displayed on the Goshen Shelters website. These may
              include accounts denominated in Naira, US Dollars and British
              Pounds.
            </p>
            <p className="leading-relaxed">
              For international donations, supporters may choose to use an
              international card payment through Paystack or make a direct
              transfer to the applicable Goshen Shelters domiciliary bank
              account.
            </p>
            <p className="leading-relaxed">
              Goshen Shelters is not responsible for delays, errors or charges
              imposed by a donor&apos;s bank or other financial institution
              during a bank transfer.
            </p>

            <p className="leading-relaxed">
              Payment processing through Paystack and any applicable third-party
              payment services is subject to the relevant provider&apos;s terms
              and policies.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              7. Support Enquiries
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters provides ways for individuals to contact us
              regarding support and assistance. The website contact form may
              collect a name, email address, telephone number and message.
            </p>
            <p className="leading-relaxed">
              For your safety and privacy, please do not submit highly sensitive
              or confidential personal information through the ordinary website
              contact form.
            </p>
            <p className="leading-relaxed">
              If you contact Goshen Shelters for support, a member of our team
              may contact you by telephone or another appropriate communication
              channel to discuss your situation privately.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              8. Volunteering and Partnerships
            </h3>
            <p className="leading-relaxed">
              The website may provide opportunities for individuals and
              organisations to express an interest in volunteering, partnering
              with Goshen Shelters, fundraising, donating items or supporting
              Goshen Shelters&apos; programmes.
            </p>
            <p className="leading-relaxed">
              Submitting an enquiry does not automatically create a volunteer
              position, partnership, contract or other formal relationship with
              Goshen Shelters. Any formal arrangement will be subject to the
              terms agreed between the relevant parties.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              9. Donations of Items
            </h3>
            <p className="leading-relaxed">
              Where Goshen Shelters invites donations of physical items, the
              organisation may specify the types of items currently required.
            </p>
            <p className="leading-relaxed">
              Goshen Shelters reserves the right to determine whether donated
              items are suitable for its current needs and programmes. Where an
              item cannot reasonably be used, Goshen Shelters may, where
              appropriate, decline or redirect the donation.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              10. Intellectual Property
            </h3>
            <p className="leading-relaxed">
              Unless otherwise stated, the content on this website, including
              text, photographs, graphics, logos, branding and other materials,
              belongs to or is used by Goshen Shelters with permission.
            </p>
            <p className="leading-relaxed">
              You may view and use the website for personal, non-commercial
              purposes. You may not reproduce, modify, distribute, sell or
              commercially exploit Goshen Shelters&apos; website content without
              prior permission, except where permitted by law.
            </p>
            <p className="leading-relaxed">
              The Goshen Shelters name, logo and branding may not be used in a
              way that suggests an unauthorised association, endorsement or
              partnership.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              11. Photographs and Stories
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters may publish photographs, videos, stories and other
              material relating to its work, programmes and activities. We seek
              to obtain appropriate permission or consent before publishing
              identifiable personal stories, photographs or other material where
              required.
            </p>
            <p className="leading-relaxed">
              Because Goshen Shelters works with vulnerable individuals, we take
              particular care when publishing information that could identify or
              expose beneficiaries.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              12. External Websites and Services
            </h3>
            <p className="leading-relaxed">
              The Goshen Shelters website may contain links to third-party
              websites or services, including payment providers, WhatsApp and
              social media platforms.
            </p>
            <p className="leading-relaxed">
              These external websites operate independently from Goshen Shelters
              and have their own terms and privacy policies. Goshen Shelters is
              not responsible for the content, security, availability or privacy
              practices of third-party websites.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              13. Website Availability
            </h3>
            <p className="leading-relaxed">
              We aim to keep the website available and functioning properly, but
              we cannot guarantee that the website will always be available,
              uninterrupted or free from technical errors.
            </p>
            <p className="leading-relaxed">
              We may temporarily suspend or modify the website where necessary
              for maintenance, security, technical improvements or other
              operational reasons.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              14. Limitation of Liability
            </h3>
            <p className="leading-relaxed">
              To the extent permitted by applicable law, Goshen Shelters will
              not be responsible for losses or damage arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Temporary unavailability of the website</li>
              <li>
                Reliance on information published on the website where that
                information has subsequently changed
              </li>
              <li>Problems caused by third-party websites or services</li>
              <li>
                Payment-processing problems originating with third-party
                providers; or
              </li>
              <li>
                Unauthorised access resulting from circumstances outside our
                reasonable control
              </li>
            </ul>
            <p className="leading-relaxed">
              Nothing in these Terms & Conditions excludes or limits liability
              where such exclusion or limitation is not permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              15. Changes to These Terms
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters may update these Terms & Conditions from time to
              time to reflect changes to the website, our services, our
              activities or applicable legal requirements.
            </p>
            <p className="leading-relaxed">
              The updated version will be published on this page. The Effective
              Date at the beginning of the document will indicate when the
              current version came into effect.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              16. Governing Law
            </h3>
            <p className="leading-relaxed">
              These Terms & Conditions are governed by the laws of the Federal
              Republic of Nigeria. Any matters arising from the use of this
              website will be subject to the applicable laws and courts of
              Nigeria.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              17. Contact Us
            </h3>
            <p className="leading-relaxed">
              If you have questions about these Terms & Conditions, please
              contact:
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
        </section>
      </article>
      {/* </Reveal> */}
    </PolicyLayout>
  );
}
