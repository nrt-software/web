import { columns } from "@/app/dashboard/clients/columns";
import { DataTable } from "@/components/ui/data-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Clients",
  description: "",
};

export default async function Page() {
  const data = await fetch(`${process.env.NEXT_URL}/api/clients`);
  const { clients } = await data.json();

  return (
    <main className="w-full">
      <DataTable columns={columns} data={clients} />
    </main>
  );
}
