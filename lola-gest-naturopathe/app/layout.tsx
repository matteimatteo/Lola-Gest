import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lolagest-naturopathe.fr'),
  title: "Lola Gest Naturopathe | Drainage Lymphatique - Côte d'Opale",
  description:
    "Naturopathe spécialisée en drainage lymphatique (méthode Renata França®) à Cucq, sur la Côte d'Opale. Nutrithérapie, gestion du stress, accompagnement sur-mesure. Prise de rendez-vous sur Planity.",
  keywords: [
    "drainage lymphatique",
    "Renata França",
    "naturopathe",
    "Côte d'Opale",
    "Cucq",
    "nutrithérapie",
    "gestion du stress",
    "méditation guidée",
    "Planity Lola Gest",
  ],
  authors: [{ name: "Lola Gest" }],
  creator: "Lola Gest",
  openGraph: {
    title: "Lola Gest Naturopathe | Drainage Lymphatique - Côte d'Opale",
    description:
      "Drainage Lymphatique Méthode Renata França®, nutrithérapie et gestion du stress à Cucq. Prenez rendez-vous en ligne sur Planity.",
    url: "https://lolagest-naturopathe.fr",
    siteName: "Lola Gest Naturopathe",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lolagest-naturopathe.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}