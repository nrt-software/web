import CardSpotlight from "@/components/card-spotlight";

export const BentoGrid = () => {
  return (
    <div className="grid auto-rows-[162px] grid-cols-3 gap-2">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 p-4 ${i === 3 || i === 6 ? "col-span-2" : ""}`}
        >
          <CardSpotlight />
        </div>
      ))}
    </div>
  );
};
