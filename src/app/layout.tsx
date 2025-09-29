import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanaullah — Blockchain & AI Developer",
  description: "Portfolio of Sanaullah, a Blockchain & AI developer with strong experience building fintech applications.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sanaullah — Blockchain & AI Developer",
    description:
      "Portfolio of Sanaullah, a Blockchain & AI developer with strong experience building fintech applications.",
    url: "https://example.com",
    siteName: "Sanaullah Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanaullah — Blockchain & AI Developer",
    description:
      "Portfolio of Sanaullah, a Blockchain & AI developer with strong experience building fintech applications.",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
