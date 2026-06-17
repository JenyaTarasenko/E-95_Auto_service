
type TextProps = {
  description: string;
};
export default function Text({ description }: TextProps) {
  return (
    <div className="flex items-center gap-2 pl-10 mb-10 mt-10">
      <span className="text-sm uppercase text-white">
        {description}
      </span>
      <span className="text-yellow-400">
        /
      </span>
    </div>
  );
}