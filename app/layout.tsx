import type { Metadata } from "next";
import { Nunito, Space_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kurt Jeske — Product Design Leader",
  description:
    "Design leader with 15+ years building teams, systems, and products at Epic Games, Electronic Arts, Barnes & Noble, and Amazon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
