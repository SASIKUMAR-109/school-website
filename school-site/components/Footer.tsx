import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/nav";
import { siteInfo } from "@/lib/site";
import Image from "next/image";
import { MapPin, Phone, Mail,ChevronRight } from "lucide-react";

export default async function Footer() {
  const tSite = await getTranslations("Site");
  const tNav = await getTranslations("Nav");
  const tFooter = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white mt-12">
        <svg
        aria-hidden="true"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-full left-0 block h-3 w-full lg:h-5"
        >
        <path d="M0 4 Q720 44 1440 4 V40 H0 Z" className="fill-accent" />
        <path d="M0 14 Q720 54 1440 14 V40 H0 Z" className="fill-primary" />
        </svg>
      <div className="grid gap-8 px-4 py-10 lg:grid-cols-[1.6fr_1fr_1.3fr] lg:px-6">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:text-left">
          <Image
            src="/logo.webp"
            alt=""
            width={128}
            height={137}
            className="h-auto w-14 shrink-0 lg:w-28 xl:w-32"
          />
          <div className="flex flex-col items-center gap-2 lg:items-start lg:border-l lg:border-white/20 lg:pl-6">
          <h2 className="inline-block border-b-2 border-accent pb-2 text-lg font-bold lg:text-xl">
                    {tSite("name")}
          </h2>
            <p className="max-w-xs text-sm text-white/85">{tFooter("tagline")}</p>
          </div>
        </div>

        <div className="lg:border-l lg:border-white/20 lg:pl-8">
          <h2 className="inline-block border-b-2 border-accent pb-2 text-lg font-bold">{tFooter("quickLinksHeading")}</h2>
            <nav aria-label={tFooter("quickLinksLabel")}>
            <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-white/25 px-3 py-3 text-center hover:text-accent lg:flex lg:items-center lg:gap-2 lg:border-0 lg:px-0 lg:py-0 lg:text-left"
                    >
                    <ChevronRight className="hidden size-4 shrink-0 text-accent lg:block" aria-hidden="true" />
                    {tNav(item.key)}
                    </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lg:border-l lg:border-white/20 lg:pl-8">
          <h2 className="inline-block border-b-2 border-accent pb-2 text-lg font-bold">{tFooter("contactHeading")}</h2>
            <ul className="mt-4 space-y-3 text-sm lg:text-base">
                <li className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-dark text-accent">
                        <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    <span className="pt-1.5">{tFooter("address")}</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-dark text-accent">
                        <Phone className="size-4" aria-hidden="true" />
                    </span>
                    <a href={`tel:${siteInfo.phone}`} className="inline-flex min-h-11 items-center hover:text-accent lg:min-h-0">
                        {siteInfo.phoneDisplay}
                    </a>
                    </li>
                <li className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-dark text-accent">
                        <Mail className="size-4" aria-hidden="true" />
                    </span>
                    <a href={`mailto:${siteInfo.email}`} className="min-w-0 break-words inline-flex min-h-11 items-center hover:text-accent lg:min-h-0">
                        {siteInfo.email}
                    </a>
                </li>
                <li className="pt-2">
                    <a
                    href={siteInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-white px-4 py-2 text-white hover:bg-white hover:text-primary">
                    {tFooter("mapLinkText")}</a>
                </li>
            </ul>
        </div>
      </div>

      <p className="border-t border-white/20 px-4 py-4 text-center text-sm text-white/80 lg:px-6">
        {tFooter("rights", { year, name: tSite("name") })}
      </p>
    </footer>
  );
}