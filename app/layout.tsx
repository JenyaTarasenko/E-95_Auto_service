// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "Е-95 AVTOSERVICE - такси, эвакуатор 24/7",
//   description: "Эвакуация авто в Ананьевском районе. Быстрая подача за 15–30 минут. Работаем круглосуточно 24/7. Помощь при ДТП, поломке и перевозке авто",
//   metadataBase: new URL("https://joyful-blini-28a6ab.netlify.app/"),
//   verification: {
//     google: "F8L-WtNY0RLl3x6p-wFAikqQjBX_XTsAWTvd7NJaKRM",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="ru"
//       className={`${inter.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Е-95 AVTOSERVICE - такси, эвакуатор 24/7",
  description:
    "Эвакуация авто в Ананьевском районе, Троицком, Любашевке и Кривом Озере. Быстрая подача 15–30 минут. Работаем круглосуточно 24/7. Помощь при ДТП, поломке и перевозке авто.",

  metadataBase: new URL("https://joyful-blini-28a6ab.netlify.app/"),

  verification: {
    google: "F8L-WtNY0RLl3x6p-wFAikqQjBX_XTsAWTvd7NJaKRM",
  },

  // 🔥 SEO keywords (можно оставить, но Google почти не учитывает)
  keywords: [
    "эвакуатор Троицкое",
    "эвакуатор Любашевка",
    "эвакуатор Кривое Озеро",
    "эвакуатор Ананьев",
    "такси 24/7",
    "СТО Е-95",
    "автосервис Украина",
  ],

  // 🔥 OpenGraph (соцсети + SEO)
  openGraph: {
    title: "Е-95 AVTOSERVICE | эвакуатор, такси, СТО 24/7",
    description:
      "Срочная помощь на дороге: эвакуатор, такси и автосервис 24/7",
    url: "https://joyful-blini-28a6ab.netlify.app/",
    siteName: "Е-95 AVTOSERVICE",
    images: [
      {
        url: "https://joyful-blini-28a6ab.netlify.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Е-95 AVTOSERVICE",
      },
    ],
    locale: "ru_UA",
    type: "website",
  },

  // 🔥 Twitter (даёт доп. SEO сигнал)
  twitter: {
    card: "summary_large_image",
    title: "Е-95 AVTOSERVICE",
    description: "Эвакуатор, такси, СТО 24/7",
    images: ["https://joyful-blini-28a6ab.netlify.app/images/og.png"],
  },

  // 🔥 CANONICAL
  alternates: {
    canonical: "https://joyful-blini-28a6ab.netlify.app/",
  },

  // 🔥 GEO + LOCAL SEO (ВАЖНО ДЛЯ ТВОЕЙ НИШИ)
  other: {
    "geo.region": "UA-51", // Одесская область
    "geo.placename": "Troitske, Odesa Oblast",
    "geo.position": "47.647677;30.309478",
    ICBM: "47.647677, 30.309478",

    "business:contact_data:phone_number": "+380965446551",
    "business:contact_data:country_name": "Ukraine",
    "business:contact_data:locality": "Troitske",
    "business:contact_data:region": "Odesa Oblast",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}