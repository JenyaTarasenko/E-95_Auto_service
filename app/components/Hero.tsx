
import Image from "next/image";
import YellowButton from "./button/ButtonPrime";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE */}
          <div className="order-2 md:order-1 md:pl-10 pl-0">
            <p className="text-sm text-white uppercase mb-5">
                Услуги <span className="text-yellow-400 font-black text-xl">//</span> Эвакуатора Такси <span className="text-yellow-400 text-xl">//</span>
            </p>
            <h1 className="text-3xl md:text-6xl font-light leading-tight uppercase">
              <span className="font-black text-yellow-400">Эвакуатор</span> <br /><span className="font-black text-yellow-400">такси</span> круглосуточно трасса <span className="font-black text-yellow-400">Е95</span>
            </h1>

            <h2 className="mt-6 text-md text-gray-200 text-balance">
              Вызов эвакуатора и автопомощь на Е-95: <br /> оперативный выезд в любой район круглосуточно 24/7
            </h2>
            <div className="flex gap-4 mt-10">
                <YellowButton href="/taxi">Вызов </YellowButton>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center items-center order-1">
            <Image
              src="/images/MainDes.webp"
              alt="Tow truck E95"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}