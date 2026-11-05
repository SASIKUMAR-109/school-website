import {getTranslations} from 'next-intl/server';
import HeroSlides from '@/components/HeroSlides';
import {Link} from '@/i18n/navigation';


export default async function HomePage() {
  const t = await getTranslations('Home')
  const thero = await getTranslations('hero')
  return (
    <section className="relative min-h-[70vh]">
      <HeroSlides/>
      <div className="absolute inset-0 bg-black/60 lg:bg-black/40" aria-hidden="true"></div>
        <div className="flex flex-col justify-center relative z-10 mx-auto max-w-6xl px-4 lg:px-6 min-h-[70vh]">
            <p className='font-semibold uppercase tracking-widest text-accent-light mb-3 text-sm'>{thero('heroEyebrow')}</p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-6xl">{t('title')}</h1>
            <div className='mt-4 h-1 w-20 bg-accent'></div>

            
        
        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
          <Link href ={'/admissions'} className='inline-flex min-h-11 items-center justify-center px-6 font-semibold lg:min-h-0 bg-accent text-text hover:bg-accent-light'>{thero('ctaAdmission')}</Link>
          <Link href ={'/academics'} className='inline-flex min-h-11 items-center justify-center px-6 font-semibold border border-white text-white hover:bg-white/10 lg:min-h-0'>{thero('ctaAcademics')}</Link>
        </div>
      </div>
        
      
    </section>
  );
}