import type { Metadata, Viewport } from "next";
import { Red_Hat_Text, Red_Hat_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { logo, site } from "@/lib/site-constants";

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: "/",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: logo.colors.light.bg },
    { media: "(prefers-color-scheme: dark)", color: logo.colors.dark.bg },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${redHatText.variable} ${redHatMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background bg-fixed bg-[radial-gradient(1100px_700px_at_100%_0%,var(--glow),transparent_65%),radial-gradient(900px_700px_at_0%_100%,var(--glow-2),transparent_70%)] font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
