import StarIcon from "@/assets/icons/star.svg";
import CustomIcon from "@/components/Icon";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 py-3 flex-none">
            {words.map((word) => (
              <div
                key={word}
                className="inline-flex text-gray-950 gap-4 items-center"
              >
                <span className="uppercase font-extrabold text-sm">{word}</span>
                <CustomIcon icon={StarIcon} className="size-6 -rotate-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
