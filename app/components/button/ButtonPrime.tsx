import Image from "next/image";

export default function YellowButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        sm:max-w-[245px]
        w-full
        inline-flex items-center justify-center gap-5
        px-6 py-3
        bg-yellow-400
        text-black font-semibold uppercase
        transition duration-300
        hover:bg-green-600
        hover:text-white
        hover:scale-105
      "
    >
      {children}

      <Image
        src="/images/strela.svg"
        alt="arrow"
        width={30}
        height={30}
      />
    </a>
  );
}