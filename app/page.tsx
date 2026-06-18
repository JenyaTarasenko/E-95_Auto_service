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
import Call from "./components/Call";

export const metadata = {
  title: "Эвакуатор,такси, Е-95 АвтоСервис ",
  description:
    "Эвакуатор в Кривом Озере, Любашевке и Ширяево. Быстрая подача за 15–30 минут. Работаем круглосуточно 24/7. Помощь при ДТП, поломке и перевозке авто.",
  keywords: [
    "эвакуатор Кривое Озеро",
    "эвакуатор Любашевка",
    "эвакуатор Ширяево",
    "вызвать эвакуатор",
    "эвакуация авто 24/7",
    "такси Кривое Озеро",
    "такси Любашевка",
    "такси Ширяево",
    "вызвать такси",
    "такси 24/7",
    "автосервис Кривое Озеро",
    "автосервис Любашевка",
    "автосервис Ширяево",
    "автосервис 24/7",
    "СТО Кривое Озеро",
    "СТО Любашевка",
    "СТО Ширяево",
    "СТО 24/7",
  ],
  alternates: {
    canonical: "https://joyful-blini-28a6ab.netlify.app/",
  },
  openGraph: {
    title: "Е-95 AVTOSERVICE, такси, эвакуатор 24/7",
    description:
      "Срочная эвакуация , такси трасса Е-95",
    url: "https://joyful-blini-28a6ab.netlify.app/",
    siteName: "Е-95 AVTOSERVICE",
    images: [
      {
        url: "https://joyful-blini-28a6ab.netlify.app/images/og.png",
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
      <Call />
    </>
  );
}
