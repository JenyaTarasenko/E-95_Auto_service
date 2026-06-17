import Image from "next/image";

export default function ServiceCard() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10 sm:mt-10 mb-10 mt-20">
        <div className="flex flex-row max-w-[200px] items-center justify-center gap-2">
            <Image
            src="/images/service.svg"
            alt="Евакуатор"
            width={30}
            height={30}
            />
            <h3 className="mt-2 text-white font-normal text-md uppercase">
            Пассажирские перевозки
            </h3>
      </div>
       <div className="flex flex-row max-w-[200px] items-center justify-center gap-2">
            <Image
            src="/images/service.svg"
            alt="Евакуатор"
            width={30}
            height={30}
            />
            <h3 className="mt-2 text-white font-normal text-md uppercase">
            Эвакуация автомобилей
            </h3>
      </div>
       <div className="flex flex-row max-w-[200px] items-center justify-center gap-2">
            <Image
            src="/images/service.svg"
            alt="Евакуатор"
            width={30}
            height={30}
            />
            <h3 className="mt-2 text-white font-normal text-md uppercase">
            Помощь вашему авто
            </h3>
      </div>
       <div className="flex flex-row max-w-[200px] items-center justify-center gap-2">
            <Image
            src="/images/service.svg"
            alt="Евакуатор"
            width={30}
            height={30}
            />
            <h3 className="mt-2 text-white font-normal text-md uppercase">
            Выезд по всей трассе Е95
            </h3>
      </div>
    </div>
  );
}