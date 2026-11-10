import {getTranslations,getLocale} from 'next-intl/server';
import {siteInfo,whatsappNumber} from '@/lib/site';
import PageHeader from '@/components/PageHeader';
import AdmissionForm from '@/components/AdmissionForm';
import {MessageSquareText ,Inbox ,Phone} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default async function AdmissionsPage() {
  const t = await getTranslations('Admissions');
  const tc = await getTranslations('Contact');
  const locale = await getLocale();
  const isTe = locale === 'te';
  const cardClass = "rounded-2xl border border-primary/10 bg-surface p-5 shadow-sm lg:p-6";

  const classOptions = [
  { value: 'Nursery', label: t('classNursery') },
  { value: 'LKG', label: t('classLkg') },
  { value: 'UKG', label: t('classUkg') },
  ...Array.from({ length: siteInfo.highestClass }, (_, i) => i + 1).map((n) => ({
    value: `Class ${n}`,
    label: t('classNumber', { number: n }),
  })),
  ];
  const steps = [
    {
    Icon:MessageSquareText,
    title:t('step1Title'),
    body :t('step1Body')
    },
    {
    Icon:Inbox,
    title:t('step2Title'),
    body :t('step2Body')
  },
  {
    Icon:Phone,
    title:t('step3Title'),
    body :t('step3Body')
  }
  ]
  
  return (
    <>
    <PageHeader title={t('title')}  intro={t('intro')}/>
    <section className='px-4 pb-8 lg:px-6 lg:pb-16'>
      <div className='grid  gap-6 lg:grid-cols-2'>
        <article className={`${cardClass} flex flex-col`}>
          <div className='flex items-center gap-3'>
            <h2 className={`text-2xl font-bold text-primary ${isTe ? 'leading-[1.4]' : 'leading-snug'}`}>{t('formHeading')}</h2>
            <span aria-hidden="true" className='block h-1 w-12 rounded-full bg-accent'></span>
          </div>
          <AdmissionForm
          phone={whatsappNumber}
          classOptions={classOptions}
          labels={{
            parentName: t('parentName'),
            parentPhone: t('parentPhone'),
            childName: t('childName'),
            classApplying: t('classApplying'),
            selectClass: t('selectClass'),
            messageLabel: t('messageLabel'),
            submit: t('submit'),
            whatsappNote: t('whatsappNote'),
            privacyNote: t('privacyNote'),
          }}
        />
        </article>
        <article className={`${cardClass} flex flex-col`}>
          <div className='flex items-center gap-3'>
          <h2 className={`text-2xl font-bold text-primary ${isTe ? 'leading-[1.4]' : 'leading-snug'}`}>{t('stepsHeading')}</h2>
          <span aria-hidden="true" className='block h-1 w-12 rounded-full bg-accent'></span>
          </div>
          <ol className="mt-8 flex flex-1 flex-col">
            {
              steps.map((item,i)=>(
                <li key = {item.title} className='flex flex-1 gap-4'>
                   <div className="flex flex-col items-center">
                  <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    {i + 1}
                  </span>
                  {i !== steps.length - 1 && <span className="w-0.5 flex-1 bg-primary/30" aria-hidden="true" />}
                 </div>
                <span className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-primary'><item.Icon className="size-6" aria-hidden="true" /></span>
               
                <div className={`min-w-0 flex-1 pb-6 ${i !== steps.length - 1 ? 'border-b border-primary/10' : ''}`}>
                <p className='font-bold text-primary '>{item.title}</p>
                <p className='text-text-muted'>{item.body}</p>
                </div></li>
              ))
            }
          </ol>
          <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
            <a href={`tel:${siteInfo.phone}`} className=' bg-primary text-white inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold sm:text-base'><Phone className='size-5' aria-hidden="true"/>{tc('callButton')}</a>
            <a href={`https://wa.me/${whatsappNumber}`} className='bg-surface text-primary border-2 border-primary inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold sm:text-base' target="_blank" rel="noopener noreferrer"><FaWhatsapp className='size-6' aria-hidden="true"/>{tc('whatsappButton')}</a>
          </div>
        </article>
      </div>
    </section>
    </>
  )
}