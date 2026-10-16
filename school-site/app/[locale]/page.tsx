import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('Home')
  return <h1 className="text-3xl font-bold text-teal-700">{t('title')}</h1>;
}