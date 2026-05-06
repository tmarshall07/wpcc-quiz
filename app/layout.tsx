import type { Metadata } from "next";
import { Lato, Work_Sans, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "WPCC Quiz",
  description: "WPCC Quiz Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${workSans.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
