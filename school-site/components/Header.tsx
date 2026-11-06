import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import {navItems} from '@/lib/nav';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import NavLinks from './NavLinks';
export default async function Header() {
  const tSite = await getTranslations("Site")
  const tNav = await getTranslations("Nav")
  const tHeader = await getTranslations("Header")
  const mobileLinks= navItems.map((item)=>({
      href:item.href,
      label:tNav(item.key)
  }
  ))
  return (

    <header className = "lg:pb-6 pt-3 pb-5 lg:pt-4 bg-surface relative">
    <div className="flex items-center justify-between gap-2 px-3 lg:px-6">
    <Link href = {"/"} className = "flex items-center gap-2 font-bold text-primary min-w-0 hover:text-primary-dark" >
    <Image src = "/logo.webp" alt="" width={56} height={60}  priority className="shrink-0 w-9 h-auto lg:w-14"  /><span className="min-w-0 leading-snug text-sm min-[400px]:text-base lg:text-xl min-[400px]:whitespace-nowrap">{tSite('name')}</span></Link>
    <div className = "flex items-center shrink-0 lg:gap-6 gap-2">
    <nav aria-label = {tHeader('mainNavigation')} className = "hidden lg:flex lg:gap-4 xl:gap-8">
      <NavLinks links={mobileLinks} />
    </nav>
     <LanguageSwitcher /> 
     <MobileMenu links = {mobileLinks} openLabel={tHeader('openMenu')} closeLabel={tHeader('closeMenu')} navLabel={tHeader('mainNavigation')}/>
     </div>
     </div>
     <svg
        aria-hidden="true"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block w-full h-3 lg:h-5 pointer-events-none"
        ><path d="M0 4 Q720 44 1440 4 V40 H0 Z" className="fill-accent" />
        <path d="M0 14 Q720 54 1440 14 V40 H0 Z" className="fill-primary" /></svg>
        
    </header>

    
  );
}
