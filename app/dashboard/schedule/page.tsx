import { columns } from "@/app/dashboard/schedule/columns";
import { DataTable } from "@/components/ui/data-table";
import generateScheduleData from "@/mock/schedule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Schedule",
  description: "",
};

export default async function Page() {
  const data = await generateScheduleData(100);

  return (
    <main className="w-full">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
