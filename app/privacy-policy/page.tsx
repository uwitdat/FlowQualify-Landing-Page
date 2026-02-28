import Link from "next/link";
import { COMPANY_NAME } from "../config/constants";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${COMPANY_NAME} handles data and messages. We do not sell personal data.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-600 text-accent hover:underline mb-8"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {COMPANY_NAME} Privacy Policy
        </h1>
        <div className="mt-10 space-y-6 text-lg text-text-secondary">
          <p>
            {COMPANY_NAME} processes messages sent to Facebook Pages and
            Instagram accounts in order to provide automated responses on behalf
            of businesses.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">
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

          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Data retention
          </h2>
          <p>
            We retain data for as long as needed to provide the service and as
            required by law. When a business disconnects a Page or Instagram
            account, we stop receiving new messages and remove stored connection
            details for that account.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">
            Google Calendar integration
          </h2>
          <p>
            If you connect your Google Calendar to {COMPANY_NAME}, we use
            Google’s OAuth to access your calendar in a limited way.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white">
            What we access
          </h3>
          <p>
            We request access to view and manage events on the calendars you
            choose. This lets us show your availability, create and update
            appointments, and avoid double-booking.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white">
            How we use it
          </h3>
          <p>
            We use this access only to: (1) read your calendar to determine when
            you’re free, (2) create and update booking events when appointments
            are scheduled, and (3) sync appointment details with your calendar.
            We do not use your calendar data for advertising or sell it to third
            parties.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white">
            Data we store
          </h3>
          <p>
            We store secure tokens that allow us to access your calendar on your
            behalf (for example, to create new events). We do not store the full
            contents of your calendar. Calendar data we need for a specific
            action (e.g., creating an event) is processed in real time and is
            not retained beyond what’s required for that action and for the
            appointment record in our product.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white">
            Google’s role
          </h3>
          <p>
            Calendar access is provided by Google. Your use of the integration
            is also subject to Google’s Privacy Policy. We encourage you to
            review it.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white">
            Your choices
          </h3>
          <p>
            You can disconnect Google Calendar at any time from your account or
            app settings. Disconnecting revokes our access to your calendar; we
            will stop creating or reading calendar events for you, and we will
            no longer use your stored tokens for calendar access.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white">Security</h3>
          <p>
            We use industry-standard practices to protect the tokens and any
            calendar-related data we handle, including encryption where
            appropriate.
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
              className="text-accent hover:underline"
            >
              support@flowqualify.app
            </a>
            . Please include the Facebook or Instagram account you used, or the
            name/handle of the Page or Instagram account you messaged. We will
            process your request and delete your data within 30 days. For more
            details, see our{" "}
            <Link href="/data-deletion" className="text-accent hover:underline">
              Data deletion
            </Link>{" "}
            page.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Security
          </h2>
          <p>
            We store access tokens and other sensitive data using encryption and
            standard security practices.
          </p>

          <p className="mt-10 text-base text-text-secondary/80">
            © 2026 FlowQualify, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
