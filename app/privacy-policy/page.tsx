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
            {COMPANY_NAME} processes messages sent to Facebook Pages in order to
            provide automated responses on behalf of businesses.
          </p>
          <p>
            We do not sell personal data. Message content is processed only to
            respond to inquiries and improve service quality.
          </p>
          <p>
            Contact:{" "}
            <a
              href="mailto:support@flowqualify.ai"
              className="text-[rgb(194,89,194)] hover:underline"
            >
              support@flowqualify.ai
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
