import { getTranslations, getLocale } from 'next-intl/server';
import Image from 'next/image';
import {
  Sprout,
  BookOpen,
  Leaf,
  Wheat,
  Newspaper,
  GraduationCap,
  Award,
  Target,
} from 'lucide-react';

export default async function AboutPage() {
  const t = await getTranslations('About');
  const tsite = await getTranslations('Site');
  const words = tsite('name').split(' ');
  const last = words.pop();
  const first = words.join(' ');
  const locale = await getLocale();
  const isTe = locale === 'te';

  const highlights = [
    { Icon: Leaf, title: t('ecoTitle'), body: t('ecoBody') },
    { Icon: Wheat, title: t('fieldsTitle'), body: t('fieldsBody') },
    { Icon: Newspaper, title: t('storiesTitle'), body: t('storiesBody') },
  ];

  return (
    <>
      <section className="px-4 py-10 lg:px-6 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
          <div className="flex justify-center lg:justify-start">
            <Image
              className="h-auto w-32 sm:w-40 lg:w-64"
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 160px, 128px"
              src="/logo-about.webp"
              alt=""
              width={640}
              height={688}
            />
          </div>

          <div className="text-center lg:border-l lg:border-primary/20 lg:pl-12 lg:text-left">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-0.5 w-8 bg-accent lg:hidden" aria-hidden="true"></span>
              <p
                className={`text-sm font-semibold uppercase text-primary ${
                  isTe ? 'tracking-normal' : 'tracking-[0.3em]'
                }`}
              >
                {t('eyebrow')}
              </p>
              <span className="h-0.5 w-8 bg-accent" aria-hidden="true"></span>
            </div>

            <h1
              className={`mt-3 text-4xl font-bold lg:text-6xl ${
                isTe ? 'leading-[1.4]' : 'leading-tight'
              }`}
            >
              <span className="block text-primary lg:inline">{first}</span>{' '}
              <span className="block text-accent-dark lg:inline">{last}</span>
            </h1>

            <p className="mx-auto mt-4 max-w-prose text-lg leading-relaxed text-text lg:mx-0">
              {t('introBody')}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:flex lg:flex-wrap">
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-surface-alt px-3 py-3 text-center text-sm font-semibold text-primary lg:flex-row lg:rounded-full lg:px-4 lg:py-2 lg:text-base">
                <Sprout className="size-5" aria-hidden="true" />
                <span>{t('natureEducation')}</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-surface-alt px-3 py-3 text-center text-sm font-semibold text-primary lg:flex-row lg:rounded-full lg:px-4 lg:py-2 lg:text-base">
                <BookOpen className="size-5" aria-hidden="true" />
                <span>{t('learningBeyondBooks')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-12 lg:px-6 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-3">

          <article className="flex flex-col rounded-2xl bg-primary p-5 text-white lg:p-6">
            <div className="flex items-center gap-3">
              <h2
                className={`text-2xl font-bold ${
                  isTe ? 'leading-[1.4]' : 'leading-snug'
                }`}
              >
                {t('principalHeading')}
              </h2>
              <span className="h-0.5 w-8 bg-accent" aria-hidden="true"></span>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-surface-alt ring-4 ring-accent">
                <Image
                  src="/principal.webp"
                  alt={t('principalPhotoAlt')}
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-xl font-bold">{t('principalName')}</p>
                <p className="text-white/80">{t('principalRole')}</p>
              </div>
            </div>

            <div className="mb-6 mt-6 flex gap-3">
              <Target className="size-6 shrink-0 text-accent" aria-hidden="true" />
              <p
                className={`text-white/90 ${
                  isTe ? 'leading-[1.6]' : 'leading-relaxed'
                }`}
              >
                {t('principalGoal')}
              </p>
            </div>

            <dl className="mt-auto grid gap-4 border-t border-white/20 pt-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="size-6 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-accent">{t('educationLabel')}</dt>
                  <dd className="font-semibold">{t('educationValue')}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="size-6 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-accent">{t('experienceLabel')}</dt>
                  <dd className="font-semibold">{t('experienceValue')}</dd>
                </div>
              </div>
            </dl>
          </article>
          <article className="flex flex-col rounded-2xl border border-primary/10 bg-surface p-5 shadow-sm lg:col-span-2 lg:p-6">
            <div className="flex items-center gap-3">
              <h2
                className={`text-2xl font-bold text-primary ${
                  isTe ? 'leading-[1.4]' : 'leading-snug'
                }`}
              >
                {t('highlightsHeading')}
              </h2>
              <span className="h-0.5 w-8 bg-accent" aria-hidden="true"></span>
            </div>

            <div className="mt-4 flex flex-1 flex-col divide-y divide-primary/10">
              {highlights.map((item) => (
                <div className="flex flex-1 items-center gap-3 py-4 lg:gap-4" key={item.title}>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-alt text-primary lg:size-12">
                    <item.Icon className="size-5 lg:size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-primary ${
                        isTe ? 'leading-[1.4]' : 'leading-snug'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-text-muted">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}