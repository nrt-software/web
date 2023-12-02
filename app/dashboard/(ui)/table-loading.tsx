import { Skeleton } from "@/components/ui/skeleton";

export const TableLoading = () => {
  return (
    <div className="w-full p">
      <div className="flex space-y-2 justify-between">
        <Skeleton className="h-8 w-[350px]" />
        <Skeleton className="h-8 w-[80px]" />
      </div>
      <div className="grid grid-flow-row gap-4 mt-4">
        <Skeleton className="h-11 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
        <Skeleton className="h-10 col-span-2" />
      </div>
    </div>
  );
};
