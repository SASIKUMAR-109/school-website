"use client";

import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <nav aria-label="Language">
      <Link href={pathname} locale="en" lang = "en">English</Link>
      <Link href={pathname} locale="te" lang = "te">తెలుగు</Link>
    </nav>
  );
}