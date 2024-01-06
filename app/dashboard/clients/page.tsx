import { columns } from "@/app/dashboard/clients/columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import generateClientData from "@/mock/client";
import Link from "next/link";

export default async function Page() {
  const data = await generateClientData(40);

  return (
    <main className="w-full">
      <div className="flex justify-end mb-2">
        <Button variant="outline">
          <Link href="/dashboard/clients/create">Create client</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
