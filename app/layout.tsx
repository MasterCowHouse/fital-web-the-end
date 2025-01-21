import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footerlogos from "./components/Footer/Footerlogos";
import Footer from "./components/Footer/Footer";
import TopNav from "./components/NavTop/Topnav";
import WhatsappButton from "./components/whatsappButton";
import Script from "next/script";

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

export const metadata: Metadata = {
  title: "FITAL",
  description: "FITAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMWMNCDC');`}
        </script>
        {/* End Google Tag Manager */}
      </head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RJ92NGTRWX"
        strategy="afterInteractive" // Carga después de que la página esté interactiva
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RJ92NGTRWX');
          `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: `linear-gradient(222deg, rgba(82,64,146,1) 0%, rgba(57,47,97,1) 19%, rgba(48,41,80,1) 44%, rgba(47,40,78,1) 62%, rgba(25,21,41,1) 83%, rgba(13,11,21,1) 100%)`,
        }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMWMNCDC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <TopNav />
        {children}
        <Footer />
        <Footerlogos />
        <WhatsappButton />
      </body>
    </html>
  );
}
