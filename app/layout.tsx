import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omkar Kokane | Gen Z AI Developer",
  description:
    "Full Stack AI Developer & Machine Learning Enthusiast. Transforming innovative ideas into impactful AI-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111] text-white overflow-x-hidden`}
      >
        <div className="noise-overlay" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
