import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edanur Kavak | Psikolog",
  description: "Bireysel, çift ve ergen terapisi gibi psikolojik danışmanlık hizmetleri.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans text-accent bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
