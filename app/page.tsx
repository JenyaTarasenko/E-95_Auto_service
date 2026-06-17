import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ServiceCard from "./components/ServiceCard";
import Text from "./components/Text";
import AboutSection from "./components/AboutSection";
import YellowButton from "./components/button/ButtonPrime";
import Bast from "./components/Bast";
import Promo from "./components/Promo";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SchemaAutoHelp from "./components/SchemaAutoHelp";
import ServiceSchema from "./components/ServiceShema";

export const metadata = {
  title: "Эвакуатор Кривое Озеро, Любашевка, Ширяево — 24/7 срочный выезд",
  description:
    "Эвакуатор в Кривом Озере, Любашевке и Ширяево. Быстрая подача за 15–30 минут. Работаем круглосуточно 24/7. Помощь при ДТП, поломке и перевозке авто.",
  keywords: [
    "эвакуатор Кривое Озеро",
    "эвакуатор Любашевка",
    "эвакуатор Ширяево",
    "вызвать эвакуатор",
    "эвакуация авто 24/7",
  ],
  alternates: {
    canonical: "https://statuesque-cascaron-264f9a.netlify.app",
  },
  openGraph: {
    title: "AutoHelp 24 — Эвакуатор 24/7",
    description:
      "Срочная эвакуация автомобилей в Кривом Озере и области.",
    url: "https://statuesque-cascaron-264f9a.netlify.app/",
    siteName: "AutoHelp 24",
    images: [
      {
        url: "https://statuesque-cascaron-264f9a.netlify.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Эвакуатор AutoHelp 24",
      },
    ],
    locale: "ru_UA",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ServiceCard />
      <Text description="Кто мы ?" />
      <AboutSection />
      <div className="flex items-center justify-center mt-2 sm:px-10 px-5">
        <YellowButton href="tel:+380673755331">Позвонить нам</YellowButton>
      </div>
      <Bast />
      <div className="flex items-center justify-center mt-2 sm:px-10 px-5 mt-10">
        <YellowButton href="tel:+380673755331">Эвакуатор</YellowButton>
      </div>
      <Text description="Почему мы?" />
      <Promo />
      <Text description="Все услуги" />
      <Card />
      <div className="flex items-center justify-center mt-2 sm:px-10 px-5 mt-10">
        <YellowButton href="tel:+380673755331">Эвакуатор</YellowButton>
      </div>
      <Footer />
      <SchemaAutoHelp />
      <ServiceSchema />
    </>
  );
}
