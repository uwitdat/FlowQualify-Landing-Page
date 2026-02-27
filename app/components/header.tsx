"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Logo from "./logo";
import { COMPANY_NAME } from "../config/constants";

const navigation = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Results", href: "#results" },
  { name: "Benchmarks", href: "#benchmarks" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const pathname = usePathname();
  const isOptIn = pathname === "/opt-in" || pathname === "/apply" || pathname === "/book";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity: fade out after 100px, fade back in when scrolling back up
  const opacity = scrollY > 100 ? 0 : 1;

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      window.history.pushState(null, "", href);
    }
    const id = href.startsWith("#") ? href.slice(1) : href;
    const el = id ? document.getElementById(id) : null;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el?.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  return (
    <header
      className="sticky top-0 z-50 transition-opacity duration-300"
      style={{ opacity, pointerEvents: opacity === 0 ? "none" : "auto" }}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between bg-white backdrop-blur-md p-2 lg:px-8"
        style={{ borderBottom: "1px solid #E4ECEF" }}
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2.5">
            <span className="sr-only">{COMPANY_NAME}</span>
            <span className="font-black tracking-tight text-[#0F172A]" style={{ fontSize: "17px", fontWeight: 900, letterSpacing: "-0.02em" }}>FlowQualify</span>
          </Link>
        </div>

        {isOptIn ? (
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="size-5" aria-hidden />
            Back
          </Link>
        ) : (
          <>
            {/* Mobile hamburger */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex lg:gap-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-950 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA in header */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/opt-in"
                className="rounded-xl px-4 py-2 text-sm font-bold text-white transition-all hover:-translate-y-px"
                style={{ background: "linear-gradient(135deg, #0d5c73 0%, #1a6b8a 55%, #1e92b0 100%)", boxShadow: "0 2px 12px rgba(26,107,138,0.35)" }}
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </div>
          </>
        )}
      </nav>

      {/* Mobile navigation (only when not on opt-in) */}
      {!isOptIn && (
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">{COMPANY_NAME}</span>
              <span className="text-sm font-black tracking-tight text-[#0F172A]" style={{ fontWeight: 900 }}>FlowQualify</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Mobile links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/opt-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-xl px-4 py-3 text-center text-base font-bold text-white transition-colors"
                  style={{ background: "linear-gradient(135deg, #0d5c73 0%, #1a6b8a 55%, #1e92b0 100%)" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      )}
    </header>
  );
}
