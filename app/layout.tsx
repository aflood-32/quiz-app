import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@app/styles/globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
