import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}