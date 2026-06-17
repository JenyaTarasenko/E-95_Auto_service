export default function Card() {
 
  return (
    <section className="w-full flex justify-center mt-10 mb-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-1">
            
            <div className="sm:w-[340px] w-[300px] h-[300px] rounded-[60px] overflow-hidden relative border border-yellow-400">
                <img
                    src="images/card1.webp"
                    alt="card"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center  text-white px-4 text-center ">

                    {/* TITLE */}
                    <div className="flex items-center justify-between w-full p-5">
                        <h3 className="text-2xl font-light text-yellow-400">
                            Такси
                        </h3>
                        <div className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center">
                            <span className="text-sm font-bold">01</span>
                        </div>
                    </div>


                    {/* CIRCLE NUMBER */}
                    

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-200 mt-[100px] text-left p-3">
                    Комфортные перевозки по городу и между городами.
                    </p>
                </div>

                
            {/* card */}
            </div>

            <div className="sm:w-[340px] w-[300px] h-[300px] rounded-[60px] overflow-hidden relative border border-yellow-400">
                <img
                    src="images/card2.webp"
                    alt="card"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center  text-white px-4 text-center ">

                    {/* TITLE */}
                    <div className="flex items-center justify-between w-full p-5">
                        <h3 className="text-2xl font-light text-yellow-400 text-left">
                        Эвакуация<br/>авто
                        </h3>
                        <div className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center">
                            <span className="text-sm font-bold">02</span>
                        </div>
                    </div>


                    {/* CIRCLE NUMBER */}
                    

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-200 mt-[85px] text-left p-3">
                    Эвакуация всех видов транспорта от мопедов, скутеров и лодок до легковых авто и крупногабаритной техники.
                    </p>
                </div>

                
            {/* card */}
            </div>
            <div className="sm:w-[340px] w-[300px] h-[300px] rounded-[60px] overflow-hidden relative border border-yellow-400">
                <img
                    src="images/card3.webp"
                    alt="card"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center  text-white px-4 text-center ">

                    {/* TITLE */}
                    <div className="flex items-center justify-between w-full p-5">
                        <h3 className="text-2xl font-light text-yellow-400">
                            Помощь <br/>в дороге
                        </h3>
                        <div className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center">
                            <span className="text-sm font-bold">03</span>
                        </div>
                    </div>


                    {/* CIRCLE NUMBER */}
                    

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-200 mt-[85px] text-left p-3">
                    Помощь на дороге оперативный выезд при ДТП, поломках любых авто и разрыве шин, а также запуск (подзарядка) аккумулятора.
                    </p>
                </div>

                
            {/* card */}
            </div>

            <div className="sm:w-[340px] w-[300px] h-[300px] rounded-[60px] overflow-hidden relative border border-yellow-400">
                <img
                    src="images/card4.webp"
                    alt="card"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center  text-white px-4 text-center ">

                    {/* TITLE */}
                    <div className="flex items-center justify-between w-full p-5">
                        <h3 className="text-2xl font-light text-yellow-400 text-left">
                            Работаем <br/>24/7
                        </h3>
                        <div className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center">
                            <span className="text-sm font-bold">04</span>
                        </div>
                    </div>


                    {/* CIRCLE NUMBER */}
                    

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-200 mt-[89px] text-left p-1">
                    Работаем в комендантский час, когда другие не могут: круглосуточная автопомощь и эвакуация по всей Одесской области 24/7.
                    </p>
                </div>

                
            {/* card */}
            </div>

        </div>
    </section>
  );
}