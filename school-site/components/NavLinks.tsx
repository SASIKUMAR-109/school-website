"use client";
import {Link,usePathname} from '@/i18n/navigation';
type Props = { links: { href: string; label: string }[] }


export default function NavLinks({links} : Props){
    const pathname = usePathname();
    function isActive(href: string){
        if (href==="/"){
           return pathname==="/"
        }
        return pathname === href || pathname.startsWith(href + "/")
    }
    return(
        <>
            {links.map((item) => (
            <Link className = "border-b-2 border-transparent py-1 text-base font-medium whitespace-nowrap text-text transition-colors hover:text-primary aria-[current=page]:border-accent aria-[current=page]:font-bold aria-[current=page]:text-primary" key ={item.href}  href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>
        ))}
        </>
        
    )

}