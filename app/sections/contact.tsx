"use client";

import FadeIn from "../components/fade-in";
import { COMPANY_NAME } from "../config/constants";

export default function Contact() {
  return (
    <div
      id="contact"
      className="isolate bg-[rgb(10,9,9)] px-6 py-24 sm:py-24 lg:px-8"
    >
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get Started With {COMPANY_NAME}
          </h2>
          <p className="mt-2 text-lg/8 text-[rgb(156,163,175)]">
            Tell us a bit about your business and we&apos;ll walk you through
            how automated intake and qualification can save you time and close
            more deals.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-white"
              >
                Full Name
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[rgb(156,163,175)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[rgb(194,89,194)]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[rgb(156,163,175)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[rgb(194,89,194)]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-white"
              >
                Company (Optional)
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Co."
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[rgb(156,163,175)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[rgb(194,89,194)]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-white"
              >
                How can we help? (Optional)
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about your intake process and qualification needs."
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[rgb(156,163,175)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[rgb(194,89,194)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[rgb(194,89,194)] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[rgb(174,69,174)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(194,89,194)] transition-colors"
            >
              Schedule Your Call →
            </button>
          </div>
        </form>
      </FadeIn>
    </div>
  );
}
