import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LanguageProvider from "@/components/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edilza Pannunzio — Desenvolvedora Front-end",
  description:
    "Desenvolvedora Front-end especializada em React, Next.js e TypeScript.",
  authors: [{ name: "Edilza Pannunzio" }],
  openGraph: {
    title: "Edilza Pannunzio — Desenvolvedora Front-end",
    description:
      "Desenvolvedora Front-end especializada em React, Next.js e TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} site-noise antialiased`}>
        <LanguageProvider>
          {children}
          <CustomCursor />
        </LanguageProvider>
      </body>
    </html>
  );
}