import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aeroasiahydromex.com"),
  title: {
    default: "Aeroasia-Hydromex Technologies — Advanced Wastewater Treatment & AOP Systems",
    template: "%s · Aeroasia-Hydromex",
  },
  description:
    "Aeroasia-Hydromex Technologies Co. Ltd. — Engineered for Compliance, Built with Reliance. Advanced Oxidation Process (AOP) wastewater treatment, STP design, installation, rehabilitation, and DENR-compliant systems nationwide in the Philippines.",
  keywords: [
    "Aeroasia",
    "Hydromex",
    "wastewater treatment Philippines",
    "STP",
    "Advanced Oxidation Process",
    "AOP",
    "DENR compliance",
    "DAO 2016-08",
    "DAO 2021-19",
    "sewage treatment plant",
  ],
  openGraph: {
    title: "Aeroasia-Hydromex Technologies",
    description:
      "Engineered for Compliance, Built with Reliance. Clean Water Solutions with Lasting Alliance.",
    url: "https://www.aeroasiahydromex.com",
    siteName: "Aeroasia-Hydromex",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeroasia-Hydromex Technologies",
    description:
      "Engineered for Compliance, Built with Reliance. Clean Water Solutions with Lasting Alliance.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full max-w-full overflow-x-clip scroll-pt-[84px] antialiased`}
    >
      <body className="min-h-full max-w-full overflow-x-clip bg-radial-navy text-clean">
        {children}
      </body>
    </html>
  );
}
