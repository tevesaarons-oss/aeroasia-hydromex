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
  title: {
    default:
      "A. Hydromex STP & AOP Wastewater Solutions PH | Aeroasia-Hydromex",
    template: "%s · A. Hydromex STP & AOP",
  },
  description:
    "Advanced STP, AOP wastewater treatment, rehabilitation, installation, and maintenance support for hospitals, industries, commercial facilities, resorts, LGUs, and institutions in the Philippines. Message us on Facebook for the fastest reply.",
  keywords: [
    "A. Hydromex",
    "AHydromexSTP",
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
    "San Pedro Laguna",
  ],
  openGraph: {
    title: "A. Hydromex STP & AOP Wastewater Solutions PH",
    description:
      "Advanced STP and AOP wastewater treatment in the Philippines. Engineered for Compliance, Built with Reliance.",
    siteName: "A. Hydromex STP & AOP Wastewater Solutions PH",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A. Hydromex STP & AOP Wastewater Solutions PH",
    description:
      "Advanced STP and AOP wastewater treatment in the Philippines. Message us on Facebook for the fastest reply.",
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
