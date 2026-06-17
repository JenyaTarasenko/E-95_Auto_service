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
    </>
  );
}
