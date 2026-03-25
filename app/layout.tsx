import type { Metadata } from "next";
import { Inter, Spline_Sans_Mono, Fraunces } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurt Jeske — Product Design Leader",
  description:
    "Design leader with 15+ years of experience building teams, systems, and products at Epic Games, Electronic Arts, Barnes & Noble, and Amazon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${splineSansMono.variable} ${fraunces.variable} antialiased`}
      >
        <Sidebar />
        <MobileHeader />
        <main className="ml-0 pt-16 md:ml-[var(--sidebar-width)] md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
