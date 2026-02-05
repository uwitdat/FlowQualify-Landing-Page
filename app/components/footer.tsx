import Link from "next/link";
import { COMPANY_NAME } from "../config/constants";

export default function Footer() {
  return (
    <footer className="bg-[rgb(10,9,9)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[rgb(156,163,175)]">
          <Link
            href="/privacy-policy"
            className="hover:text-[rgb(194,89,194)] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-[rgb(194,89,194)] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        <p className="mt-4 text-center text-sm/6 text-[rgb(156,163,175)]">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
