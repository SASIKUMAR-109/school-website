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

    <header className = "flex items-center justify-between px-6 py-4 bg-surface border-b border-surface-alt relative gap-3"><Link href = {"/"} className = "flex items-center gap-3 whitespace-nowrap font-bold text-primary text-xl hover:text-primary-dark" ><Image src = "/logo.webp" alt="" width={56} height={60}  priority className="shrink-0"  /> {tSite('name')}</Link>
    <div className = "flex items-center gap-6">
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
    </header>

    
  );
}