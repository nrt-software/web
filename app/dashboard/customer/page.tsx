import { columns } from "@/app/dashboard/customer/columns";
import { DataTable } from "@/components/ui/data-table";
import generateCustomerData from "@/mock/customer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Customers",
  description: "",
};

export default async function Page() {
  const data = await generateCustomerData(40);

  return (
    <main className="w-full">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
