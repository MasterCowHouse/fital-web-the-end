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
  );
}
