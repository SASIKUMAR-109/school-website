import {getTranslations,getLocale} from 'next-intl/server';
import {siteInfo} from '@/lib/site';
import {MapPin, Phone, Mail, MessageCircle, Navigation} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { FaWhatsapp } from "react-icons/fa";

export default async function ContactPage() {
  const t = await getTranslations('Contact');
  const tsite = await getTranslations('Site');
  const locale = await getLocale();
  const isTe = locale === 'te';
  
  const contactRows = [
    { Icon : MapPin, label : t('addressLabel'), value : tsite('address')},
    { Icon : Phone, label : t('phoneLabel'), value : siteInfo.phoneDisplay ,href : `tel:${siteInfo.phone}`},
    { Icon : Mail, label : t('emailLabel'), value : siteInfo.email ,href : `mailto:${siteInfo.email}`}
  ]
  return (
    <>
    <PageHeader title={t('title')}  intro={t('intro')}/>
    <section className='px-4 pb-12 lg:px-6 lg:pb-16'>
      <div className='grid gap-6 lg:grid-cols-2'>
        <article className='flex flex-col rounded-2xl border border-primary/10 bg-surface p-5 shadow-sm lg:p-6'>
        <div className='flex items-center gap-3'>
          <h2 className={`text-2xl font-bold text-primary ${isTe ? 'leading-[1.4]' : 'leading-snug'}`}>{t('detailsHeading')}</h2>
          <span className="h-0.5 w-8 bg-accent" aria-hidden="true"></span>
        </div>
          <ul className='mt-4 divide-y divide-primary/10'>
            {
              contactRows.map((item)=>(
                <li className='flex items-start gap-4 py-4' key = {item.label}><span className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-primary'><item.Icon className="size-6" aria-hidden="true"/></span>
                <div className='min-w-0 break-words'>
                  <p className='text-primary font-bold'>{item.label}</p>
                  {item.href ? <a href = {item.href} className='inline-flex min-h-11 items-center hover:text-primary lg:min-h-0'>{item.value}</a> : <p className='inline-flex min-h-11 items-center lg:min-h-0'>{item.value}</p>}
                </div>
                </li>
                
              ))

            }
          </ul>
          <div className='mt-auto grid grid-cols-2 gap-3 pt-6'>
            <a className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white sm:text-base" href={`tel:${siteInfo.phone}`}><Phone className='size-5' aria-hidden="true"/>{t('callButton')}</a>
            <a href={`https://wa.me/${siteInfo.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className='inline-flex items-center justify-center gap-2 rounded-full bg-surface px-4 py-3 text-sm font-semibold text-primary sm:text-base border-2 border-primary'><FaWhatsapp className='size-6' aria-hidden="true"/>{t('whatsappButton')}</a>
          </div>
       </article>
        <article className='flex flex-col rounded-2xl border border-primary/10 bg-surface p-3 shadow-sm lg:p-4'>
            <iframe src={siteInfo.mapEmbedUrl} title={t('mapTitle')} className="min-h-72 w-full flex-1 rounded-xl border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            <a href={siteInfo.mapUrl} target="_blank" rel="noopener noreferrer" className='mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-text'><Navigation className="size-5" aria-hidden="true"/>{t('directions')}</a>
        </article>
      </div>

    </section>
    </>
  );
}