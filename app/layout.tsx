import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Е-95 AVTOSERVICE - такси, эвакуатор 24/7",
  description: "Эвакуация авто в Ананьевском районе. Быстрая подача за 15–30 минут. Работаем круглосуточно 24/7. Помощь при ДТП, поломке и перевозке авто",
  metadataBase: new URL("https://joyful-blini-28a6ab.netlify.app/"),
  verification: {
    google: "F8L-WtNY0RLl3x6p-wFAikqQjBX_XTsAWTvd7NJaKRM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
