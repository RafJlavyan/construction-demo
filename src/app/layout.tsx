import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vanterra-engineering.com"),
  title: {
    default: "VANTERRA — Flagship Construction & Engineering Demo | by Ravioh Digital",
    template: "%s | VANTERRA Construction & Engineering Demo",
  },
  description:
    "Flagship construction and civil engineering demonstration website showcasing landmark luxury residences, commercial high-rises, and BIM Level 3 structural engineering. Designed and developed by Ravioh Digital.",
  keywords: [
    "Construction Demo",
    "Civil Engineering",
    "Structural Engineering",
    "General Contracting",
    "Luxury Architecture",
    "BIM Engineering",
    "Commercial Development",
    "Ravioh Digital",
  ],
  authors: [{ name: "Ravioh Digital", url: "https://ravioh.com" }],
  creator: "Ravioh Digital",
  publisher: "Ravioh Digital",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vanterra-engineering.com",
    siteName: "VANTERRA | Ravioh Digital Demo",
    title: "VANTERRA — Flagship Construction & Engineering Demo",
    description:
      "Flagship construction and civil engineering demonstration website showcasing landmark luxury residences, commercial high-rises, and BIM Level 3 structural engineering. Designed and developed by Ravioh Digital.",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Ravioh Digital — VANTERRA Flagship Construction & Engineering Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VANTERRA — Flagship Construction & Engineering Demo",
    description:
      "Flagship construction and civil engineering demonstration website showcasing landmark luxury residences, commercial high-rises, and BIM Level 3 structural engineering. Designed and developed by Ravioh Digital.",
    images: ["/images/og-preview.png"],
    creator: "@raviohdigital",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/images/icon-16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/images/icon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/images/icon-192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/images/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
