import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paperclip",
  description: "Paperclip",
};

const poppins = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:block">
          <Navbar customStyle="w-[361px] md:w-[464px] absolute top-10 left-1/2 transform -translate-x-1/2" />
        </div>

        <div className="block md:hidden">
          <NavbarMobile />
        </div>

        {children}
      </body>
    </html>
  );
}
