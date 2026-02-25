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
  const isOptIn = pathname === "/opt-in";
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
        className="flex items-center justify-between bg-[rgb(10,9,9)]/90 backdrop-blur-md border-b border-white/5 p-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{COMPANY_NAME}</span>
            <Logo className="h-12 w-12" />
          </Link>
        </div>

        {isOptIn ? (
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-white hover:text-[rgb(232,138,232)] transition-colors"
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
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-white hover:text-[rgb(232,138,232)] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA in header */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/opt-in"
                className="rounded-md bg-[rgb(232,138,232)] px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(215,118,215)] transition-colors"
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
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[rgb(10,9,9)] p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">{COMPANY_NAME}</span>
              <Logo className="h-8 w-8" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Mobile links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/opt-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg bg-[rgb(232,138,232)] px-4 py-3 text-center text-base font-semibold text-white hover:bg-[rgb(215,118,215)] transition-colors"
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
