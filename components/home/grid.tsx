import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { Clipboard, File, FileSignature, Table } from "lucide-react";

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-2",
    icon: <Clipboard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-1",
    icon: <File className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-1",
    icon: <FileSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-2",
    icon: <Table className="h-4 w-4 text-neutral-500" />,
  },
];

export function Grid() {
  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
