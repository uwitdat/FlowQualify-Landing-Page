import Link from "next/link";
import { COMPANY_NAME } from "../config/constants";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${COMPANY_NAME} website, platform, and related services.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[rgb(10,9,9)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-[rgb(156,163,175)]">
          <strong className="text-white">Last updated:</strong> February 2026
        </p>

        <div className="mt-10 space-y-6 text-lg text-[rgb(156,163,175)]">
          <p>
            Welcome to {COMPANY_NAME}. These Terms of Service (“Terms”) govern
            your use of the {COMPANY_NAME} website, platform, and related
            services (collectively, the “Service”) operated by {COMPANY_NAME}{" "}
            (“we,” “us,” or “our”). By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By creating an account, connecting your business channels (including
            but not limited to SMS, Facebook Messenger, and Instagram), or
            otherwise using the Service, you agree to these Terms and our{" "}
            <Link
              href="/privacy-policy"
              className="text-[rgb(194,89,194)] hover:underline"
            >
              Privacy Policy
            </Link>
            . If you do not agree, do not use the Service.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            2. Description of the Service
          </h2>
          <p>
            {COMPANY_NAME} provides an AI-powered lead qualification and
            conversation platform for contractors and similar businesses. The
            Service may include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Automated conversations with leads via SMS, Facebook Messenger,
              Instagram, and other supported channels
            </li>
            <li>Lead management, scoring, and qualification forms</li>
            <li>
              Integration with calendars, CRMs, and other third-party tools
            </li>
            <li>Knowledge base and content you upload to train the AI</li>
          </ul>
          <p>
            We may update, suspend, or discontinue features with reasonable
            notice where practicable.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            3. Your Account and Responsibilities
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>You must provide accurate account information and keep it current.</li>
            <li>
              You are responsible for maintaining the security of your account
              and for all activity under your account.
            </li>
            <li>
              You must use the Service in compliance with all applicable laws
              and regulations and in line with Meta (Facebook/Instagram),
              Twilio, and other providers’ policies where you use their channels
              through {COMPANY_NAME}.
            </li>
          </ul>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            4. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use the Service for any illegal purpose or in violation of any law</li>
            <li>
              Use the Service to send spam, harass, or deceive leads or third
              parties
            </li>
            <li>
              Attempt to gain unauthorized access to the Service, other
              accounts, or our or any third party’s systems or data
            </li>
            <li>
              Use the Service in a way that could harm, overload, or impair the
              Service or others’ use of it
            </li>
            <li>Resell or sublicense the Service except as we explicitly allow</li>
          </ul>
          <p>
            We may suspend or terminate your access if we reasonably believe you
            have violated these Terms or acceptable use.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            5. Data and Privacy
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Our collection and use of personal data is described in our{" "}
              <Link
                href="/privacy-policy"
                className="text-[rgb(194,89,194)] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </li>
            <li>
              You are responsible for the lead and contact data you collect and
              process through the Service and for having any required consents
              and legal basis for that processing.
            </li>
            <li>
              You must comply with applicable data protection and privacy laws
              (e.g., GDPR, CCPA) in your use of the Service and in your own
              dealings with leads.
            </li>
          </ul>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            6. AI and Automated Messaging
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The Service uses artificial intelligence to conduct and assist
              with conversations. AI outputs are not guaranteed to be accurate or
              appropriate in every situation.
            </li>
            <li>
              You remain responsible for how you use the Service and for the
              messages sent on your behalf. You should review and configure
              settings, prompts, and knowledge base content appropriately for
              your business.
            </li>
            <li>
              We do not guarantee specific business outcomes (e.g., conversion
              rates or lead quality) from use of the Service.
            </li>
          </ul>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            7. Third-Party Services
          </h2>
          <p>
            The Service may integrate with or link to third-party services (e.g.,
            Meta, Twilio, calendar or CRM providers). Your use of those
            services is subject to their respective terms and policies. We are
            not responsible for the availability, performance, or policies of
            third-party services.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            8. Intellectual Property
          </h2>
          <p>
            We own or license the Service, including its design, software, and
            branding. We grant you a limited, non-exclusive, revocable license to
            use the Service in accordance with these Terms. You retain ownership
            of your data and content; you grant us the rights necessary to
            operate the Service (e.g., to process, store, and transmit your data
            and to use your content to provide and improve the Service).
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            9. Disclaimers
          </h2>
          <p className="uppercase tracking-wide text-white/90">
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” WE DISCLAIM ALL
            WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE
            WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            10. Limitation of Liability
          </h2>
          <p className="uppercase tracking-wide text-white/90">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLOWQUALIFY AND ITS
            AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT
            OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE. IN NO
            EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE AMOUNT YOU PAID US IN
            THE TWELVE (12) MONTHS PRECEDING THE CLAIM. SOME JURISDICTIONS DO
            NOT ALLOW CERTAIN LIMITATIONS; IN SUCH CASES, OUR LIABILITY WILL BE
            LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            11. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless {COMPANY_NAME} and its
            affiliates and their respective officers, directors, employees, and
            agents from and against any claims, damages, losses, liabilities,
            and expenses (including reasonable attorneys’ fees) arising out of
            or related to your use of the Service, your violation of these
            Terms, or your violation of any third-party rights or applicable
            law.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            12. Changes to the Terms
          </h2>
          <p>
            We may update these Terms from time to time. We will post the
            updated Terms on this page and update the “Last updated” date.
            Continued use of the Service after changes constitutes acceptance of
            the revised Terms. If you do not agree, you must stop using the
            Service.
          </p>

          <hr className="border-white/10" />

          <h2 className="mt-8 text-xl font-semibold text-white">
            13. General
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-white">Governing law.</strong> These
              Terms are governed by the laws of the jurisdiction in which{" "}
              {COMPANY_NAME} operates, without regard to conflict of law
              principles.
            </li>
            <li>
              <strong className="text-white">Entire agreement.</strong> These
              Terms, together with the Privacy Policy and any order or agreement
              referencing them, constitute the entire agreement between you and{" "}
              {COMPANY_NAME} regarding the Service.
            </li>
            <li>
              <strong className="text-white">Severability.</strong> If any
              provision of these Terms is held invalid or unenforceable, the
              remaining provisions will remain in effect.
            </li>
            <li>
              <strong className="text-white">Contact.</strong> For questions
              about these Terms or the Service, contact us at{" "}
              <a
                href="mailto:emails@flowqualify.app"
                className="text-[rgb(194,89,194)] hover:underline"
              >
                emails@flowqualify.app
              </a>
              .
            </li>
          </ul>

          <hr className="border-white/10" />

          <p className="mt-10 text-base text-[rgb(156,163,175)]/80">
            © {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
