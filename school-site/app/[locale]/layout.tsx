import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '../../i18n/routing';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();   
  }

  return (
  <html lang={locale}>
    <body className="bg-background text-text">
      
      <NextIntlClientProvider >  <Header/> {children} <Footer/></NextIntlClientProvider>
    </body>
  </html>
);
}