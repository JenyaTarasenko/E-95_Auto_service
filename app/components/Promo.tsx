export default function Promo() {
  return (
    <>
    <section className="relative w-full h-[100vh] flex items-center justify-center  mb-10">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="images/promo.webp"
          alt="background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* затемнение */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-md font-normal mb-4 max-w-[700px] mx-auto text-wrap">
          Круглосуточная автопомощь 24/7 и быстрая подача эвакуатора на трассе Е-95 гарантируют оперативную поддержку в любой ситуации и максимально безопасную транспортировку вашего автомобиля.
        </h2>

        <h3 className="text-md font-normal mb-4 max-w-[700px] mx-auto text-wrap">
        Эвакуатор 24/7 в Одесской области: быстрая подача на трассе Е-95 и оперативная автопомощь в Одессе, Троицком, Любашевке, Ширяево и Знаменке.
        </h3>
      </div>
    </section>
    </>
  );
}