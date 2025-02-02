import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { frontendUrl } from "./register/utils/urls";
import ServiceWorkerRegistration from "@/components/serviceWorkerReg";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport = {
  themeColor: "#007BFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: "Clyne - Professional Booking & Service Customization Platform",
    template: "%s | Clyne Booking Platform",
  },
  description:
    "Streamline your business with Clyne's customizable booking platform. Easily manage appointments, services, and client scheduling. Perfect for businesses of all sizes.",
  keywords: [
    "booking platform",
    "appointment scheduling",
    "business customization",
    "online booking system",
    "service scheduling",
    "appointment management",
    "business services",
    "custom booking solution",
    "scheduling software",
    "business management",
  ],
  authors: [{ name: "Akahomen" }],
  creator: "Akahomen",
  publisher: "Clyne",
  formatDetection: {
    telephone: true,
    email: true,
  },
  metadataBase: new URL(`${frontendUrl}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clyne - Professional Booking & Service Customization Platform",
    description:
      "Transform your business with Clyne's powerful booking platform. Customize services, manage appointments, and grow your business efficiently.",
    url: `${frontendUrl}`,
    siteName: "Clyne",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clyne Booking Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyne - Professional Booking & Service Customization Platform",
    description:
      "Transform your business with Clyne's powerful booking platform. Customize services, manage appointments, and grow your business efficiently.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#007BFF" },
    ],
  },
  manifest: "/site.webmanifest",
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Clyne",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "A comprehensive booking and service customization platform for businesses",
  offers: {
    "@type": "Offer",
    category: "Booking Platform",
  },
  featureList: [
    "Customizable booking system",
    "Service management",
    "Appointment scheduling",
    "Business customization",
    "Client management",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="alternate" hrefLang="en" href={`${frontendUrl}`} />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegistration />
        {children}
        <Toaster />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script src="/app.js?v=2.0.1"></script>
      </body>
    </html>
  );
}
