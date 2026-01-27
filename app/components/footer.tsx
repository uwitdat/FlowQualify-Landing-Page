import { COMPANY_NAME } from "../config/constants";

export default function Footer() {
  return (
    <footer className="bg-[rgb(10,9,9)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-sm/6 text-[rgb(156,163,175)]">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
