import Link from "next/link";
import { COMPANY_NAME } from "../config/constants";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${COMPANY_NAME} handles data and messages. We do not sell personal data.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[rgb(10,9,9)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {COMPANY_NAME} Privacy Policy
        </h1>
        <div className="mt-10 space-y-6 text-lg text-[rgb(156,163,175)]">
          <p>
            {COMPANY_NAME} processes messages sent to Facebook Pages and
            Instagram accounts in order to provide automated responses on
            behalf of businesses.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">
            Data we receive
          </h2>
          <p>
            When a business connects their Facebook Page or Instagram account,
            we receive and store connection details (including an encrypted
            access token) and Page/Instagram names or handles. When someone
            messages a connected Page or Instagram account, we receive message
            content, attachments, and platform identifiers used for that
            conversation. We use this data only to provide automated replies and
            to let the business manage leads and conversations.
          </p>

          <p>
            We do not sell personal data. Message content is processed only to
            respond to inquiries and improve service quality. We do not use this
            data for advertising or share it with third parties for their
            marketing.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">
            Data retention
          </h2>
          <p>
            We retain data for as long as needed to provide the service and as
            required by law. When a business disconnects a Page or Instagram
            account, we stop receiving new messages and remove stored connection
            details for that account.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">
            Your choices and data deletion
          </h2>
          <p>
            If you messaged a Facebook Page or Instagram account that uses{" "}
            {COMPANY_NAME} and want your conversation data deleted, contact us
            at{" "}
            <a
              href="mailto:support@flowqualify.app"
              className="text-[rgb(194,89,194)] hover:underline"
            >
              support@flowqualify.app
            </a>
            . Please include the Facebook or Instagram account you used, or the
            name/handle of the Page or Instagram account you messaged. We will
            process your request and delete your data within 30 days. For more
            details, see our{" "}
            <Link
              href="/data-deletion"
              className="text-[rgb(194,89,194)] hover:underline"
            >
              Data deletion
            </Link>{" "}
            page.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Security</h2>
          <p>
            We store access tokens and other sensitive data using encryption and
            standard security practices.
          </p>

          <p className="mt-10 text-base text-[rgb(156,163,175)]/80">
            © 2026 FlowQualify, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
