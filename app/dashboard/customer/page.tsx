import { columns } from "@/app/dashboard/customer/columns";
import { DataTable } from "@/components/ui/data-table";
import generateCustomerData from "@/mock/customer";

export default async function Page() {
  const data = await generateCustomerData(40);

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
