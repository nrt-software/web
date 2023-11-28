import { columns } from "@/app/dashboard/services/columns";
import { DataTable } from "@/components/ui/data-table";
import generateServiceData from "@/mock/services";

export default async function Page() {
  const data = await generateServiceData(100);

  return (
    <div className="w-full pr-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
