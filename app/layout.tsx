import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className={`${dmSans.variable} ${spaceMono.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
