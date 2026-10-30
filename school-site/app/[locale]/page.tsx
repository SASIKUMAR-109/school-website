import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('Home')
  return <h1 className=" text-white p-4 text-primary bold text-s"></h1>;
}