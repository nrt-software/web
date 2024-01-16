import { columns } from "@/app/dashboard/services/columns";
import { DataTable } from "@/components/ui/data-table";
import generateServiceData from "@/mock/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Services",
  description: "",
};

export default async function Page() {
  const data = await generateServiceData(100);

  return (
    <main className="w-full">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
