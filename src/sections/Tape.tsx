import StarIcon from "@/assets/iconComponents/Star";
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
      <div className="bg-gradient-to-r from-teal-300 to-purple-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 py-3 pr-4 flex-none animate-move-left [animation-duration:30s]"  
          style={{
            transform: "translateX(-750px)"
          }}>
            {[...words,...words].map((word,index) => (
              <div
                key={index}
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
