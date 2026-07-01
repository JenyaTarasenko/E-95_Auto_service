export default function Footer() {
  return (
    <>
    <section className="relative w-full h-[70vh] flex items-center justify-center mt-20">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="images/footer.webp"
          alt="background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* затемнение */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-xl md:text-6xl font-light leading-tight uppercase max-w-3xl mx-auto">
              <span className="font-black text-yellow-400">Эвакуатор</span> <br /><span className="font-black text-yellow-400">такси, CТО</span> круглосуточно <span className="font-black text-yellow-400">Е95</span>
        </h2>

        <h3 className="text-sm font-normal mb-4  mx-auto text-wrap mt-10 max-w-xl mx-auto text-balance text-gray-100">
          Эвакуатор 24/7 в Одесской области: быстрая подача на трассе Е-95 и оперативная автопомощь в Одессе, Троицком, Любашевке, Ширяево и Знаменке.
        </h3>
         <h3 className="text-sm font-normal mb-4  mx-auto text-wrap mt-10 max-w-xl mx-auto text-balance text-gray-100">
          <a href="https://www.google.com">
            <p>80 <span className="text-yellow-400 text-lg font-bold">[</span> 098 <span className="text-yellow-400 text-lg font-bold">]</span> 610-89-95</p>
          </a>
        </h3>
        <h3 className="text-sm font-normal mb-4  mx-auto text-wrap mt-10 max-w-xl mx-auto text-balance text-yellow-400">
          <a href="mailto:eavtoservice@gmail.com">
            <p>eavtoservice@gmail.com</p>
          </a>
        </h3>
        
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} E95 Auto Service. Все права защищены.
        </p>
      </div>
    </section>
    </>
  );
}