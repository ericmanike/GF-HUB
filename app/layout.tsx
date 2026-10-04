import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/components/SessionProvider";
import WhatsAppWidget from "@/components/WhatsAppWidget";
// Import system-fallback styles to bypass Google Fonts download block in offline environments
const geistSans = {
  variable: "font-sans",
};

const geistMono = {
  variable: "font-mono",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gfdatahub.com"),
  title: {
    default: "GF Data Hub | Cheap & Affordable Data Bundles in Ghana",
    template: "%s | GF Data Hub",
  },
  description: "Buy cheap and affordable MTN, Telecel, and AirtelTigo data bundles in Ghana. High-speed internet bundles with instant delivery, no expiry, and active 24/7. Pay via Mobile Money.",
  keywords: [
    "GF Data Hub",
    "cheap data bundle ghana",
    "buy MTN data bundle",
    "cheap MTN data",
    "AirtelTigo data bundle",
    "Telecel data bundle",
    "buy internet bundle ghana",
    "momo data bundle",
    "ghana data bundle agent",
    "non-expiry data ghana",
    "cheap internet ghana",
  ],
  authors: [{ name: "GF Data Hub" }],
  creator: "GF Data Hub",
  publisher: "GF Data Hub",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://www.gfdatahub.com",
    title: "GF Data Hub | Cheap & Affordable Data Bundles in Ghana",
    description: "Buy cheap and affordable MTN, Telecel, and AirtelTigo data bundles in Ghana. High-speed internet bundles with instant delivery, no expiry, and active 24/7. Pay via Mobile Money.",
    siteName: "GF Data Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GF Data Hub - Cheap & Affordable Data Bundles in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GF Data Hub | Cheap & Affordable Data Bundles in Ghana",
    description: "Buy cheap and affordable MTN, Telecel, and AirtelTigo data bundles in Ghana. High-speed internet bundles with instant delivery, no expiry, and active 24/7. Pay via Mobile Money.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <AuthProvider>{children}</AuthProvider>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
