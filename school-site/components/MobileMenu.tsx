"use client";
import {useState} from 'react';
import {Link} from '@/i18n/navigation';
type MobileMenuProps = {
    openLabel: string;
    closeLabel: string;
    navLabel: string;
    links: { href: string; label: string;  }[];
};

export default function MobileMenu({ links, openLabel,closeLabel,navLabel }: MobileMenuProps) { 
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div>
        <button type = "button" className = "p-1 lg:hidden text-xl text-primary" aria-label = {isOpen?closeLabel:openLabel} onClick = { () => setIsOpen(!isOpen)} aria-expanded = {isOpen}>{isOpen ? "✕" : "☰"} </button>
        {isOpen && (
  <nav aria-label ={navLabel} className = "absolute left-0 right-0 top-full flex flex-col bg-surface border-b z-50 border-surface-alt lg:hidden">
    {links.map((item) => (
      <Link className = "px-6 py-3 text-text hover:text-primary" key ={item.href} onClick = {()=>setIsOpen(false)} href={item.href}>{item.label}</Link>
    ))}
  </nav>
)}
    </div>

) }
