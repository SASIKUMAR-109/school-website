import {getTranslations,getLocale} from 'next-intl/server';
import HeroSlides from '@/components/HeroSlides';
import {Link} from '@/i18n/navigation';
import {GraduationCap,ArrowRight} from 'lucide-react';

export default async function HomePage() {
  const thero = await getTranslations('hero')
  const locale = await getLocale();
  const welcome = (<p className="my-3 text-sm font-semibold uppercase tracking-[0.3em] [&:lang(te)]:tracking-normal [&:lang(te)]:leading-[1.4]  text-white">{thero('welcome')}</p>)
  return (
    <section className="relative min-h-[70vh]">
      <HeroSlides/>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/40 to-transparent" aria-hidden="true"></div>
        <div className="flex flex-col justify-center relative z-10 px-4 lg:px-6 min-h-[70vh]">
           {locale !== 'te' && welcome}
           <h1 className={`text-3xl font-bold sm:text-4xl lg:text-6xl ${locale === 'te' ? 'leading-[1.4]' : 'leading-tight'}`}><span className='block text-white'>{thero('nameLine1')}</span><span className='block text-accent-light'>{thero('nameLine2')}</span></h1>
            {locale === 'te' && welcome}
            <div className='mt-4 h-1 w-20 bg-accent'></div>
            <p className='font-semibold mt-4 text-lg text-white/90'>{thero('heroEyebrow')}</p>
            
        
        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
          <Link href ={'/admissions'} className='group inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold bg-accent text-text hover:bg-accent-light rounded-full px-8 py-3'><GraduationCap aria-hidden="true" className="size-5 shrink-0"/>{thero('ctaAdmission')}</Link>
          <Link href ={'/academics'} className='group inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold border border-white text-white hover:bg-white/10 rounded-full px-8 py-3'>
          {thero('ctaAcademics')}<ArrowRight aria-hidden="true" className="size-5 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"/></Link>
        </div>
      </div>
        
      
    </section>
  );
}