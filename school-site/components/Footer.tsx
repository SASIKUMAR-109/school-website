import { getTranslations } from "next-intl/server";
import {Link} from '@/i18n/navigation';
import {navItems} from "@/lib/nav";
import { siteInfo } from "@/lib/site";
import Image from 'next/image';

export default async function Footer(){
    const tSite = await getTranslations("Site")
    const tNav = await getTranslations("Nav")
    const tFooter = await getTranslations("Footer")
    const year = new Date().getFullYear()
    return (
        <footer className = "bg-primary text-white mt-12">
            <div className="gap-8 px-4 py-10 lg:grid-cols-3 lg:px-6 grid">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3">
                    <Image src="/logo.webp" alt="" width={56} height={60} className="w-14 h-auto"/>
                    <h2 className="text-lg font-bold">{tSite('name')}</h2>
                    <div className="h-0.5 w-12 bg-accent"></div>
                    <p className="text-sm text-white/85 max-w-xs">{tFooter('tagline')}</p>
                </div>
                <div>
                <div className="flex items-center gap-3">
                    <h2 className="text-lg font-bold shrink-0">{tFooter('quickLinksHeading')}</h2>
                    <div className="h-px flex-1 bg-accent"></div>
                    </div>
                    <nav aria-label={tFooter('quickLinksLabel')}>
                        <ul className="grid grid-cols-2 gap-3 mt-4 lg:grid-cols-1 lg:gap-2">{
                        navItems.map((item)=>(
                            <li key = {item.key}><Link href = {item.href} className="block rounded-xl border border-white/25 px-3 py-3 text-center hover:text-accent lg:border-0 lg:px-0 lg:py-0 lg:text-left">{tNav(item.key)}</Link></li>
                        ))
                    }</ul>
                    </nav>
                
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-bold shrink-0">{tFooter('contactHeading')}</h2>
                        <div className="h-px flex-1 bg-accent"></div>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm lg:text-base">
                        <li>{tFooter('address')}</li>
                        <li><a href={`tel:${siteInfo.phone}`} className="hover:text-accent">{siteInfo.phoneDisplay}</a></li>
                        <li><a href={`mailto:${siteInfo.email}`} className="hover:text-accent break-words">{siteInfo.email}</a></li>
                        <li className="pt-2"><a className="inline-block rounded-full border border-accent px-4 py-2 text-accent hover:bg-accent hover:text-primary" href={siteInfo.mapUrl} target="_blank" rel="noopener noreferrer">{tFooter('mapLinkText')}</a></li>
                    </ul>
                </div>
            </div>
            <p className="border-t border-white/20 px-4 py-4 text-center text-sm text-white/80 lg:px-6">{tFooter('rights' ,{year, name: tSite('name')})}</p>
        </footer>
    )
}