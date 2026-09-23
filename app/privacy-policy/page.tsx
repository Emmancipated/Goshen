import { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Goshen Shelters",
  description:
    "Learn how God's Home for Women Foundation (Goshen Shelters) collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout>
      {/* <Reveal> */}
      <article className="prose max-w-none space-y-6 text-[#4E4742]">
        <div className="border-b border-[#EFE7E3] pb-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2F1B69]">
            Privacy Policy
          </h2>
          <p className="mt-1 text-sm font-medium text-[#B64A16]">
            Effective Date: September 2026
          </p>
        </div>

        <p className="leading-relaxed">
          God&apos;s Home for Women Foundation (Goshen Shelters) (“Goshen
          Shelters”, “Goshen”, “we”, “us” or “our”) respects your privacy and is
          committed to protecting the personal information entrusted to us.
          <br />
          <br />
          This Privacy Policy explains how we collect, use, protect and handle
          personal information when you visit Goshenshelters.org or contact us
          through our website.
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
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              2. Information We Collect
            </h3>
            <p className="leading-relaxed">
              Our website does not require users to create an account or
              register. We do not operate user accounts or user profiles.
            </p>
            <p className="leading-relaxed">
              When you voluntarily submit an enquiry or support request through
              a website form, Goshen Shelters receives:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your telephone number</li>
              <li>The message or information you choose to provide</li>
            </ul>
            <p className="leading-relaxed">
              The information submitted through the website form is sent to
              Goshen Shelters by email so that an appropriate member of our team
              can respond. The website does not store these form submissions in
              a separate database or user account.
            </p>
            <p className="leading-relaxed">
              Where you make a donation through the website, you may provide
              your name and email address. Paystack receives the email address
              when it is provided as part of the payment process.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              3. How We Use Your Information
            </h3>
            <p className="leading-relaxed">
              We use personal information only for specific and legitimate
              purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to enquiries and messages</li>
              <li>Responding to requests for support</li>
              <li>Contacting you regarding an enquiry you have submitted</li>
              <li>Processing and administering donations</li>
              <li>
                Providing donation acknowledgements or thank-you communications
              </li>
              <li>
                Sending reminders relating to monthly giving where you have
                chosen to participate
              </li>
              <li>Responding to complaints or requests</li>
              <li>
                Maintaining the security and proper operation of our website;
                and
              </li>
              <li>
                Complying with applicable legal and regulatory obligations
              </li>
            </ul>
            <p className="leading-relaxed">
              We do not sell, rent or trade your personal information. We do not
              use website information for general marketing or unsolicited
              newsletters.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              4. Requests for Support
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters works with women and children who may be
              experiencing domestic violence and other difficult circumstances.
            </p>
            <p className="leading-relaxed">
              For your safety and privacy, please do not submit highly sensitive
              or confidential personal information through the ordinary website
              contact form.
            </p>
            <p className="leading-relaxed">
              If you need support, you may provide basic contact information
              through the website so that a member of Goshen Shelters can
              contact you directly. Sensitive matters can then be discussed
              privately by telephone or another appropriate communication
              channel.
            </p>
            <p className="leading-relaxed">
              If you believe you are in immediate danger, please contact the
              appropriate emergency service or seek immediate assistance.
            </p>
            {/* <div className="rounded-xl bg-[#EFE7E3] p-4 text-[#2F1B69] border-l-4 border-[#B64A16]">
              <strong>Important Safety Note:</strong> For your safety and
              privacy, please do not submit highly sensitive or confidential
              personal information through the ordinary website contact
              form[cite: 3]. Sensitive matters can be discussed privately by
              telephone or another appropriate communication channel once
              initial contact is made[cite: 3]. If you believe you are in
              immediate danger, please contact emergency services directly.
            </div> */}
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              5. Donations and Payments
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters uses Paystack to process online card donations and
              other supported payment transactions.
            </p>
            <p className="leading-relaxed">
              <strong>
                Goshen Shelters does not store full payment card details, PINs,
                passwords or other payment credentials on its website.
              </strong>
            </p>
            <p className="leading-relaxed">
              Direct bank transfers may also be made to the Goshen Shelters bank
              account details displayed on the website, including applicable
              Naira, US Dollar and British Pound domiciliary accounts.
            </p>
            <p className="leading-relaxed">
              Paystack and other payment or financial service providers may
              process information in accordance with their own privacy practices
              and applicable requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              6. Monthly Giving and Donation Communications
            </h3>
            <p className="leading-relaxed">
              If you choose to support Goshen Shelters through monthly giving,
              you may provide your name and email address so that we can
              acknowledge your contribution and send reminders relating to your
              intended monthly giving.
            </p>
            <p className="leading-relaxed">
              Monthly giving is voluntary. Goshen Shelters does not treat this
              as a general marketing subscription. You remain in control of
              whether and when you make a monthly donation.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              7. Third-Party Service Providers
            </h3>
            <p className="leading-relaxed">
              To operate our website and communications, Goshen Shelters may use
              trusted third-party service providers, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Paystack — payment processing</li>
              <li>ImprovMX — email forwarding</li>
              <li>Resend — email delivery and related email services</li>
              <li>Google — email services used by Goshen Shelters; and</li>
              <li>Website hosting and technical service providers</li>
            </ul>
            <p className="leading-relaxed">
              These providers may process personal information where necessary
              to provide their services. Goshen Shelters seeks to use service
              providers that maintain appropriate security and privacy measures.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              8. WhatsApp and External Websites
            </h3>
            <p className="leading-relaxed">
              Our website may contain links or buttons that take you to WhatsApp
              or other external websites and services.
            </p>
            <p className="leading-relaxed">
              When you click one of these links, you leave the Goshen Shelters
              website and interact directly with the external service. Goshen
              Shelters does not collect your WhatsApp conversations through the
              Goshen website.
            </p>

            <p className="leading-relaxed">
              The privacy practices of external services are governed by their
              own privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              9. Cookies and Analytics
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters does not currently use Google Analytics,
              advertising trackers or behavioural analytics to monitor visitors
              to our website.
            </p>
            <p className="leading-relaxed">
              We do not maintain a database of visitors’ browsing behaviour for
              advertising or marketing purposes.
            </p>
            <p className="leading-relaxed">
              The website may use essential technical technologies required for
              the website to function properly, maintain security or deliver
              requested services.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              10. How Long We Keep Personal Information
            </h3>
            <p className="leading-relaxed">
              The Goshen Shelters website does not store contact-form
              submissions in a separate database or user account. However,
              information sent to Goshen Shelters by email may remain in
              Goshen&apos;s email systems for as long as reasonably necessary to
              respond to the enquiry, provide support, maintain appropriate
              records, resolve complaints or meet legal, financial or regulatory
              requirements.
            </p>
            <p className="leading-relaxed">
              Where personal information is no longer required, Goshen Shelters
              will take reasonable steps to securely delete or dispose of it,
              subject to applicable legal or operational requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              11. How We Protect Your Information
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters takes reasonable technical and organisational
              measures to protect personal information against unauthorised
              access, loss, misuse, alteration or disclosure.
            </p>
            <p className="leading-relaxed">
              However, no method of transmitting or storing information
              electronically can be guaranteed to be completely secure.
            </p>
            <p className="leading-relaxed">
              We encourage you to avoid submitting highly sensitive information
              through ordinary website forms.{" "}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              12. Your Privacy Rights
            </h3>
            <p className="leading-relaxed">
              Subject to applicable law, you may have rights concerning your
              personal information, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be informed about how your information is used</li>
              <li>Request access to personal information we hold about you</li>
              <li>
                Request correction of inaccurate or incomplete information
              </li>
              <li>Request deletion of personal information where applicable</li>
              <li>Object to certain processing</li>
              <li>Request restriction of certain processing</li>
              <li>
                Request portability of your information where applicable; and
              </li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="leading-relaxed">
              To exercise a privacy right or ask a question about how we handle
              your information, please contact us using the details below.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              13. Children and Vulnerable Persons
            </h3>
            <p className="leading-relaxed">
              Goshen Shelters provides services that may involve women and
              children. We take the privacy and safety of children and
              vulnerable persons seriously.
            </p>
            <p className="leading-relaxed">
              Our website does not require children to create accounts or
              register.
            </p>
            <p className="leading-relaxed">
              We ask that visitors do not submit unnecessary personal or
              sensitive information about children through the ordinary website
              contact form.
            </p>
            <p className="leading-relaxed">
              Where information concerning a child is necessary in connection
              with support services, Goshen Shelters will handle that
              information with appropriate care and in accordance with
              applicable data-protection requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              14. International Processing
            </h3>
            <p className="leading-relaxed">
              Some third-party technology and service providers used by Goshen
              Shelters may process or store information outside Nigeria.
            </p>
            <p className="leading-relaxed">
              Where this occurs, we will take appropriate steps required by
              applicable data-protection law in relation to such processing and
              transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              15. Changes to This Privacy Policy
            </h3>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our website, services, technology or legal and
              regulatory requirements.
            </p>
            <p className="leading-relaxed">
              The updated version will be published on this page with a revised
              effective date.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2F1B69]">
              16. Contact Us
            </h3>
            <p className="leading-relaxed">
              If you have a question, complaint or request concerning your
              personal information or this Privacy Policy, please contact:
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
            <p className="leading-relaxed">
              You may also have the right to lodge a complaint with the Nigeria
              Data Protection Commission (NDPC) where you believe your
              data-protection rights have been infringed.
            </p>
          </section>
        </section>
      </article>
      {/* </Reveal> */}
    </PolicyLayout>
  );
}
