"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { COMPANY_NAME, BUTTON_PRIMARY } from "../config/constants";

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
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "transparent", transition: "opacity 0.3s ease", opacity, pointerEvents }}>
      <style>{`
        .hdr-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          padding: 0 16px;
          max-width: 1400px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) { .hdr-nav { padding: 0 32px; } }

        .hdr-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        @media (min-width: 1024px) { .hdr-left { gap: 40px; } }

        .hdr-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .hdr-logo-text {
          font-size: 17px;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #0F172A;
        }

        .hdr-desktop-links {
          display: none;
          align-items: center;
          gap: 32px;
        }
        @media (min-width: 768px) { .hdr-desktop-links { display: flex; } }

        .hdr-nav-link {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .hdr-nav-link:hover { color: #0F172A; }

        .hdr-desktop-cta {
          display: none;
          align-items: center;
        }
        @media (min-width: 768px) { .hdr-desktop-cta { display: flex; } }

        .hdr-book-btn {
          border-radius: 999px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 600;
          background: transparent;
          border: 1px solid ${BUTTON_PRIMARY};
          color: ${BUTTON_PRIMARY};
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          display: inline-block;
        }
        .hdr-book-btn:hover { background: ${BUTTON_PRIMARY}; color: #fff; }

        .hdr-mobile-btn-wrap {
          display: flex;
        }
        @media (min-width: 768px) { .hdr-mobile-btn-wrap { display: none; } }

        .hdr-hamburger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          padding: 10px;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          margin: -10px;
        }

        .hdr-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 6px;
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .hdr-back-link:hover { color: #111827; }

        /* Mobile drawer */
        .hdr-drawer {
          position: fixed;
          inset: 0;
          z-index: 50;
        }
        .hdr-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.2);
        }
        .hdr-drawer-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 384px;
          overflow-y: auto;
          background: #fff;
          padding: 24px;
          box-shadow: -4px 0 24px rgba(0,0,0,0.1);
        }
        .hdr-drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .hdr-drawer-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          padding: 10px;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          margin: -10px;
        }
        .hdr-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 24px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        .hdr-drawer-link {
          display: block;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          transition: background 0.15s ease;
          margin: 0 -12px;
        }
        .hdr-drawer-link:hover { background: #f9fafb; }
        .hdr-drawer-cta {
          padding-top: 24px;
        }
        .hdr-drawer-book {
          display: block;
          border-radius: 999px;
          padding: 12px 20px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          border: 1px solid ${BUTTON_PRIMARY};
          color: ${BUTTON_PRIMARY};
          background: transparent;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .hdr-drawer-book:hover { background: ${BUTTON_PRIMARY}; color: #fff; }
      `}</style>

      <nav className="hdr-nav" aria-label="Global">
        <div className="hdr-left">
          <Link href="/" className="hdr-logo">
            <span className="hdr-logo-text">
              <span>Flow</span>
              <span style={{ color: BUTTON_PRIMARY }}>Qualify</span>
            </span>
          </Link>

          {!isOptIn && (
            <div className="hdr-desktop-links">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="hdr-nav-link">
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {isOptIn ? (
          <Link href="/" className="hdr-back-link">
            <ArrowLeftIcon style={{ width: 20, height: 20 }} aria-hidden />
            Back
          </Link>
        ) : (
          <>
            <div className="hdr-mobile-btn-wrap">
              <button type="button" onClick={() => setMobileMenuOpen(true)} className="hdr-hamburger">
                <span style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>Open main menu</span>
                <Bars3Icon style={{ width: 24, height: 24 }} aria-hidden="true" />
              </button>
            </div>

            <div className="hdr-desktop-cta">
              <Link href="/opt-in" className="hdr-book-btn">
                Book Demo
              </Link>
            </div>
          </>
        )}
      </nav>

      {!isOptIn && (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} style={{ position: "relative", zIndex: 50 }}>
          <DialogBackdrop
            transition
            className="hdr-drawer-backdrop"
            style={{ transitionProperty: "opacity", transitionDuration: "300ms", transitionTimingFunction: "ease-out" }}
          />
          <DialogPanel
            transition
            className="hdr-drawer-panel"
            style={{ transitionProperty: "transform", transitionDuration: "300ms", transitionTimingFunction: "ease-out" }}
          >
            <div className="hdr-drawer-top">
              <Link href="/" className="hdr-logo" onClick={() => setMobileMenuOpen(false)}>
                <span className="hdr-logo-text">
                  <span>Flow</span>
                  <span style={{ color: BUTTON_PRIMARY }}>Qualify</span>
                </span>
              </Link>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="hdr-drawer-close">
                <span style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>Close menu</span>
                <XMarkIcon style={{ width: 24, height: 24 }} aria-hidden="true" />
              </button>
            </div>

            <div className="hdr-drawer-links">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                  className="hdr-drawer-link"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hdr-drawer-cta">
              <Link
                href="/opt-in"
                onClick={() => setMobileMenuOpen(false)}
                className="hdr-drawer-book"
              >
                Book Demo
              </Link>
            </div>
          </DialogPanel>
        </Dialog>
      )}
    </header>
  );
}
