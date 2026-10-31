import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import {navItems} from '@/lib/nav';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
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

    <header className = "flex items-center justify-between px-3 lg:px-6 lg:pb-6 pt-3 pb-5 lg:pt-4 bg-surface relative gap-2"><Link href = {"/"} className = "flex items-center gap-3 font-bold text-primary min-w-0 hover:text-primary-dark" ><Image src = "/logo.webp" alt="" width={56} height={60}  priority className="shrink-0 w-9 h-auto lg:w-14"  /><span className="min-w-0 leading-snug text-sm min-[360px]:text-base lg:text-xl whitespace-nowrap">{tSite('name')}</span></Link>
    <div className = "flex items-center shrink-0 lg:gap-6 gap-2">
    <nav aria-label = {tHeader('mainNavigation')} className = "hidden lg:flex gap-3">
      
        {
            navItems.map((item)=>(
                
                <Link href = {item.href} key = {item.key} className = "whitespace-nowrap text-text hover:text-primary">{tNav(item.key)}</Link>
            ))
        }
    </nav>
     <LanguageSwitcher /> 
     <MobileMenu links = {mobileLinks} openLabel={tHeader('openMenu')} closeLabel={tHeader('closeMenu')} navLabel={tHeader('mainNavigation')}/>
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