import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5">

        <div className="grid md:grid-cols-2 gap-10 items-center justify-center">

          {/* Левая колонка */}
          <div className="flex flex-col items-start justify-center">
            <Image
              src="/images/logo.svg"
              alt="Евакуатор"
              width={400}
              height={400}
            />

            <h4 className="mt-6 text-gray-300 sm:text-md text-xl font-normal leading-relaxed text-yellow-400 uppercase">
              Быстрая помощь на дороге: эвакуируем любой автомобиль и отвезем вас как на такси, работает круглосуточно 24/7 СТО
            </h4>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-2xl font-bold text-white">
              Эвакуатор-такси и помощь на дороге для всех видов транспорта
            </h4>

            <h5 className="mt-6 text-gray-200 leading-relaxed">
             Оказываем услуги эвакуации и шиномонтажа в Троицком (Одесская область) и по ближайшим районам: Кривое Озеро, Кривое Озеро-2, Знаменка, Любашевка, Демидовка, Ширяево, Ревова, Петровка и Дачное — быстро выезжаем на место.
            </h5>
          </div>

        </div>

      </div>
    </section>
  );
}