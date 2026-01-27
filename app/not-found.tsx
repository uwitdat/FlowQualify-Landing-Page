import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Visit FlowQualify to learn about AI-powered lead qualification for contractors.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[rgb(10,9,9)] px-6">
      <h1 className="text-4xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 text-[rgb(156,163,175)]">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-8 text-[rgb(194,89,194)] hover:underline"
      >
        ← Back to FlowQualify
      </Link>
    </main>
  );
}
