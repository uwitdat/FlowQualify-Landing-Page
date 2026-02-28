"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function LayoutFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}
