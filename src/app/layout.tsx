import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alpfa-psu-site.vercel.app"),
  title: {
    default: "ALPFA Penn State",
    template: "%s | ALPFA Penn State",
  },
  description:
    "ALPFA at Penn State is the university chapter of the Association of Latino Professionals For America, empowering and developing Latino leaders through professional development, networking, mentorship, and career resources for students.",
  openGraph: {
    title: "ALPFA Penn State",
    description:
      "ALPFA at Penn State is the university chapter of the Association of Latino Professionals For America, empowering and developing Latino leaders through professional development, networking, mentorship, and career resources for students.",
    url: "https://alpfa-psu-site.vercel.app",
    siteName: "ALPFA Penn State",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}