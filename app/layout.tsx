import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Egger | Software Engineer",
  description:
    "Software Engineer and CTO at SeatStock. Building accessible, high-performance web applications.",
  keywords: [
    "Brandon Egger",
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Brandon Egger" }],
  openGraph: {
    title: "Brandon Egger | Software Engineer",
    description:
      "Software Engineer and CTO at SeatStock. Building accessible, high-performance web applications.",
    url: "https://brandonegger.com",
    siteName: "Brandon Egger",
    locale: "en_US",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
