import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

// drmsa.org uses Noto Sans for everything, so every font role points at it.
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "DRM SA Group — Digital Radio Mondiale South Africa",
  description:
    "DRM SA Group leads the adoption of Digital Radio Mondiale, the ITU-recommended, ETSI-published open standard for digital radio, across Southern Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
