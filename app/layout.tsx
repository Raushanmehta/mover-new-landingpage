import type { Metadata } from "next";
import { Roboto, Bodoni_Moda, Allura } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
import { ContactModalProvider } from "@/components/common/ContactModalContext";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MoverNew - Luxury Beauty Salon & Spa",
  description: "Experience professional care, personalized treatments and a relaxing salon environment designed just for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} ${bodoniModa.variable} ${allura.variable} ${roboto.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <ContactModalProvider>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
          </ContactModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
