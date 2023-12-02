import { columns } from "@/app/dashboard/payments/columns";
import { DataTable } from "@/components/ui/data-table";
import generateSampleDataPayment from "@/mock/payments";

export default async function Page() {
  const data = await generateSampleDataPayment(100);

  return (
    <main className="w-full">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
