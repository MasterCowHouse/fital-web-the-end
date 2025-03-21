import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footerlogos from "./components/Footer/Footerlogos";
import Footer from "./components/Footer/Footer";
import TopNav from "./components/NavTop/Topnav";
import WhatsappButton from "./components/whatsappButton";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "FITAL",
  description: "FITAL",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <head>
          {/***********  inicio de todo tag manager ************/}
          {/* Google Tag Manager */}
          <script>
            {`function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5BJNP277');`}
          </script>
          {/* End Google Tag Manager */}
          {/* Google Tag Manager noscript */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5BJNP277"
              height="0"
              width="0"
            ></iframe>
          </noscript>

          {/* End Google Tag Manager noscript */}

          {/***********  fin de todo tag manager ************/}

          {/* Google tag */}

          {/* End Google tag */}

          {/* Cookiebot */}
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="b68b3417-dd25-455d-b010-38ef2fcd08a6"
            type="text/javascript"
          ></script>
          {/* End Cookiebot */}
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          style={{
            backgroundImage: `linear-gradient(222deg, rgba(82,64,146,1) 0%, rgba(57,47,97,1) 19%, rgba(48,41,80,1) 44%, rgba(47,40,78,1) 62%, rgba(25,21,41,1) 83%, rgba(13,11,21,1) 100%)`,
          }}
        >
          <TopNav />
          {children}
          <Footer />
          <Footerlogos />
          <WhatsappButton />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
