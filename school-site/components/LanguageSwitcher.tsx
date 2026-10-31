"use client";

import { Link, usePathname } from "@/i18n/navigation";
import {useLocale} from "next-intl";
export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <nav aria-label="Language" className="flex border border-primary bg-surface rounded-full overflow-hidden shrink-0">
      <Link aria-current = {locale ==="en"?true:undefined} href={pathname} locale="en" lang = "en" className={`lg:px-3 px-2 py-1 text-sm lg:text-base ${locale==="en" ? "bg-primary text-white":"bg-surface text-text hover:bg-surface-alt"}`}>English</Link>
      <Link aria-current = {locale==="te"?true:undefined} href={pathname} locale="te" lang = "te" className={`lg:px-3 px-2 py-1 text-sm lg:text-base ${locale==="te" ? "bg-primary text-white":"bg-surface text-text hover:bg-surface-alt"}`}>తెలుగు</Link>
    </nav>
  );
}