"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Logo from "./logo";
import { COMPANY_NAME, BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER } from "../config/constants";

const navigation = [
  { name: "How It Works", href: "/opt-in" },
  { name: "Results", href: "#how-it-works" },
  { name: "What We Do", href: "#benchmarks" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const pathname = usePathname();
  const isOptIn = pathname === "/opt-in" || pathname === "/apply" || pathname === "/book";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = scrollY > 100 ? 0 : 1;
  const pointerEvents = opacity === 0 ? "none" : "auto";

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      window.history.pushState(null, "", href);
      const id = href.slice(1);
      const el = id ? document.getElementById(id) : null;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el?.scrollIntoView({ behavior: "smooth" });
        });
      });
    }
    // else: let default navigation happen (e.g. to /opt-in)
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-opacity duration-300"
      style={{ opacity, pointerEvents }}
    >
      <style>{`
        .header-book-demo:hover { background: ${BUTTON_PRIMARY} !important; color: #fff !important; }
      `}</style>
      <nav
        aria-label="Global"
        className="flex items-center justify-between h-16 px-4 lg:px-8 max-w-[1400px] mx-auto"
      >
        {/* Left: logo + nav items */}
        <div className="flex items-center gap-8 lg:gap-10">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="sr-only">{COMPANY_NAME}</span>
            <span className="font-black tracking-tight text-[#0F172A]" style={{ fontSize: "17px", fontWeight: 900, letterSpacing: "-0.02em" }}>
              <span>Flow</span>
              <span style={{ color: "rgb(180, 83, 9)" }}>Qualify</span>
            </span>
          </Link>

          {!isOptIn && (
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-[#0F172A] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right: CTA */}
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
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="header-hamburger-btn -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="hidden md:flex items-center">
              <Link
                href="/opt-in"
                className="rounded-full px-6 py-2.5 text-sm font-semibold bg-transparent border transition-colors"
                style={{ color: BUTTON_PRIMARY, borderColor: BUTTON_PRIMARY }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = BUTTON_PRIMARY;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = BUTTON_PRIMARY;
                }}
              >
                Book Demo
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
        className="md:hidden relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 z-50 bg-black/20 transition duration-300 ease-out data-[closed]:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100 transition duration-300 ease-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">{COMPANY_NAME}</span>
              <span className="text-sm font-black tracking-tight text-[#0F172A]" style={{ fontWeight: 900 }}>
              <span>Flow</span>
              <span style={{ color: "rgb(180, 83, 9)" }}>Qualify</span>
            </span>
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
                  className="header-book-demo -mx-3 block rounded-full px-5 py-3 text-center text-base font-semibold border transition-colors"
                  style={{ color: BUTTON_PRIMARY, borderColor: BUTTON_PRIMARY, background: "transparent" }}
                >
                  Book Demo
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
