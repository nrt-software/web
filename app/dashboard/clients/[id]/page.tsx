import { getClientDetails } from "@/app/dashboard/clients/[id]/api";
import ClientEditContent from "@/app/dashboard/clients/[id]/content";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Dashboard - Edit - ${params.id}`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getClientDetails(params.id);

  return <ClientEditContent data={data} id={params.id} />;
}
