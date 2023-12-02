import { columns } from "@/app/dashboard/schedule/columns";
import { DataTable } from "@/components/ui/data-table";
import generateScheduleData from "@/mock/schedule";

export default async function Page() {
  const data = await generateScheduleData(100);

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
