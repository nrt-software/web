import { columns } from "@/app/dashboard/services/columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import generateServiceData from "@/mock/services";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard - Services",
  description: "",
};

export default async function Page() {
  const data = await generateServiceData(100);

  return (
    <main className="w-full">
      <div className="flex justify-end mb-2">
        <Button variant="outline">
          <Link href="/dashboard/clients/create">Create Service</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
