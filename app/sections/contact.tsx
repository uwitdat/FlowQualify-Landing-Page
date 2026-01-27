"use client";

import FadeIn from "../components/fade-in";

export default function Contact() {
  return (
    <div
      id="contact"
      className="isolate bg-[rgb(10,9,9)] px-6 py-24 sm:py-24 lg:px-8 border-t border-white/5"
    >
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-lg/8 text-[rgb(156,163,175)]">
            Stop losing leads to slow responses. Let FlowQualify qualify your
            leads automatically while you focus on what you do best—delivering
            exceptional work.
          </p>
          <p className="mt-4 text-xl font-medium text-white">
            Ready to transform your lead qualification process?
          </p>
          <p className="mt-8 text-lg text-[rgb(156,163,175)]">
            Interested? Get in touch at:{" "}
            <a
              href="mailto:emails@flowqualify.app"
              className="font-medium text-[rgb(194,89,194)] hover:underline"
            >
              emails@flowqualify.app
            </a>
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
