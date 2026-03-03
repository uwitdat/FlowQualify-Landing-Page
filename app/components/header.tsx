"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { COMPANY_NAME } from "../config/constants";

const navigation = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Results", href: "#results" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const pathname = usePathname();
  const isFunnel = pathname === "/opt-in" || pathname === "/apply" || pathname === "/book";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .oh-header {
          position: sticky; top: 0; z-index: 50;
          background: #f9f0d9;
          border-bottom: 1px solid rgba(34,21,13,0.12);
        }
        .oh-nav {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 24px; height: 58px;
        }
        .oh-logo {
          font-size: 17px; font-weight: 900; color: #22150d;
          letter-spacing: -0.02em; text-decoration: none;
        }
        .oh-nav-links {
          display: flex; align-items: center; gap: 32px;
        }
        .oh-nav-link {
          font-size: 14px; font-weight: 500; color: #22150d;
          text-decoration: none; position: relative;
          padding: 2px 0; transition: color 0.15s;
        }
        .oh-nav-link:hover { color: #22150d; }
        .oh-nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -2px;
          width: 0; height: 2px; background: #FFFF8B;
          transition: width 0.2s ease;
        }
        .oh-nav-link:hover::after { width: 100%; }
        .oh-cta {
          display: inline-flex; align-items: center; gap: 6px;
          background: #22150d; color: #f9f0d9;
          font-size: 14px; font-weight: 700;
          padding: 9px 20px; border-radius: 6px;
          text-decoration: none; transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .oh-cta:hover { background: #FFFF8B; color: #22150d; }
        .oh-back {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 600; color: rgba(34,21,13,0.6);
          text-decoration: none; transition: color 0.15s;
        }
        .oh-back:hover { color: #22150d; }
        .oh-hamburger {
          display: none; background: none; border: none; cursor: pointer; padding: 4px;
        }
        @media (max-width: 768px) {
          .oh-nav-links { display: none; }
          .oh-cta-desktop { display: none; }
          .oh-hamburger { display: block; }
        }
        /* Mobile menu */
        .oh-mobile-panel {
          background: #f9f0d9;
        }
        .oh-mobile-link {
          display: block; padding: 12px 0;
          font-size: 16px; font-weight: 600; color: #22150d;
          text-decoration: none; border-bottom: 1px solid rgba(34,21,13,0.08);
        }
        .oh-mobile-link:hover { color: rgba(34,21,13,0.6); }
        .oh-mobile-cta {
          display: block; text-align: center;
          background: #22150d; color: #f9f0d9;
          font-size: 15px; font-weight: 700;
          padding: 14px; border-radius: 8px;
          text-decoration: none; margin-top: 20px;
          transition: background 0.15s, color 0.15s;
        }
        .oh-mobile-cta:hover { background: #FFFF8B; color: #22150d; }
      `}</style>

      <header className="oh-header">
        <nav className="oh-nav" aria-label="Global">
          {/* Logo */}
          <Link href="/" className="oh-logo">{COMPANY_NAME}</Link>

          {isFunnel ? (
            <Link href="/" className="oh-back">
              <ArrowLeftIcon style={{ width: 16, height: 16 }} />
              Back
            </Link>
          ) : (
            <>
              {/* Desktop nav links */}
              <div className="oh-nav-links">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="oh-nav-link">
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <Link href="/opt-in" className="oh-cta oh-cta-desktop">
                Get Started →
              </Link>

              {/* Mobile hamburger */}
              <button
                className="oh-hamburger"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Bars3Icon style={{ width: 24, height: 24, color: "#22150d" }} />
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Mobile menu dialog */}
      {!isFunnel && (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" style={{ background: "rgba(34,21,13,0.3)" }} />
          <DialogPanel
            className="oh-mobile-panel fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto p-6"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <span style={{ fontSize: "17px", fontWeight: 900, color: "#22150d" }}>{COMPANY_NAME}</span>
              <button onClick={() => setMobileMenuOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <XMarkIcon style={{ width: 24, height: 24, color: "#22150d" }} />
              </button>
            </div>
            <div>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="oh-mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link href="/opt-in" className="oh-mobile-cta" onClick={() => setMobileMenuOpen(false)}>
                Get Started →
              </Link>
            </div>
          </DialogPanel>
        </Dialog>
      )}
    </>
  );
}
