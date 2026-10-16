import {getTranslations} from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('About')
  return <h1 className="text-3xl font-bold text-teal-700">{t('title')}</h1>;
}