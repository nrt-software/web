import { columns } from "@/app/dashboard/clients/columns";
import { DataTable } from "@/components/ui/data-table";
import generateClientData from "@/mock/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Clients",
  description: "",
};

export default async function Page() {
  const data = await generateClientData(40);

  return (
    <main className="w-full">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
