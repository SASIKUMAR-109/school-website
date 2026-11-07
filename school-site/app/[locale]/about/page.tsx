import {getTranslations} from 'next-intl/server';
import Image from "next/image";
import {getLocale} from 'next-intl/server';
import {Sprout,BookOpen,Leaf,Wheat,Newspaper,GraduationCap,Award} from 'lucide-react';

export default async function AboutPage() {
  const t = await getTranslations('About');
  const tsite = await getTranslations('Site');
  const words = tsite('name').split(' ');
  const last = words.pop()
  const first = words.join(' ')
  const locale = await getLocale();
  const isTe = locale === 'te';
  const highlights=[{
    Icon:Leaf,
    title:t('ecoTitle'),
    body:t('ecoBody')
  },
  {
    Icon:Wheat,
    title:t('fieldsTitle'),
    body:t('fieldsBody')
  },
  {
    Icon:Newspaper,
    title:t('storiesTitle'),
    body:t('storiesBody')
  }


]
  return (
  <>
  <section className="px-4 py-10 lg:px-6 lg:py-14">
    <div className='grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12'>
      <div className='flex justify-center lg:justify-start'>
        <Image className="w-40 lg:w-64 h-auto" sizes="(min-width: 1024px) 256px, 160px"
          src="/logo-about.webp"
          alt=""
          height={688}
          width={640}
            />
      </div>
      <div className='lg:border-l lg:border-primary/20 lg:pl-12'>
        <div className='flex items-center gap-3'>
        <p className={`text-sm font-semibold uppercase text-primary ${isTe ? 'tracking-normal' : 'tracking-[0.3em]'}`}>{t('eyebrow')}</p>
        <span className='h-0.5 w-8 bg-accent'></span>
        </div>
        <h1 className={`mt-3 text-4xl font-bold lg:text-6xl ${locale === 'te' ? 'leading-[1.4]' : 'leading-tight'}`}> <span className='block lg:inline text-primary'>{first}</span>{' '}<span className='text-accent-dark block lg:inline'>{last}</span></h1>
        <p className='mt-4 max-w-prose text-lg leading-relaxed text-text'>{t('introBody')}</p>
        <div className='mt-6 flex flex-wrap gap-3'>
        <div className='inline-flex items-center gap-2 rounded-full bg-surface-alt px-4 py-2 font-semibold text-primary'>
        <Sprout className='size-5' aria-hidden="true"/><span>{t('natureEducation')}</span></div>
        <div className='inline-flex items-center gap-2 rounded-full bg-surface-alt px-4 py-2 font-semibold text-primary'>
        <BookOpen className='size-5' aria-hidden="true"/><span>{t('learningBeyondBooks')}</span>
        </div>
        </div>
    </div>
    </div>
  </section>
  <section className='px-4 pb-12 lg:px-6 lg:pb-16'>
  <div className='grid gap-6 lg:grid-cols-3'>
    <article className='rounded-2xl bg-primary p-6 text-white flex flex-col'>
      <div className='flex items-center gap-3'>
        <h2 className={`text-2xl font-bold ${isTe ? 'leading-[1.4]' : 'leading-snug'}`}>{t('principalHeading')}</h2>
        <span className='h-0.5 w-8 bg-accent'></span>
      </div>
      <div className='mt-6 flex items-center gap-5'>
        <div className='relative size-28 shrink-0 overflow-hidden rounded-full bg-surface-alt ring-4 ring-accent'>
          <Image src="/principal.webp" alt={t('principalPhotoAlt')} fill sizes="112px" className="object-cover object-top" />
        </div>
        <div>
          <p className='text-xl font-bold'>{t('principalName')}</p>
          <p className='text-white/80'>{t('principalRole')}</p>
        </div>
      </div>
      <dl className='mt-6 grid gap-4 border-t border-white/20 pt-6 mt-auto'>
        <div className='flex items-start gap-3'>
          <GraduationCap className="size-6 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <dt className='text-sm text-accent'>{t('educationLabel')}</dt>
            <dd className='font-semibold'>{t('educationValue')}</dd>
          </div>
        </div>
        <div className='flex items-start gap-3'>
          <Award className="size-6 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <dt className='text-sm text-accent'>{t('experienceLabel')}</dt>
            <dd className='font-semibold'>{t('experienceValue')}</dd>
          </div>
        </div>
      </dl>
    </article>

    <article className='rounded-2xl border border-primary/10 bg-surface p-6 shadow-sm lg:col-span-2 flex flex-col'>
      <div className='flex items-center gap-3'>
        <h2 className={`text-2xl font-bold text-primary ${isTe ? 'leading-[1.4]' : 'leading-snug'}`}>{t('highlightsHeading')}</h2>
        <span className='h-0.5 w-8 bg-accent'></span>
      </div>
      <div className='mt-4 divide-y divide-primary/10'>
        {highlights.map((item) => (
          <div className='flex gap-4 py-4' key={item.title}>
            <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-primary'>
              <item.Icon className="size-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className={`font-bold text-primary ${isTe ? 'leading-[1.4]' : 'leading-snug'}`}>{item.title}</h3>
              <p className='mt-1 leading-relaxed text-text-muted'>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  </div>
</section>
  </>
  )
}