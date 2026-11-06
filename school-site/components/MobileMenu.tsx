"use client";
import {useState} from 'react';
import {Link,usePathname} from '@/i18n/navigation';
import {Menu,X} from 'lucide-react';
import { isActive } from '@/lib/nav';

type MobileMenuProps = {
    openLabel: string;
    closeLabel: string;
    navLabel: string;
    links: { href: string; label: string;  }[];
};

export default function MobileMenu({ links, openLabel,closeLabel,navLabel }: MobileMenuProps) { 
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    return (
    <div>
        <button type = "button" className = "p-2.5 -mr-2.5 lg:hidden text-primary" aria-label = {isOpen?closeLabel:openLabel} onClick = { () => setIsOpen(!isOpen)} aria-expanded = {isOpen}>{isOpen ? <X className='size-6' aria-hidden="true"/> : <Menu className='size-6' aria-hidden="true"/> } </button>
        {isOpen && (
  <nav aria-label ={navLabel} className = "divide-y divide-primary/10 shadow-lg absolute left-0 right-0 top-full flex flex-col bg-surface border-b z-50 border-surface-alt lg:hidden">
    {links.map((item) => (
      <Link className = "border-l-4 border-transparent py-3 text-text hover:text-primary pl-3 pr-4 aria-[current=page]:border-accent aria-[current=page]:bg-surface-alt aria-[current=page]:font-bold aria-[current=page]:text-primary" key ={item.href} onClick = {()=>setIsOpen(false)} href={item.href} aria-current={isActive(pathname,item.href) ? "page" : undefined}>{item.label}</Link>
    ))}
  </nav>
)}
    </div>

) }
