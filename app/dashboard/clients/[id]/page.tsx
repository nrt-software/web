import { getClientById } from "@/mock/client";

export default async function Page({ params }: { params: { id: string } }) {
  const details = await getClientById(params.id);

  console.log("details", details);
  console.log("params.id", params.id);

  return <div>Client Details {JSON.stringify(details)}</div>;
}
