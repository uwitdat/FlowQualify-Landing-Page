import Link from "next/link";
import { COMPANY_NAME } from "../config/constants";

export const metadata = {
  title: "Data Deletion",
  description: `Request deletion of your conversation data from ${COMPANY_NAME}.`,
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletion() {
  return (
    <main className="min-h-screen bg-[rgb(10,9,9)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Data deletion
        </h1>
        <div className="mt-10 space-y-6 text-lg text-[rgb(156,163,175)]">
          <p>
            If you messaged a business’s Facebook Page or Instagram account that
            uses {COMPANY_NAME}, you can request that we delete your
            conversation data (messages and any associated information we
            store).
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">
            How to request deletion
          </h2>
          <p>
            Email{" "}
            <a
              href="mailto:support@flowqualify.app"
              className="text-[rgb(194,89,194)] hover:underline"
            >
              support@flowqualify.app
            </a>{" "}
            with:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The Facebook or Instagram account you used to send messages, or
            </li>
            <li>
              The name or handle of the Page or Instagram account you messaged
            </li>
          </ul>
          <p>
            We will process your request and delete your data from our systems
            within 30 days. We may contact you to confirm your identity or which
            conversation(s) to delete.
          </p>
          <p>
            For more about how we use data, see our{" "}
            <Link
              href="/privacy-policy"
              className="text-[rgb(194,89,194)] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
