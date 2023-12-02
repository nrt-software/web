import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[250px]" />
      </div>
      <div className="grid grid-flow-col gap-4 mt-4">
        <Skeleton className="h-[150px] w-[250px]" />
        <Skeleton className="h-[150px] w-[250px]" />
        <Skeleton className="h-[150px] w-[250px]" />
        <Skeleton className="h-[150px] w-[250px]" />
      </div>
      <div className="grid grid-flow-col gap-4 mt-4">
        <Skeleton className="h-[350px] col-span-2 pl-2" />
        <Skeleton className="h-[350px] w-[80%]" />
      </div>
    </div>
  );
}
