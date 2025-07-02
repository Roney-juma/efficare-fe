import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "EfficCare - Professional Mental Health Counseling Platform",
  description: "Connect with certified mental health professionals and counselors. Start your journey to better mental health with EfficCare's secure and professional platform.",
  keywords: "mental health, counseling, therapy, professional counselors, mental wellness",
  authors: { name: "EfficCare Team" },
  openGraph: {
    title: "EfficCare - Professional Mental Health Counseling",
    description: "Connect with certified mental health professionals and counselors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
