export const navItems = [{key:"home" , href:"/"},
    {key:"about",href:"/about"},
    {key:"academics",href:"/academics"},
    {key:"admissions", href:"/admissions"},
    {key:"events" , href:"/events"},
    {key:"contact" , href:"/contact"}]
export function isActive(pathname: string, href: string):boolean{
    if (href==="/"){
        return pathname==="/"
    }
    return pathname === href || pathname.startsWith(href + "/")
}