import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '../../i18n/routing';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";
import {Noto_Sans,Noto_Sans_Telugu} from 'next/font/google';
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-telugu",
  display: "swap",
})

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
  <html lang={locale} className={`${notoSans.variable} ${notoSansTelugu.variable}`}>
    <body className="bg-background text-text flex min-h-screen flex-col">
      
      <NextIntlClientProvider >  <Header/> 
      <main className="flex-1">{children}</main> 
      <Footer/></NextIntlClientProvider>
    </body>
  </html>
);
}